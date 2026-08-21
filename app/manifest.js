export default function manifest() {
  return {
    name: 'RK Interior & NEST WALLPAPERS',
    short_name: 'RK Interior',
    description: 'Transform your space with Nagpur’s leading interior designers and wallpaper specialists.',
    start_url: '/',
    display: 'standalone',
    background_color: '#94CEFA',
    theme_color: '#94CEFA',
    icons: [
      {
        src: '/assets/hero_bg.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/hero_bg.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
