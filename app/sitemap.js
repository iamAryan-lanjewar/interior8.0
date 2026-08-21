export default function sitemap() {
  const baseUrl = 'https://builddear.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${baseUrl}/assets/hero_bg.jpg`,
        `${baseUrl}/assets/consultation_nursery.jpg`,
        `${baseUrl}/assets/service_installation.jpg`,
        `${baseUrl}/assets/service_removal.jpg`,
        `${baseUrl}/assets/service_prep.jpg`,
        `${baseUrl}/assets/gallery_1.jpg`,
        `${baseUrl}/assets/gallery_2.jpg`,
        `${baseUrl}/assets/gallery_3.jpg`,
      ],
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/assets/project_8_0/Modern%20Organic%20Living%20Room.jpg`,
        `${baseUrl}/assets/project_8_0/aranprime-KbytCpI1i5I-unsplash.jpg`,
        `${baseUrl}/assets/project_8_0/jean-philippe-delberghe-90eBoEp2tS0-unsplash.jpg`,
        `${baseUrl}/assets/project_8_0/julia-GAwEGMN_EMs-unsplash.jpg`,
        `${baseUrl}/assets/project_8_0/karolina-grabowska-ulh3-dLSXjI-unsplash.jpg`,
        `${baseUrl}/assets/project_8_0/khloe-arledge-8Rz_RIyp5FM-unsplash.jpg`,
        `${baseUrl}/assets/project_8_0/lakeisha-bennett-WzP3YnV9T-U-unsplash.jpg`,
        `${baseUrl}/assets/project_8_0/the-prototype-7S-Ox-heSqs-unsplash.jpg`,
      ],
    },
  ];
}
