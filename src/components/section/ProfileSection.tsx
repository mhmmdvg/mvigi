import Image from 'next/image';
import React from 'react';

export default function ProfileSection() {
  return (
    <section className="flex flex-row items-center space-x-2">
      <div className=" relative h-16 w-16 overflow-hidden rounded-full bg-black grayscale transition-all ease-in-out hover:scale-110 hover:cursor-pointer hover:grayscale-0">
        <Image
          src="/me.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="me"
          priority
        />
      </div>
      <div className=" flex flex-col">
        <h1 className="font-medium">M Vigi</h1>
        <p className=" font-light text-muted-foreground">Frontend Engineer</p>
      </div>
    </section>
  );
}
