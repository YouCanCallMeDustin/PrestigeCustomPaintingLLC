import { ArrowLeft, Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function TestimonialsPage() {
    const { phoneNumber } = SITE_INFO;

    const reviews = [
        { name: "Dustin Shoemake", initial: "DS", color: "bg-blue-500", date: "a day ago", text: "Robert and his team did an incredible job on our exterior. The precision were top notch and the clean up was better than when they arrived. Highly recommend for any Spokane residents looking for quality painting." },
        { name: "After Words", initial: "AW", color: "bg-purple-500", date: "a day ago", text: "Prestige Custom Painting LLC lived up to their name. The cabinet transformation in our kitchen is stunning. It looks like a factory finish. Professional, on-time, and very fair pricing." },
        { name: "Touch Flow Pro", initial: "TF", color: "bg-teal-500", date: "a day ago", text: "We've used several painters in the past, but none had the attention to detail that Robert showed. Our interior walls look flawless. Best results guaranteed is not just a slogan for them." },
        { name: "Get Creep'D", initial: "GC", color: "bg-orange-500", date: "2 days ago", text: "Excellent communication throughout the project. They helped us pick the perfect Sherwin Williams colors for our Spokane Valley home. 5-star service all the way." },
        { name: "Deskman Union Gospel Mission", initial: "DU", color: "bg-rose-500", date: "2 days ago", text: "Top-tier quality and very respectful of our commercial space. They worked around our schedule and delivered a prestige result. Definitely our go-to painters from now on." },
        { name: "Robert Butler", initial: "RB", color: "bg-indigo-500", date: "4 days ago", text: "Expertise you can trust. They handled our exterior wood stripping and painting with massive care. The house hasn't looked this good in decades." },
    ];

    useEffect(() => {
        const title = "Reviews & Testimonials | Prestige Custom Painting LLC | Spokane Painters";
        const description = "Read 5-star reviews from satisfied clients throughout Spokane and the Inland Northwest. See why Prestige Custom Painting LLC is the top-rated local choice.";
        document.title = title;
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/testimonials',
            schemas: [
                {
                    id: 'reviews-list',
                    data: {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": reviews.map((r, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "item": {
                                "@type": "Review",
                                "author": { "@type": "Person", "name": r.name },
                                "reviewBody": r.text,
                                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                            }
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
                            Client <span className="text-brand-green">Reviews</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                            Don't just take our word for it—see what our neighbors in Spokane and the Inland Northwest are saying about our prestige standard.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="font-bold text-2xl text-brand-black">5.0 Rating</p>
                            <p className="text-gray-500 text-sm">Verified Average</p>
                        </div>
                        <div className="w-px h-16 bg-gray-200 hidden md:block" />
                        <div className="flex flex-col items-center text-center">
                            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-10 h-10 mb-2" />
                            <p className="font-bold text-2xl text-brand-black">6+ Reviews</p>
                            <p className="text-gray-500 text-sm">on Google Business</p>
                        </div>
                        <div className="w-px h-16 bg-gray-200 hidden md:block" />
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green font-bold mb-2">100%</div>
                            <p className="font-bold text-2xl text-brand-black font-poppins uppercase">Satisfaction</p>
                            <p className="text-gray-500 text-sm">Guaranteed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-brand-green/30 transition-all duration-300 relative group">
                                <Quote className="absolute top-6 right-8 text-brand-green/10 w-12 h-12" />
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                                        {review.initial}
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-black text-lg">{review.name}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, j) => (
                                                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-xs font-bold text-brand-black grayscale group-hover:grayscale-0 transition-all">
                                        <CheckCircle size={14} className="text-brand-green" /> Verified Project
                                    </div>
                                    <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <a 
                            href="https://g.page/r/CaeovOje_oP7EAE/review" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-500/20 hover:scale-105"
                        >
                            <Star size={24} fill="currentColor" /> SHARE YOUR EXPERIENCE <ExternalLink size={20} />
                        </a>
                        <p className="mt-8 text-gray-500 max-w-2xl mx-auto">
                            Your feedback helps us continue to improve our prestige standard. Each review is a testament to Robert's commitment to quality craftsmanship in Spokane.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">Experience the Prestige Result</h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto italic">Join our list of happy homeowners throughout Spokane and the Inland Northwest.</p>
                            <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-green-500/20">
                                CALL FOR FREE ESTIMATE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default TestimonialsPage;
