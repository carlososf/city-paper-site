import { Facebook, Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white p-2 rounded-lg inline-block">
                            <img
                                src="/logo.png"
                                alt="City Paper"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        CITY PAPER INDÚSTRIA & COMÉRCIO DE PAPEL LTDA.<br />
                        Descubra nossas especialidades em papéis institucional: Toalhas Interfolhadas, Papéis Higiênicos, Toalhas em Bobinas e Lençóis Hospitalares Descartáveis.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://facebook.com/CityPaperIndustria/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://instagram.com/CityPaperIndustria" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://wa.me/5511989573112" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                            <MessageCircle className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Navegação</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-primary transition-colors">INICIO</a></li>
                        <li><a href="/produtos" className="hover:text-primary transition-colors">PRODUTOS</a></li>
                        <li><a href="/sobre" className="hover:text-primary transition-colors">QUEM SOMOS</a></li>
                        <li><a href="/contato" className="hover:text-primary transition-colors">CONTATO</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-1">
                    <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Fale Conosco</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Rua João XXIII, 263 - Vila São Judas Tadeu, Vargem Grande Paulista - SP, 06730-000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>(11) 4206-3080</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>(11) 98957-3112 (WhatsApp)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>contato@citypaper.com.br</span>
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <div>
                    <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Atendimento</h3>
                    <p className="text-sm text-slate-400 mb-4">
                        Entre em contato para solicitar um orçamento ou tirar dúvidas sobre nossos produtos.
                    </p>
                    <a
                        href="/contato"
                        className="inline-block w-full bg-secondary text-white py-3 px-4 rounded hover:bg-secondary/90 transition-colors font-bold text-center"
                    >
                        SOLICITAR ORÇAMENTO
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} CITY PAPER INDÚSTRIA & COMÉRCIO DE PAPEL LTDA. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
