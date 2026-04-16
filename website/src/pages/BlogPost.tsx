import { Phone, Mail, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { injectPageSEO } from '../lib/seo';
import { generateArticleSchema, generateBreadcrumbSchema } from '../lib/schemaGenerator';

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
    path: string;
    image?: string;
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
    path,
    image = "https://prestigecustompaintingllc.com/logo.png"
}: BlogPostProps) {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        const articleSchema = generateArticleSchema({
            topic: title,
            description: metaDesc,
            image,
            datePublished: date,
            dateModified: date,
            authorName: "Prestige Painting Team",
            url: `https://prestigecustompaintingllc.com${path}`
        });

        const breadcrumbSchema = generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: title, path: path }
        ]);

        const cleanup = injectPageSEO({
            seoTitle: metaTitle,
            description: metaDesc,
            path: path,
            schemas: [
                { id: 'article-schema', data: articleSchema },
                { id: 'breadcrumb-schema', data: breadcrumbSchema }
            ]
        });

        return cleanup;
    }, [metaTitle, metaDesc, title, date, path, image]);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-poppins">
            <Navbar />

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
                        <div className="bg-brand-black p-8 rounded-[2rem] sticky top-32 text-center">
                            <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wider">Need a Professional?</p>
                            <a href={`tel:${phoneNumber}`} className="block bg-brand-green text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95">
                                GET FREE ESTIMATE
                            </a>
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
