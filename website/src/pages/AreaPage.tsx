import { Phone, Mail, MapPin, CheckCircle, ArrowLeft, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export interface AreaPageProps {
    city: string;           // e.g. "Spokane Valley"
    state: string;           // e.g. "WA"
    slug: string;            // e.g. "spokane-valley"
    metaTitle: string;
    metaDesc: string;
    heroTagline: string;     // short badge above H1
    introParagraphs: string[]; // 3-4 paragraphs of unique body copy
    funFact: string;         // unique local flavour sentence
    nearbyAreas: string[];   // 4-6 nearby cities we also serve
}

export default function AreaPage({
    city,
    state,
    slug,
    metaTitle,
    metaDesc,
    heroTagline,
    introParagraphs,
    funFact,
    nearbyAreas,
}: AreaPageProps) {
    const { phoneNumber, email } = SITE_INFO;

    const faqs = [
        {
            q: `Do you paint homes in ${city}, ${state}?`,
            a: `Yes! ${city} is one of our primary service areas. We regularly complete interior and exterior painting projects for homeowners throughout ${city} and the surrounding region. Call us at ${phoneNumber} to schedule a free estimate.`,
        },
        {
            q: `How much does house painting cost in ${city}?`,
            a: `Painting costs in ${city} vary based on the size of the home, the number of rooms or stories, and the scope of prep work needed. Interior single-room projects can start around $500, while full exterior repaints typically range from $2,500 to $8,000+. We provide free, detailed estimates with no obligation.`,
        },
        {
            q: `What painting services do you offer in ${city}?`,
            a: `We offer a full range of residential and commercial painting services in ${city} including interior painting, exterior painting, cabinet refinishing, trim painting, deck staining, and drywall repair. We also serve local businesses with commercial painting and maintenance.`,
        },
        {
            q: `How do I get a painting estimate in ${city}?`,
            a: `Simply call us at ${phoneNumber} or send an email to ${email}. We'll schedule a convenient time to visit your ${city} property, assess the project, and provide a free, written estimate — no pressure, no obligation.`,
        },
    ];

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

    const benefits = [
        { icon: <MapPin size={22} />, title: `Serving ${city} Locally`, desc: `We are based right here in the Inland Northwest and regularly serve homeowners and businesses throughout ${city}, ${state}.` },
        { icon: <Shield size={22} />, title: "Licensed & Insured", desc: "Fully licensed and insured in Washington State. Hire with total confidence — your property and our team are fully protected." },
        { icon: <Clock size={22} />, title: "On-Time & Professional", desc: "We respect your schedule. Punctual arrival, clean job sites, and clear communication from estimate to final walkthrough." },
    ];

    useEffect(() => {
        document.title = metaTitle;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', metaDesc);
        
        // Clean up and inject SEO
        const cleanup = injectPageSEO({
            title: metaTitle,
            description: metaDesc,
            path: `/painting-${slug}`,
            schemas: [
                { 
                    id: 'local-business', 
                    data: { 
                        "@context": "https://schema.org", 
                        "@type": "PaintingService", 
                        "name": `Prestige Custom Painting LLC - ${city}`,
                        "description": metaDesc,
                        "url": `https://prestigecustompaintingllc.com/painting-${slug}`,
                        "telephone": phoneNumber,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": city,
                            "addressRegion": "WA",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCircle",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Painting Services"
                            },
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "address": city
                            }
                        },
                        "sameAs": [
                            SITE_INFO.facebookUrl,
                            SITE_INFO.yelpUrl,
                            SITE_INFO.nextdoorUrl,
                            SITE_INFO.bizapediaUrl,
                            SITE_INFO.liveLocalInwUrl
                        ],
                        "areaServed": {
                            "@type": "City",
                            "name": city
                        }
                    } 
                },
                { 
                    id: 'faq', 
                    data: { 
                        "@context": "https://schema.org", 
                        "@type": "FAQPage", 
                        "mainEntity": faqs.map(f => ({ 
                            "@type": "Question", 
                            "name": f.q, 
                            "acceptedAnswer": { "@type": "Answer", "text": f.a } 
                        })) 
                    } 
                }
            ]
        });
        
        return cleanup;
    }, [metaTitle, metaDesc, slug, city]);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">

            <Navbar />

            {/* Hero */}
            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Star size={12} fill="currentColor" /> {heroTagline}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            House Painters<br />
                            <span className="text-brand-green">{city}, {state}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                            Prestige Custom Painting LLC provides professional interior and exterior painting services for homeowners and businesses in {city}, {state}. Quality craftsmanship, premium materials, and a satisfaction guarantee on every project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl">
                                <Phone size={20} /> CALL FOR FREE ESTIMATE
                            </a>
                            <Link to="/#services" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                                OUR SERVICES <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body Copy */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                            Professional Painting Services in {city}, {state}
                        </h2>
                        {introParagraphs.map((para, idx) => (
                            <p key={idx} className="text-lg text-gray-600 leading-relaxed mb-6">{para}</p>
                        ))}
                        <div className="mt-8 p-6 bg-brand-green/5 border border-brand-green/20 rounded-2xl">
                            <p className="text-gray-700 italic leading-relaxed">
                                <span className="font-bold text-brand-green not-italic">Local Tip: </span>{funFact}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 md:py-20 bg-brand-gray/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                            Painting Services We Offer in {city}
                        </h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {services.map((item, idx) => (
                            <Link 
                                key={idx} 
                                to={`/service/${item.slug}`}
                                className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green transition-all group cursor-pointer"
                            >
                                <CheckCircle size={20} className="text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-green transition-colors">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                            Why {city} Homeowners Choose Prestige
                        </h2>
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

            {/* Nearby Areas */}
            <section className="py-12 md:py-16 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
                        Also Serving These Nearby Communities
                    </h2>
                    <p className="text-gray-500 mb-8">We paint homes and businesses across the entire Inland Northwest region.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {nearbyAreas && nearbyAreas.map((areaName, idx) => {
                            const areaSlug = areaName.toLowerCase().replace(/, wa/g, '').replace(/ /g, '-');
                            const to = areaName === 'Spokane, WA' ? '/house-painters-spokane' : `/painting-${areaSlug}`;
                            return (
                                <Link
                                    key={idx}
                                    to={to}
                                    className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:border-brand-green hover:text-brand-green transition-all"
                                >
                                    {areaName}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
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

            {/* CTA */}
            <section className="py-16 md:py-24 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">
                                Get a Free Estimate in {city}
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                                Ready to transform your home? Call Prestige Custom Painting LLC for a free, no-obligation estimate anywhere in {city}, {state}.
                            </p>
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


            {/* Mobile Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4">
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
