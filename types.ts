export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Brush' | 'SprayCan' | 'Palette' | 'Scaling';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}