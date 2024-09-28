'use client';

import { JSX, useEffect, useRef } from 'react';
import '../ScrollProgram/ScrollProgram.css';

export default function ScrollProgram(): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault();
    };

    const onMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const onMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const onTouchStart = (e: TouchEvent) => {
      isDown = true;
      startX = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const onTouchEnd = () => {
      isDown = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const preventDefault = (e: MouseEvent) => {
      e.preventDefault();
    };

    scrollContainer.addEventListener('mousedown', onMouseDown);
    scrollContainer.addEventListener('mouseleave', onMouseLeave);
    scrollContainer.addEventListener('mouseup', onMouseUp);
    scrollContainer.addEventListener('mousemove', onMouseMove);

    scrollContainer.addEventListener('touchstart', onTouchStart);
    scrollContainer.addEventListener('touchend', onTouchEnd);
    scrollContainer.addEventListener('touchmove', onTouchMove);

    const images = scrollContainer.querySelectorAll('img');
    images.forEach((img) => {
      img.addEventListener('mousedown', preventDefault);
    });

    return () => {
      scrollContainer.removeEventListener('mousedown', onMouseDown);
      scrollContainer.removeEventListener('mouseleave', onMouseLeave);
      scrollContainer.removeEventListener('mouseup', onMouseUp);
      scrollContainer.removeEventListener('mousemove', onMouseMove);

      scrollContainer.removeEventListener('touchstart', onTouchStart);
      scrollContainer.removeEventListener('touchend', onTouchEnd);
      scrollContainer.removeEventListener('touchmove', onTouchMove);

      images.forEach((img) => {
        img.removeEventListener('mousedown', preventDefault);
      });
    };
  }, []);

  return (
    <section className="flex flex-col px-4 py-[50px] lg:py-[80px] gap-y-16 z-30 container">
      <div className="flex flex-col items-center text-center gap-y-3">
        <h2 className="text-primary-600 text-xl xl:text-2xl font-bold uppercase">program unggulan</h2>
        <h1 className="uppercase text-2xl xl:text-4xl font-bold">SMA HARAPAN 3 DELITUA</h1>
      </div>
      <div className="w-[100%] overflow-x-scroll horizontal-scroll container" ref={scrollContainerRef}>
        <div className="flex w-max gap-x-4 snap-x">
          {Array(8)
            .fill(0)
            .map((_, idx) => (
              <figure key={idx} className="item snap-center rounded-xl">
                <img src="/png/dummy-program.png" alt="dummy" className="w-[100%] h-[100%] object-cover object-center" />
                <figcaption className="uppercase font-medium">pengembangan keterampilan teknologi</figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
}
