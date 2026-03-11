import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Star, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
    const phoneNumber = "(509) 714-9491";
    const email = "buddylee12091@gmail.com";
    const location = "Spokane Valley, WA";
    const ownerName = "Robert";

    const handleScrollToServices = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Prestige Custom Painting LLC logo - House Painters Spokane WA"
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                        <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}
                            <span className="text-brand-green">PAINTING</span>{" "}
                            <span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-3 md:gap-6">
                        <a href={`tel:${phoneNumber}`} className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-brand-green transition-colors">
                            <Phone size={18} className="text-brand-green" />
                            {phoneNumber}
                        </a>
                        <a href={`mailto:${email}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 -skew-x-12 transform translate-x-20" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="max-w-3xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs md:text-sm font-bold mb-6">
                            <Star size={14} fill="currentColor" />
                            TRUSTED YEAR-ROUND IN SPOKANE COUNTY
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold leading-tight mb-6 md:mb-8">
                            Top-Rated House Painters in <br className="hidden md:block" />
                            <span className="text-brand-green">Spokane, WA.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Professional, modern painting solutions for your home and business.
                            Top-tier quality based in Spokane Valley, serving the entire Inland Northwest.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                                <Phone size={22} className="text-brand-green" />
                                CALL NOW
                            </a>
                            <button
                                onClick={handleScrollToServices}
                                className="flex items-center justify-center gap-2 border-2 border-brand-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-gray transition-all"
                            >
                                OUR SERVICES
                                <ArrowRight size={20} />
                            </button>
                        </div>
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

            {/* Services Grid */}
            <section id="services" className="py-20 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Our Professional Services</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Interior Painting", desc: "Precise edge work and premium finishes for every room in your home.", link: "/interior-painting-spokane" },
                            { title: "Exterior Painting", desc: "Durable, weather-resistant coatings to protect your property's value.", link: "/exterior-painting-spokane" },
                            { title: "Cabinet Painting", desc: "Expert trim, door, and cabinet painting that feels like a factory finish.", link: "/cabinet-painting-spokane" }
                        ].map((service, idx) => (
                            <div key={idx} className="group p-6 md:p-8 border border-gray-100 rounded-3xl hover:border-brand-green hover:shadow-2xl hover:shadow-green-500/10 transition-all cursor-default overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform" />
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
                                    <CheckCircle size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-poppins font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{service.desc}</p>
                                <Link to={service.link} className="flex items-center gap-2 text-brand-green font-bold text-sm hover:translate-x-1 transition-transform">
                                    LEARN MORE <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
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
                                to bring a higher standard of professionalism and care to the local painting industry.
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
            <footer className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                                <img
                                    src="/logo.png"
                                    alt="Prestige Custom Painting LLC Logo"
                                    className="w-10 h-10 object-contain"
                                />
                                <span className="font-poppins font-bold text-base tracking-tight">PRESTIGE CUSTOM PAINTING <span className="text-brand-green">LLC</span></span>
                            </div>
                            <p className="text-gray-500 leading-relaxed italic">
                                "We strive to make our clients happy."
                            </p>
                        </div>

                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                                <Phone size={18} className="text-brand-green" /> {phoneNumber}
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                                <Mail size={18} className="text-brand-green" /> {email}
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                                <MapPin size={18} className="text-brand-green" /> {location}
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="font-bold text-lg mb-4">Service Areas</h4>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li><Link to="/painting-spokane-valley" className="hover:text-brand-green transition-colors">Spokane Valley, WA</Link></li>
                                <li><Link to="/painting-liberty-lake" className="hover:text-brand-green transition-colors">Liberty Lake, WA</Link></li>
                                <li><Link to="/painting-airway-heights" className="hover:text-brand-green transition-colors">Airway Heights, WA</Link></li>
                                <li><Link to="/painting-cheney" className="hover:text-brand-green transition-colors">Cheney, WA</Link></li>
                                <li><Link to="/painting-deer-park" className="hover:text-brand-green transition-colors">Deer Park, WA</Link></li>
                                <li><Link to="/house-painters-spokane" className="hover:text-brand-green transition-colors">Spokane, WA</Link></li>
                            </ul>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-brand-green">Local Resources</h4>
                            <ul className="text-gray-600 text-sm space-y-3 font-semibold">
                                <li><Link to="/blog/cost-to-paint-house-spokane" className="hover:text-brand-green transition-colors">How Much Does Painting Cost in Spokane?</Link></li>
                                <li><Link to="/blog/best-exterior-paint-spokane" className="hover:text-brand-green transition-colors">Best Exterior Paint for Spokane Weather</Link></li>
                                <li><Link to="/blog/how-often-to-paint-house-spokane" className="hover:text-brand-green transition-colors">How Often Should You Paint Your House?</Link></li>
                                <li><Link to="/blog/interior-painting-tips-spokane" className="hover:text-brand-green transition-colors">Interior Painting Tips for Spokane Homes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
                        <p>© 2026 Prestige Custom Painting LLC. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
