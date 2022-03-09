import React from 'react';

interface AvatarProps {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  let splitName = name.split(' ');
  if (splitName.length <= 2) {
  }
  let initials = splitName[0].charAt(0) + splitName[1].charAt(0);

  return (
    <div className="flex justify-center items-center rounded-full bg-orange-500 mr-2 px-3 font-semibold">
      {initials}
    </div>
  );
}

export default Avatar;
