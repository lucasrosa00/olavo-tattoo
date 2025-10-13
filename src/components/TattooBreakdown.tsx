export function TattooBreakdown() {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-[1140px] grid md:grid-cols-2 gap-8 lg:gap-12 items-center mx-auto">
          {/* Vídeo no lugar da imagem */}
          <div className="rounded-lg overflow-hidden w-full md:w-[400px] max-h-[600px] mx-auto">
            <video
              src="/videos/tattoo-process.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover aspect-[9/16] opacity-90"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-kirsty text-3xl md:text-4xl text-white font-semibold mb-8 max-w-[500px] mx-auto md:mx-0">
              &quot;A pele é a tela onde a alma escolhe se revelar&quot;
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 font-sora">
              Cada traço carrega uma história, um sentimento, um momento único. Tatuar é transformar o invisível em arte viva, marcada para sempre.
            </p>
            <p className="text-gray-400 leading-relaxed font-sora">
              Mais do que técnica, é conexão — entre artista e cliente, entre o que se sente e o que se expressa. Cada agulha conta um capítulo da jornada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
