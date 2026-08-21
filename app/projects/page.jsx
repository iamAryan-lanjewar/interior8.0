import React from 'react';
import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Interior Decors & Projects Gallery | RK Interior & NEST WALLPAPERS Nagpur',
  description: 'Explore our curated interior design portfolio in Nagpur featuring modern organic living rooms, minimalist lounges, architectural wall concepts, floral accents, and luxury loft spaces by RK Interior.',
  keywords: [
    'interior design portfolio Nagpur',
    'living room makeover Nagpur',
    'luxury wallpaper gallery',
    'architectural wall concepts',
    'dining room interior',
    'botanical decor Nagpur',
    'RK Interior projects',
  ],
  alternates: {
    canonical: 'https://builddear.com/projects',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://builddear.com/projects',
    siteName: 'RK Interior & NEST WALLPAPERS',
    title: 'Interior Decors & Projects Gallery | RK Interior Nagpur',
    description: 'Explore our curated interior design portfolio featuring modern living spaces, wall accents, and custom transformations in Nagpur.',
    images: [
      {
        url: 'https://builddear.com/assets/project_8_0/Modern%20Organic%20Living%20Room.jpg',
        width: 1200,
        height: 800,
        alt: 'RK Interior - Modern Organic Living Room Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Decors & Projects Gallery | RK Interior Nagpur',
    description: 'Explore curated interior design transformations and luxury wallpaper installations in Nagpur.',
    images: ['https://builddear.com/assets/project_8_0/Modern%20Organic%20Living%20Room.jpg'],
  },
};

const projectGallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://builddear.com/projects#webpage',
  'url': 'https://builddear.com/projects',
  'name': 'Interior Decors & Projects Gallery - RK Interior Nagpur',
  'description': 'Curated portfolio of interior design, wallpaper installations, and home renovations in Nagpur.',
  'isPartOf': {
    '@type': 'WebSite',
    '@id': 'https://builddear.com/#website',
    'name': 'RK Interior & NEST WALLPAPERS',
    'url': 'https://builddear.com/',
  },
  'about': {
    '@type': 'HomeAndConstructionBusiness',
    'name': 'RK Interior & NEST WALLPAPERS',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Nagpur',
      'addressRegion': 'Maharashtra',
      'addressCountry': 'IN',
    },
  },
  'mainEntity': {
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Modern Organic Living Room',
          'artform': 'Interior Design & Decor',
          'description': 'Sculptural furniture and neutral earth tones in living room space planning.',
          'image': 'https://builddear.com/assets/project_8_0/Modern%20Organic%20Living%20Room.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Minimalist Fluted Lounge',
          'artform': 'Wall Accent & Lighting',
          'description': 'Ambient wall sconce and warm lighting with minimalist fluted wall panels.',
          'image': 'https://builddear.com/assets/project_8_0/aranprime-KbytCpI1i5I-unsplash.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Architectural Wall Concept',
          'artform': 'Custom Prep & Wall Accent',
          'description': 'Textured wall panel and contemporary art installation.',
          'image': 'https://builddear.com/assets/project_8_0/jean-philippe-delberghe-90eBoEp2tS0-unsplash.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Blush Pastel Dining Suite',
          'artform': 'Dining Nook Finish',
          'description': 'Custom wall finish and pendant illumination for luxury dining spaces.',
          'image': 'https://builddear.com/assets/project_8_0/julia-GAwEGMN_EMs-unsplash.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Earthy Terracotta & Plant Studio',
          'artform': 'Botanical Accents',
          'description': 'Natural fiber wall prep and botanical styling accents.',
          'image': 'https://builddear.com/assets/project_8_0/karolina-grabowska-ulh3-dLSXjI-unsplash.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 6,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Serene Velvet & Wood Sanctuary',
          'artform': 'Bedroom Suite',
          'description': 'Deep charcoal accent wall with warm oak finishes.',
          'image': 'https://builddear.com/assets/project_8_0/khloe-arledge-8Rz_RIyp5FM-unsplash.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 7,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Sunlit Botanical Haven',
          'artform': 'Floral Wall Installation',
          'description': 'Peel and stick floral accent wall with botanical textures.',
          'image': 'https://builddear.com/assets/project_8_0/lakeisha-bennett-WzP3YnV9T-U-unsplash.jpg',
        },
      },
      {
        '@type': 'ListItem',
        'position': 8,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Contemporary Loft Penthouse',
          'artform': 'Loft Interior Design',
          'description': 'High-ceiling wall panels and glass facade styling.',
          'image': 'https://builddear.com/assets/project_8_0/the-prototype-7S-Ox-heSqs-unsplash.jpg',
        },
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectGallerySchema) }}
      />
      <ProjectsClient />
    </>
  );
}
