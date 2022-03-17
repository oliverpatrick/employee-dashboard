import React from 'react';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon,
  ChartBarIcon,
  CalendarIcon,
  ClockIcon,
  LoginIcon,
  CogIcon
} from '@heroicons/react/outline';

import SidebarItem from './SidebarItem';

interface SidebarProps {
  imageSrc: string;
  name: string;
  role: string;
}

function Sidebar({ imageSrc, name, role }: SidebarProps) {
  const [open, isOpen] = React.useState(true);

  return (
    <nav
      className={
        'h-screen py-3 px-2 z-50 bg-zinc-800 text-slate-50 border-r border-slate-50' +
        (open ? ' w-56 min-w-[13rem]' : ' w-20')
      }
    >
      <header className="mb-2 pb-2 px-1">
        <div className={open ? 'flex flex-row' : ''}>
          <img
            src={imageSrc}
            alt=""
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />

          <div className={open ? '' : 'hidden'}>
            <h6 className="text-sm font-semibold leading-none">{name}</h6>
            <span className="text-sm font-medium">{role}</span>
          </div>
        </div>

        {open ? (
          <ChevronLeftIcon
            className="cursor-pointer absolute w-6 border-slate-50 border-2 
        bg-zinc-600 hover:bg-zinc-500 rounded-full p-0 left-48 top-4"
            onClick={() => isOpen(!open)}
          />
        ) : (
          <ChevronRightIcon
            className="cursor-pointer absolute w-6 border-slate-50 border-2 
          bg-zinc-600 hover:bg-zinc-500 rounded-full p-0 left-[4rem] top-4"
            onClick={() => isOpen(!open)}
          />
        )}
      </header>

      <div className="h-[calc(100%-3.5rem)] flex flex-col justify-between">
        <div className="mt-5">
          <ul>
            <SidebarItem
              route={'/'}
              open={open}
              page={'Home'}
              icon={<HomeIcon />}
            />

            <SidebarItem
              route={'/dashboard'}
              open={open}
              page={'Dashboard'}
              icon={<ChartBarIcon />}
            />
            <SidebarItem
              route={'/holidays'}
              open={open}
              page={'Holidays'}
              icon={<CalendarIcon />}
            />
            <SidebarItem
              route={'/timesheets'}
              open={open}
              page={'Timesheets'}
              icon={<ClockIcon />}
            />
          </ul>
        </div>

        <div className="border-t-2 border-zinc-700 pt-2">
          <ul>
            <SidebarItem
              route={'/logout'}
              open={open}
              page={'Logout'}
              icon={<LoginIcon />}
            />

            <SidebarItem
              route={'/settings'}
              open={open}
              page={'Settings'}
              icon={<CogIcon />}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
