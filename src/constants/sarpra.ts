import AssetPerpustakaan from '@/assets/sarpra/webp/asset-perpustakaan.webp';
import AssetKelas from '@/assets/sarpra/webp/asset-kelas.webp';
import AssetMasjid from '@/assets/sarpra/webp/asset-masjid.webp';
import AssetMobilSekolah from '@/assets/sarpra/webp/asset-mobil-sekolah.webp';
import AssetLapanganSepakbola from '@/assets/sarpra/webp/asset-lapangan-sepakbola.webp';
import AssetLapanganBasket from '@/assets/sarpra/webp/asset-lapangan-basket.webp';

export type Sarpra = {
  name: string;
  description: string;
  image: string;
};

export const sarpras = [
  {
    name: 'Perpustakaan',
    description: 'Perpustakaan adalah tempat yang menyediakan berbagai macam buku untuk dibaca oleh siswa.',
    image: AssetPerpustakaan.src,
  },
  {
    name: 'Kelas',
    description: 'Kelas adalah tempat belajar siswa yang dilengkapi dengan meja, kursi, dan papan tulis.',
    image: AssetKelas.src,
  },
  {
    name: 'Masjid',
    description: 'Masjid adalah tempat ibadah umat muslim yang digunakan untuk sholat berjamaah.',
    image: AssetMasjid.src,
  },
  {
    name: 'Mobil Sekolah',
    description: 'Mobil sekolah adalah kendaraan yang digunakan untuk mengantar dan menjemput siswa.',
    image: AssetMobilSekolah.src,
  },
  {
    name: 'Lapangan Sepakbola',
    description: 'Lapangan sepakbola adalah tempat bermain sepakbola yang dilengkapi dengan gawang.',
    image: AssetLapanganSepakbola.src,
  },
  {
    name: 'Lapangan Basket',
    description: 'Lapangan basket adalah tempat bermain basket yang dilengkapi dengan ring.',
    image: AssetLapanganBasket.src,
  },
];
