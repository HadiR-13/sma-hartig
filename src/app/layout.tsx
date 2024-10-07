import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layouts/Navbar/Navbar';
import Footer from '@/components/layouts/Footer/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://smaharapan3.sch.id'),
  title: 'SMA Harapan 3 Delitua',
  description:
    'SMA Harapan 3, didirikan pada 2004, berfokus pada keseimbangan prestasi akademik, keterampilan hidup, dan pendidikan moral. Sekolah ini menciptakan lingkungan yang mendukung pengembangan potensi siswa melalui kegiatan akademik dan ekstrakurikuler.',
  keywords: ['SMA Harapan 3 Delitua', 'Sekolah Menengah Atas Medan', 'Sekolah Unggulan Delitua', 'Pendidikan Berkualitas Medan', 'SMA Terbaik Sumatera Utara'],
  authors: [{ name: 'SMA Harapan 3 Delitua' }],
  creator: 'SMA Harapan 3 Delitua',
  publisher: 'SMA Harapan 3 Delitua',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'SMA Harapan 3 Delitua',
    title: 'SMA Harapan 3 Delitua | Pendidikan Berkualitas untuk Masa Depan Cemerlang',
    description: 'SMA Harapan 3 Delitua menawarkan pendidikan berkualitas dengan fokus pada prestasi akademik, pengembangan karakter, dan keterampilan hidup.',
    url: 'https://smaharapan3.sch.id',
    locale: 'id_ID',
    images: [
      {
        url: '/svg/logo.svg',
        width: 1200,
        height: 630,
        alt: 'SMA Harapan 3 Delitua',
      },
    ],
  },
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex flex-col min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
