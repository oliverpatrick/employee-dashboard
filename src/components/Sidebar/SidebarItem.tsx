import Link from 'next/link';
import React from 'react';

type Props = {
  route: string;
  open: boolean;
  page: string;
  icon: any;
};

function SidebarItem({ route, open, page, icon }: Props) {
  return (
    <Link href={route}>
      <li className="py-2 cursor-pointer flex items-center rounded-md hover:bg-zinc-700 pl-2">
        <div className="w-5 rounded-md">{icon}</div>
        <span className={open ? 'font-medium text-md px-3' : 'hidden'}>
          {page}
        </span>
      </li>
    </Link>
  );
}

export default SidebarItem;
