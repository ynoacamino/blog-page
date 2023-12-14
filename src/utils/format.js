/* eslint-disable no-param-reassign */
export default function format(s) {
  s = s.replace('?', '');
  s = s.replace('/', '');
  s = s.replace('//', '');
  s = s.replace('.', '');
  s = s.replace('"', '');
  s = s.replace('!', '');
  s = s.replace('(', '');
  s = s.replace(')', '');
  s = s.replace(';', '');
  s = s.replace(':', '');
  s = s.replace('@', '');
  s = s.replace('&', '');
  s = s.replace('=', '');
  s = s.replace('+', '');
  s = s.replace('$', '');
  s = s.replace(',', '');
  s = s.replace('#', '');
  s = s.replace('[', '');
  s = s.replace(']', '');
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s = s.replace(/ñ/g, 'n').replace(/Ñ/g, 'N');

  s = s.replace(/ /g, '-');

  s = encodeURIComponent(s);

  return s;
}
