import { Phone, Calendar } from 'lucide-react';
import { SITE_INFO } from '../lib/constants';

/**
 * StickyMobileCTA Component
 * Fixed bottom bar on mobile for higher conversion.
 */
const StickyMobileCTA = () => {
    const { phoneNumber, email } = SITE_INFO;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
            <a 
                href={`tel:${phoneNumber}`} 
                className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
                <Phone size={18} className="text-brand-green" /> CALL NOW
            </a>
            <a 
                href={`mailto:${email}`} 
                className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
                <Calendar size={18} /> FREE ESTIMATE
            </a>
        </div>
    );
};

export default StickyMobileCTA;
