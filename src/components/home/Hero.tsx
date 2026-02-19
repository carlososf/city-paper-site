import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { getAssetUrl } from '../../lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Full Width Background Image with Blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src={getAssetUrl('/hero-main.png')}
                    alt="City Paper Background"
                    className="w-full h-full object-cover blur-[2px] scale-105" // scale-105 prevents blur edges
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
            </div>

            <motion.div
                style={{ y: yHero, opacity: opacityHero }}
                className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-block mb-4">
                        <span className="py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                            Higiene Profissional
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-sm">
                        Excelência em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Papéis Institucionais</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
                        Descubra nossas especialidades: <strong className="font-semibold text-white">Toalhas Interfolhadas, Papéis Higiênicos, Toalhas em Bobinas e Lençóis Hospitalares Descartáveis.</strong>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full"
                >
                    <Link to="/produtos" className="w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full gap-2 bg-primary hover:bg-primary/90 text-white font-bold border-none"
                        >
                            CONHEÇA AGORA <ArrowRight className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link to="/contato" className="w-full sm:w-auto">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 py-6 text-lg w-full gap-2 border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-bold"
                        >
                            FALE CONOSCO <MessageCircle className="h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
