"use client";

import { motion, Variants } from "framer-motion";

export function TattooBreakdown() {
  // Variants tipados para o vídeo e o texto
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
        <div className="max-w-[1140px] grid md:grid-cols-2 gap-8 lg:gap-12 items-center mx-auto">

          {/* Vídeo animado vindo da esquerda */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-lg overflow-hidden w-full md:w-[400px] max-h-[600px] mx-auto"
          >
            <video
              src="/videos/tattoo-process.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover aspect-[9/16] opacity-90"
            />
          </motion.div>

          {/* Texto animado vindo da direita */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left"
          >
            <h2 className="font-kirsty text-3xl md:text-4xl text-white font-semibold mb-8 max-w-[500px] mx-auto md:mx-0">
              &quot;A pele é a tela onde a alma escolhe se revelar&quot;
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 font-sora">
              Cada traço carrega uma história, um sentimento, um momento único. Tatuar é transformar o invisível em arte viva, marcada para sempre.
            </p>
            <p className="text-gray-400 leading-relaxed font-sora">
              Mais do que técnica, é conexão — entre artista e cliente, entre o que se sente e o que se expressa. Cada agulha conta um capítulo da jornada.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
