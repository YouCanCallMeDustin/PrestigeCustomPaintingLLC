import { SITE_INFO } from '../lib/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Clock, Tag, ArrowRight, Calculator, DollarSign, Home, PaintBucket, Ruler } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BlogListPage = () => {
    const { phoneNumber } = SITE_INFO;

    const pricingGuides = [
        {
            title: "The Ultimate Guide to Painting Costs (2026)",
            description: "Our comprehensive hub for understanding every factor that goes into a professional painting estimate in Spokane.",
            path: "/cost-to-paint-a-house",
            icon: DollarSign,
            tag: "PILLAR GUIDE"
        },
        {
            title: "Exterior House Painting Costs",
            description: "Detailed breakdown of siding, trim, and weather-prep costs for Spokane homes.",
            path: "/cost-to-paint-house-exterior",
            icon: Home,
            tag: "EXTERIOR"
        },
        {
            title: "Interior Painting Price Guide",
            description: "How much to budget for walls, ceilings, and baseboards in the Inland Northwest.",
            path: "/cost-to-paint-house-interior",
            icon: PaintBucket,
            tag: "INTERIOR"
        },
        {
            title: "Kitchen Cabinet Painting Cost",
            description: "Is it worth refinishing your cabinets? See the price comparisons vs. replacement.",
            path: "/cost-to-paint-kitchen-cabinets",
            icon: Tag,
            tag: "KITCHENS"
        },
        {
            title: "Interactive Paint Calculator",
            description: "Calculate exactly how many gallons you need for your next project.",
            path: "/how-much-paint-do-i-need",
            icon: Calculator,
            tag: "TOOL"
        },
        {
            title: "Painter Hourly Rates (2026)",
            description: "What are you actually paying for when you hire a professional crew in Spokane?",
            path: "/how-much-do-painters-charge-per-hour",
            icon: Clock,
            tag: "LABOR"
        },
        {
            title: "DIY vs. Professional Painting",
            description: "The hidden costs of doing it yourself. When to save money and when to hire out.",
            path: "/diy-vs-hiring-a-painter",
            icon: Ruler,
            tag: "PLANNING"
        }
    ];

    const expertTips = [
        {
            title: "Cost to Paint a House in Spokane (2025 Archive)",
            description: "Initial research and pricing data for the Spokane regional market.",
            path: "/blog/cost-to-paint-house-spokane",
            date: "Jan 12, 2025"
        },
        {
            title: "Best Exterior Paint for Spokane's Climate",
            description: "Which brands and finishes stand up best to our extreme winters and hot summers?",
            path: "/blog/best-exterior-paint-spokane",
            date: "Feb 05, 2025"
        },
        {
            title: "How Often Should You Paint Your House?",
            description: "Signs it's time for a repaint and how to extend the life of your current finish.",
            path: "/blog/how-often-to-paint-house-spokane",
            date: "Feb 28, 2025"
        },
        {
            title: "5 Interior Painting Tips for Homeowners",
            description: "Small details that make a huge difference in the final look of your rooms.",
            path: "/blog/interior-painting-tips-spokane",
            date: "Mar 15, 2025"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                seoTitle="Painting Guides & Expert Tips | Prestige Custom Painting LLC"
                description="Explore our library of professional painting advice, local Spokane pricing guides, and expert tips for your next interior or exterior project."
                path="/blog"
            />
            <Navbar />
            
            {/* Dark Hero Section */}
            <section className="bg-brand-black pt-32 pb-24 text-white relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <header className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 italic leading-tight">
                            Expert <span className="text-brand-green">Insights</span> & Pricing Guides
                        </h1>
                        <p className="text-xl text-gray-300 font-medium leading-relaxed">
                            We believe in transparency. Whether you're researching costs on the South Hill or looking for DIY tips in Spokane Valley, our library of resources is here to help you make informed decisions.
                        </p>
                    </header>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 pb-24">

                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold font-poppins">Painting Cost Guides</h2>
                        <div className="h-[2px] flex-1 bg-gray-100" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingGuides.map((guide, idx) => (
                            <Link 
                                key={idx} 
                                to={guide.path}
                                className="group bg-white border border-gray-100 p-8 rounded-[2.5rem] hover:border-brand-green transition-all hover:shadow-2xl hover:shadow-brand-green/10"
                            >
                                <div className="w-12 h-12 bg-brand-gray/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                    <guide.icon size={24} />
                                </div>
                                <div className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">
                                    {guide.tag}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green transition-colors leading-tight">
                                    {guide.title}
                                </h3>
                                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                                    {guide.description}
                                </p>
                                <div className="flex items-center gap-2 text-brand-black font-bold text-sm">
                                    READ GUIDE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold font-poppins">Expert Tips & Articles</h2>
                        <div className="h-[2px] flex-1 bg-gray-100" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {expertTips.map((tip, idx) => (
                            <Link 
                                key={idx} 
                                to={tip.path}
                                className="flex items-center justify-between p-6 bg-brand-gray/20 rounded-3xl border border-transparent hover:border-gray-200 transition-all group"
                            >
                                <div>
                                    <div className="text-xs text-gray-400 mb-2 font-bold">{tip.date}</div>
                                    <h4 className="text-xl font-bold group-hover:text-brand-green transition-colors leading-tight mb-2">
                                        {tip.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm italic">
                                        {tip.description}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all shrink-0">
                                    <ArrowRight size={18} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mt-32 p-12 bg-brand-black rounded-[3rem] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/10 -skew-x-12 translate-x-20" />
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl font-bold mb-6">Need a custom quote?</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Every home is unique. For a precise estimate based on your specific square footage and surface condition, schedule a free on-site consultation.
                        </p>
                        <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-green-500/20">
                            {phoneNumber}
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogListPage;
