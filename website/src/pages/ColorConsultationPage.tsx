import { ArrowLeft, Palette, Sun, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ColorConsultationPage() {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        const title = "Professional Color Consultation | Spokane Painters | Prestige Custom Painting LLC";
        const description = "Not sure which color to choose? Our professional color consultation in Spokane, WA helps you find the perfect palette for your home's architecture and lighting.";
        document.title = title;
        return injectPageSEO({
            title,
            description,
            path: '/color-consultation',
        });
    }, []);

    const process = [
        { icon: <Palette size={24} />, title: "Personal Style Assessment", desc: "We discuss your vision, the mood you want to create, and any existing furniture or landscaping that will influence the palette." },
        { icon: <Sun size={24} />, title: "Lighting Analysis", desc: "Spokane's northern light changes dramatically throughout the seasons. We test how samples look in morning, afternoon, and artificial light." },
        { icon: <Layers size={24} />, title: "Digital Mockups & Real Samples", desc: "We provide high-quality Sherwin Williams and Benjamin Moore color chips and can perform on-wall test patches for absolute confidence." },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero */}
            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm uppercase tracking-widest">
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
                            Color <span className="text-brand-green">Consultation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                            The right color can completely transform your home's energy. We help you choose a palette that reflects your prestige standard with confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">Spokane's Expert Eye for Color</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Choosing the right color for an exterior or interior project is one of the most stressful parts of a home transformation. With thousands of options from <strong>Benjamin Moore</strong> and <strong>Sherwin Williams</strong>, it's easy to feel overwhelmed.
                                </p>
                                <p>
                                    At <strong>Prestige Custom Painting LLC</strong>, we believe that the consultation process is just as important as the final brushstroke. We don't just hand you a fan deck and walk away. We take the time to understand your home's unique character, the surrounding Spokane landscape, and the specific lighting of your space.
                                </p>
                                <p>
                                    Our goal is to eliminate second-guessing. We help you select colors that harmonize with your neighborhood while expressing your unique personality, ensuring your home stands out for all the right reasons.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative max-w-lg mx-auto lg:max-w-none">
                            <div className="absolute -inset-4 bg-brand-green/10 rounded-[3rem] rotate-2" />
                            <img
                                src="/interior.png" // Using existing image
                                alt="Color consultation process for Spokane home"
                                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover aspect-video grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-black px-8 py-6 rounded-2xl shadow-xl border-l-4 border-brand-green">
                                <p className="text-white font-bold text-lg italic">"Color is the soul of a room."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Process */}
            <section className="py-20 md:py-32 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black">The Consultation Process</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                        {process.map((p, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 shadow-inner">
                                    {p.icon}
                                </div>
                                <h4 className="text-2xl font-poppins font-bold mb-4 text-brand-black">{p.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-lg">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-white text-brand-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-poppins font-bold text-white mb-8">
                                Ready to find your <br className="hidden md:block" /> perfect <span className="text-brand-green italic font-poppins">palette?</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-green-500/20">
                                    CALL {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl backdrop-blur-md transition-all">
                                    EMAIL US
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ColorConsultationPage;
