import { Phone, CheckCircle, ArrowLeft, Star, User, BookOpen, Layers, CheckSquare, Palette, Sun, Eye, Contrast, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ColorConsultationPage() {
    const { phoneNumber, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How much does a color consultation cost in Spokane?",
            a: "We offer complimentary color consultations for all contracted painting projects. For standalone consulting, our hourly rate is $125, which includes on-site light analysis and a digital specification report."
        },
        {
            q: "Do you provide actual paint samples?",
            a: "Yes. We utilize 'Samplize' 9x14 stick-on swatches and can also perform physical test patches on your walls to ensure the color translates correctly in your specific lighting."
        },
        {
            q: "Can you help match existing colors?",
            a: "Absolutely. We use high-precision color-matching sensors to identify existing shades, allowing us to either match them exactly or find a modern update that complements the original hue."
        },
        {
            q: "What brands of paint do you recommend?",
            a: "We primarily specify Sherwin-Williams and Benjamin Moore due to their superior pigment density and color consistency across different lighting conditions found in the Inland Northwest."
        },
        {
            q: "How long is a typical consultation?",
            a: "Most residential consultations take 60 to 90 minutes. This allows enough time to walk the property, analyze the light, and narrow down the final palette."
        }
    ];

    useEffect(() => {
        const title = "Color Consultation Spokane | Interior & Exterior Palette Design";
        const description = "Spokane's expert color consultation services. Professional palette design for interiors and exteriors. Personalize your home's look. Free estimates!";
        
        return injectPageSEO({
            title,
            description,
            path: '/color-consultation',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/color-consultation"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Initial Aesthetic Interview",
            desc: "We discuss your personal style, the mood you wish to evoke in each space, and any fixed elements like flooring or stone that must be harmonized.",
            proTip: "Collect 3-5 'inspiration' photos before our meeting to help us quickly identify your preferred undertones and saturation levels.",
            pitfall: "Ignoring the surrounding environment. An exterior color that looks great in Arizona may look cold and gray under Spokane's winter skies."
        },
        {
            title: "Architectural & Light Audit",
            desc: "We analyze how natural light enters your home at different times of day, as well as the 'CRI' of your interior artificial lighting.",
            proTip: "North-facing rooms in Spokane often need 'warmer' undertones to prevent colors from feeling flat and dingy during the gray months.",
            pitfall: "Choosing a color based on a single small swatch. Light can change a color by up to 30% depending on the time of day."
        },
        {
            title: "Palette Concept Development",
            desc: "We curate 3 distinct color stories based on our interview and audit, providing a range from 'Safe & Timeless' to 'Modern & Bold'.",
            proTip: "Always look at your palette options on a vertical plane (the wall), not flat on a table, as light hits vertical surfaces differently.",
            pitfall: "Following trends blindly. A popular 'color of the year' might not suit your home's specific architectural era or layout."
        },
        {
            title: "Large-Scale Sample Testing",
            desc: "We apply 9x14 adhesive samples or physical test patches to multiple walls so you can live with the choice for 24-48 hours.",
            proTip: "View the samples at night under your regular interior lighting; this is when you'll spend most of your time in the space.",
            pitfall: "Painting test patches directly over a dark original color. The old color will 'bleed' through the thin test coat and skew your perception."
        },
        {
            title: "Finish & Sheen Calibration",
            desc: "We select the specific sheens (matte, satin, semi-gloss) that will maximize both the visual impact and the durability of each surface.",
            proTip: "Matte finishes are excellent for hiding wall imperfections in high-light areas, while satins offer better washability in kitchens.",
            pitfall: "Using high-gloss on large flat walls. This highlights every bump and joint in the drywall, creating a busy, distracting look."
        },
        {
            title: "Final Specification Document",
            desc: "You receive a detailed report with exact paint codes, sheens, and application locations to ensure your painting crew delivers perfection.",
            proTip: "Keep this document in your home's digital files; it makes future touch-ups or color matching a 5-minute task.",
            pitfall: "Relying on 'color names' alone. Different brands use the same names for different hues; always use the specific four-digit paint code."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <Palette size={12} fill="currentColor" /> Professional Palette Design
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1]">
                            Color Consultation Spokane: <br />
                            <span className="text-brand-green italic uppercase tracking-tighter text-shadow-sm">Defined Vision.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Eliminate the guesswork and find the perfect palette that harmonizes with Spokane's unique light and your home's architecture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> BOOK A CONSULTATION
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Service Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            {[
                                "Expert color theory applied to your unique home style.",
                                "Deep analysis of Spokane's varying seasonal light conditions.",
                                "Large-scale physical samples & digital palette mockups.",
                                "Harmonized flows between interior rooms & exterior curb appeal."
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
            <section className="py-16 md:py-24 bg-white text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-lg text-sm font-bold mb-6">
                            Design Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is a Professional Color Consultation?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Color consultation is a professional service where design experts assist homeowners in selecting the perfect paint colors for their property. This involves analyzing light conditions, architectural style, fixed elements (flooring/stone), and the desired psychological impact to create a cohesive and timeless aesthetic."
                            </p>
                        </div>
                        
                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
                                <BookOpen size={20} className="text-brand-green" /> Inside This Guide
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 text-left">
                                {[
                                    { label: "The Psychology of Color", id: "psychology" },
                                    { label: "Spokane's Lighting Ethics", id: "light" },
                                    { label: "The 6-Step Design Process", id: "process" },
                                    { label: "Interior vs. Exterior Flow", id: "flow" },
                                    { label: "Common Palette Failures", id: "failures" },
                                    { label: "Spokane Color FAQ", id: "faq" }
                                ].map((item, i) => (
                                    <a key={i} href={`#${item.id}`} className="text-brand-green hover:underline font-medium flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full" /> {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Section 1: Psychology */}
            <section id="psychology" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                The Psychology of Your Palette
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Color is the most powerful tool in your home's interior design. It has the ability to make a small room feel expansive, a cold space feel cozy, and a busy home feel serene.
                                </p>
                                <p>
                                    In Spokane, where we spend significant time indoors during the winter, your interior palette is vital for your mood and well-being. We help you choose colors that provide 'visual respite,' creating a home that feels like a sanctuary year-round.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=1000" 
                                alt="Modern interior palette in a Spokane home" 
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Lighting Section */}
            <section id="light" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">Spokane Lighting Ethics</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Lighting is the variable that changes everything. We master it.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            { name: "North-Facing Light", desc: "Cool and bluish. Requires warmer pink or yellow undertones to avoid a desaturated, 'muddy' appearance." },
                            { name: "South-Facing Light", desc: "Warm and intense. Can handle deep, saturated colors and cool grays that might feel too cold elsewhere." },
                            { name: "East/West Light", desc: "Shifts dramatically throughout the day. Requires a balanced hue that looks consistent from sunrise to sunset." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-green transition-all shadow-sm">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                    <Sun size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.name}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section id="process" className="py-16 md:py-24 bg-brand-black text-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Ideate. Test. Confirm.</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white leading-tight">Our 6-Step Design System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">We follow a rigorous methodology to ensure your color is correct the first time.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all relative overflow-hidden">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter leading-8">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.desc}</p>
                                
                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="flex gap-3 text-xs">
                                        <Star size={14} className="text-brand-green shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-brand-green not-italic uppercase tracking-tighter">Pro Tip:</span> {step.proTip}</p>
                                    </div>
                                    <div className="flex gap-3 text-xs">
                                        <ShieldAlert size={14} className="text-red-400 shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-red-100 not-italic uppercase tracking-tighter">Pitfall:</span> {step.pitfall}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow Section */}
            <section id="flow" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Interior vs. Exterior Flow</h2>
                        <div className="space-y-8 text-left">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Curb Appeal Harmony</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        We analyze your home's fixed elements—roof color, stone accents, and landscaping—to select an exterior palette that feels rooted in the Spokane environment rather than fighting against it.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <CheckSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Whole-Home Interior Flow</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                        We don't look at rooms in isolation. We create a 'common thread' through your home, ensuring that the transition from a living room to a hallway feels natural and cohesive.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <User size={18} className="text-brand-green" /> Expert Insight
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "Most people pick a color they like. My job is to pick the color that makes the room look like it was always meant to be that way. It's about context and harmony." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Palette Failures */}
            <section id="failures" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black uppercase tracking-tighter">Common Palette Failures</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { f: "The 'Neon' Trap", r: "Colors on a tiny swatch look much more intense when applied to 1,000 square feet. This leads to a home looking 'glowy' or primary." },
                            { f: "Undertone Clash", s: "Choosing a 'cool' gray for a room with 'warm' wood floors, creating a visual vibration that feels unsettling." },
                            { f: "The Dirty Siding Effect", r: "Selecting a white for the exterior that has too much yellow or gray, making the house look permanently unwashed." },
                            { f: "Ignoring Fixed Elements", s: "Picking colors that fight with the roof or brick, making the home look disjointed and poorly planned." },
                            { f: "Ignoring Sheen Impact", r: "Using too high a sheen in a high-light room, creating blinding glares that overpower the actual color." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <Contrast size={20} className="text-red-500" /> {item.f}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium"><span className="font-bold text-brand-green uppercase tracking-tighter">Result:</span> {item.r || item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter leading-tight">Spokane Color FAQ</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-3xl hover:border-brand-green transition-all bg-gray-50 group">
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
                                Define Your Space <br />With Precision.
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't leave your home's aesthetic to chance. Invest in a professional consultation that guarantees a palette you'll love for years.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:shadow-2xl shadow-green-500/30">
                                    {phoneNumber}
                                </a>
                                <Link to="/#contact" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    GET STARTED
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-sm">
                        <div className="w-40 h-40 shrink-0 relative text-center">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                With over two decades of experience in high-end residential painting, Robert provides personal color consultations that bridge the gap between architectural theory and practical application.
                            </p>
                            <div className="flex items-center justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Master Color Consultant</p>
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
