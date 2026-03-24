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
                        
                        <div className="not-prose mt-16 p-8 bg-brand-gray/30 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-poppins font-bold mb-2">Looking for more {data.parentName} services?</h3>
                                <p className="text-gray-600 mb-0">Check out all the specific ways we can improve your property in Spokane.</p>
                            </div>
                            <Link to={data.parentRoute} className="shrink-0 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-sm">
                                VIEW ALL
                            </Link>
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
