import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <FeaturedProducts />

            {/* Call to Action Section */}
            <section className="bg-primary py-16 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Sua empresa merece o melhor.</h2>
                    <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
                        Solicite uma consultoria gratuita e descubra como podemos reduzir seus custos com higiene e limpeza profissional.
                    </p>
                    <a href="/contato" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-slate-100 hover:scale-105 transition-all shadow-lg text-lg">
                        SOLICITAR VISITA TÉCNICA
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
