import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube, Sms, Call, Whatsapp } from 'iconsax-react';
import Logo from '@/assets/homepage/svg/logo.svg';

export default function Footer(): JSX.Element {
  const copyRight = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col bg-primary-600 justify-center items-center py-[50px] gap-y-28 p-5 lg:p-0">
        <div className=" flex flex-col lg:flex-row items-center justify-between w-full max-w-[85rem] gap-y-8 lg:gap-y-0">
          <div className="flex flex-col gap-y-9 w-full">
            <div className="flex gap-x-3 items-center">
              <Image src={Logo} alt="Logo" className="w-[65px] h-[65px]" />
              <h1 className="uppercase font-bold text-white text-xl">sma harapan 3 delitua</h1>
            </div>
            <p className="text-white font-medium text-justify w-full lg:w-[40%]">Lorem ipsum dolor sit amet diam consectetur. Ut purus facilisis quam turpis.</p>
            <div className="flex flex-row gap-x-3">
              <Link href="/" className="bg-white text-primary-600 rounded-full p-3">
                <Instagram className="w-[29px] h-[29px]" />
              </Link>
              <Link href="/" className="bg-white text-primary-600 rounded-full p-3">
                <Facebook className="w-[29px] h-[29px]" />
              </Link>
              <Link href="/" className="bg-white text-primary-600 rounded-full p-3">
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
                <Link href="/" className="text-white">
                  Tentang
                </Link>
                <Link href="/" className="text-white">
                  Galeri
                </Link>
                <Link href="/" className="text-white">
                  Kontak
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-semibold text-white">Sub Menu</h3>
              <div className="flex flex-col gap-y-3">
                <Link href="/" className="text-white">
                  Beranda
                </Link>
                <Link href="/" className="text-white">
                  Tentang
                </Link>
                <Link href="/" className="text-white">
                  Galeri
                </Link>
                <Link href="/" className="text-white">
                  Kontak
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full lg:w-2/5">
              <h3 className="font-semibold text-white">Kunjungi Kami</h3>
              <div className="flex flex-col gap-y-3">
                <Link href="/" className="text-white">
                  Jl. Karya Wisata No.31, Deli Tua, Kec. Namorambe, Kabupaten Deli Serdang, Sumatera Utara 20146
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-semibold text-white">Hubungi Kami</h3>
              <div className="flex flex-col gap-y-6">
                <Link href="/" className="flex gap-x-3 items-center text-white">
                  <Sms color="#fff" size="30" />
                  <span>admin@harapan.ac.id</span>
                </Link>
                <Link href="/" className="flex gap-x-3 items-center text-white">
                  <Call color="#fff" size="30" />
                  <span>(061) 4567890</span>
                </Link>
                <Link href="/" className="flex gap-x-3 items-center text-white">
                  <Whatsapp color="#fff" size="30" />
                  <span>081234567890</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="font-medium text-white text-center text-sm md:text-base">&copy; {copyRight} Yayasan Pendidikan Harapan Medan. All Rights Reserved.</p>
      </footer>
    </>
  );
}
