// =====================================================================
//  ✏️  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
//
//  - Troque os textos entre as crases ` ` (pode quebrar linha à vontade).
//  - Não apague as crases, as vírgulas nem as chaves { }.
//  - Depois de salvar, recarregue a página para ver o resultado.
// =====================================================================

const CONTEUDO = {
  // ---------- Tela 1: abertura ----------
  nome: `Sofia`,
  mensagemInicial: `Feliz aniversário, meu amor!
Preparei uma surpresinha pra você ♡`,
  botaoComecar: `começar →`,

  // ---------- Telas 2 a 6: fotos ----------
  // legenda  → escrita na parte branca da polaroid (curtinha)
  // texto    → aparece embaixo da polaroid
  // posicao  → qual parte da foto aparece ("center 50%" = meio; aumente o
  //            segundo número para mostrar mais a parte de baixo da foto)
  fotos: [
    {
      arquivo: `fotos/parceria2.jpeg`,
      posicao: `center 62%`,
      legenda: `[legenda da foto 1]`,
      texto: `[Escreva aqui o texto da foto 1]`,
    },
    {
      arquivo: `fotos/dorminhoca2.jpeg`,
      posicao: `center 50%`,
      legenda: `[legenda da foto 2]`,
      texto: `[Escreva aqui o texto da foto 2]`,
    },
    {
      arquivo: `fotos/dorminhoca.jpeg`,
      posicao: `center 50%`,
      legenda: `[legenda da foto 3]`,
      texto: `[Escreva aqui o texto da foto 3]`,
    },
    {
      arquivo: `fotos/dentinho.jpeg`,
      posicao: `center 50%`,
      legenda: `[legenda da foto 4]`,
      texto: `[Escreva aqui o texto da foto 4]`,
    },
    {
      arquivo: `fotos/parceria.jpeg`,
      posicao: `center 62%`,
      legenda: `[legenda da foto 5]`,
      texto: `[Escreva aqui o texto da foto 5]`,
    },
  ],

  // ---------- Tela 7: mensagem final (por cima da última foto desfocada) ----------
  // Cada linha aparece uma de cada vez. Linha em branco = espaço entre parágrafos.
  mensagemFinal: `[Escreva aqui a sua mensagem final.

Pode ser do tamanho que quiser,
cada linha aparece devagarzinho,
como se fosse uma cartinha.]`,
  assinatura: `[seu nome] ♡`,
  botaoRecomecar: `ver de novo ↺`,
};
