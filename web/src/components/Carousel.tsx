'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

type Slide = { src: string; alt: string; };

const slides: Slide[] = [
  { src: '/carousel-images/carousel-1.webp', alt: 'Aktion 1' },
  { src: '/carousel-images/carousel-2.webp', alt: 'Aktion 2' },
  { src: '/carousel-images/carousel-3.webp', alt: 'Aktion 3' },
  { src: '/carousel-images/carousel-4.webp', alt: 'Aktion 4' },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div 
              className="relative min-w-0 flex-[0_0_100%] h-[60vh] bg-accentSand" 
              key={i}>
              <Image
                src={s.src}
                alt={s.alt}
                width={1920} 
                height={1080}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
        <button
          aria-label="Previous slide"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="bg-white/70 hover:bg-white text-gray-900 rounded p-2 shadow"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="bg-white/70 hover:bg-white text-gray-900 rounded p-2 shadow"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-2 w-2 rounded-full ${selected === i ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
