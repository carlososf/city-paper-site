import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'INICIO', path: '/' },
        { name: 'PRODUTOS', path: '/produtos' },
        { name: 'QUEM SOMOS', path: '/sobre' },
        { name: 'CONTATO', path: '/contato' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-secondary text-white py-2 px-4 text-xs md:text-sm hidden md:block">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="tel:1142063080" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Phone className="h-4 w-4" />
                            (11) 4206-3080
                        </a>
                        <a href="mailto:contato@citypaper.com.br" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Mail className="h-4 w-4" />
                            contato@citypaper.com.br
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://instagram.com/CityPaperIndustria" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href="https://facebook.com/CityPaperIndustria" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                            <Facebook className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            <header
                className={cn(
                    'sticky top-0 z-50 w-full transition-all duration-300',
                    isScrolled ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-white py-4 shadow-sm'
                )}
            >
                <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                    {/* Logo */}
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <img
                            src="/logo.png"
                            alt="City Paper"
                            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        cn(
                                            'text-sm font-bold transition-colors hover:text-primary',
                                            isActive ? 'text-primary' : 'text-slate-600'
                                        )
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        <Button size="sm" className="gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold">
                            <Download className="h-4 w-4" />
                            CATÁLOGO 2023
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-white border-t"
                        >
                            <div className="container mx-auto flex flex-col p-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            cn(
                                                'text-sm font-bold py-3 border-b border-slate-100 transition-colors',
                                                isActive ? 'text-primary' : 'text-slate-600'
                                            )
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                                <div className="mt-4 flex flex-col gap-3">
                                    <Button className="w-full gap-2 bg-secondary hover:bg-secondary/90">
                                        <Download className="h-4 w-4" />
                                        CATÁLOGO 2023
                                    </Button>
                                    <div className="flex justify-center gap-6 py-2 text-slate-500">
                                        <a href="https://instagram.com/CityPaperIndustria" target="_blank" rel="noreferrer">
                                            <Instagram className="h-5 w-5 hover:text-primary" />
                                        </a>
                                        <a href="https://facebook.com/CityPaperIndustria" target="_blank" rel="noreferrer">
                                            <Facebook className="h-5 w-5 hover:text-primary" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
