'use client';

import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AssetDummyArtikel from '@/assets/homepage/png/asset-dummy-artikel.png';

export default function ArtikelHomepage(): JSX.Element {
  return (
    <section className="flex flex-col px-4 py-[50px] lg:py-[80px] gap-y-16 z-30 container">
      <div className="flex flex-col items-center text-center gap-y-3">
        <h2 className="text-primary-600 text-xl xl:text-2xl font-bold uppercase">berita dan artikel</h2>
        <h1 className="uppercase text-2xl xl:text-4xl font-bold">SMA HARAPAN 3</h1>
      </div>
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col xl:flex-row gap-y-7 xl:gap-x-14 items-center justify-center">
          <Image src={AssetDummyArtikel} alt="Asset Dummy Artikel" width={100} height={100} className="w-full xl:min-w-[50%] rounded-lg" />
          <div className="flex flex-col justify-between gap-y-6">
            <div className="flex flex-col gap-y-3">
              <h3 className="font-medium">Medan, 08 Oktober 2024</h3>
              <h1 className="text-3xl uppercase font-extrabold">SISWA SMA HARAPAN 3 MENDAPATKAN JUARA 1 </h1>
              <p className="text-justify w-full leading-7">
                Lorem ipsum dolor sit amet consectetur. Facilisi nisl ultrices egestas nunc facilisis. Egestas magna in morbi nibh sit lobortis ac amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam excepturi voluptates
                deserunt fugit nam cum aliquid, quaerat, nobis fuga sunt exercitationem architecto, voluptatem officia ad doloribus natus. Placeat, at temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                voluptates unde numquam? Odit, assumenda.
              </p>
            </div>
            <Link href="#" className="bg-primary-600 border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300 text-center lg:self-start">
              Baca artikel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
