export type NavLink = {
  name: string;
  path?: string;
  menus?: {
    name: string;
    path: string;
  }[];
};

export const navLinks: NavLink[] = [
  {
    name: 'Beranda',
    path: '/',
  },
  {
    name: 'Tentang',
    path: '/tentang',
  },
  {
    name: 'Akademik',
    menus: [
      {
        name: 'Guru',
        path: '/akademik/guru',
      },
      {
        name: 'Fasilitas',
        path: '/akademik/fasilitas',
      },
    ],
  },
  {
    name: 'Galeri',
    path: '/galeri',
  },
];
