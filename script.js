(function () {
  const palco = document.getElementById("palco");
  const C = CONTEUDO;
  const total = C.fotos.length;
  const inclinacoes = [-3, 2.5, -2, 3, -2.5];

  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto != null) e.textContent = texto.trim();
    return e;
  }

  // ---------- Tela 1: abertura ----------
  const abertura = el("section", "tela abertura");
  const bilhete = el("div", "bilhete");
  bilhete.append(
    el("div", "fita"),
    el("div", "nome", C.nome),
    el("div", "msg", C.mensagemInicial)
  );
  const btnComecar = el("button", "botao-papel", C.botaoComecar);
  btnComecar.addEventListener("click", () => {
    tocarMusica();
    proxima();
  });
  abertura.append(bilhete, btnComecar);

  [["♡", 8, 12, 34, -12], ["♡", 82, 18, 26, 14], ["✿", 12, 80, 30, 0],
   ["♡", 78, 84, 38, 10], ["✦", 50, 6, 22, 0]].forEach(([s, x, y, tam, r], i) => {
    const d = el("span", "rabisco", s);
    d.style.left = x + "%";
    d.style.top = y + "%";
    d.style.fontSize = tam + "px";
    d.style.setProperty("--r", r + "deg");
    d.style.animationDelay = -i * 1.3 + "s";
    abertura.appendChild(d);
  });

  // ---------- Telas 2–6: fotos ----------
  const telasFoto = C.fotos.map((f, i) => {
    const tela = el("section", "tela foto-tela");

    const pilha = el("div", "pilha");
    pilha.style.setProperty("--rot", inclinacoes[i % inclinacoes.length] + "deg");
    const polaroid = el("div", "polaroid");
    const img = el("img");
    img.src = f.arquivo;
    img.alt = f.legenda;
    img.style.objectPosition = f.posicao || "center";
    img.decoding = "async";
    polaroid.append(el("div", "fita"), img, el("div", "legenda", f.legenda));
    pilha.append(el("div", "polaroid-tras"), polaroid);

    const nav = el("div", "navegacao");
    const voltar = el("button", "voltar", "←");
    voltar.setAttribute("aria-label", "Voltar");
    voltar.addEventListener("click", anterior);
    const prox = el("button", "botao-papel", i === total - 1 ? "e por fim… →" : "próxima →");
    prox.addEventListener("click", proxima);
    nav.append(voltar, el("span", "contador", `${i + 1} / ${total}`), prox);

    tela.append(pilha, el("p", "texto", f.texto), nav);
    return tela;
  });

  // ---------- Tela 7: mensagem final ----------
  const final = el("section", "tela final");
  const fundo = el("div", "fundo");
  const ultima = C.fotos[total - 1];
  fundo.style.backgroundImage = `url("${ultima.arquivo}")`;
  fundo.style.backgroundPosition = ultima.posicao || "center";

  const carta = el("div", "carta");
  const linhas = C.mensagemFinal.trim().split("\n");
  let atraso = 1.6;
  linhas.forEach((l) => {
    const linha = el("span", "linha");
    linha.textContent = l.trim() || " ";
    linha.style.setProperty("--atraso", atraso + "s");
    carta.appendChild(linha);
    atraso += l.trim() ? 0.55 : 0.25;
  });
  const assinatura = el("span", "linha assinatura", C.assinatura);
  assinatura.style.setProperty("--atraso", atraso + 0.4 + "s");
  carta.appendChild(assinatura);

  const btnRecomecar = el("button", "botao-papel", C.botaoRecomecar);
  btnRecomecar.style.setProperty("--atraso", atraso + 1.2 + "s");
  btnRecomecar.addEventListener("click", () => irPara(0));

  final.append(fundo, el("div", "veu"), carta, btnRecomecar);

  // ---------- Música ----------
  // celulares só deixam tocar som depois de um toque, por isso ela começa no "começar"
  let audio = null;
  let mudo = false;
  let jaTocou = false;
  const btnSom = el("button", "som", "♪");
  btnSom.setAttribute("aria-label", "Ligar ou desligar a música");

  if (C.musica) {
    audio = new Audio(C.musica);
    audio.loop = true;
    audio.preload = "auto";
    audio.addEventListener("error", () => { audio = null; btnSom.remove(); });
    btnSom.addEventListener("click", () => {
      if (!audio) return;
      if (audio.paused) { mudo = false; tocarMusica(); }
      else { mudo = true; audio.pause(); atualizarSom(); }
    });
    document.body.appendChild(btnSom);
  }

  function atualizarSom() {
    btnSom.classList.add("visivel");
    btnSom.classList.toggle("mudo", !audio || audio.paused);
  }

  function tocarMusica() {
    if (!audio || mudo || !audio.paused) return;
    if (!jaTocou) {
      jaTocou = true;
      const comeco = Number(C.musicaInicio) || 0;
      if (comeco) {
        if (audio.readyState >= 1) audio.currentTime = comeco;
        else audio.addEventListener("loadedmetadata", () => { audio.currentTime = comeco; }, { once: true });
      }
    }
    audio.play().then(atualizarSom, atualizarSom);
  }

  // pausa se ela sair do navegador e continua quando ela voltar
  document.addEventListener("visibilitychange", () => {
    if (!audio || mudo || !jaTocou) return;
    if (document.hidden) audio.pause();
    else audio.play().then(atualizarSom, atualizarSom);
  });

  // ---------- Navegação ----------
  const telas = [abertura, ...telasFoto, final];
  telas.forEach((t) => palco.appendChild(t));
  let atual = 0;

  function irPara(n) {
    if (n < 0 || n >= telas.length || n === atual) return;
    atual = n;
    telas.forEach((t, i) => {
      t.classList.toggle("ativa", i === n);
      t.classList.toggle("passada", i < n);
      t.setAttribute("aria-hidden", i !== n);
    });
    telas[n].scrollTop = 0;
  }
  function proxima() { if (atual < telas.length - 1) irPara(atual + 1); }
  function anterior() { if (atual > 0 && atual < telas.length - 1) irPara(atual - 1); }

  // deslizar o dedo para os lados
  let x0 = null, y0 = null;
  palco.addEventListener("touchstart", (e) => {
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
  }, { passive: true });
  palco.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    x0 = null;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) proxima(); else anterior();
  }, { passive: true });

  // setas do teclado (no computador)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") proxima();
    if (e.key === "ArrowLeft") anterior();
  });

  // começa na tela 1 (pequeno atraso para a animação de entrada rodar)
  // dica: index.html#4 abre direto na tela 4, útil para revisar os textos
  const inicio = Math.min(Math.max(parseInt(location.hash.slice(1), 10) - 1 || 0, 0), telas.length - 1);
  telas.forEach((t, i) => {
    t.setAttribute("aria-hidden", i !== inicio);
    t.classList.toggle("passada", i < inicio);
  });
  atual = inicio;
  if (inicio > 0 && audio) atualizarSom();
  requestAnimationFrame(() => requestAnimationFrame(() => telas[inicio].classList.add("ativa")));
})();
