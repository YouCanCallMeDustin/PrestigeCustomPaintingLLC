import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '../../lib/schemaGenerator';
import { CheckCircle, Construction } from 'lucide-react';

const TwoStoryHouseCost = () => {
    const { phoneNumber } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "Is painting a 2-story house twice as expensive as a 1-story?",
            answer: "Not quite twice, but significant. While the square footage may be higher, the primary cost increase comes from 'access time'—the labor needed to set up scaffolding, move 40ft ladders, and safely navigate complex rooflines and dormers."
        },
        {
            question: "Do you use a lift or ladders for 2-story homes?",
            answer: "We assess every Spokane home individually. While many 2-story homes can be safely tackled with professional-grade ladders and stabilizers, some high-reach projects on the South Hill or Liberty Lake may require a boom lift, which typically adds $500-$1,000 to the equipment cost."
        },
        {
            question: "How much does it cost to paint a 2,500 sq ft 2-story house?",
            answer: "In the Spokane market, a full exterior repaint for a 2,500 sq ft 2-story home typically ranges from $5,500 to $9,500. This includes all preparation, two coats of premium paint on the body, and a separate color for the trim and fascia."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Two-Story House Cost", path: "/cost-to-paint-a-two-story-house" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'service', data: generateServiceSchema({
            name: "High-Rise & Two-Story Exterior Painting",
            description: "Specialized exterior painting for large multi-story homes in Spokane. We handle the ladders, scaffolding, and safety so you don't have to.",
            serviceType: "Exterior House Painting"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            title: "Exterior Painting Costs",
            path: "/cost-to-paint-house-exterior",
            description: "Standard exterior pricing for siding, trim, and weather preparation."
        },
        {
            title: "Cost to Paint a House",
            path: "/cost-to-paint-a-house",
            description: "The main guide for understanding total project costs in Spokane."
        },
        {
            title: "DIY vs. Professional",
            path: "/diy-vs-hiring-a-painter",
            description: "Why safety makes professional help essential for multi-story projects."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="Cost to Paint a 2 Story House in Spokane (2026 Prices)"
                description="What is the average cost to paint a two-story home? Learn how height, dormers, and ladder work impact labor rates for exterior painting in Spokane."
                path="/cost-to-paint-a-two-story-house"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl">
                    <header className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold mb-6">
                            SPECIALIZED SERVICE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            Cost to Paint a <span className="text-brand-green">Two-Story House</span> in Spokane
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            If you own a larger multi-story home in Spokane Valley, Liberty Lake, or Cheney, your exterior painting bid will be significantly different from a standard rancher. For 2026, the cost for a 2-story repaint typically ranges from **$5,500 to $10,000+**. This guide explores the "Height Premium" and why safety is a major factor in your quote.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">The "Height Premium": Why It Costs More</h2>
                            <p>
                                When a painter works on the ground level, they are fast and efficient. Once they move past 15 feet, the "Efficiency Curve" drops. Everything takes longer when you are anchored to a ladder or navigating a roofline.
                            </p>
                            
                            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b">Home Detail</th>
                                            <th className="p-4 border-b">Estimated Cost</th>
                                            <th className="p-4 border-b">Labor Factor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Standard 2-Story (2,000 sq ft)</td>
                                            <td className="p-4 border-b font-bold">$5,500 – $7,500</td>
                                            <td className="p-4 border-b text-sm">Moderate ladder work.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Large 2-Story (3,000+ sq ft)</td>
                                            <td className="p-4 border-b font-bold">$7,500 – $11,000</td>
                                            <td className="p-4 border-b text-sm">Extensive setup & masking.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Homes with Dormers/Peaks</td>
                                            <td className="p-4 border-b font-bold">+$500 – $1,200</td>
                                            <td className="p-4 border-b text-sm">Complex detail work at height.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Walk-out Basements (3 Levels)</td>
                                            <td className="p-4 border-b font-bold">$10k – $15k+</td>
                                            <td className="p-4 border-b text-sm">High-risk equipment needed.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Safety Compliance & You</h2>
                            <p>
                                At Prestige Custom Painting LLC, safety isn't an option—it's the core of our brand. When we bid on a two-story home, our price includes the cost of **OSHA-compliant safety gear**. If a "cheap" painter falls off your roof without workers' compensation insurance, you as the homeowner could be held liable.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h4 className="font-bold mb-2 flex items-center gap-2"><Construction size={18} className="text-brand-green" /> Scaffolding & Lifts</h4>
                                    <p className="text-sm text-gray-500">For chimneys and high peaks, we use stabilized scaffolding or rented boom lifts to ensure our painters have the steady hands needed for a perfect finish.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h4 className="font-bold mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-brand-green" /> Stabilization</h4>
                                    <p className="text-sm text-gray-500">We use ladder mitts and stabilizers to protect your siding and gutters while working at height. No dents, no scratches, just clean lines.</p>
                                </div>
                            </div>
                        </section>

                        <section className="my-12 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                            <h2 className="text-2xl font-bold font-poppins mb-4 italic">
                                Why Spokane Homes are Different
                            </h2>
                            <p className="text-gray-600 mb-0">
                                Many older 2-story homes in Spokane's South Hill or Perry District have steep "Victorian style" roof pitches. These require significantly more time for safety anchoring than a modern suburban 2-story. Our estimates reflect the reality of your specific home's architecture.
                            </p>
                        </section>

                        <section className="my-16 text-center">
                            <h3 className="text-3xl font-bold mb-6">Have a tall project? We've got the reach.</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    {phoneNumber}
                                </a>
                                <a href="mailto:buddylee12091@gmail.com" className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    FREE QUOTE
                                </a>
                            </div>
                        </section>

                        <RelatedTopics topics={relatedTopics} />
                        <AuthorBio />
                    </div>
                </article>
            </main>

            <StickyMobileCTA />
            <Footer />
        </div>
    );
};

export default TwoStoryHouseCost;
