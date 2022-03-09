import React from 'react';
import { minsToTimeStr } from '../../utils/time-utils';
import TimesheetColumn from './TimesheetColumn';
import WeekSelector from './WeekSelector';

function Timesheet() {
  const [weeklySummary, setWeeklySummary] = React.useState<string | number>(0);
  const [overtime, setOvertime] = React.useState<string | number>(0);

  let dailyValues = [0, 0, 0, 0, 0];
  let weeklyRequired = 37.5 * 60;

  const dailySummary = (d: any, v: any) => {
    dailyValues[d] = v;
    let sum = dailyValues.reduce((a, b) => {
      return a + b;
    });
    let ot = sum - weeklyRequired;

    setWeeklySummary(minsToTimeStr(sum));
    setOvertime(minsToTimeStr(ot));
  };

  return (
    <>
      <WeekSelector />
      <div className="flex flex-row w-48">
        <TimesheetColumn
          dayName="Monday"
          changeNotify={(v: any) => dailySummary(0, v)}
        />
        <TimesheetColumn
          dayName="Tuesday"
          changeNotify={(v: any) => dailySummary(1, v)}
        />
        <TimesheetColumn
          dayName="Wednesday"
          changeNotify={(v: any) => dailySummary(2, v)}
        />
        <TimesheetColumn
          dayName="Thursday"
          changeNotify={(v: any) => dailySummary(3, v)}
        />
        <TimesheetColumn
          dayName="Friday"
          changeNotify={(v: any) => dailySummary(4, v)}
        />
      </div>
      <form className="flex flex-col justify-center">
        <label className="flex flex-row my-2 text-blue-500" htmlFor="weekly">
          Weekly Total:
          <input
            type="text"
            name="weekly"
            value={weeklySummary}
            disabled
          ></input>
        </label>

        <label className="flex flex-row my-2 text-blue-500" htmlFor="quota">
          {'Weekly Quota: '}
          <input
            type="text"
            name="quota"
            value={minsToTimeStr(weeklyRequired)}
            disabled
          ></input>
        </label>

        <label className="flex flex-row my-2 text-blue-500" htmlFor="overtime">
          {'Weekly Overtime: '}
          <input type="text" name="overtime" value={overtime} disabled></input>
        </label>

        <button type="submit" value={'Submit'}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Timesheet;
