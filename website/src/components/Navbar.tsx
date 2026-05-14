import { useState, useEffect } from 'react';
import { Phone, Facebook, Star, Home, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_INFO } from '../lib/constants';

const Navbar = () => {
    const { phoneNumber, facebookUrl, yelpUrl, nextdoorUrl, liveLocalInwUrl } = SITE_INFO;
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 outline-none">
                    <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight text-brand-black">
                        PRESTIGE CUSTOM <span className="text-brand-green">PAINTING</span> LLC.
                    </span>
                </Link>

                {/* Desktop Navigation */}
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
                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="grid gap-2 text-brand-black">
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
                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
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
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Follow us on Facebook">
                            <Facebook size={20} fill="currentColor" />
                        </a>
                        <a href={yelpUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF1A1A] transition-colors" title="Find us on Yelp">
                            <Star size={20} fill="currentColor" />
                        </a>
                        <a href={nextdoorUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00B500] transition-colors" title="Follow us on Nextdoor">
                            <Home size={20} fill="currentColor" />
                        </a>
                        <a href={liveLocalInwUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors" title="See us on Live Local INW">
                            <Globe size={20} fill="currentColor" />
                        </a>
                        <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 bg-brand-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-lg shadow-black/20">
                            <Phone size={16} className="text-brand-green" /> {phoneNumber}
                        </a>
                    </div>
                </div>
                
                {/* Mobile Icons & Hamburger */}
                <div className="md:hidden flex items-center gap-4">
                    <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white p-2.5 rounded-full shadow-lg shadow-green-500/30">
                        <Phone size={18} />
                    </a>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-brand-black hover:bg-brand-gray/50 rounded-xl transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top-4 duration-200 z-50 md:hidden overflow-y-auto max-h-[calc(100vh-80px)]">
                    <div className="flex flex-col p-6 gap-2">
                        <Link to="/about" className="px-4 py-3 rounded-xl font-bold text-brand-black hover:bg-brand-gray/50 transition-colors">ABOUT</Link>
                        
                        {/* Mobile Services Accordion */}
                        <div>
                            <button 
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-brand-black hover:bg-brand-gray/50 transition-colors text-left"
                            >
                                SERVICES
                                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isServicesOpen && (
                                <div className="ml-4 mt-1 grid gap-1 border-l-2 border-brand-green/20">
                                    <Link to="/interior-painting-spokane" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Interior Painting</Link>
                                    <Link to="/exterior-painting-spokane" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Exterior Painting</Link>
                                    <Link to="/cabinet-painting-spokane" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Cabinet Painting</Link>
                                    <Link to="/color-consultation" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Color Consultation</Link>
                                    <Link to="/drywall-contractor-spokane" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Drywall Contractor</Link>
                                    <Link to="/wallpaper-installer-spokane" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Wallpaper Installer</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/service-area" className="px-4 py-3 rounded-xl font-bold text-brand-black hover:bg-brand-gray/50 transition-colors">SERVICE AREA</Link>

                        {/* Mobile Resources Accordion */}
                        <div>
                            <button 
                                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-brand-black hover:bg-brand-gray/50 transition-colors text-left"
                            >
                                RESOURCES
                                <ChevronDown className={`w-5 h-5 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isResourcesOpen && (
                                <div className="ml-4 mt-1 grid gap-1 border-l-2 border-brand-green/20">
                                    <Link to="/faq" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">FAQ</Link>
                                    <Link to="/testimonials" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Testimonials</Link>
                                    <Link to="/blog" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Blog</Link>
                                    <Link to="/our-work" className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-brand-green transition-colors">Gallery</Link>
                                </div>
                            )}
                        </div>

                        {/* Social Links in Mobile Menu */}
                        <div className="flex items-center gap-6 px-4 py-6 border-t border-gray-100 mt-2">
                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2]">
                                <Facebook size={24} fill="currentColor" />
                            </a>
                            <a href={yelpUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF1A1A]">
                                <Star size={24} fill="currentColor" />
                            </a>
                            <a href={nextdoorUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00B500]">
                                <Home size={24} fill="currentColor" />
                            </a>
                            <a href={liveLocalInwUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green">
                                <Globe size={24} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
