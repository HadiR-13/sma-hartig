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
        name: 'Sarana Prasarana',
        path: '/akademik/sarpra',
      },
      {
        name: 'Ekstrakurikuler',
        path: '/akademik/ekstrakurikuler',
      },
      {
        name: 'Artikel',
        path: '/akademik/artikel',
      },
    ],
  },
  {
    name: 'Galeri',
    path: '/galeri',
  },
];
