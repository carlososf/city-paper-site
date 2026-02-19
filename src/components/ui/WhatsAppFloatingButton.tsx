import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloatingButton = () => {
    return (
        <motion.a
            href="https://wa.me/5511989573112?text=Olá, vim pelo site e gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg border-2 border-white flex items-center justify-center transition-colors duration-300"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        </motion.a>
    );
};

export default WhatsAppFloatingButton;
