import './globals.css';

export const viewport = {
  themeColor: '#94CEFA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL('https://builddear.com'),
  title: {
    default: 'RK Interior & NEST WALLPAPERS | Best Interior Designers & Wallpaper Specialists in Nagpur',
    template: '%s | RK Interior & NEST WALLPAPERS',
  },
  description: 'RK Interior & NEST WALLPAPERS in Nagpur offers premium interior design, luxury wallpaper installation, 3D space planning, modular home makeovers, and custom finish styling. Book your free estimate today!',
  keywords: [
    'interior design Nagpur',
    'best interior designer in Nagpur',
    'RK Interior',
    'NEST WALLPAPERS',
    'luxury wallpapers Nagpur',
    'space planning',
    'home renovation Nagpur',
    'room makeover',
    'living room interior',
    'bedroom decor',
    'color consultation Nagpur',
  ],
  authors: [{ name: 'RK Interior & NEST WALLPAPERS' }],
  creator: 'RK Interior & NEST WALLPAPERS',
  publisher: 'RK Interior & NEST WALLPAPERS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://builddear.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://builddear.com/',
    siteName: 'RK Interior & NEST WALLPAPERS',
    title: 'RK Interior & NEST WALLPAPERS | Transform Your Space in Nagpur',
    description: 'Transform your residential & commercial interiors with Nagpur’s leading interior designers and wallpaper specialists. Free consultation & 24h accurate quotes.',
    images: [
      {
        url: 'https://builddear.com/assets/hero_bg.jpg',
        width: 1200,
        height: 630,
        alt: 'RK Interior - Luxury Space Planning & Home Transformation in Nagpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RK Interior & NEST WALLPAPERS | Nagpur Interior Design',
    description: 'Professional space planning, home renovation, room makeovers, and custom wallpapers in Nagpur by RK Interior.',
    images: ['https://builddear.com/assets/hero_bg.jpg'],
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nagpur, Maharashtra, India',
    'geo.position': '21.1458;79.0882',
    'ICBM': '21.1458, 79.0882',
  },
};

const jsonLdSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': 'https://builddear.com/#business',
    'name': 'RK Interior & NEST WALLPAPERS',
    'alternateName': 'RK Interior Studio',
    'legalName': 'RK Interior & Nest Wallpapers Nagpur',
    'url': 'https://builddear.com/',
    'logo': 'https://builddear.com/assets/hero_bg.jpg',
    'image': [
      'https://builddear.com/assets/hero_bg.jpg',
      'https://builddear.com/assets/consultation_nursery.jpg',
      'https://builddear.com/assets/service_installation.jpg',
    ],
    'description': 'RK Interior & NEST WALLPAPERS provides expert interior design, space planning, custom wallpaper installations, full room makeovers, and color styling consultations in Nagpur, Maharashtra.',
    'telephone': '+91-9823577149',
    'email': 'instinctt20@gmail.com',
    'priceRange': '₹₹',
    'currenciesAccepted': 'INR',
    'paymentAccepted': 'Cash, Credit Card, UPI, Bank Transfer',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sadar Main Road',
      'addressLocality': 'Nagpur',
      'addressRegion': 'Maharashtra',
      'postalCode': '440001',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 21.1458,
      'longitude': 79.0882,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:30',
        'closes': '20:30',
      },
    ],
    'areaServed': [
      { '@type': 'City', 'name': 'Nagpur' },
      { '@type': 'AdministrativeArea', 'name': 'Vidarbha' },
      { '@type': 'AdministrativeArea', 'name': 'Maharashtra' },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Interior Design & Wallpaper Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Space Planning & Layout',
            'description': 'Functional furniture layout, lighting placement, and bespoke space planning tailored to your lifestyle.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Home Renovation & Room Makeover',
            'description': 'Complete room transformations and modern interior renovations from concept to execution.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Finish, Texture & Styling',
            'description': 'Surface treatment, premium texture application, and luxury decorative styling.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Custom Wallpaper Installation',
            'description': 'High-precision wallpaper installation, seamless wall prep, and imported wallpaper collections.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Complimentary Color & Material Consultation',
            'description': 'Free professional guidance on color palettes, materials, and textures for home spaces.',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://builddear.com/#website',
    'url': 'https://builddear.com/',
    'name': 'RK Interior & NEST WALLPAPERS',
    'description': 'Leading Interior Designers & Wallpaper Specialists in Nagpur',
    'publisher': {
      '@id': 'https://builddear.com/#business',
    },
    'inLanguage': 'en-IN',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What interior design and decor services does RK Interior offer in Nagpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'RK Interior provides end-to-end interior design solutions in Nagpur including 3D space planning, full home and room makeovers, finish and styling, custom wallpaper supply & installation by NEST WALLPAPERS, and free color consultations.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do I get a free interior design quote or estimate for my home?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can request a 100% free, obligation-free estimate by filling out our online booking form on the website or calling us directly. Our team provides an accurate estimate within 24 hours.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How long does professional wallpaper installation take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A standard accent wall installation typically takes 2 to 4 hours, while a full room takes 1 to 2 days including thorough surface prep, smoothing, and seamless alignment.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Where is RK Interior & NEST WALLPAPERS located in Nagpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our studio is conveniently located in Sadar, Nagpur, Maharashtra. We serve clients across Nagpur and surrounding regions.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Do you provide on-site consultations and measurements?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, our interior designers conduct on-site consultations, space measurements, and material sample showcases directly at your home or commercial premises.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://builddear.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://builddear.com/#services',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Project Gallery',
        'item': 'https://builddear.com/#gallery',
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Free Estimate',
        'item': 'https://builddear.com/#contact',
      },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=Montserrat:wght@800;900&family=Poppins:wght@600;700;800;900&family=Syne:wght@800;900&display=swap"
          rel="stylesheet"
        />
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-sky-brand font-sans text-maroon-brand antialiased selection:bg-pink-brand selection:text-maroon-brand">
        {children}
      </body>
    </html>
  );
}
