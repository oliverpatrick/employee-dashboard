export function timeStrToMins(strTime: any) {
  if (!strTime) return 1;

  let [h, m] = strTime.split(':');

  return Number(h) * 60 + Number(m);
}

export function minsToTimeStr(val: any) {
  let sign = val > 0 ? '' : '-';
  val = val > 0 ? val : -val;
  let m: string | number = val % 60;
  let h: string | number = (val - m) / 60;

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;

  return `${sign}${h}:${m}`;
}
