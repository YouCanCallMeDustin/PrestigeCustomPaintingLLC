import { Phone, Facebook, Star, Home, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_INFO } from '../lib/constants';

const Navbar = () => {
    const { phoneNumber, facebookUrl, yelpUrl, nextdoorUrl, liveLocalInwUrl } = SITE_INFO;
    const location = useLocation();

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 outline-none">
                    <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                        <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}<span className="text-brand-green">PAINTING</span>{" "}<span className="text-brand-black">LLC.</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link 
                        to="/about" 
                        className={`text-sm font-bold transition-colors ${location.pathname === '/about' ? 'border-b-2 border-brand-green text-brand-black' : 'hover:text-brand-green text-brand-black'}`}
                    >
                        ABOUT
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="text-sm font-bold text-brand-black hover:text-brand-green transition-colors flex items-center gap-1 py-8">
                            SERVICES
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="grid gap-2">
                                <Link to="/interior-painting-spokane" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Interior Painting</Link>
                                <Link to="/exterior-painting-spokane" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Exterior Painting</Link>
                                <Link to="/cabinet-painting-spokane" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Cabinet Painting</Link>
                                <Link to="/color-consultation" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors border-t border-gray-50 mt-1">Color Consultation</Link>
                                <Link to="/drywall-contractor-spokane" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Drywall Contractor</Link>
                                <Link to="/wallpaper-installer-spokane" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Wallpaper Installer</Link>
                            </div>
                        </div>
                    </div>

                    <Link 
                         to="/service-area" 
                         className={`text-sm font-bold transition-colors ${location.pathname === '/service-area' ? 'border-b-2 border-brand-green text-brand-black' : 'hover:text-brand-green text-brand-black'}`}
                    >
                        SERVICE AREA
                    </Link>

                    {/* Resources Dropdown */}
                    <div className="relative group text-brand-black">
                        <button className="text-sm font-bold hover:text-brand-green transition-colors flex items-center gap-1 py-8">
                            RESOURCES
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full right-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="grid gap-2">
                                <Link to="/faq" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">FAQ</Link>
                                <Link to="/testimonials" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Testimonials</Link>
                                <Link to="/blog" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Blog</Link>
                                <Link to="/our-work" className="px-4 py-2 hover:bg-brand-gray/50 rounded-xl text-sm font-bold transition-colors">Gallery</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <a 
                            href={facebookUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-[#1877F2] transition-colors"
                            title="Follow us on Facebook"
                        >
                            <Facebook size={20} fill="currentColor" />
                        </a>
                        <a 
                            href={yelpUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-[#FF1A1A] transition-colors"
                            title="Find us on Yelp"
                        >
                            <Star size={20} fill="currentColor" />
                        </a>
                        <a 
                            href={nextdoorUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-[#00B500] transition-colors"
                            title="Follow us on Nextdoor"
                        >
                            <Home size={20} fill="currentColor" />
                        </a>
                        <a 
                            href={liveLocalInwUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-brand-green transition-colors"
                            title="See us on Live Local INW"
                        >
                            <Globe size={20} fill="currentColor" />
                        </a>
                        <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 bg-brand-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-lg shadow-black/20">
                            <Phone size={16} className="text-brand-green" /> {phoneNumber}
                        </a>
                    </div>
                </div>
                
                <div className="md:hidden flex items-center gap-3">
                    <a 
                        href={facebookUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#1877F2] transition-colors"
                    >
                        <Facebook size={20} fill="currentColor" />
                    </a>
                    <a 
                        href={yelpUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#FF1A1A] transition-colors"
                    >
                        <Star size={20} fill="currentColor" />
                    </a>
                    <a 
                        href={nextdoorUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#00B500] transition-colors"
                    >
                        <Home size={20} fill="currentColor" />
                    </a>
                    <a 
                        href={liveLocalInwUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-brand-green transition-colors"
                    >
                        <Globe size={20} fill="currentColor" />
                    </a>
                    <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white p-3 rounded-full shadow-lg shadow-green-500/30">
                        <Phone size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
