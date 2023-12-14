export default function formatDate(fecha) {
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];

  return `${dia} de ${mes}`;
}
