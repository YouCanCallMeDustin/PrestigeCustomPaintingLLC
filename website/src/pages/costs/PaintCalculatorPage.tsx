import React, { useState } from 'react';
import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from '../../lib/schemaGenerator';
import { Calculator, Ruler, PaintBucket, CheckCircle, RefreshCw } from 'lucide-react';

const PaintCalculatorPage = () => {
    const { phoneNumber, email } = SITE_INFO;
    
    // Calculator State
    const [sqft, setSqft] = useState<number>(0);
    const [coats, setCoats] = useState<number>(2);
    const [result, setResult] = useState<{ gallons: number; coverage: number } | null>(null);

    const calculatePaint = (e: React.FormEvent) => {
        e.preventDefault();
        const coveragePerGallon = 350; // Standard coverage
        const totalNeeded = (sqft * coats) / coveragePerGallon;
        setResult({
            gallons: Math.ceil(totalNeeded),
            coverage: coveragePerGallon
        });
    };

    // Schema Data
    const faqs = [
        {
            question: "How many square feet does one gallon of paint cover?",
            answer: "A single gallon of premium paint typically covers 350 to 400 square feet. However, on textured surfaces (common in Spokane homes) or porous siding, coverage can drop to 250-300 square feet per gallon."
        },
        {
            question: "Do I really need two coats of paint?",
            answer: "Yes. The first coat seals the surface and provides initial color. The second coat ensures uniform sheen, true color depth, and the full durability of the paint film. Skipping the second coat is a common DIY mistake that leads to early failure."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "How Much Paint Do I Need?", path: "/how-much-paint-do-i-need" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'howto', data: generateHowToSchema({
            name: "How to Measure Your House for Paint",
            description: "A quick guide on calculating the paintable surface area of your home.",
            steps: [
                { name: "Measure Length and Height", text: "Measure the height and width of each exterior wall." },
                { name: "Calculate Surface Area", text: "Multiply height by width for each wall and add them together." },
                { name: "Subtract Openings", text: "Subtract roughly 15-20 sq ft for each standard window and 21 sq ft for each door." },
                { name: "Factor in Coats", text: "Multiply the final number by 2 for the standard double-coat finish." }
            ]
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            title: "Cost to Paint a House",
            path: "/cost-to-paint-a-house",
            description: "The main guide for understanding total project costs in Spokane."
        },
        {
            title: "DIY vs. Professional",
            path: "/diy-vs-hiring-a-painter",
            description: "Compare the cost of materials vs. professional turnkey services."
        },
        {
            title: "Exterior Painting Costs",
            path: "/cost-to-paint-house-exterior",
            description: "Budgeting for professional exterior painting results."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="Paint Calculator: How Much Paint Do I Need? | Prestige Cost Guide"
                description="Use our Spokane house paint calculator to estimate how many gallons you need for your project. Learn about coverage rates for local siding and textures."
                path="/how-much-paint-do-i-need"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl">
                    <header className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold mb-6">
                            INTERACTIVE TOOL
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            How Much Paint <span className="text-brand-green">Do I Need?</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Don't overbuy or run out mid-project. Our Spokane paint calculator helps you estimate the exact number of gallons needed for your interior or exterior walls based on local residential dimensions.
                        </p>
                    </header>

                    {/* Interactive Calculator */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 mb-16 shadow-lg shadow-gray-200/50">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-1/2">
                                <form onSubmit={calculatePaint} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-brand-black mb-3 uppercase tracking-wider">Surface Area (Sq. Ft.)</label>
                                        <div className="relative">
                                            <input 
                                                type="number" 
                                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-brand-green outline-none transition-all text-xl font-bold"
                                                placeholder="e.g. 1500"
                                                value={sqft || ''}
                                                onChange={(e) => setSqft(Number(e.target.value))}
                                                required
                                            />
                                            <Ruler className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2 italic">*Average Spokane rancher is approx. 1,500 - 2,200 sq ft.</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-brand-black mb-3 uppercase tracking-wider">Number of Coats</label>
                                        <div className="flex gap-4">
                                            {[1, 2, 3].map((num) => (
                                                <button
                                                    key={num}
                                                    type="button"
                                                    onClick={() => setCoats(num)}
                                                    className={`flex-1 py-4 rounded-2xl font-bold transition-all ${coats === num ? 'bg-brand-green text-white shadow-lg shadow-green-500/20 scale-105' : 'bg-white border-2 border-gray-100 text-gray-400 hover:border-brand-green/30'}`}
                                                >
                                                    {num} {num === 1 ? 'Coat' : 'Coats'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-brand-black text-white py-5 rounded-[2rem] font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl"
                                    >
                                        <Calculator size={24} /> CALCULATE NOW
                                    </button>
                                </form>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
                                {result ? (
                                    <div className="animate-fade-in">
                                        <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6 mx-auto">
                                            <PaintBucket size={48} />
                                        </div>
                                        <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">You will need approx.</h3>
                                        <p className="text-6xl md:text-8xl font-black text-brand-black mb-2">{result.gallons}</p>
                                        <p className="text-2xl font-bold text-brand-green uppercase mb-6">Gallons</p>
                                        <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 inline-flex flex-col gap-1 shadow-sm">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <CheckCircle size={14} className="text-brand-green" /> Based on {result.coverage} sq ft/gal
                                            </div>
                                            <button 
                                                onClick={() => setResult(null)}
                                                className="text-xs font-bold text-brand-green mt-2 flex items-center gap-1 mx-auto hover:opacity-70"
                                            >
                                                <RefreshCw size={12} /> RESET CALCULATOR
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="opacity-30 flex flex-col items-center">
                                        <Calculator size={80} className="mb-6" />
                                        <p className="text-lg font-bold">Enter your house dimensions <br />to see results.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <h2 className="text-3xl font-bold font-poppins mb-6">Why Surface Texture Matters in Spokane</h2>
                        <p>
                            If you're painting a home on the South Hill with heavy stucco or a North Spokane rancher with rough T1-11 siding, your paint usage will be <strong>20-30% higher</strong> than a smooth-sided home. Texture creates more surface area that the paint must "get into," reducing the effective coverage of every gallon.
                        </p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-12">How to Measure Like a Pro</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-green font-bold text-xl">01</span>
                                <p><strong>Measure Height:</strong> Measure from the ground to the eaves. For gables, measure to the peak and round down slightly to account for the triangular shape.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-green font-bold text-xl">02</span>
                                <p><strong>Measure Length:</strong> Measure the total perimeter of the house by adding the length of all four sides.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-green font-bold text-xl">03</span>
                                <p><strong>The "Opening Penalty":</strong> For every window, subtract 15 sq ft. For every door, subtract 20 sq ft. This ensures you don't overspend on paint you'll never use.</p>
                            </li>
                        </ul>

                        <div className="my-16 p-8 bg-brand-black text-white rounded-[2rem] flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-bold mb-4">Don't want to do the math?</h3>
                                <p className="text-lg text-gray-400">We provide free on-site measurements and laser-accurate quotes for every project.</p>
                            </div>
                            <div className="flex flex-col gap-3 min-w-[240px]">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    GET FREE ESTIMATE
                                </a>
                                <a href={`mailto:${email}`} className="text-white bg-white/10 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all">
                                    EMAIL A PHOTO
                                </a>
                            </div>
                        </div>

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

export default PaintCalculatorPage;
