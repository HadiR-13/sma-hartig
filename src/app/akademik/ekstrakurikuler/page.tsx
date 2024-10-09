'use client';

import { JSX } from 'react';
import { Esktrakurikuler, esktrakurikulers } from '@/constants/esktrakurikuler';
import Image from 'next/image';

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

      <section className="flex flex-col overflow-x-hidden py-[30px] items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 px-5 xl:px-10">
          {esktrakurikulers.map((ekskul, index) => (
            <div key={index} className="group relative flex flex-col overflow-hidden rounded-lg bg-primary-600 shadow-md">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={ekskul.image} alt={ekskul.name.short} className="h-full w-full object-cover" width={400} height={320} />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <h3 className="text-lg font-semibold text-white uppercase">{ekskul.name.short}</h3>
                {ekskul.content && <p className="mt-2 text-gray-600">{ekskul.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
