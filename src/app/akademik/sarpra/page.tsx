'use client';

import { JSX } from 'react';
import Image from 'next/image';
import AssetDummyGaleri from '@/assets/galeri/png/asset-dummy-galeri.png';
import { Sarpra, sarpras } from '@/constants/sarpra';

type FacilityCardProps = {
  name: string;
  description: string;
  image: string;
};

const FacilityCard: React.FC<FacilityCardProps> = ({ name, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="relative h-56">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

export default function Page(): JSX.Element {
  return (
    <main>
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[20px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">Sarana Prasarana</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">SMA Harapan 3 </h1>
          </div>
          <p className="text-justify lg:text-center w-full lg:w-[60%] text-secondary leading-8">Kami menyediakan fasilitas lengkap untuk mendukung proses belajar mengajar dan pengembangan bakat siswa di berbagai bidang.</p>
        </div>
      </header>

      <section className="pt-3 pb-48">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sarpras.map((facility: Sarpra) => (
              <FacilityCard key={facility.name} name={facility.name} description={facility.description} image={facility.image} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
