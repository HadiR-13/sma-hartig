import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layouts/Navbar/Navbar';
import Footer from '@/components/layouts/Footer/Footer';

export const metadata: Metadata = {
  title: 'SMA Harapan 3 Delitua',
  description:
    'SMA Harapan 3, didirikan pada 2004, berfokus pada keseimbangan prestasi akademik, keterampilan hidup, dan pendidikan moral. Sekolah ini menciptakan lingkungan yang mendukung pengembangan potensi siswa melalui kegiatan akademik dan ekstrakurikuler.',
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
