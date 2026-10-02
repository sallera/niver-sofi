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
  mensagemInicial: `para a menina mais linda de todas!
feliz aniversário, meu amor! ♡`,
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
      legenda: `fim de semana juntos`,
      texto: `do jeito que a gente gosta, com muita parceria, amor e sempre com uma cervejinha rsrs`,
    },
    {
      arquivo: `fotos/dorminhoca2.jpeg`,
      posicao: `center 50%`,
      legenda: `pra menina que não pode ver uma cama`,
      texto: `que não aguenta assistir um filme inteiro sequer sem tirar aquele cochilinho tranquilo rsrs`,
    },
    {
      arquivo: `fotos/dorminhoca.jpeg`,
      posicao: `center 50%`,
      legenda: `e as vezes nem precisa ser uma cama!`,
      texto: `que só pela cara dava pra ver que comeu um monte e só queria dormir 12 horas seguidas kkkkkk`,
    },
    {
      arquivo: `fotos/dentinho.jpeg`,
      posicao: `center 50%`,
      legenda: `salsicha matadora`,
      texto: `uma menina pequenina e valente, mas que infelizmente nesse dia não foi páreo para uma salsicha perdigão!`,
    },
    {
      arquivo: `fotos/parceria.jpeg`,
      posicao: `center 62%`,
      legenda: `roles que a gente gosta`,
      texto: `comer (até demais, haja mounjaro rs), tomar uminha e papear sobre a vida`,
    },
  ],

  // ---------- Tela 7: mensagem final (por cima da última foto desfocada) ----------
  // Cada linha aparece uma de cada vez. Linha em branco = espaço entre parágrafos.
  mensagemFinal: `minha linda,

desejo que sua vida seja tão feliz e alegre quanto você me faz sentir todos os dias,
que nosso amor e companheirismo um pelo outro possa crescer cada vez mais.
você merece o mundo e espero poder continuar crescendo e aprendendo cada vez mais com você! 
Eu te amo! ♡`,
  assinatura: `Ga ♡`,
  botaoRecomecar: `ver de novo ↺`,
};
