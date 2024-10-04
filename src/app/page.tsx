'use client';

import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssetHero from '@/assets/homepage/webp/asset-hero.webp';
import AssetSekolah from '@/assets/homepage/webp/asset-sekolah.webp';
import AssetKepsek from '@/assets/homepage/webp/asset-kepsek.webp';
import ScrollProgram from '@/components/partials/ScrollProgram/ScrollProgram';
import ArtikelHomepage from '@/components/partials/Artikel/ArtikelHomepage';

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
        <div className="container flex flex-col xl:flex-row items-center justify-between py-10 px-5 xl:px-10 gap-y-8">
          {/* Konten 1 */}
          <div className="flex flex-col gap-y-9 md:gap-y-12">
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="font-bold uppercase text-xl xl:text-2xl">sma harapan 3</h2>
                <h1 className="font-bold uppercase text-4xl xl:text-5xl">
                  sekolah para <span className="text-primary-600">juara</span>
                </h1>
              </div>
              <p className="w-full xl:max-w-[34.5rem] leading-7 text-justify lg:text-start">Sebagai upaya dalam membangun masa depan yang lebih baik, kami berkomitmen untuk memberikan kegiatan belajar mengajar yang optimal.</p>
            </div>
            <div className="flex flex-row gap-x-5">
              <button
                onClick={() => scrollToSection('tentang')}
                className="bg-primary-600 border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Tentang Kami
              </button>
              <Link
                href="https://wa.me/6281376055359?text=Halo admin, saya ingin berbicara lebih lanjut mengenahi sma harapan 3"
                className="bg-white border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
              >
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
        <div className="container flex flex-col xl:flex-row gap-y-4 xl:gap-y-0 gap-x-0 lg:gap-x-10 lg:py-10 lg:px-10">
          {/* Konten 1 */}
          <Image src={AssetSekolah} alt="Asset Sekolah" className="w-full xl:max-w-2xl rounded-xl lg:rounded-2xl object-cover" />

          {/* Konten 2 */}
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold uppercase text-xl xl:text-2xl text-primary-600 text-center lg:text-start">tentang sekolah</h2>
                <h1 className="font-bold uppercase text-2xl xl:text-4xl text-center lg:text-start">sma harapan 3 </h1>
              </div>
              <p className="w-full xl:max-w-xl text-justify leading-[1.60]">
                SMA Harapan 3 didirikan pada tahun 1991 dengan tujuan mengembangkan siswa secara akademis dan karakter. Sekolah ini fokus pada keseimbangan prestasi akademik dan keterampilan hidup. Program pengembangan keterampilan hidup
                mencakup kepemimpinan dan kerja tim. Selain itu, siswa diajarkan berpikir kritis dan adaptif terhadap perubahan zaman. Sekolah ini juga menekankan pendidikan moral sebagai dasar karakter. Kegiatan ekstrakurikuler membantu
                mengasah keterampilan non-akademik. SMA Harapan 3 berupaya menciptakan lingkungan yang mendukung pengembangan potensi siswa.
              </p>
            </div>
            <Link
              href="/tentang"
              className="bg-primary-600 border border-primary-600 px-7 py-3 xl:px-10 xl:py-4 font-semibold text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300 text-center lg:self-start"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] lg:py-[80px]" id="tentang">
        <div className="container flex flex-col-reverse xl:flex-row gap-y-4 xl:gap-y-0 gap-x-0 xl:gap-x-10 xl:py-10 xl:px-10">
          {/* Konten 2 */}
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold uppercase text-xl xl:text-2xl text-primary-600 text-center lg:text-start">prakata kepala sekolah</h2>
                <h1 className="font-bold uppercase text-2xl xl:text-4xl text-center lg:text-start">sma harapan 3 </h1>
              </div>
              <p className="w-full xl:max-w-xl text-justify leading-[1.60]">
                Program Pendidikan kami tidak hanya berfokus pada akademik, tetapi juga pada pengembangan karakter dan keterampilan interpersonal. Kami percaya bahwa kesuksesan tidak hanya tentang pengetahuan, tetapi juga memerlukan
                keterampilan komunikasi, empati, dan kepemimpinan. Kurikulum kami dirancang untuk mengoptimalkan potensi siswa secara menyeluruh. Dari mata pelajaran inti seperti Matematika, Bahasa Inggris, dan Ilmu Pengetahuan, hingga
                program spesial seperti Kedokteran. Kami memastikan bahwa pendidikan yang diberikan relevan dengan kebutuhan masa depan. Kelas Fokus Kedokteran kami merupakan yang pertama di Indonesia, dirancang untuk menghasilkan tenaga
                medis yang siap menghadapi tantangan kesehatan Indonesia. Metode pengajaran kami juga berlandaskan pada kurikulum merdeka, yang memberikan kebebasan bagi siswa untuk lebih berkembang.
              </p>
            </div>
          </div>

          {/* Konten 1 */}
          <Image src={AssetKepsek} alt="Asset Sekolah" className="w-full xl:max-w-2xl rounded-2xl" />
        </div>
      </section>

      {/* Section 4 */}
      <ScrollProgram />

      {/* Section 5 */}
      <ArtikelHomepage />
    </main>
  );
}
