import { Project, Service, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cyber Future • CBD Hub',
    category: 'Commercial',
    imageUrl: 'https://picsum.photos/seed/art1/800/1000',
    description: 'Immersive futuristic mural for a tech shopping center, combining neon aesthetics with geometric lines.',
  },
  {
    id: '2',
    title: 'Zen Sanctuary • Private Club',
    category: 'High-End Club',
    imageUrl: 'https://picsum.photos/seed/art2/800/1000',
    description: 'Modern oriental ink style using textured materials to create a serene and meditative space.',
  },
  {
    id: '3',
    title: 'Dreamland • Kids Zone',
    category: 'Public Facility',
    imageUrl: 'https://picsum.photos/seed/art3/800/1000',
    description: 'Bright, imaginative, and interactive murals designed to spark creativity in children.',
  },
  {
    id: '4',
    title: 'Urban Pulse • Street Art',
    category: 'Outdoor',
    imageUrl: 'https://picsum.photos/seed/art4/800/1000',
    description: 'Large-scale outdoor mural blending city culture with modern trends, becoming a local landmark.',
  },
  {
    id: '5',
    title: 'Retro Jazz • Livehouse',
    category: 'Hospitality',
    imageUrl: 'https://picsum.photos/seed/art5/800/1000',
    description: 'American vintage style with rich color collisions, recreating the golden age of jazz.',
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Commercial Murals',
    description: 'Enhancing brand image and atmosphere for restaurants, hotels, and retail spaces.',
    iconName: 'Palette',
  },
  {
    id: '2',
    title: '3D Street Art',
    description: 'High-impact ground art and optical illusions, perfect for events and viral marketing.',
    iconName: 'Scaling',
  },
  {
    id: '3',
    title: 'Residential Art',
    description: 'Bespoke feature walls for private homes, elevating living spaces with unique artistry.',
    iconName: 'Brush',
  },
  {
    id: '4',
    title: 'Graffiti & Urban Art',
    description: 'Trendy, edgy spray paint art suitable for creative hubs, gyms, and skate parks.',
    iconName: 'SprayCan',
  },
];

export const CONTACT_INFO = {
  phone: '+61 400 123 456',
  email: 'hello@dreamspace.com.au',
  address: 'Rundle Mall, Adelaide, SA 5000',
  wechat: 'DreamSpace_Au',
};