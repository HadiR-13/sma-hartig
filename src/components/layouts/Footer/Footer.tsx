import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube, Sms, Call, Whatsapp } from 'iconsax-react';
import Logo from '@/assets/homepage/svg/logo.svg';

export default function Footer(): JSX.Element {
  const copyRight = new Date().getFullYear();
  return (
    <footer className="flex flex-col bg-primary-600 justify-center items-center py-[50px] gap-y-28 p-5">
      <div className=" flex flex-col lg:flex-row items-center justify-between w-full max-w-[85rem] gap-y-8 lg:gap-y-0">
        <div className="flex flex-col gap-y-9 w-full">
          <div className="flex gap-x-3 items-center">
            <Image src={Logo} alt="Logo" className="w-[65px] h-[65px]" />
            <h1 className="uppercase font-bold text-white text-xl">sma harapan 3</h1>
          </div>
          <p className="text-white font-medium text-justify w-full lg:w-[40%]">Sebagai upaya dalam membangun masa depan yang lebih baik, kami berkomitmen untuk memberikan kegiatan belajar mengajar yang optimal.</p>
          <div className="flex flex-row gap-x-3">
            <Link href="https://www.instagram.com/smaharapan_3/" className="bg-white text-primary-600 rounded-full p-3">
              <Instagram className="w-[29px] h-[29px]" />
            </Link>
            <Link href="https://www.facebook.com/smaharapan3/" className="bg-white text-primary-600 rounded-full p-3">
              <Facebook className="w-[29px] h-[29px]" />
            </Link>
            <Link href="https://www.youtube.com/@smaharapan3259" className="bg-white text-primary-600 rounded-full p-3">
              <Youtube className="w-[29px] h-[29px]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-0 lg:gap-y-0 lg:gap-x-12 w-full">
          <div className="flex flex-col gap-y-4">
            <h3 className="font-semibold text-white">Menu</h3>
            <div className="flex flex-col gap-y-3">
              <Link href="/" className="text-white">
                Beranda
              </Link>
              <Link href="/tentang" className="text-white">
                Tentang
              </Link>
              <Link href="/galeri" className="text-white">
                Galeri
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="font-semibold text-white">Sub Menu</h3>
            <div className="flex flex-col gap-y-3">
              <Link href="/akademik/guru" className="text-white">
                Guru
              </Link>
              <Link href="/akademik/sarpra" className="text-white">
                Sarpra
              </Link>
              <Link href="/akademik/ekstrakurikuler" className="text-white">
                Ekstrakurikuler
              </Link>
              <Link href="/akademik/artikel" className="text-white">
                artikel
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full lg:w-2/5">
            <h3 className="font-semibold text-white">Kunjungi Kami</h3>
            <div className="flex flex-col gap-y-3">
              <Link href="https://maps.app.goo.gl/maWsQBx9AdezKgh88" className="text-white">
                Jl. Karya Wisata No.31, Deli Tua, Kec. Namorambe, Kabupaten Deli Serdang, Sumatera Utara 20146
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="font-semibold text-white">Hubungi Kami</h3>
            <div className="flex flex-col gap-y-6">
              <Link href="mailto:admin.smaharapan3.sch.id" className="flex gap-x-3 items-center text-white">
                <Sms color="#fff" size="30" />
                <span>admin@harapan.ac.id</span>
              </Link>
              <Link href="https://wa.me/6281376055359?text=Halo admin, saya ingin berbicara lebih lanjut mengenahi sma harapan 3" className="flex gap-x-3 items-center text-white">
                <Call color="#fff" size="30" />
                <span>081376055359</span>
              </Link>
              <Link href="https://wa.me/6281376055359?text=Halo admin, saya ingin berbicara lebih lanjut mengenahi sma harapan 3" className="flex gap-x-3 items-center text-white">
                <Whatsapp color="#fff" size="30" />
                <span>081376055359</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="font-medium text-white text-center text-sm md:text-base">&copy; {copyRight} Yayasan Pendidikan Harapan Medan. All Rights Reserved.</p>
    </footer>
  );
}
