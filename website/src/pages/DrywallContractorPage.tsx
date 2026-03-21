import { Phone, ArrowLeft, Star, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function DrywallContractorPage() {
    const { phoneNumber } = SITE_INFO;

    useEffect(() => {
        document.title = "Drywall Contractor Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Looking for a reliable drywall contractor in Spokane? We share local advice and provide clean, expert repairs for your home.');
    }, []);

    const servicesList = [
        { name: "Ceiling repair", desc: "Water stains from ice dams or accidental holes can ruin a room. We fix the damage so you cannot even tell it was there." },
        { name: "Drywall finishing", desc: "A great paint job starts with a perfectly smooth wall. We tape, mud, and sand everything flush so the final color looks amazing." },
        { name: "Popcorn ceiling removal", desc: "Old textured ceilings trap dust and make homes look dated. We scrape them smooth and give your rooms a clean, modern feel." },
        { name: "Hole Repair in Drywall", desc: "Kids, moving furniture, or doorknobs can easily punch right through a wall. We patch those spots quickly and cleanly." },
        { name: "Crack Repair in Walls", desc: "Houses settle over time, especially older ones on the South Hill. We fill and secure those stress cracks before they spread." },
        { name: "Drywall Patching", desc: "If you had plumbing or electrical work done, the contractors probably left open squares in your walls. We put those back together." },
        { name: "Texture Matching", desc: "Blending new mud into an old knockdown or orange peel wall takes real skill. We match the existing bumps perfectly." },
        { name: "Wall Texture Application", desc: "Sometimes a flat wall shows too many flaws. Adding a light, consistent texture hides bumps and gives the room character." },
        { name: "Ceiling Texture Removal", desc: "Getting rid of old heavy textures is messy work. We handle the scraping and the heavy cleanup so you do not have to." },
        { name: "Drywall Installation Repair", desc: "Hanging heavy sheets of gypsum board is hard work. If your current boards are sagging or water-damaged, we fix the installation." },
        { name: "Wall Resurfacing", desc: "A room with badly damaged walls sometimes needs a full skim coat. We spread a thin layer of mud over the whole thing to make it like new." }
    ];

    const services = servicesList.map(s => ({
        ...s,
        slug: s.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')
    }));

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img src="/logo.png" alt="Prestige Custom Painting LLC logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}
                            <span className="text-brand-green">PAINTING</span>{" "}
                            <span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link to="/our-work" className="hidden md:block text-sm font-bold hover:text-brand-green transition-colors mr-4">OUR WORK</Link>
                        <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </nav>

            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Star size={12} fill="currentColor" /> LOCAL SPOKANE EXPERTS
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            Drywall Contractor Spokane
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        Last spring, so many people up on the South Hill called us when melting snow caused minor roof leaks that damaged their drywall. It happens all the time here in Spokane. Water stains spreading across the living room ceiling can make a beautiful house look old and tired fast. As a trusted drywall contractor in Spokane, we help families fix these ugly spots quickly and safely.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 font-medium">
                        We get a lot of questions from folks living near Manito Park and out in Liberty Lake about the right way to fix a wall. The truth is, spreading the mud is easy, but making it blend in perfectly is hard. You want a smooth, clean surface before any paint touches it. Here is a helpful guide to the exact services we offer to get your home looking great again.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s, idx) => (
                            <Link to={`/service/${s.slug}`} key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-green transition-colors group block">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-green shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                    <Hammer size={24} />
                                </div>
                                <h2 className="text-xl font-poppins font-bold text-brand-black mb-3 group-hover:text-brand-green transition-colors">{s.name}</h2>
                                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>

            <section className="py-16 bg-brand-gray/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-poppins font-bold mb-6">Need expert help at your home?</h3>
                    <p className="text-lg text-gray-600 mb-8">
                        Whether you live right in Spokane or out in the Valley, we bring our tools and clean up everything when we finish.
                    </p>
                    <a href={`tel:${phoneNumber}`} className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-green-500/20">
                        <Phone size={20} /> CALL FOR A FREE QUOTE
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default DrywallContractorPage;

