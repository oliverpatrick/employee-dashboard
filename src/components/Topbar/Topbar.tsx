import React from 'react';
import moment from 'moment';

function Topbar() {
  return (
    <div className="flex justify-between w-full bg-purple-900 p-3 shadow-md">
      <h1 className="ml-2 text-slate-50 font-semibold text-xl">
        [Business Name]
      </h1>
      <h1 className="mr-2 text-slate-50 font-semi text-md">
        {moment().format('Do MMMM YYYY')}
      </h1>
    </div>
  );
}

export default Topbar;
