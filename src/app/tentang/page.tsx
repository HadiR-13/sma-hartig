'use client';

import { JSX } from 'react';
import Image from 'next/image';
import AssetTentang from '@/assets/tentang/asset-tentang.webp';
import AssetDummyTentang from '@/assets/tentang/asset-dummy-tentang.webp';

export default function Page(): JSX.Element {
  return (
    <main className="">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[50px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">tentang kami</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3 medan</h1>
          </div>
          <Image src={AssetTentang} alt="Asset Tentang" className="rounded-[20px] bg-cover"></Image>
        </div>
      </header>

      {/* Section 2 */}
      <section className="bg-[#F8FFF9] flex flex-col overflow-x-hidden py-[30px] lg:py-[80px]">
        <div className="container flex flex-col items-center justify-center py-10 px-5 xl:px-10 gap-y-12 lg:gap-y-28">
          {/* Header Judul */}
          <div className="flex flex-col gap-y-9">
            <div className="text-center font-bold gap-y-2 flex flex-col">
              <h3 className="uppercase text-xl lg:text-2xl text-primary-600">menciptakan keunggulan</h3>
              <h1 className="uppercase text-2xl lg:text-4xl">perjalanan sma harapan 3 medan</h1>
            </div>
            <p className="text-justify lg:text-center leading-7 text-secondary">
              Lorem ipsum dolor sit amet consectetur. In feugiat fusce est pellentesque dolor sit cursus non id. Et mi aliquam nec laoreet tempor magna mattis. Sit ut in facilisis vulputate. Tortor vitae id nulla sed eget. Ut ac gravida
              sollicitudin in aliquam in donec. Nam neque nisi lacinia at. Adipiscing mollis mauris amet netus. Pharetra pharetra nunc sem amet. Et tempor urna platea volutpat erat tortor.Adipiscing mollis mauris amet netus. Pharetra
              pharetra nunc sem amet. Et tempor urna platea volutpat erat tortor.
            </p>
          </div>
          {/* Konten */}
          <div className="flex flex-col gap-y-[20px] lg:gap-y-[65px]">
            {/* Konten 1 */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-9 items-center justify-center">
              <Image src={AssetDummyTentang} alt="Asset Dummy Tentang" className="w-full max-w-xl xl:max-w-2xl rounded-2xl"></Image>
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-2xl text-center lg:text-start lg:text-3xl uppercase">visi dari sma harapan 3</h1>
                <p className="leading-8 text-secondary text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis fugiat ut. Deleniti asperiores velit natus magni omnis quod cum, minus debitis provident atque voluptas inventore fugit, autem fuga repudiandae!
                  Deleniti veritatis provident dolorum, nesciunt natus enim amet recusandae unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consequatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni earum inventore ullam officia autem veritatis dolorem hic quod, vitae consequatur illo nobis perspiciatis deleniti rerum temporibus repellendus voluptatibus! Nemo, ipsam?
                </p>
              </div>
            </div>
            {/* Konten 2 */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-9 items-center justify-center">
              <Image src={AssetDummyTentang} alt="Asset Dummy Tentang" className="w-full max-w-xl xl:max-w-2xl rounded-2xl"></Image>
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-2xl text-center lg:text-start lg:text-3xl uppercase">MISI DARI SMA HARAPAN 3</h1>
                <p className="leading-8 text-secondary text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis fugiat ut. Deleniti asperiores velit natus magni omnis quod cum, minus debitis provident atque voluptas inventore fugit, autem fuga repudiandae!
                  Deleniti veritatis provident dolorum, nesciunt natus enim amet recusandae unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consequatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni earum inventore ullam officia autem veritatis dolorem hic quod, vitae consequatur illo nobis perspiciatis deleniti rerum temporibus repellendus voluptatibus! Nemo, ipsam?
                </p>
              </div>
            </div>
            {/* Konten 3 */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-9 items-center justify-center">
              <Image src={AssetDummyTentang} alt="Asset Dummy Tentang" className="w-full max-w-xl xl:max-w-2xl rounded-2xl"></Image>
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-2xl text-center lg:text-start lg:text-3xl uppercase">KOMITMEN UNTUK TUMBUH</h1>
                <p className="leading-8 text-secondary text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis fugiat ut. Deleniti asperiores velit natus magni omnis quod cum, minus debitis provident atque voluptas inventore fugit, autem fuga repudiandae!
                  Deleniti veritatis provident dolorum, nesciunt natus enim amet recusandae unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consequatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni earum inventore ullam officia autem veritatis dolorem hic quod, vitae consequatur illo nobis perspiciatis deleniti rerum temporibus repellendus voluptatibus! Nemo, ipsam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
