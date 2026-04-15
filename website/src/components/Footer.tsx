import { Phone, Mail, MapPin, Facebook, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../lib/constants';

export default function Footer() {
    const { phoneNumber, email, facebookUrl, yelpUrl } = SITE_INFO;
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: "Interior Painting", to: "/interior-painting-spokane" },
            { label: "Exterior Painting", to: "/exterior-painting-spokane" },
            { label: "Cabinet Painting", to: "/cabinet-painting-spokane" },
            { label: "Commercial Painting", to: "/commercial-painting-spokane" },
            { label: "Drywall Repair", to: "/drywall-contractor-spokane" },
        ],
        resources: [
            { label: "Painting Costs", to: "/cost-to-paint-a-house" },
            { label: "Painting Glossary", to: "/spokane-painting-glossary" },
            { label: "Our Work", to: "/our-work" },
            { label: "Testimonials", to: "/testimonials" },
            { label: "About Us", to: "/about" },
            { label: "FAQ", to: "/faq" },
        ],
        company: [
            { label: "Service Areas", to: "/service-area" },
            { label: "Color Consultation", to: "/color-consultation" },
            { label: "Blog", to: "/blog" },
            { label: "Contact Us", to: "/#contact" },
        ]
    };

    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-poppins font-bold">
                            PRESTIGE<span className="text-brand-green">.</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Spokane's premier house painters specializing in interior, exterior, and custom cabinet transformations with a commitment to quality and service.
                        </p>
                        <div className="flex gap-4">
                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-green transition-all group">
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href={yelpUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-green transition-all group">
                                <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-lg font-poppins font-bold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-brand-green rounded-full" />
                            Our Services
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.to} className="text-gray-400 hover:text-brand-green transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-lg font-poppins font-bold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-brand-green rounded-full" />
                            Popular Resources
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.to} className="text-gray-400 hover:text-brand-green transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-poppins font-bold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-brand-green rounded-full" />
                            Contact Us
                        </h4>
                        <div className="space-y-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-start gap-4 text-gray-400 hover:text-brand-green transition-colors group">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Call Specialists</span>
                                    {phoneNumber}
                                </div>
                            </a>
                            <a href={`mailto:${email}`} className="flex items-start gap-4 text-gray-400 hover:text-brand-green transition-colors group">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Email Us</span>
                                    {email}
                                </div>
                            </a>
                            <Link to="/service-area" className="flex items-start gap-4 text-gray-400 hover:text-brand-green transition-colors group">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Service Area</span>
                                    Spokane, WA & Surrounding Region
                                    <span className="block text-brand-green text-xs mt-1 font-bold italic">View All 60+ Areas</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Prestige Custom Painting LLC. All rights reserved. 
                        <span className="mx-2">|</span>
                        Licensed, Bonded & Insured
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link to="/privacy-policy" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
