'use client';

import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { artikels } from '@/constants/artikel';

export default function ArtikelHomepage(): JSX.Element {
  const previewArticles = artikels.slice(0, 3);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };

  return (
    <section className="flex flex-col px-4 py-[50px] lg:py-[80px] gap-y-16 z-30 container">
      <div className="flex flex-col items-center text-center gap-y-3">
        <h2 className="text-primary-600 text-xl xl:text-2xl font-bold uppercase">berita dan artikel</h2>
        <h1 className="uppercase text-2xl xl:text-4xl font-bold">SMA HARAPAN 3</h1>
      </div>

      <div className="flex flex-col gap-y-12">
        {/* Artikel Utama */}
        {previewArticles[0] && (
          <div className="flex flex-col xl:flex-row gap-y-7 xl:gap-x-14 items-center justify-center">
            <Image src={previewArticles[0].images[0]} alt={previewArticles[0].title} width={800} height={600} className="w-full h-[25rem] xl:min-w-[50%] rounded-lg object-cover object-center" />

            <div className="flex flex-col justify-between gap-y-6">
              <div className="flex flex-col gap-y-3">
                <h3 className="font-medium">{previewArticles[0].date}</h3>
                <h1 className="text-xl md:text-3xl uppercase font-extrabold">{previewArticles[0].title}</h1>
                <p className="text-justify w-full leading-7">{previewArticles[0].content.slice(0, 400)}...</p>
              </div>

              <Link
                href={`/akademik/artikel/${createSlug(previewArticles[0].title)}`}
                className="bg-primary-600 border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300 text-center lg:self-start"
              >
                Baca artikel
              </Link>
            </div>
          </div>
        )}

        {/* Artikel Tambahan */}
        {previewArticles.length > 1 && (
          <div className="grid md:grid-cols-2 gap-8">
            {previewArticles.slice(1).map((artikel, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <Image src={artikel.images[0]} alt={artikel.title} width={600} height={400} className="w-full h-[15rem] rounded-lg object-cover object-center" />
                <div className="flex flex-col gap-y-2">
                  <h3 className="font-medium">{artikel.date}</h3>
                  <h2 className="text-xl uppercase font-bold">{artikel.title}</h2>
                  <p className="text-justify leading-6">{artikel.content.slice(0, 400)}...</p>
                  <Link
                    href={`/akademik/artikel/${createSlug(artikel.title)}`}
                    className="bg-primary-600 border border-primary-600 px-5 py-2 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300 text-center self-start mt-2"
                  >
                    Baca artikel
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
