'use client';

import { JSX, useState, useMemo } from 'react';
import Image from 'next/image';
import { galeris, type Galeri } from '@/constants/galeri';

export default function Page(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(galeris.map((item) => item.category)));
    return ['Semua', ...uniqueCategories];
  }, []);

  const filteredGallery = useMemo(() => {
    return selectedCategory === 'Semua' ? galeris : galeris.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[20px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">galeri kami</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3</h1>
          </div>
          <p className="text-justify lg:text-center w-full lg:w-[80%] text-secondary leading-8">
            Melalui galeri ini, kami berbagi momen-momen berharga yang telah kami abadikan. Dari kegiatan belajar mengajar, ekstrakurikuler, hingga kegiatan-kegiatan lainnya yang kami selenggarakan.
          </p>
        </div>
      </header>

      {/* Filter Categories */}
      <div className="container mx-auto px-5 xl:px-10 mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex flex-col overflow-x-hidden py-[30px] items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 w-full">
          {filteredGallery.map((item, index) => (
            <div key={`${item.name}-${index}`} className="w-full flex flex-col gap-y-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="flex flex-row justify-between mt-2">
                <div className="flex flex-col gap-y-1">
                  <h1 className="font-medium text-lg">{item.name}</h1>
                  <p className="text-secondary text-sm">{item.date}</p>
                </div>
                <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white hover:bg-primary-600 hover:text-white duration-300 transition-colors cursor-pointer">{item.category}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
