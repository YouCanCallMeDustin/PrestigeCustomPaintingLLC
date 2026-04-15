import { Heart, Award, Shield, CheckCircle, Star, MapPin, UserCheck } from 'lucide-react';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateLocalBusinessSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutUsPage() {
    const { phoneNumber, email, ownerName, companyName } = SITE_INFO;

    useEffect(() => {
        const title = "Spokane's Expert House Painters: Our Story & Quality Promise";
        const description = `Meet Robert and the team at ${companyName}. Discover how our Inland Northwest roots and 'Expect Excellence' philosophy redefine professional painting in Spokane.`;
        document.title = title;
        
        return injectPageSEO({
            title,
            description,
            path: '/about',
            keywords: "about prestige custom painting, robert painting spokane, local spokane painters, professional painting company spokane, house painting philosophy",
            schemas: [
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/about"
                    })
                },
                {
                    id: 'local-business',
                    data: generateLocalBusinessSchema()
                }
            ]
        });
    }, [companyName]);

    const values = [
        { icon: <Heart size={24} />, title: "Local Heritage", desc: "Robert was born and raised in the Inland Northwest. We don't just work in Spokane; we live here, and we care about every street we paint." },
        { icon: <Award size={24} />, title: "The Prestige Standard", desc: "We use only the highest-tier coatings from Benjamin Moore and Sherwin Williams, applied with precision mechanical tools." },
        { icon: <Shield size={24} />, title: "Absolute Trust", desc: "We are fully licensed, bonded, and insured. We believe in 100% transparency from the first quote to the final walkthrough." },
    ];

    const qualityChecklist = [
        "Industrial-grade substrate cleaning and power washing",
        "Mechanical sanding of all failed coatings and transitions",
        "Premium elastomeric caulking for weather-sealed envelopes",
        "High-adhesion specialty priming for durable bonds",
        "Two full coats of premium finish for true color depth",
        "Personal final inspection by Robert on every project"
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero Section */}
            <header className="relative bg-brand-black text-white pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-green/5 -skew-x-12 transform translate-x-24 md:translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-8 animate-fade-in uppercase">
                            <UserCheck size={14} fill="currentColor" /> ABOUT PRESTIGE CUSTOM PAINTING LLC
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-8 leading-tight tracking-tight">
                            More Than Just <span className="text-brand-green italic">Paint</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl font-medium">
                            Discover the "Expect Excellence" philosophy that has made {companyName} the Inland Northwest's trusted partner for high-authority property transformations.
                        </p>
                    </div>
                </div>
            </header>

            {/* Quick Takeaways / TL;DR */}
            <section className="relative -mt-16 z-20 px-4 mb-20">
                <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <MapPin className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Ownership</span>
                        <span className="text-lg font-bold text-brand-black">Locally Owned</span>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <Star className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Rating</span>
                        <span className="text-lg font-bold text-brand-black">5-Star Verified</span>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <Award className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Standards</span>
                        <span className="text-lg font-bold text-brand-black">Premium Prep</span>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <Shield className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Security</span>
                        <span className="text-lg font-bold text-brand-black">Licensed & Bonded</span>
                    </div>
                </div>
            </section>

            {/* Founder Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3rem] -rotate-2" />
                            <img
                                src="/robert.jpg"
                                alt="Robert, owner of Prestige Custom Painting LLC and professional painter in Spokane WA"
                                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-8 -right-8 z-20 bg-brand-black p-8 rounded-3xl shadow-2xl border-b-4 border-brand-green hidden sm:block">
                                <p className="text-white font-bold text-2xl italic">"Expect Excellence."</p>
                                <p className="text-brand-green font-semibold mt-2">— {ownerName}, Founder</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">The Inland Northwest Roots of Excellence</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At <strong>Prestige Custom Painting LLC</strong>, our expertise is built on deep local experience. Founded by <strong>{ownerName}</strong>, a lifelong resident of the Inland Northwest, our company understands the specific biological and climate challenges that Spokane homes face.
                                </p>
                                <p>
                                    From the historic architecture of the South Hill to the modern developments in Liberty Lake, we've seen how Spokane's 100°F summers and sub-zero winters can destroy a standard paint job. We built this company to provide a higher standard of care—one that focuses on technical protection rather than just aesthetic coverage.
                                </p>
                                <div className="bg-brand-green/5 border-l-4 border-brand-green p-6 my-8 rounded-r-2xl">
                                    <p className="text-brand-black font-bold italic mb-2">"Expert Note:"</p>
                                    <p className="text-gray-700 text-sm italic">
                                        "Most painting failures in Spokane occur because contractors use standard 'off-the-shelf' caulk and primer that can't handle our expansion and contraction cycles. We use specialized industrial elastomerics that stay sealed for a decade."
                                    </p>
                                </div>
                                <p>
                                    Whether it's a meticulous interior room transformation or a large-scale exterior restoration, we bring the same level of focus and professionalism to every brushstroke. We don't use 'seasonal' laborers; our crew is composed of vetted professionals who treat your home with the absolute respect it deserves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Prestige Quality Checklist */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">OUR QUALITY SYSTEM</h2>
                    <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black mb-16">The Prestige Quality Checklist</h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {qualityChecklist.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-start gap-4 text-left group hover:border-brand-green transition-all duration-300">
                                <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all">
                                    <CheckCircle size={20} />
                                </div>
                                <p className="text-brand-black font-bold leading-tight">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Mistakes Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Homeowner Warning</h2>
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold text-brand-black">The High Cost of "Cheap" Painting</h3>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-brand-black">Mistake #1: Skipping the Mechanical Sanding</h4>
                                <p className="text-gray-600 leading-relaxed">Many crews just 'slap paint' over old, loose layers. In Spokane, this leads to immediate peeling once the first frost hits. We mechanically sand transitions to ensure a flat, bonded surface.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-brand-black">Mistake #2: Using Low-VOC Paint in Cold Temps</h4>
                                <p className="text-gray-600 leading-relaxed">Painting when it's too cold or damp (below 40°F) stops the chemical bonding process. We use moisture meters on every job to prove the substrate is ready before we open a single can.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-brand-black">Mistake #3: Ignoring the LP SmartSide Details</h4>
                                <p className="text-gray-600 leading-relaxed">Spokane has thousands of LP siding homes. If you don't paint the bottom edges, water wicks up and rots the boards. We include edge-painting as a mandatory standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Trust Bar */}
            <section className="py-24 bg-brand-gray/30 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                        {values.map((v, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 shadow-inner">
                                    {v.icon}
                                </div>
                                <h4 className="text-2xl font-poppins font-bold mb-4 text-brand-black">{v.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-lg">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-poppins font-bold text-white mb-8">
                                Partner with Spokane's <br className="hidden md:block" /> <span className="text-brand-green italic">Trusted Local Pros</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all border-b-4 border-green-700 hover:scale-105 active:scale-95 shadow-2xl shadow-green-500/20">
                                    CALL {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl backdrop-blur-md transition-all border border-white/20">
                                    SEND AN EMAIL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default AboutUsPage;
