"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Gallery() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];
  const containerRef = useRef<HTMLDivElement>(null);

  // duplicar imagens para criar efeito contínuo
  const loopedImages = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scroll = 0;

    const step = () => {
      scroll += 0.5; // ajuste da velocidade
      if (scroll >= container.scrollWidth / 2) {
        scroll = 0; // volta pro início quando metade duplicada passar
      }
      container.scrollLeft = scroll;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="pb-12 sm:pb-16 md:pb-20 bg-[#0D0D0D] overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-hidden whitespace-nowrap"
      >
        {loopedImages.map((n, idx) => (
          <div
            key={idx}
            className="inline-block flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] rounded-lg overflow-hidden relative"
          >
            <Image
              src={`/images/gal${n}.jpg`}
              alt={`Tattoo ${n}`}
              width={756}
              height={1008}
              className="object-cover w-full h-full rounded-lg"
              priority={idx < 8} // garante carregamento imediato das primeiras
            />
          </div>
        ))}
      </div>
    </section>
  );
}
