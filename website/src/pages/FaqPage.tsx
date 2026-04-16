import { Plus, Minus, CheckCircle, HelpCircle, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateFAQSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function FaqPage() {
    const { phoneNumber, companyName } = SITE_INFO;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How much does it cost to paint a house in Spokane?",
            a: "For standard Spokane homes, exterior painting typically ranges from $4,500 to $9,500+. Interior projects often range from $400 - $850 per room depending on trim, ceiling height, and prep. Factors like siding type (LP SmartSide vs. Cedar) and height (one vs. two-story) significantly influence the total. We provide free, same-day digital estimates for exact pricing."
        },
        {
            q: "When is the best time of year for exterior painting in the Inland Northwest?",
            a: "The ideal window is mid-May through early October. We monitor dew points and substrate moisture daily; if moisture content is above 12%, we don't paint. Summer and early fall are the 'sweet spot' for proper curing in the Pacific Northwest climate."
        },
        {
            q: "How long should a professional paint job last in Spokane's climate?",
            a: "A high-quality job using premium coatings like Sherwin Williams Duration should last 7-10 years. However, homes with extreme sun exposure on the South/West sides (common in areas like Five Mile or South Hill) may require a maintenance touch-up around year 5 to prevent wood rot."
        },
        {
            q: "How do you handle historic Spokane homes with lead paint?",
            a: "Many homes in the Garland District and Cannon Hill were built before 1978 and may contain lead. Prestige Custom Painting LLC follows EPA-approved RRP (Renovation, Repair, and Painting) practices, including HEPA-filtered vacuum sanding and wet scraping to contain dust and protect your family."
        },
        {
            q: "Is power washing enough prep, or do you include mechanical sanding?",
            a: "Power washing only removes dirt. For a 'Prestige' finish, we mechanically sand all failed coatings and transitions. Skipping this is the #1 cause of peeling in Spokane. We also use industrial-grade elastomeric caulking that stays flexible through our local freeze-thaw cycles."
        },
        {
            q: "Can you paint the interior of my house during a Spokane winter?",
            a: "Yes! In fact, winter is an ideal time for interior painting. The low humidity helps paint cure faster and more evenly. Our crews work year-round on interior projects, providing a great way to refresh your home during the colder months."
        },
        {
            q: "How can I verify that a painter is licensed and bonded in Washington State?",
            a: "Always verify contractor status at the WA Labor & Industries (L&I) website. Prestige Custom Painting LLC is a registered contractor in good standing. We carry full liability insurance and bonding to provide total security for every homeowner."
        },
        {
            q: "What are the best paint brands for Spokane's extreme temperature swings?",
            a: "We exclusively use upper-tier coatings from Benjamin Moore and Sherwin Williams. These products are engineered for high-adhesion and UV resistance, which is critical for Inland Northwest properties that face 100°F summers and sub-zero winters."
        },
        {
            q: "How often should I restain my deck or fence in the Inland Northwest?",
            a: "Because of our heavy snow and intense summer sun, decks in Spokane usually require restaining every 2-3 years. Fences can often go 4-5 years. Regular maintenance prevents the wood from graying and splitting, saving you thousands in replacement costs."
        },
        {
            q: "Do you handle large-scale commercial painting projects in Spokane?",
            a: "Yes. From retail storefronts to multi-unit complexes, we provide commercial-grade coatings and efficient timelines. We understand the need for minimal disruption to your business operations and offer flexible scheduling to meet your requirements."
        }
    ];

    useEffect(() => {
        const title = "Spokane Painting FAQ: Expert Answers to Homeowner Questions";
        const description = `Everything you need to know about house painting in Spokane. Local costs, timing, lead safety, and premium materials explained by ${companyName}.`;
        document.title = title;
        
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/faq',
            keywords: "spokane painting faq, house painting costs spokane, best paint for spokane weather, licensed painters spokane, lead paint safety spokane, interior painting winter",
            schemas: [
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        topic: title,
                        description,
                        url: "https://prestigecustompaintingllc.com/faq"
                    })
                },
                {
                    id: 'faq-schema',
                    data: generateFAQSchema(faqs.map(f => ({
                        question: f.q,
                        answer: f.a
                    })))
                }
            ]
        });
    }, [companyName]);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="relative bg-brand-black text-white pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-green/5 -skew-x-12 transform translate-x-24 md:translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-8 animate-fade-in uppercase tracking-wider">
                            <HelpCircle size={14} fill="currentColor" /> FREQUENTLY ASKED QUESTIONS
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-8 leading-tight tracking-tight">
                            Spokane Painting <span className="text-brand-green italic">Expert Advice</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-0 max-w-2xl font-medium">
                            The most common questions homeowners ask {companyName} about costs, weather, and the painting process in the Inland Northwest.
                        </p>
                    </div>
                </div>
            </header>

            {/* FAQ Accordion Section */}
            <section className="py-24 bg-white scroll-mt-24" id="faqs">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div 
                                key={idx} 
                                className={`group border rounded-[2rem] transition-all duration-300 overflow-hidden ${openIndex === idx ? 'bg-gray-50/50 border-brand-green/20 shadow-xl shadow-green-500/5' : 'bg-white border-gray-100 hover:border-brand-green/30'}`}
                            >
                                <button 
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full text-left px-8 py-8 flex items-center justify-between gap-4"
                                >
                                    <h4 className={`text-xl font-poppins font-bold transition-colors ${openIndex === idx ? 'text-brand-green' : 'text-brand-black group-hover:text-brand-green'}`}>
                                        {faq.q}
                                    </h4>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-brand-green text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-green group-hover:text-white'}`}>
                                        {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <div 
                                    className={`transition-all duration-500 ease-in-out px-8 text-lg text-gray-600 leading-relaxed overflow-hidden ${openIndex === idx ? 'pb-8 opacity-100 max-h-[800px]' : 'max-h-0 opacity-0'}`}
                                >
                                    {faq.a}
                                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-black/40 uppercase tracking-widest leading-none">
                                        <CheckCircle size={14} className="text-brand-green/40" /> Verified {companyName} Quality Standard
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[4rem] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                        <div className="absolute top-0 right-0 w-full h-full bg-brand-green/5 -skew-x-12 transform translate-x-1/2" />
                        <div className="relative z-10 lg:max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-8">Have a specific question?</h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-0 italic font-medium">
                                "We treat our estimates as education sessions. Whether you hire us or not, we want you to understand exactly what your home needs to stay protected in Spokane." — <strong>Robert, Founder</strong>
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
                            <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-10 py-5 rounded-2xl font-extrabold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-green-500/30 text-center flex items-center justify-center gap-3">
                                <DollarSign size={24} /> GET A QUOTE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default FaqPage;
