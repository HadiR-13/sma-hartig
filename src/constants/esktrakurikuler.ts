import AssetBasket from '@/assets/ekskul/webp/asset-basket.webp';
import AssetFutsal from '@/assets/ekskul/webp/asset-futsal.webp';
import AssetPaskibraka from '@/assets/ekskul/webp/asset-paskibraka.webp';
import AssetPmr from '@/assets/ekskul/webp/asset-pmr.webp';
import AssetMemanah from '@/assets/ekskul/webp/asset-memanah.webp';
import AssetPaduanSuara from '@/assets/ekskul/webp/asset-paduan-suara.webp';
import AssetVoli from '@/assets/ekskul/webp/asset-voli.webp';
import AssetTahfidz from '@/assets/ekskul/webp/asset-tahfidz.webp';

export type Esktrakurikuler = {
  name: {
    short: string;
    long?: string;
  };
  content?: string;
  image: string;
};

export const esktrakurikulers: Esktrakurikuler[] = [
  {
    name: { short: 'Basket' },
    image: AssetBasket.src,
  },
  {
    name: { short: 'Futsal' },
    image: AssetFutsal.src,
  },
  {
    name: { short: 'Paskibra', long: 'Pasukan Pengibar Bendera' },
    image: AssetPaskibraka.src,
  },
  {
    name: { short: 'PMR', long: 'Palang Merah Remaja' },
    image: AssetPmr.src,
  },
  {
    name: { short: 'Memanah' },
    image: AssetMemanah.src,
  },
  {
    name: { short: 'Paduan Suara' },
    image: AssetPaduanSuara.src,
  },
  {
    name: { short: 'Voli' },
    image: AssetVoli.src,
  },
  {
    name: { short: 'Tahfidz' },
    image: AssetTahfidz.src,
  },
];
