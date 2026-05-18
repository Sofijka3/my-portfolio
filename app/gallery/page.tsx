'use client'

export default function GalleryPage() {
  const mediaItems = [
    { type: 'image', src: '/placeholder1.jpg', title: '', alt: '' },
    { type: 'image', src: '/placeholder2.jpg', title: '', alt: '' },
    { type: 'image', src: '/placeholder3.jpg', title: '', alt: '' },
    { type: 'image', src: '/placeholder4.jpg', title: '', alt: '' },
  ];

  return (
    <main className="bg-black text-white px-6 min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-sm text-blue-500 font-mono tracking-[0.3em] uppercase mb-4">// Media</h1>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          Interactive Showroom
        </h2>
        <p className="mt-4 text-gray-400 font-mono text-sm max-w-2xl mx-auto">
          Zrzuty ekranu, materiały wideo oraz wizualizacje moich projektów.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {mediaItems.map((item, index) => (
          <div key={index} className="group relative border border-gray-800 rounded-xl overflow-hidden bg-gray-900 aspect-video hover:border-blue-500 transition-colors">
            
            {/* Wideo lub Obrazek */}
            {item.type === 'video' ? (
              <iframe 
                src={item.src} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                title={item.title}
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Zamiast tego diva wstawisz tag <img src={item.src} alt={item.alt} /> gdy będziesz miała pliki */}
                <span className="font-mono text-gray-600 text-xs tracking-widest">[ IMAGE PLACEHOLDER: {item.title} ]</span>
              </div>
            )}

            {/* Podpis na dole */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
                {item.title}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </main>
  );
}