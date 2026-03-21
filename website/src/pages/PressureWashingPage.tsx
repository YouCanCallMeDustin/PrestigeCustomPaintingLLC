import { Phone, ArrowLeft, Star, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function PressureWashingPage() {
    const { phoneNumber } = SITE_INFO;

    useEffect(() => {
        document.title = "Pressure Washing Service Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Need a professional pressure washing service in Spokane? We safely clean siding, decks, and driveways to make your property look brand new again.');
    }, []);

    const servicesList = [
        { name: "Pressure Washing", desc: "Grime builds up fast during our wet winters. We blast away the dark stains and reveal the bright, clean surfaces underneath." },
        { name: "Power Washing", desc: "Tough oil stains on concrete need hot water and serious pressure. We use specialized heated sprayers to melt away stubborn grease." },
        { name: "House Washing", desc: "Vinyl siding looks green and dirty after a long, damp spring. We use a gentle soft-wash method that cleans the house without breaking your windows." },
        { name: "Deck Cleaning", desc: "Wooden decks get slippery and dangerous when covered in moss. We clear off the green slime so your family can safely enjoy the backyard again." },
        { name: "Fence Cleaning", desc: "A gray, weathered cedar fence makes a whole yard look tired. We wash the grey wood fibers away, bringing back the natural golden color." },
        { name: "Driveway Pressure Washing", desc: "Your driveway is the first thing guests see. We use large surface spinners to quickly clear away tire marks, dirt, and built-up grime." },
        { name: "Exterior Surface Cleaning", desc: "From brick retaining walls to metal shop buildings, dirt sticks everywhere. We adjust our spray power to safely clean any type of building material." },
        { name: "Mold and Mildew Removal", desc: "The shady side of your house stays wet and grows dark spots. We use special cleaners that actually kill the spores so the dark stains do not come right back." },
        { name: "Patio and Walkway Cleaning", desc: "Pavers and concrete paths get dark and muddy over time. We wash out all the dirt from the cracks and restore the clean look of your walking paths." }
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
                            Pressure Washing Service Spokane
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        Last spring, folks out in Liberty Lake called us when their driveways and decks turned green from winter moss. That damp Northwest weather really does a number on outdoor concrete and wood. When algae builds up, porches actually become dangerously slippery. As an experienced pressure washing service in Spokane, we safely wash away the grime without causing damage to the materials underneath.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 font-medium">
                        We get calls from homeowners stretching from Nine Mile Falls all the way to Spokane Valley asking how to clean up their stained driveways. The truth is, nothing makes a house look new again faster than a good, safe wash. Whether you need gentle soap on vinyl siding or hot water on oil stains, here is a helpful guide to the exact services we offer to clean your exterior.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s, idx) => (
                            <Link to={`/service/${s.slug}`} key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-green transition-colors group block">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-green shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                    <Droplets size={24} />
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

export default PressureWashingPage;
