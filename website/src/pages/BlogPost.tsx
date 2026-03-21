import { Phone, Mail, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

export interface BlogSection {
    heading: string;
    content: string | string[];
}

export interface BlogPostProps {
    title: string;
    date: string;
    readTime: string;
    category: string;
    metaTitle: string;
    metaDesc: string;
    intro: string;
    sections: BlogSection[];
}

export default function BlogPost({
    title,
    date,
    readTime,
    category,
    metaTitle,
    metaDesc,
    intro,
    sections,
}: BlogPostProps) {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        document.title = metaTitle;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', metaDesc);
        window.scrollTo(0, 0);
    }, [metaTitle, metaDesc]);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-poppins">
            {/* Header / Nav (Same as others) */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img src="/logo.png" alt="Prestige Custom Painting LLC logo - House Painters Spokane WA" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="font-bold text-base md:text-xl tracking-tight leading-tight uppercase">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}
                            <span className="text-brand-green">PAINTING</span>{" "}
                            <span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 md:gap-6">
                        <a href={`tel:${phoneNumber}`} className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-brand-green transition-colors">
                            <Phone size={18} className="text-brand-green" />{phoneNumber}
                        </a>
                        <a href={`mailto:${email}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-brand-black pt-20 pb-16 md:pt-32 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 -skew-x-12 translate-x-20" />
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 tracking-widest uppercase">
                        {category}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        {title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-2"><Clock size={16} className="text-brand-green" /> {readTime} READ</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full" />
                        <span>{date}</span>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <main className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_320px] gap-16">
                    {/* Main Content */}
                    <article className="max-w-3xl">
                        <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-12 hover:gap-3 transition-all text-sm group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
                        </Link>
                        
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-12 border-l-4 border-brand-green pl-6 italic">
                                {intro}
                            </p>

                            {sections.map((section, idx) => (
                                <div key={idx} className="mb-12">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-black">{section.heading}</h2>
                                    {Array.isArray(section.content) ? (
                                        section.content.map((p, pIdx) => (
                                            <p key={pIdx} className="text-lg text-gray-600 leading-relaxed mb-4">{p}</p>
                                        ))
                                    ) : (
                                        <p className="text-lg text-gray-600 leading-relaxed">{section.content}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Share & Author Card */}
                        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
                                <div>
                                    <p className="font-bold text-brand-black">Prestige Painting Team</p>
                                    <p className="text-sm text-gray-400">Spokane's Local Painting Experts</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-2">Share:</span>
                                {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-brand-green hover:text-brand-green transition-all">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-12">
                        <div className="bg-brand-gray/30 p-8 rounded-[2rem] border border-gray-100 sticky top-32">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Star size={20} className="text-brand-green fill-brand-green" /> All Services
                            </h3>
                            <div className="space-y-3">
                                <Link to="/#services" className="flex items-center justify-between group bg-white p-4 rounded-xl border border-gray-50 hover:border-brand-green transition-all shadow-sm">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-brand-black group-hover:text-brand-green transition-colors">View Service Hub</span>
                                        <span className="text-xs text-gray-500 mt-1">Explore all 50+ services on our homepage</span>
                                    </div>
                                    <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                                </Link>
                            </div>
                            
                            <hr className="my-8 border-gray-200" />
                            
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">Need a Professional?</p>
                                <a href={`tel:${phoneNumber}`} className="block bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-brand-green transition-all shadow-lg active:scale-95">
                                    GET FREE ESTIMATE
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* CTA Bottom Section */}
            <section className="py-20 md:py-32 bg-brand-gray/20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
                        Transform Your Spokane Home with <span className="text-brand-green">Confidence</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Don't leave your investment to chance. Get professional-grade painting results backed by years of experience in the Inland Northwest.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-500/20 active:scale-95">
                            {phoneNumber}
                        </a>
                        <a href={`mailto:${email}`} className="bg-white hover:bg-gray-50 text-brand-black px-10 py-5 rounded-2xl font-bold text-xl transition-all border border-gray-200 active:scale-95">
                            SEND EMAIL
                        </a>
                    </div>
                </div>
            </section>

            {/* Mobile Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4">
                <a href={`tel:${phoneNumber}`} className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Phone size={20} className="text-brand-green" /> CALL
                </a>
                <a href={`mailto:${email}`} className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Mail size={20} /> QUOTE
                </a>
            </div>

            <Footer />
        </div>
    );
}
