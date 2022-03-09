import React from 'react';
import { timeStrToMins } from '../../utils/time-utils';

function TimeInput(props: any) {
  const [formattedVal, setformattedVal] = React.useState<any>(props.default);
  const [minutes, setMinutes] = React.useState(0);

  let currVal = '';

  props.changeNotify(timeStrToMins(formattedVal));

  const onInputHandle = (e: any) => {
    currVal = e.target.value;

    setformattedVal(currVal);
    setMinutes(timeStrToMins(currVal));

    props.changeNotify(timeStrToMins(currVal));
  };

  return (
    <input
      className="cursor-default m-1 p1 text-gray-600 text-center border border-slate-300 rounded-sm w-20 h-7 text-[100%] transition-all hover:border-zinc-500 focus:border-red-600"
      type="time"
      onChange={onInputHandle}
      onInput={onInputHandle}
      value={formattedVal}
    />
  );
}

export default TimeInput;
