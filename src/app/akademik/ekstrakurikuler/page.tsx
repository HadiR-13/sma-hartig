'use client';

import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <main className="">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[20px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">ekstrakurikuler</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3</h1>
          </div>
        </div>
      </header>
    </main>
  );
}
