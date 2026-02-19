import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutWrapper from './components/layout/LayoutWrapper';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-50">
            <Loader2 className="animate-spin h-12 w-12 text-primary mb-4" />
            <p className="text-slate-500 font-medium">Carregando City Paper...</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
