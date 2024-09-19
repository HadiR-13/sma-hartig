import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssetHero from '@/assets/homepage/webp/asset-hero.webp';

export default function Home(): JSX.Element {
  return (
    <main className="">
      {/* Header atau Hero */}
      <header className="flex flex-col overflow-x-hidden lg:min-h-screen py-[50px] lg:py-[80px]">
        <div className="container flex flex-col md:flex-row items-center justify-between py-10 px-10">
          {/* Konten 1 */}
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="font-bold uppercase text-2xl">sma harapan 3 delitua</h2>
                <h1 className="font-bold uppercase text-5xl">
                  iman, ilmu, dan <span className="text-primary-600">amal</span>
                </h1>
              </div>
              <p className="w-full max-w-[34.5rem] leading-7">Lorem ipsum dolor sit amet consectetur. Ut etiam sed dolor ac. Viverra placerat dignissim lorem ac non. Lacus lorem sed enim nisl eu sit. Tortor lacus at egestas nunc.</p>
            </div>
            <div className="flex flex-row gap-x-5">
              <Link href="/tentang" className="bg-primary-600 border border-primary-600 px-10 py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300">
                Tentang Kami
              </Link>
              <Link href="/kontak" className="bg-white border border-primary-600 px-10 py-4 font-semibold text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300">
                Kontak Kami
              </Link>
            </div>
          </div>
          {/* Konten 2 */}
          <Image src={AssetHero} alt="Asset Hero" className="hidden md:block w-full max-w-2xl" />
        </div>
      </header>
    </main>
  );
}
