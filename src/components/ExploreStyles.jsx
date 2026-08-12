import React from 'react';

export default function ExploreStyles() {
  const styles = [
    {
      title: "Geometric & Modern",
      image: "/assets/style_geometric.jpg"
    },
    {
      title: "Nature-Inspired",
      image: "/assets/style_nature.jpg"
    },
    {
      title: "Textured & Grasscloth",
      image: "/assets/style_grasscloth.jpg"
    }
  ];

  return (
    <section id="styles" className="bg-pink-brand py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center font-display font-extrabold text-4xl sm:text-6xl text-maroon-brand tracking-tight mb-16">
          Explore styles
        </h2>

        {/* 3 Style Cards Grid matching Page 3 PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {styles.map((style, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 sm:p-5 shadow-card hover-lift border border-white/60 flex flex-col justify-between group cursor-pointer"
            >
              {/* Wallpaper Swatch Image */}
              <div className="rounded-2xl overflow-hidden mb-6 aspect-square bg-gray-100 relative">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Swatch Title Label */}
              <h3 className="text-center font-display font-bold text-xl sm:text-2xl text-maroon-brand pb-3">
                {style.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
