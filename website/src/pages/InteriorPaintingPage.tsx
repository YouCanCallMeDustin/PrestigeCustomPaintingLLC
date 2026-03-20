import { Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function InteriorPaintingPage() {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        document.title = "Professional Interior Painters in Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Searching for professional interior painters in Spokane? Prestige Custom Painting LLC offers high-end residential painting with modern finishes. Call (509) 714-9491 for your estimate.');
    }, []);

    const benefits = [
        { icon: <Star size={22} />, title: "Premium Paints Only", desc: "We use Benjamin Moore, Sherwin-Williams, and Behr products for long-lasting interior finishes." },
        { icon: <Shield size={22} />, title: "100% Satisfaction Guaranteed", desc: "We don't leave until you're completely happy with every wall, corner, and surface." },
        { icon: <Clock size={22} />, title: "On-Time, Every Time", desc: "Punctual scheduling and clean job sites — we respect your home and your time." },
    ];

    const services = [
        "Full wall and ceiling painting",
        "Accent walls and feature rooms",
        "Cabinet painting and refinishing",
        "Drywall repair and texture matching",
        "Wallpaper removal and wall prep",
        "Trim, door, and baseboard painting",
        "Staircase railings and banisters",
        "Living rooms, bedrooms, and kitchens",
    ];

    const faqs = [
        {
            q: "How long does interior painting take?",
            a: "Most single-room projects are completed in one day. Full-home interior projects typically take 3–5 days depending on size and prep work required. We'll give you a clear timeline during your free estimate."
        },
        {
            q: "Do I need to move my furniture?",
            a: "We help move and protect furniture as part of our service. We use drop cloths and plastic sheeting to keep your belongings safe throughout the project."
        },
        {
            q: "What kind of paint do you use for interiors?",
            a: "We use top-tier brands including Benjamin Moore, Sherwin-Williams, and Behr. We'll recommend the right sheen level (flat, eggshell, satin, or semi-gloss) for each surface and room."
        },
        {
            q: "Do you offer free estimates in Spokane?",
            a: "Absolutely. We provide free, no-obligation estimates for all interior painting projects throughout Spokane, Spokane Valley, Liberty Lake, Cheney, and surrounding areas."
        },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}
                            <span className="text-brand-green">PAINTING</span>{" "}
                            <span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 md:gap-6">
                        <Link to="/our-work" className="hidden md:block text-sm font-bold hover:text-brand-green transition-colors">OUR WORK</Link>
                        <a href={`tel:${phoneNumber}`} className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-brand-green transition-colors">
                            <Phone size={18} className="text-brand-green" />{phoneNumber}
                        </a>
                        <a href={`mailto:${email}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Star size={12} fill="currentColor" /> SPOKANE'S INTERIOR PAINTING SPECIALISTS
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            Professional Interior Painters<br />
                            <span className="text-brand-green">in Spokane, WA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                            Transform your home's interior with professional painting services from Prestige Custom Painting LLC. We deliver premium finishes, meticulous prep work, and zero-mess cleanup across Spokane and the Inland Northwest.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl">
                                <Phone size={20} /> CALL FOR FREE ESTIMATE
                            </a>
                            <Link to="/services" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                                ALL SERVICES <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                            Spokane's Trusted Interior Painting Experts
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            When you hire Prestige Custom Painting LLC for your interior painting project in Spokane, WA, you're getting more than just a fresh coat of paint. You're getting a team that takes craftsmanship seriously — from the very first drop cloth laid down to the final walkthrough with you.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our interior painting process starts with thorough surface preparation. We repair any cracks, holes, or imperfections in your drywall before we ever open a can of paint. This means your finish looks flawless and lasts for years — not just months.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Whether you're refreshing a single bedroom, repainting your entire home, or transforming your kitchen cabinets with a factory-quality finish, Prestige Custom Painting LLC has the skills and the products to deliver results that exceed your expectations.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We proudly serve homeowners throughout Spokane, Spokane Valley, Liberty Lake, Cheney, Mead, and the entire Inland Northwest region. Our team is locally owned, fully insured, and dedicated to making your home look exactly the way you've always imagined it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-16 md:py-20 bg-brand-gray/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Interior Painting Services We Offer</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {services.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green transition-colors group">
                                <CheckCircle size={20} className="text-brand-green shrink-0" />
                                <span className="text-sm font-semibold text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Why Spokane Homeowners Choose Us</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((b, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:border-brand-green hover:shadow-xl hover:shadow-green-500/10 transition-all">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-poppins font-bold mb-3">{b.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-20 bg-brand-black text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Our Interior Painting Process</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A clean, professional process from start to finish — no surprises.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Free Estimate", desc: "We come to your Spokane home, assess the project, and provide a detailed, no-obligation quote." },
                            { step: "02", title: "Prep & Protect", desc: "We move and cover furniture, tape edges, and repair any surface imperfections before painting." },
                            { step: "03", title: "Expert Application", desc: "Premium paints applied with precision — consistent coverage, sharp lines, beautiful results." },
                            { step: "04", title: "Final Walkthrough", desc: "We inspect every inch together. We don't leave until you are 100% satisfied." },
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-white/10 hover:border-brand-green/50 transition-colors">
                                <div className="text-brand-green font-poppins font-bold text-4xl mb-4">{item.step}</div>
                                <h3 className="font-poppins font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-2xl hover:border-brand-green transition-colors">
                                <h3 className="font-poppins font-bold text-lg mb-3 text-brand-black">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">
                                Ready for a Fresh Interior?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Call Prestige Custom Painting LLC today for a free interior painting estimate anywhere in Spokane, WA.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-green-500/20">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all">
                                    EMAIL US
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-xl font-poppins font-bold mb-6 text-center">Areas We Serve</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/painting-spokane-valley" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-brand-green hover:text-brand-green transition-colors">Spokane Valley, WA</Link>
                        <Link to="/painting-liberty-lake" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-brand-green hover:text-brand-green transition-colors">Liberty Lake, WA</Link>
                        <Link to="/painting-airway-heights" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-brand-green hover:text-brand-green transition-colors">Airway Heights, WA</Link>
                        <Link to="/painting-cheney" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-brand-green hover:text-brand-green transition-colors">Cheney, WA</Link>
                        <Link to="/painting-deer-park" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-brand-green hover:text-brand-green transition-colors">Deer Park, WA</Link>
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

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default InteriorPaintingPage;
