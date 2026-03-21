import { Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function CabinetPaintingPage() {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        document.title = "Professional Cabinet Painters in Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Searching for professional cabinet painters in Spokane? Prestige Custom Painting LLC specializes in high-end cabinet refinishing for kitchens and bathrooms.');
    }, []);

    const services = [
        "Cabinet painting",
        "Kitchen Cabinet Painting",
        "Surface Priming",
        "Color Consultation",
        "Paint Touch-Up Services",
    ];

    const faqs = [
        { q: "Is cabinet painting worth it vs. replacing cabinets?", a: "Absolutely — cabinet painting costs a fraction of full cabinet replacement and can achieve equally stunning results. In Spokane, full cabinet replacement can cost $10,000–$30,000+. Professional cabinet painting from Prestige Custom Painting LLC can transform the same kitchen for a significantly lower investment." },
        { q: "How long does cabinet painting take?", a: "Most kitchen cabinet projects take 3–5 days including proper prep, priming, painting, and drying time between coats. We work efficiently to minimize disruption to your kitchen use." },
        { q: "Will the paint peel or chip on cabinets?", a: "Not when done correctly. The key to long-lasting cabinet paint is thorough degreasing, proper sanding, a quality primer, and a durable topcoat. We use specific cabinet-grade paints and primers that are formulated to bond to wood and resist chipping, peeling, and moisture." },
        { q: "Can you change the color of my cabinets?", a: "Yes! Color changes are one of our most popular cabinet services. Whether you're going from dark wood to bright white, or updating from oak to a modern gray, we can achieve a complete color transformation with a beautiful, lasting finish." },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}<span className="text-brand-green">PAINTING</span>{" "}<span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 md:gap-6">
                        <a href={`tel:${phoneNumber}`} className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-brand-green transition-colors"><Phone size={18} className="text-brand-green" />{phoneNumber}</a>
                        <a href={`mailto:${email}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">GET A QUOTE</a>
                    </div>
                </div>
            </nav>

            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm"><ArrowLeft size={18} /> BACK TO HOME</Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6"><Star size={12} fill="currentColor" /> FACTORY-SMOOTH CABINET FINISHES IN SPOKANE</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            Cabinet Painting<br /><span className="text-brand-green">in Spokane, WA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">Transform your kitchen or bathroom with professional cabinet painting from Prestige Custom Painting LLC. Get a stunning, factory-smooth finish at a fraction of the cost of new cabinets — without the mess of a full renovation.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"><Phone size={20} /> CALL FOR FREE ESTIMATE</a>
                            <Link to="/#services" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">ALL SERVICES <ArrowRight size={20} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Professional Cabinet Refinishing in Spokane, WA</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Your kitchen cabinets are one of the most visible elements of your home, and their condition directly affects how your entire living space feels. Outdated, scratched, or yellowed cabinets can make even a clean kitchen look tired and worn.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">The good news? You don't have to spend tens of thousands of dollars on new cabinetry to get a fresh, modern look. Professional cabinet painting from Prestige Custom Painting LLC can completely transform your kitchen or bathroom at a fraction of the replacement cost — with results that rival brand-new cabinetry.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Our cabinet painting process is meticulous. We start by removing all cabinet doors, drawers, and hardware. Every surface is thoroughly cleaned and degreased, then sanded to create the right profile for adhesion. We apply a bonding primer followed by two coats of cabinet-specific paint — either brushed, rolled, or sprayed depending on your preference and the project requirements.</p>
                        <p className="text-lg text-gray-600 leading-relaxed">The result is a hard, smooth, durable finish that looks factory-applied and is built to withstand the daily use of a busy kitchen. We serve homeowners throughout Spokane, Spokane Valley, Liberty Lake, Cheney, and the surrounding Inland Northwest region.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-brand-gray/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Cabinet Services We Offer</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {services.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green transition-colors">
                                <CheckCircle size={20} className="text-brand-green shrink-0" />
                                <span className="text-sm font-semibold text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Why Spokane Homeowners Love Our Cabinet Work</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Sparkles size={22} />, title: "Factory-Smooth Finish", desc: "We use professional spray and brush techniques to achieve a flawless, furniture-quality finish on every cabinet surface." },
                            { icon: <Shield size={22} />, title: "Built to Last", desc: "Cabinet-specific primers and topcoats that resist moisture, grease, and daily wear — your finish stays beautiful for years." },
                            { icon: <Star size={22} />, title: "Save Thousands", desc: "Get the look of brand-new cabinets for a fraction of the replacement cost. One of the highest ROI upgrades for any home in Spokane." },
                        ].map((b, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:border-brand-green hover:shadow-xl hover:shadow-green-500/10 transition-all">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">{b.icon}</div>
                                <h3 className="text-xl font-poppins font-bold mb-3">{b.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-brand-black text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Our Cabinet Painting Process</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Every step is designed for a finish that's smooth, durable, and built to impress.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Remove & Label", desc: "All cabinet doors, drawers, and hardware are carefully removed, labeled, and transported for off-site painting." },
                            { step: "02", title: "Degrease & Sand", desc: "Every surface is thoroughly cleaned, degreased, and sanded to ensure proper primer and paint adhesion." },
                            { step: "03", title: "Prime & Paint", desc: "Bonding primer applied first, followed by two coats of cabinet-grade paint for a hard, smooth finish." },
                            { step: "04", title: "Reinstall & Review", desc: "Doors and hardware reinstalled, hinges adjusted, and a full walkthrough to ensure you love the results." },
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

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-2xl hover:border-brand-green transition-colors">
                                <h3 className="font-poppins font-bold text-lg mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">Ready to Transform Your Cabinets?</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Get a free cabinet painting estimate in Spokane, WA. No obligation — just honest, professional advice from your local painting experts.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-green-500/20">{phoneNumber}</a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all">EMAIL US</a>
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

            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4">
                <a href={`tel:${phoneNumber}`} className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Phone size={20} className="text-brand-green" /> CALL</a>
                <a href={`mailto:${email}`} className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Mail size={20} /> QUOTE</a>
            </div>

            <Footer />
        </div>
    );
}

export default CabinetPaintingPage;
