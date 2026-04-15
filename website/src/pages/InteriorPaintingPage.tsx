import { Phone, CheckCircle, ArrowLeft, ArrowRight, Star, Shield, Info, AlertTriangle, User, BookOpen, Layers, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function InteriorPaintingPage() {
    const { phoneNumber, email, ownerName } = SITE_INFO;

    const primaryKeyword = "Interior Painting Spokane";
    const secondaryKeywords = ["House Painters Spokane", "Cabinet Painting Spokane", "Professional Painters", "Residential Painting", "Wall Painting", "Ceiling Painting", "Trim Painting", "Spokane Painting Services", "Kitchen Cabinet Refinishing"];

    const faqs = [
        {
            q: "How long does professional interior painting take?",
            a: "Most single-room projects are completed in one day. Full-home interior projects typically take 3–5 days depending on the size and amount of prep work required. We provide a detailed timeline during your free estimate."
        },
        {
            q: "Do I need to move my furniture before the painters arrive?",
            a: "We ask that you remove small items and electronics. We handle the heavy lifting, moving and protecting larger furniture pieces with professional-grade plastic and drop cloths as part of our comprehensive service."
        },
        {
            q: "What is the best paint sheen for Spokane homes?",
            a: "For most walls, we recommend an Eggshell or Satin finish for a balance of durability and low reflection. For high-moisture areas like bathrooms or high-touch areas like trim, Semi-Gloss is the standard for easy cleaning."
        },
        {
            q: "Is there a smell associated with interior painting?",
            a: "We primarily use low-VOC or zero-VOC paints from Benjamin Moore and Sherwin-Williams, which significantly reduce odors and allow you to occupy your rooms shortly after completion."
        },
        {
            q: "Can you match my existing wall color?",
            a: "Yes! We use advanced color-matching technology to perfectly replicate your current wall color, even if you don't have the original paint can or brand information."
        },
        {
            q: "Do you offer cabinet painting in addition to walls?",
            a: "Absolutely. Cabinet painting and refinishing is one of our specialties in Spokane, involving specialized HVLP sprayers for a factory-smooth finish."
        }
    ];

    useEffect(() => {
        const title = "Professional Interior Painting Spokane | Prestige Custom Painting";
        const description = "Top-rated interior painters in Spokane, WA. We specialize in high-end residential painting, cabinet refinishing & modern finishes. Get your free quote today!";

        return injectPageSEO({
            title,
            description,
            path: '/interior-painting-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/interior-painting-spokane"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Detailed Prep & Protection",
            desc: "The foundation of a great paint job isn't paint—it's preparation. We meticulously mask all edges, cover floors with heavy-duty drop cloths, and seal off non-painted areas.",
            proTip: "Use blue painter's tape for clean lines, but remove it at a 45-degree angle while the paint is still slightly tacky.",
            pitfall: "Skipping floor protection. Paint splatter on hardwood or carpet is extremely difficult to remove once cured."
        },
        {
            title: "Surface Repair & Sanding",
            desc: "We patch drywall holes, fix nail pops, and sand rough transitions. This ensures the substrate is perfectly smooth before any coating is applied.",
            proTip: "Always use a light to check for wall imperfections before painting; shadows reveal what the eye misses.",
            pitfall: "Painting over dusty walls. Paint won't adhere properly to dust, leading to peeling later."
        },
        {
            title: "Precision Priming",
            desc: "For color shifts or bare patches, we apply high-adhesion primers. This locks in the surface and ensures the topcoat color is true and vibrant.",
            proTip: "Tint your primer toward your final color for better coverage on dark-to-light transitions.",
            pitfall: "Using the wrong primer. Unsealed drywall requires a different primer than previously painted surfaces."
        },
        {
            title: "Topcoat Application",
            desc: "We apply premium paints using professional techniques (brush, roll, or spray). We focus on consistent coverage and razor-sharp cut-ins at ceilings and trim.",
            proTip: "Work from top to bottom (ceiling to baseboards) to catch any drips as you go.",
            pitfall: "Over-working the paint. Too much brushing leads to visible marks and an uneven texture."
        },
        {
            title: "Edge Detail & Cut-ins",
            desc: "Our master painters hand-cut all edges around moldings, windows, and doors, ensuring high-contrast lines that define the room's architecture.",
            proTip: "A high-quality angled sash brush is essential for professional cut-ins without tape.",
            pitfall: "Relying solely on tape for edges. Paint can bleed under tape if it's not sealed correctly."
        },
        {
            title: "Final Inspection & Cleanup",
            desc: "Robert personally inspects every wall. We perform a total cleanup, removing all debris and ensuring your home is spotless.",
            proTip: "Save a small, labeled jar of leftover paint for future minor touch-ups.",
            pitfall: "Leaving the site before the owner does a walkthrough. Client satisfaction is paramount."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* SEO META HELPER (Hidden for users, helpful for structure) */}
            <div className="hidden">
                <p>Primary Keyword: {primaryKeyword}</p>
                <p>Secondary Keywords: {secondaryKeywords.join(", ")}</p>
            </div>

            {/* Hero Section */}
            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <Star size={12} fill="currentColor" /> Premium Interior Painting in Spokane
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
                            Interior Painting Spokane: <br />
                            <span className="text-brand-green italic">Masterful Finishes.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Transform your living space with Spokane's top-rated interior painters. Prestige Custom Painting LLC delivers meticulous preparation, premium materials, and factory-smooth results for every wall, ceiling, and cabinet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET A FREE ESTIMATE
                            </a>
                            <Link to="/our-work" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20">
                                VIEW GALLERY <ArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Key Takeaways
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Specializing in high-end residential interior painting across Spokane.",
                                "Meticulous 6-step preparation process ensures long-lasting results.",
                                "Low-VOC paint options for a safer, odor-free home environment.",
                                "Owner-supervised projects with a 100% satisfaction guarantee."
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
                        <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-lg text-sm font-bold mb-6">
                            Expert Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is Professional Interior Painting?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Professional interior painting is the specialized application of high-performance coatings to internal surfaces—including walls, ceilings, trim, and cabinetry—designed to protect substrates while enhancing aesthetic value. In Spokane’s varied climate, professional application is critical to ensure durability against humidity shifts and seasonal temperature changes."
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen size={20} className="text-brand-green" /> Table of Contents
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Why Interior Painting Matters", id: "why-it-matters" },
                                    { label: "Who This Is For", id: "who-it-is-for" },
                                    { label: "The Prep & Painting Process", id: "process" },
                                    { label: "Interior Painting Best Practices", id: "best-practices" },
                                    { label: "DIY vs. Professional Painting", id: "comparison" },
                                    { label: "Common Interior Painting Mistakes", id: "mistakes" },
                                    { label: "Frequently Asked Questions", id: "faq" }
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
            <section id="why-it-matters" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Why Professional Painting Matters in Spokane
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Professional interior painting is more than just a color change; it's an investment in your home's integrity. High-quality paint acts as a protective barrier against moisture, dust, and daily wear-and-tear. In Spokane, where winters bring indoor dryness and summers bring humidity, the right paint helps stabilize your walls' surface.
                                </p>
                                <p>
                                    Whether you're preparing for a home sale or refreshing your forever home, a professional finish eliminates the common "DIY look"—roller marks, uneven cut-ins, and visible brush strokes.
                                </p>
                            </div>
                            <div className="mt-10 grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2">
                                        <Shield size={18} className="text-brand-green" /> Protects Surfaces
                                    </h4>
                                    <p className="text-sm text-gray-500">Seals drywall and wood from moisture and pests.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2">
                                        <Star size={18} className="text-brand-green" /> Increases Value
                                    </h4>
                                    <p className="text-sm text-gray-500">Fresh paint offers one of the highest ROIs in home improvement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img
                                src="/interior.png"
                                alt="Professional interior painting results in Spokane WA"
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section id="who-it-is-for" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4">Who Is This For?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Our interior painting services are tailored to specific needs throughout the Inland Northwest.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Homeowners", desc: "Families looking to modernize their living space with premium, durable, and safe low-VOC finishes." },
                            { title: "Home Sellers", desc: "Sellers wanting to maximize home value and appeal before hitting the competitive Spokane real estate market." },
                            { title: "New Buyers", desc: "People who have just purchased a home and want to personalize it with high-quality, professional colors." }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-brand-green transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                                    <User size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section id="process" className="py-16 md:py-24 bg-brand-black text-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">The Prestige Standard</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our 6-Step Interior Painting Process</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">We don't just paint; we execute a meticulous system designed for longevity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/50 transition-all">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.desc}</p>

                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="flex gap-3">
                                        <Star size={16} className="text-brand-green shrink-0 mt-1" />
                                        <p className="text-xs italic text-gray-300"><span className="font-bold text-brand-green not-italic">Pro Tip:</span> {step.proTip}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <AlertTriangle size={16} className="text-red-400 shrink-0 mt-1" />
                                        <p className="text-xs italic text-gray-300"><span className="font-bold text-red-400 not-italic">Pitfall:</span> {step.pitfall}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-brand-green/10 border border-brand-green/30 rounded-3xl p-8 max-w-3xl mx-auto">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                            <CheckSquare size={24} className="text-brand-green" /> Interior Prep Checklist
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Remove all outlet covers and switch plates",
                                "Patch drywall holes with premium spackle",
                                "Sand all surfaces to 150-180 grit",
                                "Wipe down walls with microfiber cloths",
                                "Mask all baseboards with 1.5-inch tape",
                                "Install high-density drop cloths on floors"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2">
                                    <div className="w-5 h-5 border-2 border-brand-green rounded flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle size={12} className="text-brand-green" />
                                    </div>
                                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Best Practices for Interior Painting</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Advanced Sheen Selection</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Don't just pick a color; pick a sheen that matches the room's function. In Spokane homes, we recommend <strong>Matte or Eggshell</strong> for living areas to hide substrate imperfections, and <strong>Satin or Semi-Gloss</strong> for kitchens and bathrooms where high moisture and frequent cleaning are common.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Humidity & Temperature Management</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Proper curing depends on consistency. We always monitor indoor humidity levels to ensure the paint dries at the correct rate, preventing premature cracking or sagging.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <User size={18} className="text-brand-green" /> Expert Note
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "When choosing whites or grays in the Inland Northwest, keep in mind our frequent overcast days. A shade that looks 'cool' in a showroom can look 'cold' or 'blue' in a Spokane living room. Always test samples in your home's unique northern light." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples/Templates (Using Image/Text placeholder) */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12">Project Transformation Example</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-3xl shadow-sm">
                                <img src="/5.jpg" alt="Interior painting before" className="rounded-2xl h-64 w-full object-cover grayscale" />
                                <p className="mt-4 font-bold text-gray-500 uppercase text-xs tracking-widest">Typical Builder Grade Interior</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-3xl shadow-sm border-2 border-brand-green">
                                <img src="/2.jpg" alt="Interior painting after" className="rounded-2xl h-64 w-full object-cover" />
                                <p className="mt-4 font-bold text-brand-green uppercase text-xs tracking-widest underline decoration-brand-green/30 underline-offset-4">Prestige Custom Transformation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparisons Section */}
            <section id="comparison" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">DIY vs. Professional Painting</h2>
                        <p className="text-gray-500">How do you decide which path is right for your project?</p>
                    </div>
                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100">
                            <thead>
                                <tr className="bg-brand-black text-white">
                                    <th className="p-6 font-bold uppercase tracking-widest text-sm">Feature</th>
                                    <th className="p-6 font-bold uppercase tracking-widest text-sm">DIY Approach</th>
                                    <th className="p-6 font-bold uppercase tracking-widest text-sm">Prestige Professional</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b border-gray-50">
                                    <td className="p-6 font-bold text-brand-black">Preparation</td>
                                    <td className="p-6">Basic masking & minimal cleaning</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">Meticulous repair, sanding, & multi-layer protection</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="p-6 font-bold text-brand-black">Materials</td>
                                    <td className="p-6">Big box store mid-grade paint</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">Industrial-grade Benjamin Moore & Sherwin Williams</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="p-6 font-bold text-brand-black">Lines & Finishes</td>
                                    <td className="p-6">Visible brush marks & bleeding tape</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">Razor-sharp edges & factory-smooth application</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="p-6 font-bold text-brand-black">Time Commitment</td>
                                    <td className="p-6">2-3 weekends of labor</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">3-5 days for entire project (start to finish)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-brand-black">Warranty</td>
                                    <td className="p-6">None</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">Full satisfaction warranty & owner guarantee</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section id="mistakes" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black">Common Interior Painting Mistakes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { m: "Skipping the Primer", s: "Always use primer when changing sheens or applying light colors over dark ones to ensure true color." },
                            { m: "Poor Lighting Conditions", s: "Use high-output work lights during prep to identify drywall defects before they are highlighted by paint." },
                            { m: "Painting Dusty Surfaces", s: "Wipe down all walls with microfiber cloths after sanding; otherwise, paint will peel within months." },
                            { m: "Wrong Sheen in Damp Rooms", s: "Using Flat paint in bathrooms leads to water spots and mold. Always use Satin or Semi-Gloss." },
                            { m: "Removing Tape Too Late", s: "Remove tape while the paint is still wet or score edges with a razor to avoid peeling the finish." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-100 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 -mr-8 -mt-8 rounded-full opacity-50 transition-transform group-hover:scale-150" />
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.m}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed relative z-10"><span className="font-bold text-brand-green">The Fix:</span> {item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-3xl hover:border-brand-green transition-all bg-gray-50/30 group">
                                <h3 className="font-poppins font-bold text-xl mb-4 text-brand-black group-hover:text-brand-green transition-colors">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-8">
                                Ready for a Master-Level Transformation?
                            </h2>
                            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                                Contact Prestige Custom Painting LLC today for your free, no-obligation interior painting estimate. Join hundreds of satisfied Spokane homeowners.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-500/40">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    EMAIL A PRO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-40 h-40 shrink-0 relative">
                            <div className="absolute inset-0 bg-brand-green rounded-full rotate-6 opacity-10" />
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Written By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                Founder of Prestige Custom Painting LLC and a veteran of the Spokane painting industry. With over 15 years of hands-on experience in high-end residential and commercial finishes, Robert oversees every project to ensure the "Expect Excellence" standard is met.
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Last Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Spokane, WA</p>
                            </div>
                        </div>
                    </div>

                    {/* Sources */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Expert Sources & References</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-gray-500 flex items-center gap-2">
                                <BookOpen size={14} className="text-brand-green" />
                                <a href="https://www.benjaminmoore.com/en-us/contractors/job-site-solutions/interior-painting-guide" className="hover:text-brand-green underline decoration-brand-green/20">Benjamin Moore Professional Interior Coating Guide</a>
                            </li>
                            <li className="text-sm text-gray-500 flex items-center gap-2">
                                <BookOpen size={14} className="text-brand-green" />
                                <a href="https://www.sherwin-williams.com/painting-contractors/business-builders/specs-and-standards" className="hover:text-brand-green underline decoration-brand-green/20">Sherwin-Williams Painting Specification Standards</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default InteriorPaintingPage;
