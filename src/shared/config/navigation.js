export const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    items: [
      { label: 'About ATROS', href: '/about', description: 'Story, values and business details' },
      {
        label: 'Why Choose Us',
        href: '/services',
        description: 'Trust factors and service approach',
      },
    ],
  },
  {
    label: 'Solutions',
    items: [
      {
        label: 'Services Overview',
        href: '/services',
        description: 'All water purification services',
      },
      {
        label: 'AMC & Support',
        href: '/amc-support',
        description: 'Maintenance, repair and service care',
      },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
