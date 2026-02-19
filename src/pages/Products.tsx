import ProductGrid from '../components/products/ProductGrid';

const Products = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="h-16 w-full bg-primary flex items-center justify-center">
                <h1 className="text-3xl font-bold text-white">Catálogo de Produtos</h1>
            </div>
            <ProductGrid />
        </div>
    );
};

export default Products;
