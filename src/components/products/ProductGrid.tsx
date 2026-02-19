import { useState } from 'react';
import { products, categories } from '../../data/products';
import ProductCard from './ProductCard';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const ProductGrid = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredProducts = activeCategory === 'Todos'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Nossos Produtos
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore nossa linha completa de produtos para empresas, escolas e hospitais.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeCategory === category
                                    ? "bg-slate-900 text-white shadow-md"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="h-full"
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                        Nenhum produto encontrado nesta categoria.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
