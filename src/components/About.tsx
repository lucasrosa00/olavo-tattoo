"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export function About() {
    // Variants para o texto e imagem
    const fadeInLeft: Variants = {
        hidden: { opacity: 0, x: -80 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const fadeInRight: Variants = {
        hidden: { opacity: 0, x: 80 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section className="pb-12 sm:pb-16 md:pb-20 bg-[#0D0D0D] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-[1140px] flex flex-col md:flex-row items-center justify-between mx-auto">

                    {/* Conteúdo animado vindo da esquerda */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-2xl order-2 md:order-1 pt-12 md:py-0"
                    >
                        <h2 className="font-kirsty text-3xl md:text-4xl font-bold mb-6 tracking-wide">
                            SOBRE MIM
                        </h2>

                        <div className="font-sora text-[#999999] text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Olavo Tattoo é natural de Bebedouro – São Paulo, tem 32 anos e atua na área da tatuagem há 16 anos, é um tatuador amplamente reconhecido por sua trajetória de destaque no cenário nacional e internacional. Com participação em mais de 120 eventos de tatuagem, construiu uma carreira marcada pela dedicação, excelência artística e constante evolução.
                            </p>

                            <p>
                                Ao longo de sua jornada, conquistou mais de 90 premiações em competições nacionais, incluindo oito vitórias consecutivas na renomada Tattoo Week (A maior convenção de tatuagem do mundo), onde também atua como jurado. Sua experiência como competidor e avaliador consolidou seu nome como uma das grandes referências do setor.
                            </p>

                            <p>
                                Especialista em Neo Tradicional, Olavo é considerado uma referência no estilo, unindo técnica apurada, criatividade e identidade própria em cada trabalho. Seu reconhecimento vai além das premiações: está presente no impacto de sua arte e na inspiração que transmite a outros profissionais da área.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/5517991949525?text=Olá Olavo, vim pelo seu site e gostaria de conversar sobre uma tattoo..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-white px-7 py-4 rounded-lg hover:bg-white hover:text-black transition-all font-semibold w-fit mt-8"
                        >
                            <FaWhatsapp className="text-xl" />
                            Conversar com Olavo
                        </a>
                    </motion.div>

                    {/* Imagem animada vindo da direita */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative z-0 flex justify-center md:justify-end items-center w-full md:w-1/2 h-[400px] md:h-[600px] order-1 md:order-2"
                    >
                        <div className="relative w-full max-w-[500px] h-full">
                            <Image
                                src="/images/sobre-mim.jpg"
                                alt="Olavo Tattoo - Tatuador"
                                fill
                                className="object-cover object-center rounded-lg"
                                priority
                            />

                            {/* Sombras laterais */}
                            <div className="absolute left-0 top-0 w-[80px] md:w-[160px] h-full bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none rounded-l-lg" />
                            <div className="absolute right-0 top-0 w-[80px] md:w-[160px] h-full bg-gradient-to-l from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none rounded-r-lg" />

                            {/* Sombras superior e inferior */}
                            <div className="absolute top-0 left-0 w-full h-[80px] md:h-[200px] bg-gradient-to-b from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent pointer-events-none rounded-t-lg" />
                            <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[200px] bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent pointer-events-none rounded-b-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
