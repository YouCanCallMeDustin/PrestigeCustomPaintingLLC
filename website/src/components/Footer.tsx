import { Phone, Mail, MapPin, Facebook, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../lib/constants';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                            <img
                                src="/logo.png"
                                alt="Prestige Custom Painting LLC Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-poppins font-bold text-base tracking-tight">
                                PRESTIGE CUSTOM PAINTING <span className="text-brand-green">LLC</span>
                            </span>
                        </div>
                        <p className="text-gray-500 leading-relaxed italic">
                            "We strive to make our clients happy."
                        </p>
                    </div>

                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="font-bold text-lg mb-4">Contact Info</h4>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                            <Phone size={18} className="text-brand-green" /> {SITE_INFO.phoneNumber}
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                            <Mail size={18} className="text-brand-green" /> {SITE_INFO.email}
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                            <MapPin size={18} className="text-brand-green" /> {SITE_INFO.location}
                        </div>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                            <a 
                                href={SITE_INFO.facebookUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-[#1877F2] hover:border-[#1877F2] transition-all shadow-sm group"
                            >
                                <Facebook size={18} className="group-hover:fill-[#1877F2] transition-colors" /> Facebook
                            </a>
                            <a 
                                href={SITE_INFO.yelpUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-[#FF1A1A] hover:border-[#FF1A1A] transition-all shadow-sm group"
                            >
                                <Star size={18} className="group-hover:fill-[#FF1A1A] transition-colors" /> Yelp
                            </a>
                            <a 
                                href={SITE_INFO.bizapediaUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-brand-green hover:border-brand-green transition-all shadow-sm group"
                            >
                                <CheckCircle size={18} className="group-hover:fill-brand-green transition-colors" /> Registered Business
                            </a>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-lg mb-4">Our Service Area</h4>
                        <ul className="text-gray-600 text-sm space-y-2">
                            <li><Link to="/service-area" className="hover:text-brand-green transition-colors font-bold text-brand-black">View All Areas</Link></li>
                            <li><Link to="/painting-spokane-valley" className="hover:text-brand-green transition-colors">Spokane Valley, WA</Link></li>
                            <li><Link to="/painting-liberty-lake" className="hover:text-brand-green transition-colors">Liberty Lake, WA</Link></li>
                            <li><Link to="/painting-airway-heights" className="hover:text-brand-green transition-colors">Airway Heights, WA</Link></li>
                            <li><Link to="/painting-cheney" className="hover:text-brand-green transition-colors">Cheney, WA</Link></li>
                            <li><Link to="/painting-deer-park" className="hover:text-brand-green transition-colors">Deer Park, WA</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
                    <p>© 2026 Prestige Custom Painting LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
