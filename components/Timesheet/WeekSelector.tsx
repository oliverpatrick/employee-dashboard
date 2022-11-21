import React from 'react';
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon
} from '@heroicons/react/outline';
import moment from 'moment';

function WeekSelector() {
  const [dateSelection, setDateSelection] = React.useState();
  const [subtract, setSubtract] = React.useState<number>(0);

  let weekStart = moment()
    .subtract(subtract, 'weeks')
    .startOf('isoWeek')
    .format('DD MMM');

  let weekEnd = moment()
    .subtract(subtract, 'weeks')
    .endOf('isoWeek')
    .format('DD MMM');

  return (
    <div className="flex flex-row items-center justify-center">
      <ArrowCircleLeftIcon
        className="p-1 m-1 w-8 hover:text-gray-600 hover:bg-gray-100 hover:rounded-full"
        onClick={() => setSubtract(subtract + 1)}
      />
      <div className="mx-5 font-semibold w-40 text-center">{`${weekStart} - ${weekEnd}`}</div>
      <ArrowCircleRightIcon
        className="p-1 m-1 w-8 hover:text-gray-600 hover:bg-gray-100 hover:rounded-full"
        onClick={() => setSubtract(subtract - 1)}
      />
    </div>
  );
}

export default WeekSelector;
