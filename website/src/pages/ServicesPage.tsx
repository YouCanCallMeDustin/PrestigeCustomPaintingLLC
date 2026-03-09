import { Phone, Mail, MapPin, CheckCircle, ArrowLeft, Paintbrush, Home, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServicesPage() {
    const phoneNumber = "(509) 714-9491";
    const email = "buddylee12091@gmail.com";
    const location = "Spokane Valley, WA";

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img
                            src="/logo.png"
                            alt="Prestige Custom Painting LLC Logo"
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

            {/* Header */}
            <section className="bg-brand-black py-12 md:py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm md:text-base">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mb-6">
                        Our <span className="text-brand-green">Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
                        From meticulous interior transformations to durable exterior protection,
                        we provide premium painting solutions tailored to your unique needs.
                    </p>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-16 md:py-24 space-y-24 md:space-y-32">
                {/* Interior */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 md:mb-8">
                                <Paintbrush size={30} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Interior Painting</h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                                We believe your home's interior should reflect your personal style and provide a sanctuary for your family. Our interior painting process is designed to be clean, efficient, and exceptionally high-quality.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {[
                                    "Full wall and ceiling painting",
                                    "Accent walls and specialty finishes",
                                    "Cabinet painting and refinishing",
                                    "Drywall repair and texture matching",
                                    "Wallpaper removal"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                                        <CheckCircle size={18} className="text-brand-green shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
                            <div className="absolute inset-0 bg-brand-green rounded-[2.5rem] md:rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img
                                src="/interior.png"
                                alt="Interior Painting Showcase"
                                className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl object-cover w-full aspect-square"
                            />
                        </div>
                    </div>
                </div>

                {/* Exterior */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 md:mb-8">
                                <Home size={30} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Exterior Painting</h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                                Protecting your property from the elements is our top priority. We use weather-resistant, premium-grade paints that stand up to the specific climate challenges of the Inland Northwest.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {[
                                    "Complete house exterior painting",
                                    "Deck and fence staining",
                                    "Pressure washing and surface prep",
                                    "Siding and trim repair",
                                    "Stucco and masonry coatings"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                                        <CheckCircle size={18} className="text-brand-green shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
                            <div className="absolute inset-0 bg-brand-green rounded-[2.5rem] md:rounded-[3rem] -rotate-3 scale-105 opacity-10" />
                            <img
                                src="/exterior.png"
                                alt="Exterior Painting Showcase"
                                className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl object-cover w-full aspect-square"
                            />
                        </div>
                    </div>
                </div>

                {/* Finish Work */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 md:mb-8">
                                <Sparkles size={30} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Finish Work</h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                                The difference is in the details. Our "Finish Work" services focus on the highest level of craftsmanship for cabinets, trim, and specialty fine-finish projects.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {[
                                    "Detailed crown molding and trim",
                                    "Cabinet refinishing (Factory Look)",
                                    "Door and window frame painting",
                                    "Staircase and banister staining",
                                    "High-gloss and satin specialty coatings"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                                        <CheckCircle size={18} className="text-brand-green shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
                            <div className="absolute inset-0 bg-brand-green rounded-[2.5rem] md:rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img
                                src="/finish.png"
                                alt="Finish Work Showcase"
                                className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl object-cover w-full aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8">
                                Experience the <br /><span className="text-brand-green">Prestige Difference.</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-xl">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl backdrop-blur-md transition-all">
                                    GET A QUOTE
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
                            <p className="text-gray-500 italic">"We strive to make our clients happy."</p>
                        </div>

                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                                <Phone size={18} className="text-brand-green" /> {phoneNumber}
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
                                <MapPin size={18} className="text-brand-green" /> {location}
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="font-bold text-lg mb-4">Service Area</h4>
                            <ul className="text-gray-600 text-sm">
                                <li>Spokane Valley & Surrounding Areas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
                        © 2026 Prestige Custom Painting LLC. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ServicesPage;
