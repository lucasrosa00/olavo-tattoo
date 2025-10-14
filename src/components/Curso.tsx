"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export function Curso() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-[1140px] flex flex-col md:flex-row items-center justify-between mx-auto">

                    {/* Imagem (à esquerda no desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative z-0 flex justify-center md:justify-start items-center w-full md:w-1/2 h-[400px] md:h-[600px] order-1 md:order-1"
                    >
                        <div className="relative w-full max-w-[500px] h-full">
                            <Image
                                src="/images/curso.jpg"
                                alt="Neotrad Definitivo - Curso de Tatuagem"
                                fill
                                className="object-cover object-center rounded-lg"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Conteúdo (à direita no desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-2xl order-2 md:order-2 md:py-0"
                    >
                        <h2 className="font-kirsty text-3xl md:text-4xl font-bold mb-6 tracking-wide mt-4 md:mt-0">
                            NEOTRAD DEFINITIVO
                        </h2>

                        <div className="font-sora text-[#666666] text-base md:text-lg leading-relaxed space-y-4 mb-6">
                            <p>
                                Descubra a arte e a técnica por trás do estilo Neotraditional com um dos maiores nomes da tatuagem no Brasil, Olavo Tattoo. Com mais de 90 prêmios em sua carreira e oito vezes vencedor do Tattoo Week, Olavo é um mestre na arte do Neotraditional e está pronto para compartilhar seu conhecimento com você.
                            </p>
                        </div>

                        <div className="font-sora text-[#555555] text-base leading-relaxed space-y-4 mb-8">
                            <h3 className="text-black font-semibold text-lg mb-3">O que você vai aprender:</h3>

                            <div className="space-y-3">
                                {[
                                    {
                                        num: "1",
                                        title: "Aulas Teóricas",
                                        desc: "Entenda as raízes e a evolução do estilo Neotraditional. Explore os elementos característicos, as influências históricas e culturais, e as técnicas que tornam este estilo único.",
                                    },
                                    {
                                        num: "2",
                                        title: "Desenho e Decalque",
                                        desc: "Aprenda a criar desenhos autênticos e detalhados, prontos para serem transferidos para a pele. Domine o uso de decalques para garantir precisão e qualidade em suas tatuagens.",
                                    },
                                    {
                                        num: "3",
                                        title: "Técnicas de Tatuagem",
                                        desc: "Desde a configuração da máquina até a escolha das agulhas e tintas, aprenda as técnicas essenciais para tatuar no estilo Neotraditional.",
                                    },
                                    {
                                        num: "4",
                                        title: "Aulas Práticas",
                                        desc: "Acompanhe Olavo em sessões práticas, tatuando do começo ao fim em uma pessoa. Veja de perto como ele aplica suas habilidades e conhecimentos, e tenha a oportunidade de praticar sob sua supervisão.",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-black font-bold text-lg">{item.num}</span>
                                        <div>
                                            <h4 className="text-black font-semibold mb-1">{item.title}</h4>
                                            <p className="text-sm text-[#666666]">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="font-sora text-[#666666] text-base md:text-lg leading-relaxed mb-8"
                        >
                            <p>
                                Inscreva-se no Neotrad Definitivo e leve sua arte de tatuagem para o próximo nível com Olavo Tattoo.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit"
                        >
                            <a
                                href="https://go.hotmart.com/I94085362W"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-4 rounded-lg transition-all font-semibold flex-1 sm:flex-none"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                Comprar Curso
                            </a>

                            <a
                                href="https://wa.me/5517991949525?text=Olá Olavo, vim pelo seu site e gostaria de saber mais sobre o curso Neotrad Definitivo..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-black px-7 py-4 rounded-lg hover:bg-black hover:text-white transition-all font-semibold flex-1 sm:flex-none"
                            >
                                <FaWhatsapp className="text-xl" />
                                Saber Mais
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
