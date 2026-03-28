import { ArrowLeft, ArrowRight, MapPin, CheckCircle, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ServiceAreaPage() {
    const { phoneNumber } = SITE_INFO;

    useEffect(() => {
        const title = "Service Areas | Spokane, Spokane Valley, Liberty Lake | Prestige Custom Painting LLC";
        const description = "Find professional house painters in your area. Prestige Custom Painting LLC serves Spokane, Spokane Valley, Liberty Lake, Cheney, Airway Heights, and Deer Park.";
        document.title = title;
        return injectPageSEO({
            title,
            description,
            path: '/service-area',
        });
    }, []);

    const areas = [
        { name: "Spokane", path: "/house-painters-spokane", desc: "The heart of our operations. We serve all neighborhoods from South Hill to North Central." },
        { name: "Spokane Valley", path: "/painting-spokane-valley", desc: "Expert painting services for residential and commercial properties in the Valley." },
        { name: "Liberty Lake", path: "/painting-liberty-lake", desc: "Premium finishes for Liberty Lake's stunning modern and lakeside homes." },
        { name: "Cheney", path: "/painting-cheney", desc: "Reliable painting for homeowners and property managers near EWU and beyond." },
        { name: "Airway Heights", path: "/painting-airway-heights", desc: "Durable painting solutions for Airway Heights' growing residential and commercial zones." },
        { name: "Deer Park", path: "/painting-deer-park", desc: "Bringing the prestige standard to homeowners in the Deer Park area." },
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
                            Areas We <span className="text-brand-green">Serve</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                            From the historic South Hill to the modern developments of Liberty Lake—we bring the prestige standard to your doorstep.
                        </p>
                    </div>
                </div>
            </section>

            {/* Map & List Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">Professional Painters in the Inland Northwest</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-12">
                                At <strong>Prestige Custom Painting LLC</strong>, our mission is to provide the highest level of craftsmanship to every home and business in the <strong>Spokane County</strong> area. We understand the specific regional climate challenges and deliver results that stand the test of time.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6">
                                {areas.map((area, idx) => (
                                    <Link 
                                        key={idx} 
                                        to={area.path} 
                                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-all">
                                            <MapPin size={20} />
                                        </div>
                                        <h4 className="text-xl font-poppins font-bold mb-2 text-brand-black">{area.name}</h4>
                                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{area.desc}</p>
                                        <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                                            View Page <ArrowRight size={14} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 sticky top-32 group" style={{ height: '600px' }}>
                                <iframe
                                    title="Prestige Custom Painting LLC Service Area - Spokane WA"
                                    src="https://maps.google.com/maps?q=Spokane,%20WA&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="absolute top-8 left-8 bg-brand-black p-6 rounded-2xl shadow-xl z-20 border-b-2 border-brand-green">
                                    <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                        <Globe size={18} className="text-brand-green" /> Spokane County
                                    </h4>
                                    <p className="text-gray-400 text-sm">Serving the Inland Northwest since founded.</p>
                                    <div className="mt-4 flex items-center gap-2 text-brand-green font-bold text-xs animate-pulse">
                                        <CheckCircle size={14} /> NOW BOOKING 2026
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Promise */}
            <section className="py-20 md:py-32 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="w-20 h-20 bg-brand-green/10 rounded-3xl flex items-center justify-center text-brand-green mx-auto">
                            <Shield size={40} />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black leading-tight">Your Local <span className="text-brand-green">Spokane</span> Partner</h3>
                        <p className="text-xl text-gray-600 leading-relaxed italic">
                            "We don't just paint houses; we protect homes. No matter where you are in the Inland Northwest, you can expect the same prestige standard of care."
                        </p>
                        <div className="pt-6">
                            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-3 bg-brand-black text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-brand-green transition-all hover:scale-105 shadow-xl shadow-green-500/20">
                                CALL {phoneNumber}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ServiceAreaPage;
