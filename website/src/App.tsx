import { Phone, Mail, CheckCircle, ArrowRight, Star, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SITE_INFO } from './lib/constants';
import { injectPageSEO } from './lib/seo';
import { generateWebPageSchema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from './lib/schemaGenerator';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
        const title = "Top-Rated Painters in Spokane WA | Free Estimates | Prestige Custom Painting";
        const description = "Looking for top-rated house painters in Spokane, WA? Prestige Custom Painting offers premium interior, exterior, and cabinet painting. Fully Licensed, Bonded, and Insured. Includes satisfaction warranty. Free estimates!";
        
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/',
            schemas: [
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        topic: title,
                        description,
                        url: "https://prestigecustompaintingllc.com/"
                    })
                },
                {
                    id: 'business',
                    data: generateLocalBusinessSchema()
                },
                {
                    id: 'breadcrumb',
                    data: generateBreadcrumbSchema([
                        { name: "Home", path: "/" }
                    ])
                },
                {
                    id: 'faq',
                    data: generateFAQSchema([
                        { question: "How do you handle Spokane's weather?", answer: "We carefully monitor moisture levels and only use premium paints designed for the Inland Northwest's temperature swings." },
                        { question: "Are you licensed and insured?", answer: "Yes, Prestige Custom Painting LLC is fully licensed, bonded, and insured in Washington State." }
                    ])
                }
            ]
        });
    }, []);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            <header className="relative bg-brand-black text-white pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-24 md:translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-8 animate-fade-in">
                            <Star size={14} fill="currentColor" /> SPOKANE'S TOP-RATED PAINTING COMPANY
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight tracking-tight">
                            House Painters Spokane: <br /><span className="text-brand-green italic">Prestige Custom Painting LLC</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl font-medium">
                            Looking for reliable house painters in Spokane? Prestige Custom Painting LLC provides professional interior, exterior, and cabinet painting services tailored to the unique Inland Northwest climate. We combine meticulous craftsmanship with premium materials like Benjamin Moore and Sherwin Williams to protect and beautify your home.
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

            <section id="services" className="py-20 md:py-24 bg-gray-50/50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">OUR SPECIALTIES</h2>
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

                    {/* Mobile/Tablet Tabs */}
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

            {/* The Prestige Painting Process Section */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center">
                            <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">The Prestige Standard</h2>
                            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black mb-12 leading-tight">Our Professional Painting Process</h3>
                        </div>
                        <div className="space-y-12">
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="text-2xl font-bold mb-4 text-brand-black">Phase 1: Detailed Surface Preparation</h4>
                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    Most painting failures happen because of poor prep. We start by thoroughly washing the surface, scraping loose paint, and sanding transitions. For exteriors, we use industrial power washing to remove Spokane's seasonal grime and mildew. For interiors, we meticulously mask every edge, patch holes, and ensure your floors and furniture are sealed under heavy-duty protective coverings.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="text-2xl font-bold mb-4 text-brand-black">Phase 2: Premium Priming & Application</h4>
                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    We don't cut corners on materials. We partner with leaders like <strong>Benjamin Moore</strong> and <strong>Sherwin Williams</strong> to find the specific product that matches your home's needs. We apply premium primers to ensure maximum adhesion, followed by multiple coats of high-quality paint to provide a rich, deep color that stands up to the Inland Northwest's extreme temperature swings.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="text-2xl font-bold mb-4 text-brand-black">Phase 3: Meticulous Final Cleanup & Inspection</h4>
                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    We treat your home as if it were our own. Once the painting is complete, we perform a total cleanup, removing all plastic and tape. Robert, our founder, personally inspects every project to ensure it meets our "Expect Excellence" standard. We walk you through the finished work to make sure every line is sharp and every surface is perfect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-8 md:py-12 border-y border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 text-center md:text-left">
                        <div className="max-w-md">
                            <h4 className="text-xl font-bold text-brand-black mb-2">Partnering with the Best</h4>
                            <p className="text-sm text-gray-500">We utilize high-performance coatings designed for the Pacific Northwest climate.</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-1">
                            <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center uppercase">Benjamin Moore</div>
                            <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center uppercase">Sherwin Williams</div>
                            <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center uppercase">Behr</div>
                            <div className="flex items-center justify-center font-bold text-sm md:text-lg tracking-widest text-gray-400 text-center uppercase">PPG Paints</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 md:py-24 bg-brand-gray/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
                            <div className="absolute inset-0 bg-brand-green rounded-3xl rotate-3 scale-105 opacity-10" />
                            <figure>
                                <img
                                    src="/robert.webp"
                                    alt="Robert, owner of Prestige Custom Painting LLC, professional house painter in Spokane WA"
                                    className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
                                />
                                <figcaption className="mt-4 text-sm text-gray-500 italic text-center lg:text-left">
                                    Robert, founder of Prestige Custom Painting, personally inspects every project to ensure excellence.
                                </figcaption>
                            </figure>
                            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-black p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block border-b-4 border-brand-green">
                                <p className="text-white font-bold text-xl md:text-2xl italic">"Expect Excellence."</p>
                                <p className="text-brand-green font-semibold mt-2">— {ownerName}</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 md:mb-8 text-brand-black">Why Choose Prestige House Painters in Spokane?</h2>
                            <div className="bg-brand-gray/30 p-6 rounded-2xl border-l-4 border-brand-green mb-8 text-gray-800 font-medium text-left">
                                <strong>Who is Prestige Custom Painting?</strong><br/>
                                Prestige Custom Painting LLC is a fully licensed, bonded, and insured professional painting contractor based in Spokane, WA. Founded by {ownerName}, the company specializes in high-end cabinet refinishing, meticulous interior repaints, and weather-resistant exterior coatings engineered for the Inland Northwest.
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                                As a local <strong>Spokane, WA</strong> painting company, we understand the specific environmental challenges your home faces—from harsh winter snow to scorching summer heat. We don't just "paint" your house; we provide a durable seal that increases curb appeal and home value.
                                <br /><br />
                                We are <strong>licensed, insured, and 5-star rated</strong> because we prioritize client satisfaction above all else. Whether it's a small interior room or a large-scale commercial property, we bring the same level of focus and professionalism to every brushstroke.
                            </p>
                            <div className="space-y-6 max-w-md mx-auto lg:mx-0 text-left">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-black">Locally Owned & Operated</h4>
                                        <p className="text-gray-500 text-sm">Born and raised right here in the Inland Northwest. We know Spokane neighborhoods.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-black">Guaranteed Quality</h4>
                                        <p className="text-gray-500 text-sm">We don't leave until you are 100% satisfied with the result. Period.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust, Warranty, & Credibility */}
            <section className="py-16 md:py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-gray/50 rounded-3xl p-8 md:p-12 border border-brand-green/10 shadow-lg">
                        <div className="text-center mb-10">
                            <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Peace of Mind Guarantee</h2>
                            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-brand-black">Fully Protected & Warrantied</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-6">
                                    <Shield size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-brand-black mb-3">Licensed & Bonded</h4>
                                <p className="text-gray-600">Registered locally in Spokane and WA State to handle projects securely and legally.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-brand-black mb-3">Insured</h4>
                                <p className="text-gray-600">Extensive liability insurance protecting your property and our workers throughout every job.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-6">
                                    <Star size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-brand-black mb-3">Quality Warranty</h4>
                                <p className="text-gray-600">We offer robust warranties on our work to protect against peeling or blistering.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cabinet Painting Highlight */}
            <section className="py-20 md:py-24 bg-brand-black text-white relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Cabinet Specialists</h2>
                            <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-8 leading-tight">Spokane Cabinet Painting & Refinishing</h3>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
                                Don't replace your cabinets—refinish them! Our <strong>Cabinet Painting Spokane</strong> services can save you thousands compared to a full kitchen remodel. We use specialized HVLP sprayers and industrial coatings (like Benjamin Moore SCUFF-X) to provide a factory-smooth, ultra-durable finish that resists chips and stains.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link to="/cabinet-painting-spokane" className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all">Explore Cabinet Services</Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <figure>
                                <img src="/finish.webp" alt="Cabinet painting transformation in Spokane WA" className="rounded-[2rem] shadow-2xl border border-white/10" />
                                <figcaption className="mt-4 text-xs text-gray-400 italic text-center">
                                    A factory-smooth cabinet finish achieving a modern, high-end look without the cost of replacement.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area Map */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Where We Work</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black mb-6">Serving the Inland Northwest</h3>
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 mb-12" style={{ height: '450px' }}>
                        <iframe
                            title="Prestige Custom Painting LLC Service Area - Spokane WA"
                            src="https://maps.google.com/maps?q=Spokane,%20WA&t=&z=10&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Google Reviews */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-8 h-8" />
                        <span className="text-2xl font-poppins font-bold text-brand-black">Client Feedback</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-10">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                        </div>
                        <span className="text-xl font-bold">5.0 Rating</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {/* Simplified review list for brevity */}
                        {["Dustin Shoemake", "After Words", "Touch Flow Pro"].map((name, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-[300px]">
                                <p className="font-bold text-brand-black mb-2">{name}</p>
                                <div className="flex text-yellow-400 mb-2">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                                </div>
                                <p className="text-sm text-gray-500">Verified Google Review</p>
                            </div>
                        ))}
                    </div>
                    <a href="https://g.page/r/CaeovOje_oP7EAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                        <Star size={20} fill="currentColor" /> Leave a Review
                    </a>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h4 className="text-xl font-bold mb-3">How do you handle Spokane's weather?</h4>
                            <p className="text-gray-600">We carefully monitor moisture levels and only use premium paints designed for the Inland Northwest's temperature swings.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h4 className="text-xl font-bold mb-3">Are you licensed and insured?</h4>
                            <p className="text-gray-600">Yes, Prestige Custom Painting LLC is fully licensed, bonded, and insured in Washington State.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-8">
                                Ready to transform your property?
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl backdrop-blur-md transition-all">
                                    EMAIL US
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4">
                <a href={`tel:${phoneNumber}`} className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Phone size={20} className="text-brand-green" /> CALL
                </a>
                <a href={`mailto:${email}`} className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Mail size={20} /> QUOTE
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default App;
