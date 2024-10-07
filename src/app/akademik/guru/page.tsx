'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Guru, gurus } from '@/constants/guru';

const ITEMS_PER_LOAD = 9;

export default function Page(): JSX.Element {
  const [loadedGurus, setLoadedGurus] = useState<Guru[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMoreGurus = () => {
    setIsLoading(true);
    setTimeout(() => {
      const nextGurus = gurus.slice(0, currentPage * ITEMS_PER_LOAD);
      setLoadedGurus(nextGurus);
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadMoreGurus();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && loadedGurus.length < gurus.length) {
          loadMoreGurus();
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, loadedGurus]);

  const allDataLoaded = loadedGurus.length >= gurus.length;

  return (
    <main className="">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[20px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">tenaga pengajar</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3</h1>
          </div>
          <p className="text-justify lg:text-center w-full lg:w-[80%] text-secondary leading-8">
            SMA Harapan 3 memiliki tenaga pengajar yang berpengalaman dan berdedikasi tinggi dalam mendidik siswa. Setiap guru berperan penting dalam menciptakan lingkungan belajar yang positif, mendukung pengembangan akademik, serta
            membimbing siswa menjadi individu yang berprestasi dan berkarakter.
          </p>
        </div>
      </header>

      {/* Section */}
      <div className="flex flex-col overflow-x-hidden py-[30px] items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 w-full">
          {loadedGurus.map((guru: Guru) => (
            <div key={guru.name} className="flex flex-col gap-y-2">
              <Image src={guru.image} alt={guru.name} layout="responsive" width={100} height={100} className="rounded-lg" loading="lazy" />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">{guru.name}</h1>
                <p className="text-secondary text-sm">{guru.position}</p>
              </div>
            </div>
          ))}
        </div>
        {!allDataLoaded && (
          <div ref={loaderRef} className="text-center py-4 text-gray-600">
            {isLoading ? 'Please wait, loading...' : 'Scroll to load more'}
          </div>
        )}
      </div>
    </main>
  );
}
