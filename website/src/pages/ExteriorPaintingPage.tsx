import { Phone, Mail, MapPin, CheckCircle, ArrowLeft, ArrowRight, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ExteriorPaintingPage() {
    const phoneNumber = "(509) 714-9491";
    const email = "buddylee12091@gmail.com";
    const location = "Spokane Valley, WA";

    useEffect(() => {
        document.title = "Professional Exterior Painters in Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Need professional exterior painters in Spokane? Prestige Custom Painting LLC specializes in high-quality exterior house painting built for the Inland Northwest. Call (509) 714-9491.');
    }, []);

    const services = [
        "Complete house exterior painting",
        "Deck and fence staining",
        "Pressure washing and surface prep",
        "Siding repair and painting",
        "Trim, fascia, and soffit painting",
        "Garage door painting",
        "Stucco and masonry coatings",
        "Foundation and retaining wall paint",
    ];

    const faqs = [
        { q: "When is the best time to paint a house exterior in Spokane?", a: "In Spokane, the best months for exterior painting are May through October when temperatures are above 50°F and rainfall is minimal. We plan projects around the weather to ensure optimal paint adhesion and a long-lasting finish." },
        { q: "How long does exterior painting take?", a: "A standard single-family home exterior typically takes 3–6 days depending on size and prep work required. We'll give you an accurate timeline during your free estimate." },
        { q: "Do I need to be home during the painting?", a: "No — many of our Spokane customers are at work while we paint. We just need access to the exterior and will do a final walkthrough with you when done." },
        { q: "What paint brands do you use for exteriors?", a: "We use premium exterior paints from Sherwin-Williams, Benjamin Moore, and Behr — trusted for their durability and fade resistance in challenging climates like Spokane's." },
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6"><Star size={12} fill="currentColor" /> SPOKANE'S EXTERIOR PAINTING SPECIALISTS</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            Professional Exterior Painters<br /><span className="text-brand-green">in Spokane, WA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">Protect your home and boost curb appeal with professional exterior painting from Prestige Custom Painting LLC. We use weather-resistant coatings built for the Inland Northwest climate.</p>
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
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Professional Exterior Painters Serving Spokane, WA</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">The exterior of your home is the first thing neighbors, guests, and potential buyers see. A quality exterior paint job doesn't just look great — it's an essential layer of protection against rain, sun, wind, and the harsh freeze-thaw cycles common in Spokane's climate.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">At Prestige Custom Painting LLC, we start with a thorough pressure wash to remove dirt, mildew, and loose paint. Then we scrape, sand, and prime any bare or compromised areas. Only once the surface is perfectly prepped do we begin applying your chosen paint.</p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">We select premium exterior paints from Sherwin-Williams, Benjamin Moore, and Behr — brands trusted for their durability, fade resistance, and adhesion in challenging climates. The result is a finish that looks stunning and stands up to whatever the Inland Northwest throws at it.</p>
                        <p className="text-lg text-gray-600 leading-relaxed">Whether you need a full exterior repaint, deck staining, fence painting, or trim refresh, our team proudly serves Spokane, Spokane Valley, Liberty Lake, Cheney, Mead, and surrounding communities.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-brand-gray/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Exterior Services We Offer</h2>
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
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Why Spokane Homeowners Trust Us</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Shield size={22} />, title: "Built for Northwest Weather", desc: "We use weather-resistant coatings specifically chosen to handle Spokane's harsh winters and hot summers." },
                            { icon: <CheckCircle size={22} />, title: "Full Surface Preparation", desc: "Proper prep is everything. We pressure wash, scrape, sand, and prime before applying a single drop of paint." },
                            { icon: <Star size={22} />, title: "Curb Appeal That Lasts", desc: "Our exterior paint jobs don't just look great on day one — they protect your home and maintain their beauty for years." },
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
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Our Exterior Painting Process</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Professional prep, premium paint, and a finish built to last in Spokane's climate.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Inspect & Estimate", desc: "We evaluate your home's exterior, identify prep needs, and provide a detailed free quote." },
                            { step: "02", title: "Pressure Wash & Prep", desc: "We clean all surfaces, scrape loose paint, sand rough spots, and caulk gaps before priming." },
                            { step: "03", title: "Prime & Paint", desc: "Two coats of premium exterior paint applied methodically for a consistent, lasting finish." },
                            { step: "04", title: "Cleanup & Review", desc: "Full site cleanup and a walkthrough with you to ensure your complete satisfaction." },
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
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">Get Your Free Exterior Estimate</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Serving Spokane, Spokane Valley, Liberty Lake, and surrounding areas.</p>
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

            <footer className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 object-contain" />
                                <span className="font-poppins font-bold text-base tracking-tight">PRESTIGE CUSTOM PAINTING <span className="text-brand-green">LLC</span></span>
                            </div>
                            <p className="text-gray-500 italic">"We strive to make our clients happy."</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
                            <div className="flex items-center gap-3 text-gray-600"><Phone size={18} className="text-brand-green" /> {phoneNumber}</div>
                            <div className="flex items-center gap-3 text-gray-600"><Mail size={18} className="text-brand-green" /> {email}</div>
                            <div className="flex items-center gap-3 text-gray-600"><MapPin size={18} className="text-brand-green" /> {location}</div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Service Area</h4>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>Spokane, WA</li><li>Spokane Valley, WA</li><li>Liberty Lake, WA</li><li>Cheney, WA</li><li>Inland Northwest</li>
                            </ul>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-brand-green">Local Resources</h4>
                            <ul className="text-gray-600 text-sm space-y-3 font-semibold">
                                <li><Link to="/our-work" className="hover:text-brand-green transition-colors uppercase">Our Work (Gallery)</Link></li>
                                <li><Link to="/blog/cost-to-paint-house-spokane" className="hover:text-brand-green transition-colors">How Much Does Painting Cost in Spokane?</Link></li>
                                <li><Link to="/blog/best-exterior-paint-spokane" className="hover:text-brand-green transition-colors">Best Exterior Paint for Spokane Weather</Link></li>
                                <li><Link to="/blog/how-often-to-paint-house-spokane" className="hover:text-brand-green transition-colors">How Often Should You Paint Your House?</Link></li>
                                <li><Link to="/blog/interior-painting-tips-spokane" className="hover:text-brand-green transition-colors">Interior Painting Tips for Spokane Homes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm"><p>© 2026 Prestige Custom Painting LLC. All rights reserved.</p></div>
                </div>
            </footer>
        </div>
    );
}

export default ExteriorPaintingPage;
