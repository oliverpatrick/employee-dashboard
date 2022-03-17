import Link from 'next/link';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';

type Props = {
  route: string;
  open: boolean;
  page: string;
  icon: any;
};

function SidebarItem({ route, open, page, icon }: Props) {
  return (
    <Link href={route} passHref>
      <li
        className={
          'py-2 cursor-pointer flex items-center justify-between rounded-md hover:bg-zinc-700 pl-2'
        }
      >
        <div className="w-5 rounded-md">{icon}</div>
        {open ? (
          <span className={'font-medium text-sm px-3'}>{page}</span>
        ) : (
          <ChevronRightIcon className="w-5" />
        )}
      </li>
    </Link>
  );
}

export default SidebarItem;
