'use client';

import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssetHero from '@/assets/homepage/webp/asset-hero.webp';
import AssetSekolah from '@/assets/homepage/webp/asset-sekolah.webp';
import ScrollProgram from '@/components/partials/ScrollProgram/ScrollProgram';

export default function Home(): JSX.Element {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="">
      {/* Header atau Hero */}
      <header className="flex flex-col overflow-x-hidden py-[30px] lg:py-[80px]">
        <div className="container flex flex-col lg:flex-row items-center justify-between py-10 px-5 xl:px-10 gap-y-8">
          {/* Konten 1 */}
          <div className="flex flex-col gap-y-9 md:gap-y-12">
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="font-bold uppercase text-xl xl:text-2xl">sma harapan 3 delitua</h2>
                <h1 className="font-bold uppercase text-4xl xl:text-5xl">
                  iman, ilmu, dan <span className="text-primary-600">amal</span>
                </h1>
              </div>
              <p className="w-full lg:max-w-[34.5rem] leading-7">Lorem ipsum dolor sit amet consectetur. Ut etiam sed dolor ac. Viverra placerat dignissim lorem ac non. Lacus lorem sed enim nisl eu sit. Tortor lacus at egestas nunc.</p>
            </div>
            <div className="flex flex-row gap-x-5">
              <button
                onClick={() => scrollToSection('tentang')}
                className="bg-primary-600 border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Tentang Kami
              </button>
              <Link href="/kontak" className="bg-white border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300">
                Kontak Kami
              </Link>
            </div>
          </div>

          {/* Konten 2 */}
          <Image src={AssetHero} alt="Asset Hero" className="hidden md:block w-full xl:max-w-2xl" />
        </div>
      </header>

      {/* Section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] lg:py-[80px]" id="tentang">
        <div className="container flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-0 lg:gap-x-10 lg:py-10 lg:px-10">
          {/* Konten 1 */}
          <Image src={AssetSekolah} alt="Asset Sekolah" className="w-full xl:max-w-2xl rounded-xl lg:rounded-2xl" />

          {/* Konten 2 */}
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <h2 className="font-bold uppercase text-xl xl:text-2xl text-primary-600 text-center lg:text-start">tentang sekolah</h2>
                <h1 className="font-bold uppercase text-2xl xl:text-4xl text-center lg:text-start">sma harapan 3 delitua</h1>
              </div>
              <p className="w-full xl:max-w-xl text-justify leading-[1.60]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi voluptate exercitationem minima quas dolores praesentium quo corrupti ullam, enim consequatur ea odio autem neque officia ducimus, voluptatibus sit aliquid
                architecto. At dolorem ducimus incidunt explicabo voluptate ipsa voluptatem pariatur quae. Doloribus nostrum libero magni repellat autem odit officiis. Voluptas quod pariatur doloremque unde maiores ipsum deserunt facilis,
                nulla dolorem repudiandae saepe eligendi laboriosam exercitationem, expedita omnis provident tenetur deleniti ut a quam sequi officiis! Veniam iure ratione odit deleniti facilis? Quasi consequatur exercitationem asperiores
                excepturi quibusdam voluptatem doloremque ipsum optio?
              </p>
            </div>
            <Link href="/tentang" className="bg-primary-600 border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300 text-center lg:self-start">
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] lg:py-[80px]" id="tentang">
        <div className="container flex flex-col-reverse lg:flex-row gap-y-4 lg:gap-y-0 gap-x-0 lg:gap-x-10 lg:py-10 lg:px-10">
          {/* Konten 2 */}
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <h2 className="font-bold uppercase text-xl xl:text-2xl text-primary-600 text-center lg:text-start">prakata kepala sekolah</h2>
                <h1 className="font-bold uppercase text-2xl xl:text-4xl text-center lg:text-start">sma harapan 3 delitua</h1>
              </div>
              <p className="w-full xl:max-w-xl text-justify leading-[1.60]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi voluptate exercitationem minima quas dolores praesentium quo corrupti ullam, enim consequatur ea odio autem neque officia ducimus, voluptatibus sit aliquid
                architecto. At dolorem ducimus incidunt explicabo voluptate ipsa voluptatem pariatur quae. Doloribus nostrum libero magni repellat autem odit officiis. Voluptas quod pariatur doloremque unde maiores ipsum deserunt facilis,
                nulla dolorem repudiandae saepe eligendi laboriosam exercitationem, expedita omnis provident tenetur deleniti ut a quam sequi officiis! Veniam iure ratione odit deleniti facilis? Quasi consequatur exercitationem asperiores
                excepturi quibusdam voluptatem doloremque ipsum optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel aspernatur magnam dolore facilis
                eos!
              </p>
            </div>
          </div>

          {/* Konten 1 */}
          <Image src={AssetSekolah} alt="Asset Sekolah" className="w-full xl:max-w-2xl rounded-2xl" />
        </div>
      </section>

      {/* Section 4 */}
      <ScrollProgram />
    </main>
  );
}
