import { Award, Leaf, Package, Cog, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Header Cell - Spans 2 cols */}
                    <div className="col-span-1 md:col-span-2 row-span-1 bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col justify-center shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">Diferenciais<br /><span className="text-secondary">City Paper</span></h2>
                        <p className="text-slate-300 max-w-sm relative z-10 text-lg">
                            Compromisso com a excelência e satisfação dos nossos clientes através de produtos de alta qualidade e atendimento ágil.
                        </p>
                        <div className="absolute bottom-6 right-6 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <Award size={120} />
                        </div>
                    </div>

                    {/* Feature 1 - Logística Ágil */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300 group flex flex-col justify-between"
                    >
                        <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-7 w-7 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Entrega Rápida</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Prazo de 3 a 7 dias úteis após aprovação. Opção de entrega na sua empresa ou retirada em nossas instalações.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2 - Qualidade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-slate-50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300 group flex flex-col justify-between"
                    >
                        <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Cog className="h-7 w-7 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Tecnologia</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Maquinários e equipamentos de última geração, garantindo a excelência na conversão de papéis.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Variedade (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:col-span-2 bg-gradient-to-br from-secondary to-blue-600 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <Package className="h-8 w-8 text-white/80" />
                                <h3 className="text-2xl font-bold">Variedade de Produtos</h3>
                            </div>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Mais de 20 SKUs diferentes com múltiplas especificações e gramagens para atender exatamente a sua necessidade.
                            </p>
                            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-blue-50">
                                <li>• Papel Toalha Bobina e Interfolha</li>
                                <li>• Higiênico Rolão e Big Roll</li>
                                <li>• Lençol Hospitalar</li>
                                <li>• Linhas Celulose e Luxo</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 4 - Sustentabilidade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-slate-50 rounded-3xl p-8 hover:bg-green-50 transition-colors duration-300 group flex flex-col justify-between"
                    >
                        <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Leaf className="h-7 w-7 text-green-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Meio Ambiente</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Responsabilidade ambiental e compromisso com a sustentabilidade em todos os nossos processos.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 5 - Equipe */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-slate-50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300 group flex flex-col justify-between"
                    >
                        <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Award className="h-7 w-7 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Equipe Capacitada</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Treinamento e capacitação contínua aos nossos colaboradores para oferecer o melhor atendimento.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Features;
