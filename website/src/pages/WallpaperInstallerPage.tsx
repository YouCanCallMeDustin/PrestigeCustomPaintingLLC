import { Phone, CheckCircle, ArrowLeft, Star, AlertTriangle, User, BookOpen, Layers, CheckSquare, Layout, Scissors, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema, generateHowToSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function WallpaperInstallerPage() {
    const { phoneNumber, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How much does professional wallpaper installation cost in Spokane?",
            a: "Pricing is typically calculated by the roll or by the square foot, plus wall preparation time. Basic mural installations start around $400, while complex multi-room pattern matching depends on the material type. We offer free onsite measurements and quotes."
        },
        {
            q: "Do I need to remove my old wallpaper before you arrive?",
            a: "We highly recommend our professional removal service. DIY removal often damages the underlying drywall, leading to higher repair costs later. We use specialized steam and enzymatic strippers to safely lift old paper."
        },
        {
            q: "Can you install wallpaper over textured walls?",
            a: "Generally, no. Wallpaper requires a perfectly smooth surface (Level 5 finish) for proper adhesion and to prevent the texture from 'telegraphing' through the paper. We provide full skim-coating services as part of our wallpaper prep."
        },
        {
            q: "How long does a typical wallpaper project take?",
            a: "A single feature wall can often be completed in one day. Larger rooms or projects requiring extensive old paper removal usually take 2 to 3 business days."
        },
        {
            q: "What types of wallpaper do you specialize in?",
            a: "We install all varieties, including traditional paper, non-woven, vinyl-coated, grasscloth, fabric, and custom-printed large-scale murals."
        }
    ];

    const steps = [
        {
            title: "Old Paper Stripping & Scrape",
            desc: "We use a combination of enzymatic strippers and professional steam technology to gently lift old paper without gouging the drywall substrate.",
            proTip: "Never dry-scrape wallpaper; it almost always results in permanent damage to the gypsum board underneath.",
            pitfall: "Using too much water during DIY removal can soak into the drywall core, causing it to crumble and lose structural integrity."
        },
        {
            title: "Adhesive Neutralization",
            desc: "The most critical step. We scrub the walls to remove every trace of old paste, which would otherwise cause new paper or paint to fail.",
            proTip: "Diffused lighting helps identify clear adhesive residue that remains invisible under standard direct light.",
            pitfall: "Painting or papering over old glue. The new materials will reactivate the old glue, leading to immediate peeling."
        },
        {
            title: "Substrate Smoothing & Priming",
            desc: "We patch all imperfections and apply a specialized 'wallpaper primer/sealer' that creates the perfect grip for the new adhesive.",
            proTip: "Standard wall primer isn't enough; you need a high-solid sealer to prevent the paper from bonding too permanently to the drywall.",
            pitfall: "Skiping the sealing phase. This makes future removal impossible without destroying the wall."
        },
        {
            title: "Panel Measurement & Prep",
            desc: "we meticulously calculate pattern repeats and panel heights to ensure perfect alignment and minimal material waste.",
            proTip: "Always order 10-15% more material than you think you need to account for pattern matching and intricate corner cuts.",
            pitfall: "Assuming your walls are perfectly plumb. We use laser levels to ensure the first panel is perfectly straight."
        },
        {
            title: "Precision Adhesive Application",
            desc: "Using the specific paste required for your material (paste-the-wall or paste-the-paper), we ensure an even, bubble-free bond.",
            proTip: "Non-woven papers usually require the 'paste-the-wall' method, which is much cleaner and more efficient.",
            pitfall: "Under-pasting the edges. This is where 90% of wallpaper failures start—curling and lifting seams."
        },
        {
            title: "Edge-to-Edge Alignment",
            desc: "We hand-roll every seam and use precision trimming at the ceiling and baseboards for a bespoke, built-in look.",
            proTip: "Use a seam roller with light pressure; too much force will squeeze out the glue and cause the seam to gap when dry.",
            pitfall: "Over-stretching the paper during installation. As it dries, it will shrink back and leave visible gaps between panels."
        }
    ];

    useEffect(() => {
        const title = "Wallpaper Installer Spokane | Professional Removal & Hanging Services";
        const description = "Spokane's expert wallpaper installers. Precision removal, wall preparation, and perfect pattern matching. High-quality finishes. Free estimates!";

        return injectPageSEO({
            title,
            description,
            path: '/wallpaper-installer-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/wallpaper-installer-spokane"
                    })
                },
                {
                    id: 'breadcrumb',
                    data: generateBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Wallpaper Installer", path: "/wallpaper-installer-spokane" }
                    ])
                },
                {
                    id: 'howto',
                    data: generateHowToSchema({
                        name: "Professional Wallpaper Installation Process",
                        description: "Our 6-step precision system for wallpaper installation.",
                        steps: steps.map(s => ({ name: s.title, text: s.desc }))
                    })
                }
            ]
        });
    }, []);



    return (
        <div className="min-min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-sans">
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
                            <Layout size={12} fill="currentColor" /> Spokane's Wallpaper Specialists
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1]">
                            Wallpaper Installer Spokane: <br />
                            <span className="text-brand-green italic uppercase tracking-tighter">Perfect Patterns.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            From vintage removal to modern mural installation, Prestige Custom Painting LLC delivers the precision and care your high-end wallcoverings deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET AN ESTIMATE
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
                            <Layers size={18} /> Executive Summary
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Expert removal of old paper and residual adhesives.",
                                "Full surface prep including skim-coating and sealing.",
                                "Precision hanging of vinyl, fabric, and murals.",
                                "Laser-aligned pattern matching for zero-defect results."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-left">
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
                            Industry Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is Professional Wallpaper Installation?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "A wallpaper installer specializes in the surface preparation and application of decorative wallcoverings. This includes the mechanical removal of old paper, chemical stripping of adhesives, substrate repair, and the precision alignment of new patterns using specialized primers and pastes."
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
                                <BookOpen size={20} className="text-brand-green" /> Inside This Guide
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 text-left">
                                {[
                                    { label: "The Challenge of Removal", id: "removal" },
                                    { label: "Material Types & Specialities", id: "materials" },
                                    { label: "Our 6-Step Installation Process", id: "process" },
                                    { label: "Wall Prep: The Secret to Longevity", id: "prep" },
                                    { label: "Common Wallpaper Issues", id: "issues" },
                                    { label: "Spokane Homeowner FAQ", id: "faq" }
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

            {/* Core Section 1 */}
            <section id="removal" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Safe & Efficient Wallpaper Removal
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Taking down 30-year-old wallpaper in an older Spokane home is often the most frustrating part of a renovation. Scouring and scraping without the right enzymatic strippers can leave your drywall looking like a battlefield.
                                </p>
                                <p>
                                    We utilize professional-grade steaming equipment and ph-balanced stripping solutions that dissolve adhesives without damaging the paper face of your drywall. Our goal is to leave the surface pristine, ready for its next transformation.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img
                                src="/wallpaper.jpg"
                                alt="Professionally installed designer wallpaper"
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Material Specifics */}
            <section id="materials" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">Specialized Wallcoverings</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Different materials require different techniques.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            { name: "Vinyl & Non-Woven", desc: "Durable and washable. Ideal for bathrooms and kitchens on the South Hill." },
                            { name: "Grasscloth & Natural", desc: "Requires extreme care. These materials cannot get wet and show every seams by design." },
                            { name: "Large Scale Murals", desc: "Becoming very popular in Spokane Valley. Requires laser-precision to match the image across multiple panels." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-green transition-all shadow-sm">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                    <Scissors size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{item.name}</h4>
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
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Meticulous Detail. Every Time.</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white leading-tight">Our 6-Step Precision System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">How we ensure a 'invisible' finish on every panel.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all relative overflow-hidden">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.desc}</p>

                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="flex gap-3 text-xs">
                                        <Star size={14} className="text-brand-green shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-brand-green not-italic uppercase tracking-tighter">Pro Tip:</span> {step.proTip}</p>
                                    </div>
                                    <div className="flex gap-3 text-xs">
                                        <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-brand-red not-italic uppercase tracking-tighter text-red-100">Pitfall:</span> {step.pitfall}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wall Prep Importance */}
            <section id="prep" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Wall Prep: The Secret to Perfection</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <CheckSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Level 5 Skim-Coating</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        We specialize in taking textured walls and making them glass-smooth. This is the only way to ensure expensive wallpaper looks exactly like the brochure—flat, clean, and elegant.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Ruler size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Dedicated Sizing/Priming</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                        We use professional 'sizing' and specialty primers that prevent the adhesive from soaking into the drywall, ensuring a strong bond now and easy removal years later.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <User size={18} className="text-brand-green" /> Designer's Perspective
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "Nothing ruins a $200-per-roll grasscloth faster than an amateur installation. The prep is 70% of the job, and it's where we never cut corners." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Projects Fail */}
            <section id="issues" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black uppercase tracking-tighter">Common Wallpaper Issues</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { f: "Seam Opening", r: "Typically caused by insufficient paste at the edges or drying too quickly in low humidity." },
                            { f: "Air Bubbles", s: "Result of improper 'booking' time or failure to smooth from the center out during hanging." },
                            { f: "Ghosting", r: "When existing wall texture shows through the paper because the wall wasn't skim-coated." },
                            { f: "Pattern Drift", s: "Accumulated error when panels aren't checked for plumb, leading to crooked graphics." },
                            { f: "Wallpaper Staining", r: "Caused by using the wrong adhesive for delicate materials like grasscloth or silk." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.f}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium"><span className="font-bold text-brand-green uppercase tracking-tighter">The Cause:</span> {item.r || item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter leading-tight">Spokane Wallpaper FAQ</h2>
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
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8">
                                Stunning Designs. <br />Hand-Crafted Precision.
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't risk your investment in high-end wallpaper. Get a professional installation that looks perfect from day one.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all shadow-xl shadow-green-500/30">
                                    {phoneNumber}
                                </a>
                                <Link to="/#contact" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    GET A CUSTOM QUOTE
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
                        <div className="w-40 h-40 shrink-0 relative">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                With a background in fine-finish restoration, Robert handles all specialty wallpaper projects, ensuring that delicate materials are treated with the respect they deserve.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Wallpaper Installation Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default WallpaperInstallerPage;

