import { SITE_INFO } from '../lib/constants';
import { Award, CheckCircle, Shield } from 'lucide-react';

/**
 * AuthorBio Component
 * Displays the owner/author profile to establish E-E-A-T signals.
 */
const AuthorBio = () => {
    const { ownerName } = SITE_INFO;
    
    return (
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <img 
                        src="/robert.jpg" 
                        alt={`${ownerName}, Owner and Professional Painter`} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 justify-center md:justify-start">
                    <h3 className="text-xl font-bold font-poppins text-brand-black">Written by {ownerName}</h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold rounded-full w-fit mx-auto md:mx-0">
                        <Award size={14} /> EXPERT PROFESSIONAL PAINTER
                    </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                    With over a decade of hands-on experience in the Spokane painting industry, {ownerName} founded Prestige Custom Painting LLC to bring a higher standard of care and premium craftsmanship to the Inland Northwest. Every pricing guide and tutorial we publish is based on real-world projects, current local material costs, and years of professional expertise.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto md:mx-0">
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-black/80">
                        <Shield size={16} className="text-brand-green" /> Licensed, Bonded & Insured
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-black/80">
                        <CheckCircle size={16} className="text-brand-green" /> 100% Satisfaction Guarantee
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
