export default function robots() {
  const baseUrl = 'https://builddear.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/assets/',
          '/*.jpg$',
          '/*.jpeg$',
          '/*.png$',
          '/*.webp$',
          '/*.svg$',
          '/*.css$',
          '/*.js$',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/', '/assets/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
