import { Phone, Mail, MapPin, ArrowLeft, Star, Camera, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function OurWorkPage() {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        document.title = "Our Work | Professional Painters in Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'View our gallery of completed painting projects in Spokane, WA. From interior transformations to durable exterior finishes, see why Prestige Custom Painting LLC is the top choice for Spokane homeowners.');
        window.scrollTo(0, 0);
    }, []);

    const images = [
        { id: 1, src: "/1.jpg", alt: "Professional interior painting in Spokane - living room transformation" },
        { id: 2, src: "/2.jpg", alt: "Expert exterior house painting Spokane WA - crisp trim and siding" },
        { id: 3, src: "/3.jpg", alt: "Professional cabinet refinishing Spokane - modern kitchen update" },
        { id: 4, src: "/4.jpg", alt: "High-end interior paint application - Spokane residential project" },
        { id: 5, src: "/5.jpg", alt: "Professional exterior painting services - durable home protection" },
        { id: 6, src: "/6.jpg", alt: "Custom interior painting Spokane WA - bedroom accent wall" },
        { id: 7, src: "/7.jpg", alt: "Professional interior painting - high-quality wall finishes in Spokane" },
        { id: 8, src: "/8.jpg", alt: "Professional commercial painting project Spokane - workspace update" },
        { id: 9, src: "/9.jpg", alt: "Modern home exterior - professional painters Spokane WA" },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
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
                            <Phone size={18} className="text-brand-green" />{phoneNumber}
                        </a>
                        <a href={`mailto:${email}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="bg-brand-black py-12 md:py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm md:text-base">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Camera size={14} /> RECENT PROJECT GALLERY
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
                            Our <span className="text-brand-green">Work</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
                            See the results for yourself. We take pride in every brushstroke,
                            delivering professional painting solutions that transform homes and businesses across Spokane.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {images.map((image) => (
                            <div 
                                key={image.id} 
                                className="group relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 bg-gray-50"
                            >
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 text-brand-green mb-2">
                                        <Star size={16} fill="currentColor" />
                                        <span className="text-xs font-bold tracking-widest uppercase">Verified Quality</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm md:text-base leading-snug">
                                        {image.alt}
                                    </p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-brand-black shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <CheckCircle size={12} className="text-brand-green" /> PRESTIGE QUALITY
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why the Detail Matters */}
            <section className="py-16 md:py-24 bg-brand-gray/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">Difference in the Detail</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <Star size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Superior Preparation</h4>
                                        <p className="text-gray-600">The secret to a long-lasting paint job is in the prep. We sand, fill, and patch every surface to perfection.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <Camera size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Clean Job Sites</h4>
                                        <p className="text-gray-600">We treat your home like our own. Our work areas are cleaned daily, ensuring minimal disruption to your life.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-green shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Locally Trusted</h4>
                                        <p className="text-gray-600">Serving Spokane, Spokane Valley, and Liberty Lake with a reputation for excellence and reliability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-3xl rotate-3 scale-105 opacity-10" />
                            <img 
                                src="/exterior.png" 
                                alt="Professional exterior painting results" 
                                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[16/9] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8">
                                Ready for your own <br /><span className="text-brand-green">transformation?</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-green-500/20">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl backdrop-blur-md transition-all">
                                    GET A FREE QUOTE
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

            <Footer />
        </div>
    );
}

export default OurWorkPage;
