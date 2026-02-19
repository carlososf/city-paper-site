import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const featured = products.filter((p) => p.featured).slice(0, 4);

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Produtos em Destaque
                        </h2>
                        <p className="text-slate-600">
                            Conheça nossas soluções mais procuradas por empresas e instituições.
                        </p>
                    </div>
                    <Link to="/produtos">
                        <Button variant="outline" className="gap-2">
                            Ver Catálogo Completo <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
