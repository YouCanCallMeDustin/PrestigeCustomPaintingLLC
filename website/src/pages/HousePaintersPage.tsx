import { Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';

function HousePaintersPage() {
    const { phoneNumber, email } = SITE_INFO;

    const faqs = [
        { q: "How much does it cost to paint a house in Spokane?", a: "The cost to paint a house in Spokane depends on the size, number of rooms or stories, and prep work required. Interior projects typically start around $500 for a single room, while full exterior projects can range from $2,500 to $8,000+. We provide free, detailed estimates with no obligation." },
        { q: "Are you licensed and insured in Washington State?", a: "Yes, Prestige Custom Painting LLC is fully licensed and insured to operate in Washington State. You can hire us with complete confidence that your property and our workers are protected." },
        { q: "Do you paint both interior and exterior?", a: "Absolutely. We handle full residential painting projects for both interior and exterior surfaces. Many of our Spokane customers hire us for complete home refreshes — inside and out." },
        { q: "What areas of Spokane do you serve?", a: "We serve all of Spokane and the surrounding region including Spokane Valley, Liberty Lake, Cheney, Mead, Deer Park, and the broader Inland Northwest area." },
    ];

    useEffect(() => {
        document.title = "House Painters Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Looking for expert house painters in Spokane, WA? Prestige Custom Painting LLC delivers top-quality interior and exterior painting services across the Inland Northwest.');
        return injectPageSEO({
            title: 'House Painters Spokane | Prestige Custom Painting LLC',
            description: 'Looking for expert house painters in Spokane, WA? Prestige Custom Painting LLC delivers top-quality interior and exterior painting services across the Inland Northwest.',
            path: '/house-painters-spokane',
            faqs,
        });
    }, []);

    const mappedServices = [
        "Exterior painting", "Cabinet painting", "Deck painting", "Door painting",
        "House Painters", "Commercial Painting", "Kitchen Cabinet Painting",
        "Ceiling Painting", "Trim and Molding Painting", "Accent Wall Painting",
        "Exterior Siding Painting", "Stucco Painting", "Brick Painting",
        "Fence Painting", "Fence Staining", "Deck Staining", "Surface Priming",
        "Garage Painting", "Baseboard Painting", "Crown Molding Painting",
        "Color Consultation", "Paint Touch-Up Services", "Wall Texture Matching",
        "Garage Floor Epoxy Coating"
    ];

    const services = mappedServices.map(s => ({
        name: s,
        slug: s.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')
    }));

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
                        <Link to="/our-work" className="hidden md:block text-sm font-bold hover:text-brand-green transition-colors">OUR WORK</Link>
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6"><Star size={12} fill="currentColor" /> LOCALLY OWNED IN SPOKANE, WA</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            House Painters<br /><span className="text-brand-green">Spokane</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">Prestige Custom Painting LLC is Spokane's trusted residential painting company. We handle interior, exterior, and specialty painting with the professionalism and attention to detail your home deserves.</p>
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
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Spokane's Premier Residential Painting Company</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Finding reliable, skilled house painters in Spokane, WA shouldn't be a gamble. At Prestige Custom Painting LLC, we've built our reputation on showing up on time, communicating clearly, and delivering results that make homeowners proud.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Whether you're updating a single room, refreshing your home's entire interior, or giving your exterior a complete makeover, our team brings the same level of care and craftsmanship to every project — no matter the size.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">We specialize in residential painting across all property types, from single-family homes and townhouses to multi-unit properties. Our process is designed to minimize disruption to your daily life, protect your furniture and belongings, and leave your home cleaner than we found it.</p>
                        <p className="text-lg text-gray-600 leading-relaxed">We're locally owned and operated right here in the Inland Northwest. When you hire Prestige Custom Painting LLC, you're supporting a local small business that genuinely cares about the quality of its work and the satisfaction of its neighbors.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-brand-gray/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Residential Painting Services</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {services.map((item, idx) => (
                            <Link to={`/service/${item.slug}`} key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green transition-colors group cursor-pointer text-left">
                                <CheckCircle size={20} className="text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-green transition-colors">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Why Choose Prestige Custom Painting</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Home size={22} />, title: "Locally Owned & Operated", desc: "Born and raised in the Inland Northwest, we treat every Spokane home like it's our own." },
                            { icon: <Star size={22} />, title: "Premium Materials", desc: "We only use top-tier paints from Benjamin Moore, Sherwin-Williams, and Behr — never cheap alternatives." },
                            { icon: <CheckCircle size={22} />, title: "100% Satisfaction Guarantee", desc: "Every project comes with our satisfaction guarantee. We don't leave until the job is done right." },
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
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">Ready to Transform Your Home?</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Call Spokane's trusted house painters today. Free estimates — no pressure, no obligation.</p>
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

export default HousePaintersPage;
