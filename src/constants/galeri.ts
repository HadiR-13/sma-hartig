import AssetPerpustakaan from '@/assets/sarpra/webp/asset-perpustakaan.webp';
import AssetKelas from '@/assets/sarpra/webp/asset-kelas.webp';
import AssetMasjid from '@/assets/sarpra/webp/asset-masjid.webp';
import AssetMobilSekolah from '@/assets/sarpra/webp/asset-mobil-sekolah.webp';
import AssetLapanganSepakbola from '@/assets/sarpra/webp/asset-lapangan-sepakbola.webp';
import AssetLapanganBasket from '@/assets/sarpra/webp/asset-lapangan-basket.webp';
import AssetArtikel1 from '@/assets/artikel/asset-artikel-1.webp';

export type Galeri = {
  title: string;
  date: string;
  category: string;
  image: string;
};

export const galeris = [
  {
    name: 'Perpustakaan',
    date: '08 Oktober 2024',
    category: 'SARPRA',
    image: AssetPerpustakaan.src,
  },
  {
    name: 'Kelas',
    date: '08 Oktober 2024',
    category: 'SARPRA',
    image: AssetKelas.src,
  },
  {
    name: 'Masjid',
    date: '08 Oktober 2024',
    category: 'SARPRA',
    image: AssetMasjid.src,
  },
  {
    name: 'Mobil Sekolah',
    date: '08 Oktober 2024',
    category: 'SARPRA',
    image: AssetMobilSekolah.src,
  },
  {
    name: 'Lapangan Sepakbola',
    date: '08 Oktober 2024',
    category: 'SARPRA',
    image: AssetLapanganSepakbola.src,
  },
  {
    name: 'Lapangan Basket',
    date: '08 Oktober 2024',
    category: 'SARPRA',
    image: AssetLapanganBasket.src,
  },
  {
    name: 'Artikel 1',
    date: '29 September 2024',
    category: 'Artikel',
    image: AssetArtikel1.src,
  },
];
