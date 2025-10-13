"use client";

import Image from "next/image";

export function Recognition() {
    return (
        <section className="pb-12 sm:pb-16 md:pb-20 bg-[#0D0D0D] text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-kirsty text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                        RECONHECIMENTO E TRAJETÓRIA INTERNACIONAL
                    </h2>
                    <p className="font-sora text-[#999999] text-lg max-w-2xl mx-auto">
                        Mais de 90 premiações e participação em mais de 120 eventos de tatuagem ao redor do mundo
                    </p>
                </div>

                <div className="max-w-[1140px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Imagem */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/recognition.jpg"
                                    alt="Olavo Tattoo - Reconhecimento Internacional"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                
                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>

                        {/* Conteúdo */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="space-y-4">
                                <h3 className="font-kirsty text-2xl font-bold text-white">
                                    UMA TRAJETÓRIA DE EXCELÊNCIA
                                </h3>
                                
                                <div className="space-y-4 font-sora text-[#cccccc]">
                                    <p>
                                        Ao longo dos anos, participei de convenções e colaborações, levando a arte do Neo Tradicional a novos contextos. Cada experiência moldou minha visão e refinou minha técnica.
                                    </p>
                                    
                                    <p>
                                        Meu trabalho busca ultrapassar fronteiras, conectando culturas e estilos através da tatuagem — uma linguagem universal de expressão e identidade.
                                    </p>
                                </div>
                            </div>

                            {/* Estatísticas */}
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="text-center">
                                    <div className="font-kirsty text-3xl md:text-4xl font-bold text-white mb-2">
                                        90+
                                    </div>
                                    <div className="font-sora text-[#999999] text-sm">
                                        Premiações
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="font-kirsty text-3xl md:text-4xl font-bold text-white mb-2">
                                        120+
                                    </div>
                                    <div className="font-sora text-[#999999] text-sm">
                                        Eventos
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="font-kirsty text-3xl md:text-4xl font-bold text-white mb-2">
                                        6x
                                    </div>
                                    <div className="font-sora text-[#999999] text-sm">
                                        Tattoo Week
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="font-kirsty text-3xl md:text-4xl font-bold text-white mb-2">
                                        16
                                    </div>
                                    <div className="font-sora text-[#999999] text-sm">
                                        Anos de Carreira
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
