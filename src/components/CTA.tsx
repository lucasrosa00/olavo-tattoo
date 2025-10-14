"use client";

import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function CTA() {
    return (
        <section className="pb-12 sm:pb-16 md:pb-20 bg-[#ffffff] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="max-w-lg mx-auto text-center bg-[#161616] rounded-xl py-12 sm:py-16 md:py-20 px-4"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="font-kirsty text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        CHEGOU ATÉ AQUI?
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg font-sora"
                    >
                        Entre em contato e agende a sua Tattoo comigo!
                    </motion.p>

                    <motion.a
                        variants={fadeInUp}
                        href="https://wa.me/5517991949525?text=Olá, vim pelo seu site e gostaria de agendar uma tattoo..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sora inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Agendar Minha Tattoo <FaWhatsapp size={20} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
