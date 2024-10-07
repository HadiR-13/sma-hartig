import { JSX, ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sarana Prasarana | SMA Harapan 3 Delitua',
  description:
    'SMA Harapan 3, didirikan pada 2004, berfokus pada keseimbangan prestasi akademik, keterampilan hidup, dan pendidikan moral. Sekolah ini menciptakan lingkungan yang mendukung pengembangan potensi siswa melalui kegiatan akademik dan ekstrakurikuler.',
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return <div>{children}</div>;
}
