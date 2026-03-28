import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Star, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { blogData } from '../data/blogContent';

function ServiceBlogPage() {
    const { serviceSlug } = useParams();
    const { phoneNumber } = SITE_INFO;

    const data = serviceSlug ? blogData[serviceSlug] : null;

    useEffect(() => {
        if (data) {
            document.title = `${data.h1} | Prestige Custom Painting LLC`;
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', data.metaDescription);
        }
    }, [data]);

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to={data.parentRoute} className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO {data.parentName.toUpperCase()}
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Star size={12} fill="currentColor" /> LOCAL SPOKANE EXPERTS
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            {data.h1}
                        </h1>
                    </div>
                </div>
            </section>

            <div className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <article className="lg:w-2/3 prose prose-lg prose-green max-w-none">
                        {data.content}

                        {/* Additional Content to boost word count and SEO */}
                        <div className="mt-16 pt-16 border-t border-gray-100 not-prose">
                            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-brand-black mb-8">
                                Why Choose Prestige Custom Painting LLC?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-brand-gray/30 p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold mb-4">Meticulous Surface Prep</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We believe the best paint jobs are 90% preparation. Our team spends the necessary time scraping, sanding, caulking, and priming to ensure your new finish sticks perfectly and lasts for years in the Spokane climate.
                                    </p>
                                </div>
                                <div className="bg-brand-gray/30 p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold mb-4">Premium Materials Only</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We exclusively use top-tier products from Sherwin-Williams, Benjamin Moore, and Behr. By using higher-quality resins and pigments, we provide better coverage and superior durability for your home.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-brand-black mb-8">
                                Our Professional Process
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Free Detailed Estimate</h4>
                                        <p className="text-gray-600 text-sm">We provide a transparent, written quote with no hidden fees, clearly outlining the scope of work and materials involved.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Protection & Setup</h4>
                                        <p className="text-gray-600 text-sm">We carefully cover floors, furniture, and landscaping. Our goal is to leave your property cleaner than we found it.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Expert Execution</h4>
                                        <p className="text-gray-600 text-sm">Using professional-grade sprayers, rollers, and brushes, we apply consistent coats for a flawless, high-end appearance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Quality Inspection</h4>
                                        <p className="text-gray-600 text-sm">We perform a final walkthrough with you to ensure every detail meets our strict standards and your complete satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </article>

                    <aside className="lg:w-1/3">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-brand-black text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl shadow-brand-green/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl rounded-full" />
                                <h3 className="text-2xl font-poppins font-bold mb-4 relative z-10">Free {data.parentName} Estimate</h3>
                                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">We provide transparent pricing and expert advice for your home. Call us direct.</p>
                                <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 w-full bg-brand-green hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-xl relative z-10">
                                    <Phone size={20} /> {phoneNumber}
                                </a>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl">
                                <h3 className="text-xl font-poppins font-bold mb-4">Service Access</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">Available quickly for all properties operating across the entire Inland Northwest network.</p>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/house-painters-spokane" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Spokane</Link>
                                    <Link to="/painting-spokane-valley" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Spokane Valley</Link>
                                    <Link to="/painting-liberty-lake" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Liberty Lake</Link>
                                    <Link to="/painting-cheney" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Cheney</Link>
                                    <Link to="/painting-airway-heights" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Airway Heights</Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <section className="py-16 bg-brand-gray/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-poppins font-bold mb-6">Need expert help at your home?</h3>
                    <p className="text-lg text-gray-600 mb-8">
                        Whether you live right in Spokane or out in the Valley, we bring our tools and clean up everything when we finish.
                    </p>
                    <a href={`tel:${phoneNumber}`} className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-green-500/20">
                        <Phone size={20} /> CALL FOR A FREE QUOTE
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ServiceBlogPage;
