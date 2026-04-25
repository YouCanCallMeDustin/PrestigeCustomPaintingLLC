import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, generateArticleSchema } from '../../lib/schemaGenerator';
import { Clock, Home, ArrowRight, Shield, AlertTriangle, Droplets } from 'lucide-react';
import React from 'react';

const BlogHowOftenToPaint: React.FC = () => {
    const { phoneNumber, ownerName } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How often should you paint a house exterior in Spokane, WA?",
            answer: "In Spokane's climate, a house exterior typically needs to be repainted every 5 to 7 years. Siding materials like wood may need repainting every 3-7 years, while stucco can last 5-7 years. Premium paints and proper preparation can extend this lifespan up to 10 years."
        },
        {
            question: "What are the first signs my house needs to be repainted?",
            answer: "Look for fading colors, chalking (a powdery residue on the siding), cracking, peeling, or bubbling paint. Failed caulk around windows and exposed bare wood are urgent signs you need to paint to avoid rot."
        },
        {
            question: "How does Spokane's weather affect exterior paint?",
            answer: "Spokane experiences freeze-thaw cycles in winter and intense UV sunlight in summer. This causes siding to expand and contract, which stresses the paint film, leading to cracking. High humidity in spring and fall can also grow mold and mildew on shaded walls."
        },
        {
            question: "Is it better to paint my house in the spring or fall in Spokane?",
            answer: "The ideal painting season in Spokane is late spring through early fall. Spring is great once the heavy rains stop, and early fall is excellent when days are mild. Paint needs temperatures consistently above 35-50°F depending on the product, without dew or rain."
        }
    ];

    const breadcrumbItems = [
        { name: "Blog", path: "/blog" },
        { name: "How Often To Paint", path: "/blog/how-often-to-paint-house-spokane" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'local-business', data: generateLocalBusinessSchema() },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) },
        { 
            id: 'article', 
            data: generateArticleSchema({
                topic: "How Often Should You Paint a House in Spokane WA?",
                description: "Discover how often you should repaint your Spokane home. In 2026, climate patterns and siding materials dictate a 5 to 7 year timeline. Learn the warning signs.",
                image: "https://prestigecustompaintingllc.com/exterior.webp",
                datePublished: "2026-03-27",
                dateModified: "2026-04-20",
                authorName: ownerName,
                url: "https://prestigecustompaintingllc.com/blog/how-often-to-paint-house-spokane"
            }) 
        }
    ];

    const relatedTopics = [
        {
            topic: "Exterior Painting Costs (2026)",
            path: "/cost-to-paint-house-exterior",
            description: "Detailed breakdown of siding, trim, and preparation costs for Spokane exteriors."
        },
        {
            topic: "Best Exterior Paint for Spokane",
            path: "/blog/best-exterior-paint-spokane",
            description: "Which brands and finishes stand up best to extreme winters and hot summers?"
        },
        {
            topic: "DIY vs. Hiring a Pro",
            path: "/diy-vs-hiring-a-painter",
            description: "A candid look at the risks of DIY exterior painting in a harsh climate."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                seoTitle="How Often Should You Paint a House in Spokane WA? (2026)"
                description="Discover how often you should repaint your Spokane home. Learn how freeze-thaw cycles impact paint life and the 4 signs it's time for a fresh coat."
                path="/blog/how-often-to-paint-house-spokane"
                schemas={schemas}
            />
            <Navbar />

            <header className="bg-brand-black pt-28 pb-16 md:pt-36 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs items={breadcrumbItems} variant="light" />
                    
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold mb-6">
                            <Clock size={16} /> UPDATED FOR 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            How Often Should You Paint a House in <span className="text-brand-green">Spokane, WA?</span>
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400 font-medium mb-8">
                            <span>By {ownerName}</span>
                            <span>•</span>
                            <span>7 Min Read</span>
                            <span>•</span>
                            <span>Maintenance Guide</span>
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            Maintaining your home's exterior paint is a key part of responsible homeownership in the Inland Northwest. If you wait until the paint is visibly peeling off your siding, the damage to the underlying wood might already be done.
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <article className="max-w-4xl">

                    {/* Quick Answer Box */}
                    <div className="bg-brand-gray/20 border border-gray-200 p-8 rounded-[2rem] mb-16 relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 text-brand-green/10">
                            <Shield size={160} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
                             The Quick Answer
                        </h2>
                        <p className="text-lg font-medium text-gray-700 relative z-10">
                            For most homes in Spokane, the general recommendation is to repaint every <strong>5 to 7 years</strong>. However, homes with specific siding materials (like cedar or stucco) facing intense southern sun exposure might require maintenance every <strong>3 to 5 years</strong>, while high-durability fiber cement or brick can last closer to <strong>10 to 15 years</strong> with premium paints.
                        </p>
                    </div>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <h2 className="text-3xl font-bold font-poppins mb-6">How Siding Material Dictates the Timeline</h2>
                        <p>
                            The material covering your house is the primary factor in determining how long a paint job will last. Not all surfaces absorb and hold paint the same way, especially under the duress of 100-degree summer days and sub-zero winter nights in Spokane County.
                        </p>
                        
                        <ul className="space-y-4 my-8 list-none pl-0">
                            <li className="flex gap-4 items-start bg-white p-6 border border-gray-100 rounded-2xl shadow-sm">
                                <Home className="text-brand-green shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-xl mb-1">Wood and Cedar Siding (3–7 Years)</strong>
                                    <p className="text-gray-600 m-0">Wood expands and contracts heavily with moisture and temperature changes. If water gets behind the paint film, it will cause blistering. Stained wood may need recoating as often as every 4 years.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-6 border border-gray-100 rounded-2xl shadow-sm">
                                <Home className="text-brand-green shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-xl mb-1">Stucco (5–7 Years)</strong>
                                    <p className="text-gray-600 m-0">While highly durable, stucco can develop hairline cracks as a house settles. Premium elastomeric coatings can bridge these cracks, pushing the lifespan up to 10 years, but 5-7 years is the safe average in our climate.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-6 border border-gray-100 rounded-2xl shadow-sm">
                                <Home className="text-brand-green shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-xl mb-1">Fiber Cement (10–15 Years)</strong>
                                    <p className="text-gray-600 m-0">Materials like HardiePlank are incredibly dimensionally stable. Because they don't shift or absorb moisture like wood, high-quality acrylic paint can last exceptionally long.</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-12">4 Signs Your Spokane Home Needs Repainting Now</h2>
                        <p>
                            Don't rely strictly on a calendar timeline. Be proactive. We recommend walking the perimeter of your home every spring to inspect for these early warning signs:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                            <div className="border border-gray-200 p-8 rounded-[2rem] hover:border-brand-green transition-colors">
                                <div className="w-12 h-12 bg-gray-100 text-brand-black rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-bold mb-3">Fading and Discoloration</h3>
                                <p className="text-gray-600 text-sm">Spokane's intense sun breaks down the protective binders in the paint. If your home looks substantially lighter on the south or west-facing walls, the protective film is failing.</p>
                            </div>
                            <div className="border border-gray-200 p-8 rounded-[2rem] hover:border-brand-green transition-colors">
                                <div className="w-12 h-12 bg-gray-100 text-brand-black rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-bold mb-3">Chalking</h3>
                                <p className="text-gray-600 text-sm">Run your bare hand across the siding. If your hand comes away with a powdery, chalky residue, the paint resin has completely deteriorated.</p>
                            </div>
                            <div className="border border-gray-200 p-8 rounded-[2rem] hover:border-brand-green transition-colors">
                                <AlertTriangle className="text-brand-black mb-4 w-10 h-10" />
                                <h3 className="text-xl font-bold mb-3">Cracking and Peeling</h3>
                                <p className="text-gray-600 text-sm">This is an advanced sign of failure. Small cracks allow moisture to penetrate to the substrate, leading to wood rot and massive delamination.</p>
                            </div>
                            <div className="border border-gray-200 p-8 rounded-[2rem] hover:border-brand-green transition-colors">
                                <Droplets className="text-brand-black mb-4 w-10 h-10" />
                                <h3 className="text-xl font-bold mb-3">Failed Caulk Lines</h3>
                                <p className="text-gray-600 text-sm">Over time, caulk around windows, doors, and corner boards dries out and splits. Replacing caulk and sealing it with fresh paint is critical to stop water intrusion.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-12">How Spokane's Weather Shortens Paint Lifespans</h2>
                        <p>
                            Our regional climate poses severe stress tests for exterior paint systems. The intense freeze-thaw cycles we experience in the winter cause siding materials to expand during the day and contract rapidly at night. If the existing paint film isn't flexible enough (a common issue with cheaper paints), it will snap and crack. 
                        </p>
                        <p>
                            Furthermore, high humidity during our shoulder seasons promotes the growth of mold and mildew, particularly on shaded, north-facing exterior walls. Upgrading to a premium exterior paint that includes anti-microbial additives is often a worthwhile investment for local homeowners.
                        </p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Frequently Asked Questions</h2>
                        <div className="space-y-6 mb-16" id="faq">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-600 pl-9 font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <AuthorBio />
                        
                        <section className="my-16 bg-brand-black p-10 md:p-16 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 blur-[100px]" />
                            <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">Unsure If It's Time to Repaint?</h3>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    We offer free, no-obligation property assessments. We'll walk your home, check moisture levels, and give you an honest recommendation on whether you need a full repaint or just a minor touch-up.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                                    <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2">
                                        CALL FOR AN ASSESSMENT <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </section>

                        <RelatedTopics topics={relatedTopics} />
                    </div>
                </article>
            </main>

            <StickyMobileCTA />
            <Footer />
        </div>
    );
};

export default BlogHowOftenToPaint;
