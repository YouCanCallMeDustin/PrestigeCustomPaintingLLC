import { 
    MapPin, 
    ArrowRight, 
    Phone, 
    CheckCircle, 
    Star, 
    Shield, 
    BookOpen, 
    Layers, 
    Info, 
    AlertTriangle, 
    Droplets 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { areaData } from '../data/areaData';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateLocalBusinessSchema } from '../lib/schemaGenerator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServiceAreaPage() {
    const { phoneNumber, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How many towns do you serve in the Spokane region?",
            a: "We serve over 60 specific regional areas, including the entire Spokane Valley, Liberty Lake, Cheney, and Airway Heights."
        },
        {
            q: "Do you charge more for travel to outlying areas like Deer Park?",
            a: "Our estimates are comprehensive and transparent. We serve the entire Inland Northwest with consistent, competitive pricing regardless of the exact town."
        },
        {
            q: "What is the best time of year to paint a house in Spokane?",
            a: "Exterior season typically runs from late April through October. Interior painting can be done year-round with low-VOC, eco-friendly products."
        },
        {
            q: "Are you licensed to work in Post Falls and Idaho?",
            a: "Yes, we are fully registered and insured to provide professional painting services across the border in Post Falls and the broader Kootenai County area."
        }
    ];

    useEffect(() => {
        const title = "House Painters Spokane Service Areas | Prestige Custom Painting";
        const description = "Looking for professional house painters in Spokane? We serve 67+ regional areas with premium interior and exterior painting. Call (509) 596-3351 for a free quote!";

        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/service-area',
            schemas: [
                {
                    id: 'service',
                    data: {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "House Painting Services",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Prestige Custom Painting LLC",
                            "telephone": phoneNumber,
                            "url": "https://prestigecustompaintingllc.com"
                        },
                        "areaServed": areaData.map(a => ({
                            "@type": "City",
                            "name": a.city,
                            "addressRegion": "WA"
                        })),
                        "description": "Premium interior, exterior, and cabinet painting services across 60+ areas in the Spokane region."
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
                },
                {
                    id: 'local-business',
                    data: generateLocalBusinessSchema()
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Site Evaluation & Color Consultation",
            description: "We assess the substrate condition and help select the perfect palette.",
            proTip: "Test samples in both morning and evening light to see the true undertones.",
            reason: "Ensures the color matches your home's character and regional light."
        },
        {
            title: "Industrial Power Washing (Exteriors)",
            description: "Removing Spokane's seasonal grime, mold, and loose debris.",
            pitfall: "Skipping the dry time after washing, which traps moisture under the paint.",
            reason: "Paint only sticks to what it's touching. Clean surfaces are non-negotiable."
        },
        {
            title: "Meticulous Masking & Protection",
            description: "Covering windows, landscaping, and floors with heavy-duty plastic and drop cloths.",
            reason: "Clean lines are the difference between a DIY look and a 'Prestige' finish."
        },
        {
            title: "Scraping & Sanding",
            description: "Mechanical removal of failing layers.",
            reason: "Prevents 'feathering' and ensures a smooth, uniform surface."
        },
        {
            title: "High-Performance Priming",
            description: "Applying specialized bonding primers from Sherwin Williams or Benjamin Moore.",
            reason: "Blocks stains and creates a 'grip' for the top coat."
        },
        {
            title: "Professional Application",
            description: "Two coats of premium, high-build paint applied via HVLP spray or expert brush/roll.",
            proTip: "Using Benjamin Moore SCUFF-X for high-traffic interior halls is a game-changer for durability."
        },
        {
            title: "Detail Work (Trim & Molding)",
            description: "Hand-finishing edges and architectural details."
        },
        {
            title: "Total Site Cleanup",
            description: "Removing all debris, tape, and equipment. We leave your home cleaner than we found it."
        },
        {
            title: "Final Walkthrough with Robert",
            description: "A personal inspection to ensure we hit our 'Expect Excellence' standard."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-sans text-left">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <MapPin size={12} fill="currentColor" /> Serving 60+ Communities Locally
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1]">
                            House Painters Spokane Service Areas: <br />
                            <span className="text-brand-green italic uppercase tracking-tighter text-shadow-sm">Regional Excellence.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Premium painting across the Inland Northwest. We serve 67+ regional areas with meticulous interior and exterior transformations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> CALL {phoneNumber}
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Service Area Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Comprehensive Coverage: Serving 60+ communities including Spokane, Spokane Valley, and Liberty Lake.",
                                "Climate-Ready Coatings: Specializing in weather-resistant paints for the Pacific Northwest.",
                                "Full-Service Experts: Professional interior, exterior, and custom cabinet transformations.",
                                "Trust & Transparency: Licensed, bonded, insured, and committed to \"Expect Excellence.\""
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle size={20} className="text-brand-green shrink-0 mt-1" />
                                    <p className="text-gray-700 font-medium text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Snippet Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-lg text-sm font-bold mb-6 uppercase tracking-wider">
                            Regional Coverage
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            Where We Provide Excellence
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic mb-12">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Prestige Custom Painting LLC is a premium residential and commercial painting contractor serving House Painters Spokane Service Areas, including Spokane County and surrounding regions. We specialize in high-durability coatings designed to withstand the Inland Northwest's extreme seasonal shifts."
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm mb-16">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen size={20} className="text-brand-green" /> Inside This guide
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Regionally Specialized Services", id: "regionally-specialized-services" },
                                    { label: "Our 9-Step Prestige Process", id: "process" },
                                    { label: "Climate-Ready Best Practices", id: "best-practices" },
                                    { label: "Standard vs. Prestige Comparison", id: "comparison" },
                                    { label: "Common Regional Mistakes", id: "mistakes" },
                                    { label: "Inland Northwest FAQ", id: "faq" }
                                ].map((item, i) => (
                                    <a key={i} href={`#${item.id}`} className="text-brand-green hover:underline font-medium flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full" /> {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div id="regionally-specialized-services" className="scroll-mt-24 space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-brand-black mb-6">Our Regionally Specialized Services</h3>
                            <p>
                                Providing high-quality painting in the Inland Northwest requires more than just a brush. It requires an understanding of how our dry summers and snowy winters affect wood, siding, and masonry. We provide tailored solutions for homeowners from the historic <strong>South Hill</strong> to the booming developments in <strong>Liberty Lake</strong>.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-2xl">
                                <p className="text-blue-900 leading-relaxed">
                                    <span className="font-bold">Why it matters:</span> Using the wrong paint formula in Spokane's fluctuating humidity can lead to premature peeling or cracking. For example, a South Hill Victorian requires meticulous historical prep, whereas a newer Post Falls home may benefit from modern, high-build elastomeric coatings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* List of Areas Section */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">Cities & Communities We Serve</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {areaData.map((area, idx) => (
                            <Link
                                key={idx}
                                to={area.slug === 'spokane' ? '/house-painters-spokane' : `/painting-${area.slug}`}
                                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-green hover:shadow-xl hover:shadow-green-500/5 transition-all text-left"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                                        <MapPin size={20} />
                                    </div>
                                    <ArrowRight size={18} className="text-gray-300 group-hover:text-brand-green transform group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-poppins font-bold text-gray-900 group-hover:text-brand-green transition-colors">{area.city}</h3>
                                <p className="text-xs text-gray-400 mt-1 font-bold uppercase tracking-[0.1em]">Washington State</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step Process Section */}
            <section id="process" className="py-16 md:py-24 bg-brand-black text-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Expect Excellence.</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-tight">The 9-Step Prestige Process</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our rigorous methodology is designed for the Inland Northwest's unique demands.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all text-left">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter leading-8">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.description}</p>
                                
                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="flex gap-3 text-xs">
                                        <Info size={14} className="text-brand-green shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-brand-green not-italic uppercase tracking-tighter">Why it matters:</span> {step.reason || "Ensures long-term durability and aesthetic perfection."}</p>
                                    </div>
                                    {step.proTip && (
                                        <div className="flex gap-3 text-xs">
                                            <Star size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                                            <p className="italic text-gray-300"><span className="font-bold text-yellow-400 not-italic uppercase tracking-tighter">Pro Tip:</span> {step.proTip}</p>
                                        </div>
                                    )}
                                    {step.pitfall && (
                                        <div className="flex gap-3 text-xs">
                                            <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
                                            <p className="italic text-gray-300"><span className="font-bold text-red-100 not-italic uppercase tracking-tighter">Pitfall:</span> {step.pitfall}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Practices Section */}
            <section id="best-practices" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Climate-Ready Best Practices</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                <Droplets size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Moisture Management</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    In the Inland Northwest, the timing of your exterior project is everything. We monitor dew point and surface temperature daily to ensure optimal curing.
                                </p>
                            </div>
                        </div>
                        <div className="bg-brand-gray/30 border-l-8 border-brand-green p-8 rounded-r-3xl mt-12">
                            <h4 className="font-bold text-brand-black mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                                <Shield size={18} className="text-brand-green" /> Expert Climate Note
                            </h4>
                            <p className="text-gray-700 italic font-medium leading-relaxed text-lg">
                                "Never apply exterior paint when the temperature is expected to drop below 35°F within 24 hours. The curing process needs stable temperatures to form a durable protective film that can withstand Spokane winters."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section id="comparison" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">Standard vs. Prestige</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">The difference is in the details that others skip.</p>
                    </div>
                    <div className="max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] border border-gray-200 shadow-2xl">
                        <table className="w-full text-left bg-white border-collapse">
                            <thead>
                                <tr className="bg-brand-black text-white">
                                    <th className="p-6 md:p-8 font-poppins font-bold uppercase tracking-widest text-sm">Feature</th>
                                    <th className="p-6 md:p-8 font-poppins font-bold uppercase tracking-widest text-sm">Discount Painters</th>
                                    <th className="p-6 md:p-8 font-poppins font-bold uppercase tracking-widest text-sm text-brand-green">Prestige Custom</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { f: "Prep Work", s: "Speed-focused, minimal scraping", p: "50% of total project time spent on prep" },
                                    { f: "Paint Quality", s: "Contractor-grade (Standard)", p: "Premium (Sherwin-Williams / Benjamin Moore)" },
                                    { f: "Warranty", s: "Verbal or none", p: "Definitive Warranty & Fully Insured" },
                                    { f: "Cleanup", s: "Often leaves tape/debris behind", p: "Meticulous post-job site restoration" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-6 md:p-8 font-bold text-brand-black align-top">{row.f}</td>
                                        <td className="p-6 md:p-8 text-gray-500 text-sm align-top">{row.s}</td>
                                        <td className="p-6 md:p-8 text-brand-black font-bold text-sm align-top italic border-l border-brand-green/10">{row.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Mistakes Section */}
            <section id="mistakes" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black uppercase tracking-tighter leading-tight">Regional Mistakes to Avoid</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Painting Over Wet Siding", description: "Always wait at least 48 hours after rain or power washing. Moisture trapped under paint causes instant bubbling." },
                            { title: "Ignoring Humidity Shifts", description: "Extreme Spokane dry spells (under 15%) can cause paint to flash dry, leaving marks. We use extenders for a 'wet edge'." },
                            { title: "Cheap Caulk Failure", description: "Generic caulk snaps in freezing winters. We use high-grade urethane sealants that stretch with your home's movement." }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-red-500/10 group hover:border-red-500 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium italic"><span className="font-bold text-red-500 uppercase not-italic">Avoid:</span> {item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-brand-gray/40 scroll-mt-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter leading-tight">Inland Northwest FAQ</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-3xl hover:border-brand-green transition-all bg-white group shadow-sm">
                                <h3 className="font-poppins font-bold text-xl mb-4 text-brand-black group-hover:text-brand-green transition-colors">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8 leading-tight">
                                House Painting Done <br />Right. Every Time.
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Whether you're in Spokane, Liberty Lake, or Post Falls, choose the team that understands regional demands. Request your free estimate today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:shadow-2xl shadow-green-500/30">
                                    {phoneNumber}
                                </a>
                                <Link to="/#contact" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    BOOK NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-sm border border-gray-100">
                        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Regional Specialist</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                With over 15 years of painting expertise in the Inland Northwest, Robert ensures every project—from the South Hill to Airway Heights—meets the "Expect Excellence" standard.
                            </p>
                            <div className="flex items-center justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                <p>Licensed. Bonded. Insured.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
