import AssetKepsek from '@/assets/guru/asset-guru-kepsek.webp';
import AssetGuru1 from '@/assets/guru/asset-guru-guru-1.webp';
import AssetGuru2 from '@/assets/guru/asset-guru-guru-2.webp';
import AssetGuru3 from '@/assets/guru/asset-guru-guru-3.webp';
import AssetGuru4 from '@/assets/guru/asset-guru-guru-4.webp';
import AssetGuru5 from '@/assets/guru/asset-guru-guru-5.webp';
import AssetGuru6 from '@/assets/guru/asset-guru-guru-6.webp';
import AssetGuru7 from '@/assets/guru/asset-guru-guru-7.webp';
import AssetGuru8 from '@/assets/guru/asset-guru-guru-8.webp';
import AssetGuru9 from '@/assets/guru/asset-guru-guru-9.webp';
import AssetGuru10 from '@/assets/guru/asset-guru-guru-10.webp';
import AssetGuru11 from '@/assets/guru/asset-guru-guru-11.webp';
import AssetGuru12 from '@/assets/guru/asset-guru-guru-12.webp';
import AssetGuru13 from '@/assets/guru/asset-guru-guru-13.webp';
import AssetGuru14 from '@/assets/guru/asset-guru-guru-14.webp';

export type Guru = {
  name: string;
  position: string;
  image: string;
};

export const gurus = [
  {
    name: 'Pak Marwan',
    position: 'Kepala Sekolah',
    image: AssetKepsek.src,
  },
  {
    name: 'Guru 1',
    position: 'Guru Bahasa',
    image: AssetGuru1.src,
  },
  {
    name: 'Guru 2',
    position: 'Guru Matematika',
    image: AssetGuru2.src,
  },
  {
    name: 'Guru 3',
    position: 'Guru Fisika',
    image: AssetGuru3.src,
  },
  {
    name: 'Guru 4',
    position: 'Guru Biologi',
    image: AssetGuru4.src,
  },
  {
    name: 'Guru 5',
    position: 'Guru Kimia',
    image: AssetGuru5.src,
  },
  {
    name: 'Guru 6',
    position: 'Guru Sejarah',
    image: AssetGuru6.src,
  },
  {
    name: 'Guru 7',
    position: 'Guru Geografi',
    image: AssetGuru7.src,
  },
  {
    name: 'Guru 8',
    position: 'Guru Ekonomi',
    image: AssetGuru8.src,
  },
  {
    name: 'Guru 9',
    position: 'Guru Sosiologi',
    image: AssetGuru9.src,
  },
  {
    name: 'Guru 10',
    position: 'Guru Agama',
    image: AssetGuru10.src,
  },
  {
    name: 'Guru 11',
    position: 'Guru Seni Budaya',
    image: AssetGuru11.src,
  },
  {
    name: 'Guru 12',
    position: 'Guru Olahraga',
    image: AssetGuru12.src,
  },
  {
    name: 'Guru 13',
    position: 'Guru Bahasa Inggris',
    image: AssetGuru13.src,
  },
  {
    name: 'Guru 14',
    position: 'Guru Bahasa Jepang',
    image: AssetGuru14.src,
  },
];
