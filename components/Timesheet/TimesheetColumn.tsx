import React from 'react';
import TimeInput from './TimeInput';

function TimesheetColumn(props: any) {
  const [daySummary, setDaySummary] = React.useState<string | number>(0);

  let dayStart = 0;
  let lunchStart = 0;
  let lunchEnd = 0;
  let dayEnd = 0;

  function minsToStrTime(val: any) {
    let m: number | string = val % 60;
    let h: number | string = (val - m) / 60;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;

    return `${h}:${m}`;
  }

  const calcDaySummary = () => {
    let summaryVal = dayEnd - dayStart - (lunchEnd - lunchStart);
    if (!summaryVal) summaryVal = 0;
    summaryVal = Math.max(summaryVal, 0);

    setDaySummary(minsToStrTime(summaryVal));

    props.changeNotify(summaryVal);
  };

  const notifyDayStart = (v: any) => {
    dayStart = v;
    calcDaySummary();
  };

  const notifyLunchStart = (v: any) => {
    lunchStart = v;
    calcDaySummary();
  };

  const notifyLunchEnd = (v: any) => {
    lunchEnd = v;
    calcDaySummary();
  };

  const notifyDayEnd = (v: any) => {
    dayEnd = v;
    if (dayEnd < dayStart) dayEnd += 12 * 60;
    calcDaySummary();
  };

  return (
    <div className="text-center flex flex-col">
      <h3 className="font-semibold">{props.dayName}</h3>
      <TimeInput changeNotify={notifyDayStart} default="09:00" />
      <TimeInput changeNotify={notifyLunchStart} default="12:00" />
      <TimeInput changeNotify={notifyLunchEnd} default="12:30" />
      <TimeInput changeNotify={notifyDayEnd} default="17:00" />
      <p className="font-semibold">{daySummary}</p>
    </div>
  );
}

export default TimesheetColumn;
