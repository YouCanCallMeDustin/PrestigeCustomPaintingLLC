import { Phone, Mail, CheckCircle, ArrowRight, Star, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SITE_INFO } from './lib/constants';
import { injectPageSEO } from './lib/seo';
import Footer from './components/Footer';

function App() {
    const { phoneNumber, email, ownerName } = SITE_INFO;
    const [activeTab, setActiveTab] = useState("painting");

    const serviceCategories = [
        {
            id: "painting",
            title: "Expert Painting Services",
            description: "Our primary work is house painters. We do everything from exterior painting to cabinet painting with meticulous care.",
            link: "/house-painters-spokane",
            services: ["Exterior painting", "Cabinet painting", "Deck painting", "Door painting", "House Painters", "Commercial Painting", "Kitchen Cabinet Painting", "Ceiling Painting", "Trim and Molding Painting", "Accent Wall Painting", "Exterior Siding Painting", "Stucco Painting", "Brick Painting", "Fence Painting", "Fence Staining", "Deck Staining", "Surface Priming", "Garage Painting", "Baseboard Painting", "Crown Molding Painting", "Color Consultation", "Paint Touch-Up Services", "Wall Texture Matching", "Garage Floor Epoxy Coating"]
        },
        {
            id: "drywall",
            title: "Drywall Contractor",
            description: "We are also a local drywall contractor when your walls need more than just a new coat of paint. Sometimes, old Spokane homes have cracks from the ground shifting. We can help with ceiling repair and drywall finishing to make things smooth again.",
            link: "/drywall-contractor-spokane",
            services: ["Ceiling repair", "Drywall finishing", "Popcorn ceiling removal", "Hole Repair in Drywall", "Crack Repair in Walls", "Drywall Patching", "Texture Matching", "Wall Texture Application", "Ceiling Texture Removal", "Drywall Installation Repair", "Wall Resurfacing"]
        },
        {
            id: "wallpaper",
            title: "Wallpaper Installer",
            description: "If you want a unique look, our wallpaper installer services can change any room. We help with wallpaper removal if your old style is out of date. Then, we provide wallpaper installation with a perfect finish.",
            link: "/wallpaper-installer-spokane",
            services: ["Wallpaper Removal", "Wallpaper Installation", "Wallpaper Repair", "Wallpaper Service Preparation", "Decorative Wallpaper Installation"]
        },
        {
            id: "paint-stripping",
            title: "Paint Stripping Service",
            description: "Good paint starts with a clean surface. Our paint stripping service removes old layers that are failing. We offer wood paint removal for your trim and doors.",
            link: "/paint-stripping-spokane",
            services: ["Paint Stripping", "Wood Paint Removal", "Metal Paint Removal", "Surface Coating Removal", "Paint Removal From Masonry", "Exterior Paint Removal"]
        },
        {
            id: "pressure-washing",
            title: "Pressure Washing Service",
            description: "A clean home stays in good shape longer. Our pressure washing service helps with house washing and deck cleaning. We use power washing to remove dirt and mold from the damp Spokane winters.",
            link: "/pressure-washing-spokane",
            services: ["Pressure Washing", "Power Washing", "House Washing", "Deck Cleaning", "Fence Cleaning", "Driveway Pressure Washing", "Exterior Surface Cleaning", "Mold and Mildew Removal", "Patio and Walkway Cleaning"]
        }
    ];

    useEffect(() => {
        document.title = "Professional Painters in Spokane | #1 Rated Prestige Custom Painting";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Searching for professional painters in Spokane, WA? Prestige Custom Painting LLC offers premium interior, exterior, and cabinet painting services. Locally owned with 5-star results.');
        return injectPageSEO({
            title: 'Professional Painters in Spokane | #1 Rated Prestige Custom Painting',
            description: 'Searching for professional painters in Spokane, WA? Prestige Custom Painting LLC offers premium interior, exterior, and cabinet painting services. Locally owned with 5-star results.',
            path: '/',
        });
    }, []);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            {/* Standard Navigation - Same on all pages */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}<span className="text-brand-green">PAINTING</span>{" "}<span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-bold border-b-2 border-brand-green text-brand-black">HOME</Link>
                        <Link to="/our-work" className="text-sm font-bold hover:text-brand-green transition-colors text-brand-black">OUR WORK</Link>
                        <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 bg-brand-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-lg shadow-black/20">
                            <Phone size={16} className="text-brand-green" /> {phoneNumber}
                        </a>
                    </div>
                    
                    <a href={`tel:${phoneNumber}`} className="md:hidden flex items-center gap-2 bg-brand-green text-white p-3 rounded-full shadow-lg shadow-green-500/30">
                        <Phone size={20} />
                    </a>
                </div>
            </nav>

            <header className="relative bg-brand-black text-white pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-24 md:translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-8 animate-fade-in">
                            <Star size={14} fill="currentColor" /> SPOKANE'S TOP-RATED PAINTING COMPANY
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight tracking-tight">
                            House Painters Spokane: <br /><span className="text-brand-green italic">Prestige Custom Painting</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl font-medium">
                            Last year, a family near South Hill called us with a common problem. Their sunny exterior was starting to flake after a hot Spokane summer. We helped them choose a durable paint that handles our local weather. This is what we do as house painters Spokane residents rely on. We help you protect your biggest investment with care and skill.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-green-500/40">
                                <Phone size={24} /> CALL FOR FREE ESTIMATE
                            </a>
                            <Link to="/our-work" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20">
                                VIEW OUR WORK <ArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>



            {/* Services Tabbed Interface */}
            <section id="services" className="py-20 md:py-24 bg-gray-50/50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4">OUR SPECIALTIES</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black">Comprehensive Services</h3>
                    </div>

                    {/* Desktop Tabs */}
                    <div className="hidden lg:flex justify-center gap-4 mb-12 flex-wrap">
                        {serviceCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === cat.id ? 'bg-brand-green text-white shadow-[0_8px_30px_rgba(74,222,128,0.25)] scale-105' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-brand-black shadow-sm'}`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Mobile/Tablet Tabs (Scrollable) */}
                    <div className="flex lg:hidden overflow-x-auto pb-6 mb-8 gap-3 snap-x scrollbar-hide px-2">
                        {serviceCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`shrink-0 px-5 py-3 rounded-xl font-bold transition-all whitespace-nowrap snap-center ${activeTab === cat.id ? 'bg-brand-green text-white shadow-md' : 'bg-white text-gray-600 border border-gray-100'}`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative">
                        {serviceCategories.map((cat) => (
                            <div 
                                key={cat.id} 
                                className={`transition-all duration-500 w-full ${activeTab === cat.id ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-8 hidden'}`}
                            >
                                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
                                    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 border-b border-gray-100 pb-8">
                                        <div className="max-w-3xl">
                                            <h3 className="text-3xl font-poppins font-bold text-brand-black mb-4">{cat.title}</h3>
                                            <p className="text-lg text-gray-600 leading-relaxed">{cat.description}</p>
                                        </div>
                                        <Link to={cat.link} className="inline-flex items-center justify-center gap-2 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white px-6 py-3 rounded-full font-bold transition-all shrink-0 group">
                                            Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {cat.services.map((service, idx) => (
                                            <Link 
                                                to={`/service/${service.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`} 
                                                key={idx} 
                                                className="group flex items-center gap-3 p-4 bg-gray-50/50 hover:bg-white border border-transparent hover:border-brand-green rounded-2xl transition-all duration-300 hover:shadow-[0_8px_20px_rgba(74,222,128,0.15)] hover:-translate-y-0.5"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:border-transparent group-hover:bg-brand-green transition-all duration-300">
                                                    <CheckCircle size={14} className="text-brand-green group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-sm font-bold text-gray-700 group-hover:text-brand-black transition-colors">{service}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-8 md:py-12 border-y border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center">BENJAMIN MOORE</div>
                        <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center">SHERWIN WILLIAMS</div>
                        <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center">BEHR</div>
                        <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center">PPG PAINTS</div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 md:py-24 bg-brand-gray/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
                            <div className="absolute inset-0 bg-brand-green rounded-3xl rotate-3 scale-105 opacity-10" />
                            <img
                                src="/robert.jpg"
                                alt="Robert, owner of Prestige Custom Painting LLC, professional house painter in Spokane WA"
                                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
                            />
                            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-black p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block border-b-4 border-brand-green">
                                <p className="text-white font-bold text-xl md:text-2xl italic">"Expect Excellence."</p>
                                <p className="text-brand-green font-semibold mt-2">— {ownerName}</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 md:mb-8">Meet {ownerName}</h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                                With years of experience serving Spokane County, I founded Prestige Custom Painting LLC with a simple mission:
                                to bring a higher standard of professional care to the local painting industry using premium materials like Benjamin Moore.
                            </p>
                            <div className="space-y-6 max-w-md mx-auto lg:mx-0 text-left">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Locally Owned & Operated</h4>
                                        <p className="text-gray-500 text-sm">Born and raised right here in the Inland Northwest.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Guaranteed Quality</h4>
                                        <p className="text-gray-500 text-sm">We don't leave until you are 100% satisfied with the result.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area Map */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4">OUR SERVICE AREA</h2>
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold text-brand-black mb-4">Serving the Inland Northwest</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">From Spokane Valley to Liberty Lake, Cheney to Airway Heights — we bring premium painting results to your doorstep.</p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100" style={{ height: '400px' }}>
                        <iframe
                            title="Prestige Custom Painting LLC Service Area - Spokane WA"
                            src="https://maps.google.com/maps?q=Spokane,%20WA&t=&z=10&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Google Reviews Showcase */}
                    <div className="mt-16 mb-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-8 h-8" />
                                <span className="text-2xl font-poppins font-bold text-brand-black">Google Reviews</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-xl font-bold text-brand-black ml-1">5.0</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-sm text-gray-500">6 verified reviews</span>
                            </div>
                        </div>


                        {/* Review Cards — Infinite Marquee */}
                        <div className="relative overflow-hidden py-4 -mx-4">
                            <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max px-4">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-4">
                                        {[
                                            { name: "Dustin Shoemake", initial: "DS", color: "bg-blue-500", date: "a day ago" },
                                            { name: "After Words", initial: "AW", color: "bg-purple-500", date: "a day ago" },
                                            { name: "Touch Flow Pro", initial: "TF", color: "bg-teal-500", date: "a day ago" },
                                            { name: "Get Creep'D", initial: "GC", color: "bg-orange-500", date: "2 days ago" },
                                            { name: "Deskman Union Gospel Mission", initial: "DU", color: "bg-rose-500", date: "2 days ago" },
                                            { name: "Robert Butler", initial: "RB", color: "bg-indigo-500", date: "4 days ago" },
                                        ].map((review, idx) => (
                                            <a
                                                key={`${i}-${idx}`}
                                                href="https://www.google.com/search?q=Prestige+Custom+Painting+LLC+Spokane+WA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all shrink-0 w-[280px] sm:w-[300px] cursor-pointer"
                                            >
                                                <div className={`w-11 h-11 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm`}>
                                                    {review.initial}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-bold text-brand-black text-sm truncate">{review.name}</p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, j) => (
                                                                <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-gray-400">{review.date}</span>
                                                    </div>
                                                </div>
                                                <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-5 h-5 opacity-40 shrink-0" />
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://g.page/r/CaeovOje_oP7EAE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-green-500/20 hover:scale-105"
                        >
                            <Star size={20} fill="currentColor" /> Leave Us a Google Review
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 text-brand-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-poppins font-bold text-white mb-8">
                                Ready to transform your <br className="hidden md:block" /> property with <span className="text-brand-green">Prestige?</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-green-500/20">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl backdrop-blur-md transition-all">
                                    EMAIL US
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <a href={`tel:${phoneNumber}`} className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Phone size={20} className="text-brand-green" /> CALL
                </a>
                <a href={`mailto:${email}`} className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Mail size={20} /> QUOTE
                </a>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
