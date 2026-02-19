import { Award, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">CITY PAPER INDÚSTRIA & COMÉRCIO</h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
                    "Descubra nossas especialidades em papéis institucional: Toalhas Interfolhadas, Papéis Higiênicos, Toalhas em Bobinas e Lençóis Hospitalares Descartáveis - Conheça agora!"
                </p>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
                <div className="space-y-16">
                    {/* Objectives */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Quem Somos</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Fundada em 6 de julho de 2018, a <strong>CITY PAPER</strong> tem como objetivo principal a conversão de papéis para uso institucional, sempre levando em consideração a responsabilidade com o meio ambiente.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Nosso posicionamento é ser reconhecido como referência nacional e estabelecer parcerias duradouras com novos clientes, oferecendo qualidade e praticidade.
                            </p>
                        </div>
                        <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center">
                            {/* Placeholder for About Image */}
                            <span className="text-slate-400 font-medium">Imagem Institucional / Fábrica</span>
                        </div>
                    </div>

                    {/* Mission, Vision, Values */}
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-slate-900">Missão</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Desenvolver e agregar produtos de alta qualidade, buscando a melhoria contínua, com responsabilidade e compromisso com nossos clientes e o meio ambiente.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-slate-900">Visão</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Ser amplamente reconhecida em todo o território nacional como líder no setor, destacando-nos pela excelência e satisfação plena dos clientes.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-slate-900">Valores</h3>
                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 text-left inline-block">
                                <li>• Qualidade</li>
                                <li>• Objetividade</li>
                                <li>• Satisfação Plena dos Clientes</li>
                                <li>• Responsabilidade Ambiental</li>
                                <li>• Inovação</li>
                                <li>• Trabalho em Equipe</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Quality Section */}
                    <div className="bg-gradient-to-r from-secondary to-blue-700 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-6">Nossos Diferenciais</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="font-bold text-xl mb-2">Entrega Rápida</h3>
                                <p className="text-blue-100 text-sm">3 a 7 dias úteis</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Maquinário</h3>
                                <p className="text-blue-100 text-sm">Próprio e Moderno</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Qualidade</h3>
                                <p className="text-blue-100 text-sm">Celulose e Extra Luxo</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Variedade</h3>
                                <p className="text-blue-100 text-sm">Mais de 20 SKUs</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
