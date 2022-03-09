import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

type LayoutProps = {
  children: any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar
        imageSrc="https://picsum.photos/200/300"
        name="Joe Bloggs"
        role="Software Developer"
      />
      <div className="w-full h-screen">
        <Topbar />
        <div className="h-[calc(100vh-52px)] overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
