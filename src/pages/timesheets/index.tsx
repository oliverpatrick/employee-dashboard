import type { NextPage } from 'next';
import Head from 'next/head';
import Timesheet from '../../components/Timesheet/Timesheet';

import WeekSelector from '../../components/Timesheet/WeekSelector';

const Timesheets: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between pl-6 -mb-px border-b">
        <h3 className="text-blue-800 py-4 font-semi text-xl">Timesheets</h3>
      </div>

      <Timesheet />
    </div>
  );
};

export default Timesheets;
