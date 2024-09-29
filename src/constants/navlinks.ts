export type NavLink = {
  name: string;
  path: string;
  menus?: {
    name: string;
    path: string;
  };
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
    path: '/akademik',
  },
  {
    name: 'Galeri',
    path: '/galeri',
  },
];
