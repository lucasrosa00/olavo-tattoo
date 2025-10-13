"use client";
import { FaWhatsapp } from "react-icons/fa";

export function CTA() {
    return (
        <section className="mb-12 sm:mb-16 md:mb-20 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-[#161616] max-w-lg text-center rounded-xl mx-4 lg:mx-auto">
            <div className="max-w-xl mx-auto">
                <h2 className="font-kirsty text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    CHEGOU ATÉ AQUI?
                </h2>
                <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg font-sora ">
                    Entre em contato e agende a sua Tattoo comigo!
                </p>
                <a
                    href="https://wa.me/5517991949525?text=Olá, vim pelo seu site e gostaria de agendar uma tattoo..." // substitua pelo seu número
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-md md:text-lg font-sora inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
                >
                    Agendar Minha Tattoo <FaWhatsapp size={20} />
                </a>
            </div>
        </section>
    );
}
