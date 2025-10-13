"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Studio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Funções de navegação
  const goToPrevious = () => {
    if (selectedImage) {
      const currentIndex = studioImages.findIndex(img => img.id === selectedImage);
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : studioImages.length - 1;
      setSelectedImage(studioImages[previousIndex].id);
    }
  };

  const goToNext = () => {
    if (selectedImage) {
      const currentIndex = studioImages.findIndex(img => img.id === selectedImage);
      const nextIndex = currentIndex < studioImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(studioImages[nextIndex].id);
    }
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) {
        if (event.key === 'ArrowLeft') {
          goToPrevious();
        } else if (event.key === 'ArrowRight') {
          goToNext();
        } else if (event.key === 'Escape') {
          setSelectedImage(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const studioImages = [
    { id: 1, title: "", description: "" },
    { id: 2, title: "", description: "" },
    { id: 3, title: "", description: "" },
    { id: 4, title: "", description: "" },
    { id: 6, title: "", description: "" },
    { id: 9, title: "", description: "" },
    { id: 10, title: "", description: "" },
    { id: 11, title: "", description: "" },
    { id: 12, title: "", description: "" },
    { id: 13, title: "", description: "" },
    { id: 14, title: "", description: "" },
    { id: 16, title: "", description: "" }
  ];

  return (
    <section className="pb-12 sm:pb-16 md:pb-20 pt-0 sm:pt-16 md:pt-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-kirsty text-3xl md:text-4xl font-bold mb-4 tracking-wide">
            NOSSO ESTÚDIO
          </h2>
          <p className="font-sora text-[#999999] text-lg max-w-2xl mx-auto">
            Um espaço único onde a arte ganha vida. Conheça o ambiente que inspira
            cada tatuagem e onde sua história será transformada em arte permanente.
          </p>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {studioImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500`}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/studio${image.id}.jpg`}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay com gradiente */}
                <div className="absolute inset-0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Texto do Overlay - escondido por padrão */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-kirsty text-white text-lg font-bold mb-1">
                    {image.title}
                  </h3>
                  <p className="font-sora text-[#cccccc] text-sm">
                    {image.description}
                  </p>
                </div>

                {/* Ícone de Zoom */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagem ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Botão de fechar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#999999] transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Botão anterior */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Botão próximo */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={`/images/studio${selectedImage}.jpg`}
                  alt={studioImages.find(img => img.id === selectedImage)?.title || "Studio"}
                  fill
                  className="object-cover"
                  quality={95}
                  priority
                />
              </div>

              {/* Contador de imagens */}
              <div className="mt-4 text-center">
                <p className="font-sora text-[#cccccc] text-sm">
                  {studioImages.findIndex(img => img.id === selectedImage) + 1} de {studioImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-4">
          <p className="font-sora text-[#999999] mb-4">
            Gostou do nosso espaço? Venha nos conhecer pessoalmente!
          </p>
          <a
            href="https://wa.me/5517991949525?text=Olá, vim pelo seu site e gostaria de agendar uma tattoo..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
}