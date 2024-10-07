'use client';

import { JSX } from 'react';
import Image from 'next/image';
import AssetTentang from '@/assets/tentang/asset-tentang.webp';
import AssetVisi from '@/assets/tentang/asset-visi.webp';
import AssetMisi from '@/assets/tentang/asset-misi.webp';
import AssetTujuan from '@/assets/tentang/asset-tujuan.webp';

export default function Page(): JSX.Element {
  return (
    <main className="">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[50px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">tentang kami</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3 </h1>
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
              <h1 className="uppercase text-2xl lg:text-4xl">perjalanan sma harapan 3 </h1>
            </div>
            <p className="text-justify lg:text-center leading-7 text-secondary">
              SMA Harapan 3 didirikan pada tahun 2004 dengan tujuan mengembangkan siswa secara akademis dan karakter. Sekolah ini fokus pada keseimbangan prestasi akademik dan keterampilan hidup. Program pengembangan keterampilan hidup
              mencakup kepemimpinan dan kerja tim. Selain itu, siswa diajarkan berpikir kritis dan adaptif terhadap perubahan zaman. Sekolah ini juga menekankan pendidikan moral sebagai dasar karakter. Kegiatan ekstrakurikuler membantu
              mengasah keterampilan non-akademik. SMA Harapan 3 berupaya menciptakan lingkungan yang mendukung pengembangan potensi siswa.
            </p>
          </div>
          {/* Konten */}
          <div className="flex flex-col gap-y-[20px] lg:gap-y-[65px]">
            {/* Konten 1 */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-9 items-center justify-center">
              <Image src={AssetVisi} alt="Asset Dummy Tentang" className="w-full max-w-xl rounded-2xl"></Image>
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-2xl text-center lg:text-start lg:text-3xl uppercase">visi dari sma harapan 3</h1>
                <p className="leading-8 text-secondary text-justify">
                  Visi sekolah ini adalah menjadi lembaga yang unggul dalam iman, ilmu, amal, bermartabat, dan berprestasi, serta mencetak pelajar yang memiliki kepribadian sesuai dengan profil Pelajar Pancasila. Sekolah ini fokus dalam
                  mengembangkan prestasi peserta didiknya, baik dalam kegiatan keagamaan maupun bidang akademik, termasuk assesment nasional dan lomba sains. Selain itu, prestasi juga diraih dalam bidang olahraga, pramuka, dan seni.
                  Kedisiplinan dalam pengelolaan waktu menjadi salah satu pilar utama untuk mencapai tujuan tersebut, sehingga para siswa dapat berkembang secara holistik.
                </p>
              </div>
            </div>
            {/* Konten 2 */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-9 items-center justify-center">
              <Image src={AssetMisi} alt="Asset Dummy Tentang" className="w-full max-w-xl rounded-2xl"></Image>
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-2xl text-center lg:text-start lg:text-3xl uppercase">MISI DARI SMA HARAPAN 3</h1>
                <p className="leading-8 text-secondary text-justify">
                  Misi SMA Harapan 3 adalah menjadi tempat bagi para juara yang menguasai ilmu pengetahuan dan teknologi, sambil berpegang pada ajaran Islam dan Pancasila. Sekolah berkomitmen menumbuhkembangkan karakter bermartabat sesuai
                  Profil Pelajar Pancasila, termasuk nilai beriman dan berakhlak mulia. Pembelajaran dan bimbingan yang efektif membantu siswa berkembang sesuai potensi. Program literasi dan literasi digital diterapkan untuk membudayakan
                  gemar membaca. Sekolah juga mendorong penerapan ilmu pengetahuan, teknologi, dan seni, serta menekankan semangat kerja, disiplin, dan tanggung jawab di lingkungan sekolah.
                </p>
              </div>
            </div>
            {/* Konten 3 */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-9 items-center justify-center">
              <Image src={AssetTujuan} alt="Asset Dummy Tentang" className="w-full max-w-xl rounded-2xl"></Image>
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-2xl text-center lg:text-start lg:text-3xl uppercase">TUJUAN DARI SMA HARAPAN 3</h1>
                <p className="leading-8 text-secondary text-justify">
                  Tujuan sekolah adalah meningkatkan pengetahuan siswa untuk melanjutkan pendidikan ke jenjang lebih tinggi dan kemampuan berinteraksi dengan lingkungan sosial budaya serta alam. Kami mendorong prestasi di bidang sains agar
                  siswa dapat lulus di PTN favorit dan kedinasan. Selain itu, semangat literasi Al-Qur'an, persaudaraan, solidaritas, dan cinta kasih perlu ditumbuhkan. Kami berkomitmen menyediakan sarana prasarana pendidikan yang memadai
                  dan meningkatkan kinerja semua komponen sekolah dalam melaksanakan kegiatan inovatif. Program ekstrakurikuler, termasuk pramuka, akan dikembangkan untuk pengembangan diri peserta didik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
