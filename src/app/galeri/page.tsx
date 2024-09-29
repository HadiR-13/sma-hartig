import { JSX } from 'react';
import AssetDummyGaleri from '@/assets/galeri/png/asset-dummy-galeri.png';
import Image from 'next/image';

export default function Page(): JSX.Element {
  return (
    <main className="">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[20px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">galeri kami</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3 delitua</h1>
          </div>
          <p className="text-justify lg:text-center w-full lg:w-[80%] text-secondary leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt mollitia eos quibusdam necessitatibus dolores voluptates. Reiciendis doloribus, animi repellendus labore aspernatur cum aliquid enim, ipsa modi deserunt quam?
          </p>
        </div>
      </header>

      {/* Section */}
      {/* Section */}
      <div className="flex flex-col overflow-x-hidden py-[30px] items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 w-full">
          {/* konten */}
          <div className="w-full flex flex-col gap-y-2">
            <Image src={AssetDummyGaleri} alt="Asset Dummy Galeri" layout="responsive" width={100} height={100} />
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">Lapangan Basket</h1>
                <p className="text-secondary text-sm">29 September 2024</p>
              </div>
              <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white">SARPRA</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Image src={AssetDummyGaleri} alt="Asset Dummy Galeri" layout="responsive" width={100} height={100} />
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">Lapangan Basket</h1>
                <p className="text-secondary text-sm">29 September 2024</p>
              </div>
              <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white">SARPRA</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Image src={AssetDummyGaleri} alt="Asset Dummy Galeri" layout="responsive" width={100} height={100} />
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">Lapangan Basket</h1>
                <p className="text-secondary text-sm">29 September 2024</p>
              </div>
              <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white">SARPRA</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Image src={AssetDummyGaleri} alt="Asset Dummy Galeri" layout="responsive" width={100} height={100} />
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">Lapangan Basket</h1>
                <p className="text-secondary text-sm">29 September 2024</p>
              </div>
              <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white">SARPRA</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Image src={AssetDummyGaleri} alt="Asset Dummy Galeri" layout="responsive" width={100} height={100} />
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">Lapangan Basket</h1>
                <p className="text-secondary text-sm">29 September 2024</p>
              </div>
              <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white">SARPRA</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <Image src={AssetDummyGaleri} alt="Asset Dummy Galeri" layout="responsive" width={100} height={100} />
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium text-lg">Lapangan Basket</h1>
                <p className="text-secondary text-sm">29 September 2024</p>
              </div>
              <h1 className="bg-[#D9D9D9] py-1 px-3 rounded flex flex-col justify-center items-center self-start text-white">SARPRA</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
