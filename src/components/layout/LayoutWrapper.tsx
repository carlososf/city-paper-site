import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutWrapperProps {
    children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1 bg-slate-50">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default LayoutWrapper;
