import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloatingButton from '../ui/WhatsAppFloatingButton';

interface LayoutWrapperProps {
    children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <div className="flex min-h-screen flex-col font-sans relative">
            <Header />
            <main className="flex-1 bg-slate-50">
                {children}
            </main>
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
};

export default LayoutWrapper;
