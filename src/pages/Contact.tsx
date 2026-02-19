import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12">Fale Conosco</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Details & Map */}
                    <div className="space-y-8">
                        <Card className="bg-white p-8 border-none shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-slate-800">Canais de Atendimento</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-slate-900">Endereço</h3>
                                        <p className="text-slate-600">Rua João XXIII, 263 - Vila São Judas Tadeu, Vargem Grande Paulista - SP, 06730-000</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-slate-900">Telefone / WhatsApp</h3>
                                        <p className="text-slate-600">(11) 4206-3080</p>
                                        <p className="text-slate-600">(11) 98957-3112</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-slate-900">E-mail</h3>
                                        <p className="text-slate-600">contato@citypaper.com.br</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Map Placeholder */}
                        <div className="h-64 w-full bg-slate-200 rounded-lg overflow-hidden relative shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8249673473183!2d-47.0163353!3d-23.6306351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf071661262d0b%3A0xc33054174313f8d7!2sR.%20Jo%C3%A3o%20XXIII%2C%20263%20-%20Vila%20Sao%20Judas%20Tadeu%2C%20Vargem%20Grande%20Paulista%20-%20SP%2C%2006730-000!5e0!3m2!1spt-BR!2sbr!4v1714589254321!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização City Paper"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">Envie uma Mensagem</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700" htmlFor="name">Nome Completo</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Seu nome"
                                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700" htmlFor="email">E-mail Corporativo</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700" htmlFor="phone">Telefone</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="(11) 99999-9999"
                                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700" htmlFor="company">Empresa</label>
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Nome da sua empresa"
                                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700" htmlFor="message">Mensagem ou Solicitação</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Como podemos ajudar?"
                                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white resize-none"
                                ></textarea>
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg font-bold py-6">
                                Enviar Solicitação
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
