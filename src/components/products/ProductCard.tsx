import { type Product } from '../../data/products';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '../../lib/utils';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <motion.div>
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                {/* Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                    <img
                        src={getAssetUrl(product.image)}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {product.featured && (
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            Premium
                        </span>
                    )}
                </div>

                {/* Content Area */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded-md">
                            {product.category}
                        </span>
                        {product.code && (
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-mono">
                                CÓD: {product.code}
                            </span>
                        )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {product.description}
                    </p>

                    <Button
                        className="w-full rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300 flex items-center justify-between group/btn shadow-none"
                        onClick={() => window.open(
                            `https://wa.me/5511989573112?text=Olá, gostaria de um orçamento para o produto: ${product.name}`,
                            '_blank'
                        )}>
                        <span className="font-medium">Solicitar Cotação</span>
                        <ArrowUpRight className="h-4 w-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
