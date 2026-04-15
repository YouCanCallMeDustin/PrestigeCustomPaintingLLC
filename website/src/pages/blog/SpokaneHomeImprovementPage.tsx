import { Phone, CheckCircle, ArrowLeft, Star, AlertTriangle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../../lib/constants';
import { injectPageSEO } from '../../lib/seo';
import { generateWebPageSchema } from '../../lib/schemaGenerator';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function SpokaneHomeImprovementPage() {
    const { phoneNumber } = SITE_INFO;

    const faqs = [
        {
            q: "What home improvement adds the most value in Spokane?",
            a: "Painting and kitchen refreshes offer the highest ROI. According to the National Association of Realtors, interior painting yields one of the best returns for minimal investment."
        },
        {
            q: "Do I need a permit for painting my house in Spokane?",
            a: "No, cosmetic exterior and interior painting do not require permits from the City of Spokane. However, structural, electrical, or plumbing changes often do."
        },
        {
            q: "When is the best time for exterior home improvement in Spokane?",
            a: "Late Spring (May) through early Fall (September) is the 'golden window' for any exterior work like painting or deck staining to ensure proper curing in our dry heat."
        },
        {
            q: "How much does professional home improvement cost in Spokane?",
            a: "Costs vary wildly by project. A standard interior paint job might range from $4,000–$8,000, while a full kitchen remodel can exceed $30,000. We offer free, detailed estimates."
        },
        {
            q: "Can I live in my home during a renovation?",
            a: "Yes. At Prestige, we use low-VOC paints and thorough dust containment systems to ensure your home remains livable and safe throughout the process."
        },
        {
            q: "Is cabinet painting or replacement better for Spokane homes?",
            a: "Unless your cabinet boxes are structurally unsound, painting and refinishing is almost always the better value choice, providing the same visual impact for about 25% of the cost."
        }
    ];

    useEffect(() => {
        const title = "Home Improvement in Spokane: Boost Your Home’s Value Fast";
        const description = "Discover the top home improvement in Spokane strategies. Boost ROI with painting, remodeling & curb appeal. Get your free project estimate from Prestige today!";

        return injectPageSEO({
            title,
            description,
            path: '/spokane-home-improvement-guide',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/spokane-home-improvement-guide"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Goal Setting & Budgeting",
            desc: "Identify if your goal is personal enjoyment or market resale. Resale projects should focus on neutral, high-demand upgrades.",
            proTip: "Always set aside a 10-15% contingency fund for unexpected issues.",
            pitfall: "Over-improving for the neighborhood, making it difficult to recoup costs."
        },
        {
            title: "High-Impact Identification",
            desc: "Focus on the 'Big Three': Kitchens, Bathrooms, and the Exterior. These areas consistently provide the highest ROI.",
            proTip: "Kitchen cabinet refinishing can save you thousands compared to a full replacement.",
            pitfall: "Ignoring the exterior until the interior is perfect. Curb appeal is the first impression."
        },
        {
            title: "Professional Consultation",
            desc: "Get at least three quotes from licensed local contractors. Ask for local Spokane references and proof of insurance.",
            proTip: "A reputable contractor will provide insurance and references readily.",
            pitfall: "Choosing the lowest bid without checking for quality of materials."
        },
        {
            title: "Permitting and Planning",
            desc: "Check if your project requires City of Spokane building permits. Most cosmetic changes like painting do not.",
            proTip: "Licensed contractors should handle the permitting process for you.",
            pitfall: "Starting structural work before permits are finalized."
        },
        {
            title: "Material Selection",
            desc: "Choose materials that can withstand local conditions. From premium paints to moisture-resistant drywall.",
            proTip: "Use low-VOC paints for interior work to maintain indoor air quality in the winter.",
            pitfall: "Buying 'big box' store-grade paint that requires more coats."
        },
        {
            title: "Preparation & Staging",
            desc: "For painting, this means masking and sanding. For remodeling, it means protecting floors from dust.",
            proTip: "Meticulous prep work accounts for 70% of a professional finish.",
            pitfall: "Rushing the prep phase, which leads to peeling paint later."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <Star size={12} fill="currentColor" /> Ultimate Guide to Home Improvement in Spokane
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
                            Home Improvement Spokane: <br />
                            <span className="text-brand-green italic">Maximize Your ROI.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Discover the top strategies for home improvement in Spokane. From high-impact painting projects to strategic interior renovations, learn how to boost your property value in the Inland Northwest.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET A FREE ESTIMATE
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Key Takeaways
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Painting offers the highest ROI of any home improvement in Spokane.",
                                "Kitchen & bath refreshes are the most sought-after interior renovations.",
                                "Local climate necessitating specific, durable material choices.",
                                "Curb appeal starts with professional exterior maintenance and finishes."
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

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-lg text-sm font-bold mb-6">
                            Expert Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is Strategic Home Improvement?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Home improvement in Spokane refers to the renovation, repair, or aesthetic upgrading of residential properties. These projects range from high-impact cosmetic changes, like professional painting, to structural remodeling designed to increase home equity and adapt to Spokane’s seasonal climate demands."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-brand-black text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">The Spokane Roadmap</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Strategic Improvement Process</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Follow this proven system to ensure your Spokane home upgrades are profitable and lasting.</p>
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
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12">Professional vs DIY</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                            <thead>
                                <tr className="bg-brand-black text-white">
                                    <th className="p-6 font-bold uppercase tracking-widest text-sm">Feature</th>
                                    <th className="p-6 font-bold uppercase tracking-widest text-sm">DIY Approach</th>
                                    <th className="p-6 font-bold uppercase tracking-widest text-sm">Professional</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b border-gray-50">
                                    <td className="p-6 font-bold text-brand-black">Finish Quality</td>
                                    <td className="p-6">Variable</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">Factory-level Excellence</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="p-6 font-bold text-brand-black">Time Cost</td>
                                    <td className="p-6">Multiple Weekends</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">3-5 Days Finished</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-brand-black">Resale Impact</td>
                                    <td className="p-6">Moderate</td>
                                    <td className="p-6 bg-brand-green/5 font-medium">High Market Value</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 border border-gray-100 rounded-2xl hover:border-brand-green transition-all bg-white group">
                                <h3 className="font-poppins font-bold text-xl mb-4 text-brand-black group-hover:text-brand-green transition-colors">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-8">
                                Ready to Boost Your Home's Value?
                            </h2>
                            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                                Contact Prestige Custom Painting LLC today for your free Spokane home improvement or painting estimate.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-2xl transition-all shadow-2xl shadow-green-500/40">
                                    {phoneNumber}
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

export default SpokaneHomeImprovementPage;
