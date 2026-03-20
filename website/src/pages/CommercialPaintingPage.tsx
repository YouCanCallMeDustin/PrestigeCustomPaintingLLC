import { Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function CommercialPaintingPage() {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        document.title = "Professional Commercial Painters in Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Searching for professional commercial painters in Spokane? Prestige Custom Painting LLC provides expert workspace transformations and durable business painting solutions.');
    }, []);

    const services = [
        "Office interior painting", "Retail store painting", "Warehouse and industrial coating",
        "Restaurant and hospitality painting", "Property management repaints", "Parking lot lines and curb paint",
        "Exterior commercial painting", "Epoxy floor coatings",
    ];

    const faqs = [
        { q: "Do you work around our business hours?", a: "Yes — we regularly work evenings and weekends to minimize disruption to your business operations. We coordinate the schedule with you in advance to find the least disruptive timing." },
        { q: "Can you handle large commercial projects?", a: "Absolutely. We have experience painting warehouses, multi-unit apartment buildings, retail centers, and office complexes throughout Spokane. We'll scale our crew to fit your timeline." },
        { q: "Do you offer commercial painting contracts?", a: "Yes, we offer ongoing maintenance painting contracts for property managers and commercial building owners in Spokane. Regular touch-ups and scheduled repaints keep your property looking professional year-round." },
        { q: "Are you licensed and insured for commercial work in Washington?", a: "Yes. Prestige Custom Painting LLC is fully licensed and carries the insurance required for commercial painting projects in Washington State, including general liability and worker's compensation." },
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6"><Star size={12} fill="currentColor" /> SPOKANE'S COMMERCIAL PAINTING EXPERTS</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            Commercial Painting<br /><span className="text-brand-green">in Spokane, WA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">Prestige Custom Painting LLC brings the same level of craftsmanship to commercial projects as we do to every home. From offices and retail stores to warehouses and apartment complexes — we deliver professional results with minimal disruption to your business.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"><Phone size={20} /> CALL FOR FREE ESTIMATE</a>
                            <Link to="/services" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">ALL SERVICES <ArrowRight size={20} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Commercial Painters Serving Spokane Businesses</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Your commercial space makes a statement about your brand. Whether you're a retail business trying to attract customers, an office building that wants to project professionalism, or a property manager maintaining a portfolio of units, the condition of your paint matters.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Prestige Custom Painting LLC understands that commercial painting projects come with unique challenges — tight deadlines, occupied spaces, and the need to minimize disruption. That's why we're flexible with scheduling, including evenings, weekends, and phased work plans that keep your business running smoothly.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">We use commercial-grade paints and coatings selected for their durability, ease of cleaning, and resistance to the heavy traffic that commercial spaces demand. Our team is experienced in painting offices, retail stores, restaurants, warehouses, churches, schools, and multi-family apartment complexes throughout Spokane and the Inland Northwest.</p>
                        <p className="text-lg text-gray-600 leading-relaxed">From a single office refresh to a 50-unit apartment repaint, we have the experience and the crew to handle it efficiently and professionally.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-brand-gray/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Commercial Services We Offer</h2>
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
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Why Spokane Businesses Choose Us</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Building size={22} />, title: "Commercial Experience", desc: "We've painted offices, retail stores, warehouses, and multi-family units throughout Spokane — projects of any scale." },
                            { icon: <CheckCircle size={22} />, title: "Flexible Scheduling", desc: "We work nights and weekends to keep your business operational while we complete the project on your timeline." },
                            { icon: <Star size={22} />, title: "Professional Results", desc: "Commercial-grade paints and coatings applied with precision — a finish that's durable, clean, and brand-ready." },
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
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">Get a Commercial Painting Quote</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Serving Spokane businesses with professional, low-disruption commercial painting. Call or email for a free estimate.</p>
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

export default CommercialPaintingPage;
