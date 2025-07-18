'use client';

import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { artikels } from '@/constants/artikel';
import { notFound } from 'next/navigation';
import { Facebook, Whatsapp } from 'iconsax-react';

interface ArticleDetailProps {
  params: {
    slug: string;
  };
}

export default function ArticleDetail({ params }: ArticleDetailProps): JSX.Element {
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };
  const artikel = artikels.find((article) => createSlug(article.title) === params.slug);
  if (!artikel) {
    notFound();
  }

  const getCurrentURL = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  const shareLinks = {
    facebook: () => {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCurrentURL())}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    },
    twitter: () => {
      const text = `${artikel.title}`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(getCurrentURL())}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    },
    whatsapp: () => {
      const text = `${artikel.title}\n\n${getCurrentURL()}`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    },
    copyLink: () => {
      navigator.clipboard.writeText(getCurrentURL()).then(() => {
        alert('Link berhasil disalin!');
      });
    },
  };

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-primary-600">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/akademik/artikel" className="hover:text-primary-600">
            Artikel
          </Link>
          <span>/</span>
          <span className="text-primary-600">Detail Artikel</span>
        </div>
        <div className="mb-8">
          <p className="text-gray-600 mb-2">{artikel.date}</p>
          <h1 className="text-xl md:text-4xl font-bold mb-6">{artikel.title}</h1>
        </div>

        <div className="mb-8">
          <Image src={artikel.images[0]} alt={artikel.title} width={1200} height={800} className="w-full h-[400px] object-cover rounded-lg" />
        </div>

        <div className="prose prose-lg max-w-none">
          {artikel.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Bagikan Artikel:</h3>
          <div className="flex flex-wrap gap-4">
            <button onClick={shareLinks.facebook} className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-full hover:bg-[#166FE5] transition-colors">
              <Facebook />
              Facebook
            </button>
            <button onClick={shareLinks.whatsapp} className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#22C35E] transition-colors">
              <Whatsapp />
              WhatsApp
            </button>
            <button onClick={shareLinks.copyLink} className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-2.315-2.316-2.315-6.062 0-8.378l3.609-3.609c.781-.781 2.049-.781 2.83 0 .781.781.781 2.047 0 2.828l-3.609 3.609c-.754.755-1.975.755-2.729 0-.755-.755-.755-1.975 0-2.729l3.609-3.609c.781-.781.781-2.047 0-2.828-.781-.781-2.047-.781-2.828 0l-3.609 3.609c-1.754 1.754-1.754 4.609 0 6.363 1.754 1.754 4.609 1.754 6.363 0l3.609-3.609c.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828z" />
                <path d="M21.654 3.609l-3.609 3.609c-2.316 2.315-6.063 2.315-8.378 0-2.315-2.316-2.315-6.062 0-8.378l3.609-3.609c.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828l-3.609 3.609c-.755.755-1.975.755-2.729 0-.755-.755-.755-1.975 0-2.729l3.609-3.609c.781-.781.781-2.047 0-2.828-.781-.781-2.047-.781-2.828 0l-3.609 3.609c-1.754 1.754-1.754 4.609 0 6.363 1.754 1.754 4.609 1.754 6.363 0l3.609-3.609c.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828z" />
              </svg>
              Salin Link
            </button>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/akademik/artikel" className="inline-block bg-primary-600 text-white px-6 py-4 rounded-full hover:bg-primary-700 transition-colors duration-300">
            Kembali ke Daftar Artikel
          </Link>
        </div>
      </div>
    </article>
  );
}
