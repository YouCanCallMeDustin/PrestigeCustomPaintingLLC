import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '../../lib/schemaGenerator';
import { Ruler, Palette, DollarSign, CheckCircle } from 'lucide-react';

const RoomPaintingCost = () => {
    const { phoneNumber } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a 12x12 room?",
            answer: "A standard 12x12 bedroom with average 8ft ceilings typically costs between $450 and $750 to have professionaly painted. This includes minor wall prepping and two coats of premium paint on the walls."
        },
        {
            question: "Does the price include the ceiling and trim?",
            answer: "Most basic room painting quotes are for walls only. Adding a ceiling usually adds $150-$250, and painting doors and baseboards can add another $200-$400 per room due to the detailed finish work."
        },
        {
            question: "Is it there a minimum charge for one room?",
            answer: "Yes, many professional painting companies in Spokane have a 'minimum mobilization fee' which usually ranges from $600 to $900. To get the best value, most homeowners bundle 2 or 3 rooms together."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Cost to Paint a Room", path: "/cost-to-paint-a-room" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'service', data: generateServiceSchema({
            name: "Single Room Painting Service",
            description: "Professional interior painting for kitchens, bathrooms, bedrooms, and offices in Spokane.",
            serviceType: "Interior Home Improvement"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            title: "Interior Painting Costs",
            path: "/cost-to-paint-house-interior",
            description: "How to budget for an entire floor or whole home interior project."
        },
        {
            title: "DIY vs. Professional",
            path: "/diy-vs-hiring-a-painter",
            description: "Comparing the costs of a weekend DIY room project vs. professional results."
        },
        {
            title: "Painter Hourly Rates",
            path: "/how-much-do-painters-charge-per-hour",
            description: "Understanding labor costs for smaller interior projects in Spokane."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="How Much Does It Cost to Paint a Room in Spokane? (2026)"
                description="Planning to paint a bedroom, kitchen, or bathroom? Get an accurate breakdown of room painting costs from Spokane's top-rated professional team."
                path="/cost-to-paint-a-room"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            How Much Does It Cost to <span className="text-brand-green">Paint a Room</span> in Spokane?
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Whether you're refreshing a nursery or updating your master suite, understanding the "per-room" cost is essential for planning. In 2026, most Spokane homeowners can expect to pay between **$450 and $1,200** for a single professionally painted room, depending on the scope and trim details.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Room Size vs. Complexity Pricing</h2>
                            <p>
                                A medium 12x12 bedroom is straightforward, but a tall great room or a detailed kitchen involves significantly more labor.
                            </p>
                            
                            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b">Room Type</th>
                                            <th className="p-4 border-b">Walls & Ceiling</th>
                                            <th className="p-4 border-b">With Doors/Trim</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Small Bathroom</td>
                                            <td className="p-4 border-b font-bold">$350 – $550</td>
                                            <td className="p-4 border-b">$550 – $800</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Medium Bedroom</td>
                                            <td className="p-4 border-b font-bold">$450 – $750</td>
                                            <td className="p-4 border-b">$650 – $1,100</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Master Suite</td>
                                            <td className="p-4 border-b font-bold">$600 – $1,000</td>
                                            <td className="p-4 border-b">$900 – $1,800</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Living Area (Tall)</td>
                                            <td className="p-4 border-b font-bold">$800 – $1,500</td>
                                            <td className="p-4 border-b">$1,200 – $2,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">The "Room Bundle" Strategy</h2>
                            <p>
                                At Prestige Custom Painting LLC, we often recommend that Spokane homeowners bundle multiple rooms. Why? Because the **"setup and cleanup" time** is often the same for one room or three. When we are already on-site with our zip-walls, drop cloths, and sprayers, the "per-room" efficiency increases, allowing us to pass savings on to you.
                            </p>
                            <div className="bg-brand-green/5 p-8 rounded-3xl border border-brand-green/10 my-10">
                                <h4 className="text-brand-green text-xl font-bold mb-4 flex items-center gap-2 italic">
                                    <Sparkles size={20} fill="currentColor" /> Prestige Value Tip
                                </h4>
                                <p className="mb-0 text-gray-700">
                                    Painting 3 rooms at once can save you up to **20%** compared to booking them as separate projects months apart. We call this "In-Home Efficiency," and it's the smartest way to leverage professional labor costs.
                                </p>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Factors That Add to Single Room Costs</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                    <Ruler size={18} className="text-brand-green shrink-0 mt-1" />
                                    <span><strong>Ceiling Height:</strong> High-vaulted ceilings require scaffolding and specialized equipment.</span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                    <Palette size={18} className="text-brand-green shrink-0 mt-1" />
                                    <span><strong>Deep Color Changes:</strong> Moving from a dark room to a light one often requires 3 coats plus primer.</span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                    <DollarSign size={18} className="text-brand-green shrink-0 mt-1" />
                                    <span><strong>Trim Detail:</strong> Crown molding, chair rails, or historical built-ins significantly increase labor hours.</span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                    <CheckCircle size={18} className="text-brand-green shrink-0 mt-1" />
                                    <span><strong>Occupied vs. Empty:</strong> Moving furniture and careful masking in an occupied home adds to the prep time.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="my-16 text-center">
                            <h3 className="text-3xl font-bold mb-4">Want a precise room-by-room quote?</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    {phoneNumber}
                                </a>
                                <a href="mailto:buddylee12091@gmail.com" className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    GET ESTIMATE
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

// Add missing icon for the tip box
import { Sparkles } from 'lucide-react';
export default RoomPaintingCost;
