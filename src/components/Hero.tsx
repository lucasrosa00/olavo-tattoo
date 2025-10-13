import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export function Hero() {
    return (
        <section className="relative bg-[#0D0D0D] px-6 md:px-16 overflow-hidden">
            <div className="max-w-[1140px] flex flex-col md:flex-row items-center justify-between mx-auto min-h-screen md:h-screen text-white relative">

                {/* Imagem (em cima no mobile, à direita no desktop) */}
                <div className="relative z-0 flex justify-center md:justify-end items-center w-full md:w-1/2 h-[300px] md:h-full order-1 md:order-2">
                    <div className="relative w-full max-w-[600px] h-full">
                        <Image
                            src="/images/hero-placeholder.jpg"
                            alt="Olavo Tattoo"
                            fill
                            className="object-cover object-center"
                            priority
                        />

                        {/* Sombras laterais */}
                        <div className="absolute left-0 top-0 w-[80px] md:w-[160px] h-full bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 w-[80px] md:w-[160px] h-full bg-gradient-to-l from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none" />

                        {/* Sombras superior e inferior */}
                        <div className="absolute top-0 left-0 w-full h-[80px] md:h-[200px] bg-gradient-to-b from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[200px] bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Conteúdo (abaixo no mobile, à esquerda no desktop) */}
                <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-2xl order-2 md:order-1 py-12 md:py-0">
                    <h2 className="font-kirsty text-[#999999] text-2xl md:text-4xl font-extrabold leading-tight tracking-wide mb-4">
                        TÉCNICA REFINADA, ARTE AUTÊNTICA. CADA TATTOO É FEITA COM AMOR, DEDICAÇÃO E RESPEITO{" "}
                        <span className="text-white font-black">
                            POR CADA CLIENTE E PELA ARTE.
                        </span>
                    </h2>
                    <p className="text-[#999999] mb-8 font-sora">
                        Especialista em Neo Tradicional, cada tattoo é uma obra única, feita especialmente para você.
                    </p>

                    <a
                        href="https://wa.me/5517991949525?text=Olá, vim pelo seu site e gostaria de agendar uma tattoo..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white px-7 py-4 rounded-lg hover:bg-white hover:text-black transition-all font-semibold w-fit"
                    >
                        <FaWhatsapp className="text-xl font-sora" />
                        Agendar Minha Tattoo
                    </a>

                    <p className="text-[#999999] mt-2 text-xs font-sora">
                        Arrasta para baixo e veja mais informações
                    </p>
                </div>
            </div>
        </section>
    );
}
