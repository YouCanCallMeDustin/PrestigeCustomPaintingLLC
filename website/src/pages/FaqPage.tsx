import { ArrowLeft, Plus, Minus, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function FaqPage() {
    const { phoneNumber } = SITE_INFO;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How much does it cost to paint a house in Spokane?",
            a: "The cost varies significantly based on square footage, height (one vs. two-story), and the amount of preparation needed. Generally, an exterior paint job in Spokane ranges from $4,000 to $10,000+, while interiors are often estimated per-room or per-square-foot. We provide free, 24-hour turnaround estimates to give you an exact number for your project."
        },
        {
            q: "How long does a typical painting project take?",
            a: "Most single-room interior projects are completed in one day. A full exterior can take 3-6 days, depending on weather and complexity. Cabinet refinishing typically takes 4-5 days of meticulous work. We provide a clear timeline with every quote."
        },
        {
            q: "What kind of paint do you use?",
            a: "We use only premium products from industry leaders like Benjamin Moore (Scuff-X, Regal Select) and Sherwin Williams (Duration, Emerald). These paints are specifically formulated to survive the Inland Northwest's extreme temperature swings and moisture."
        },
        {
            q: "Are you licensed and insured in Washington?",
            a: "Yes, Prestige Custom Painting LLC is a fully licensed and insured Washington State contractor. We can provide documentation of our coverage upon request to ensure your total peace of mind."
        },
        {
            q: "Do I need to move my furniture before you arrive?",
            a: "For interior projects, we ask that you remove small breakables and items from tables. We help move and protect larger furniture pieces as part of our service, using heavy-duty plastic and drop cloths to seal everything safely."
        },
        {
            q: "What is your painting process for exteriors?",
            a: "We follow a 4-step process: (1) Industrial power washing, (2) Scraping and sanding, (3) Sealing and priming, and (4) Applying two coats of premium finish. This ensures a results-oriented finish that lasts for a decade or more."
        },
        {
            q: "Do you offer color consultations?",
            a: "Yes! Choosing the right color for the Spokane light can be tricky. We provide expert color consultations to help you find a palette that complements your home's architecture and your personal style."
        },
        {
            q: "How often should I repaint my Spokane home?",
            a: "In the Pacific Northwest, we recommend an exterior refresh every 7-10 years to prevent wood rot and moisture damage. Interiors can last much longer, but many clients refresh every 5-7 years for a modern look."
        }
    ];

    useEffect(() => {
        const title = "FAQ | Frequently Asked Questions | Prestige Custom Painting LLC";
        const description = "Find answers to common questions about house painting in Spokane, WA. Learn about costs, timelines, our process, and why we are the top local choice.";
        document.title = title;
        return injectPageSEO({
            title,
            description,
            path: '/faq',
            schemas: [
                {
                    id: 'faq-schema',
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
    }, []);

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
                            Common <span className="text-brand-green">Questions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                            Everything you need to know about our prestige standard and the house painting process in Spokane.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Painting Knowledge</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black">Spokane Homeowner Resources</h3>
                    </div>

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
                                    className={`transition-all duration-500 ease-in-out px-8 text-lg text-gray-600 leading-relaxed overflow-hidden ${openIndex === idx ? 'pb-8 opacity-100 max-h-[500px]' : 'max-h-0 opacity-0'}`}
                                >
                                    {faq.a}
                                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-black/40">
                                        <CheckCircle size={14} className="text-brand-green/40" /> VERIFIED PRESTIGE STANDARD
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="py-20 md:py-32 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[90px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[90px]" />
                        <div className="relative z-10 text-center lg:text-left lg:max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">Have a different question?</h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-0 italic">
                                We pride ourselves on clear, honest communication. If you're wondering about a specific project detail, give Robert a call and we'll talk through it.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0">
                            <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-green-500/20 text-center">
                                {phoneNumber}
                            </a>
                            <Link to="/#services" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all text-center">
                                EXPLORE SERVICES
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default FaqPage;
