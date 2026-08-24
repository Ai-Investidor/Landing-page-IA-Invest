const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/** Mês/ano atual — cabeçalho do boletim, tag de protocolo e copyright acompanham o calendário.
 *  Cálculo puro, sem efeito. */
export function useCurrentDate() {
  const agora = new Date();
  const mes = agora.getMonth();
  const ano = agora.getFullYear();
  return {
    mesAno: `${MESES[mes]} ${ano}`,
    ano,
    /** "08/2026" — número do protocolo/boletim do mês, no cabeçalho do hero. */
    protocolo: `${String(mes + 1).padStart(2, '0')}/${ano}`,
  };
}
