export function Footer() {
    return (
        <footer className="relative bg-[#0D0D0D] border-t border-gray-800 text-gray-400 text-sm">
            <div className="max-w-[1140px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Texto principal */}
                <p className="font-sora text-center md:text-left">
                    © {new Date().getFullYear()} <span className="text-white font-medium">Olavo Tattoo</span>. Todos os direitos reservados.
                </p>

                {/* Desenvolvido por */}
                <a
                    href="https://www.linksvibe.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-all"
                >
                    <span>Desenvolvido por</span>
                    <span className="font-sora font-semibold text-white transition-colors">
                        Links Vibe
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mt-[2px]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </a>
            </div>

            {/* Linha de brilho sutil no topo */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/40 to-transparent" />
        </footer>
    );
}
