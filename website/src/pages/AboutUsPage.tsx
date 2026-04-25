import { Award, Shield, CheckCircle, Star, MapPin, UserCheck, ShieldAlert, Mountain, Sparkles, Clock, Compass } from 'lucide-react';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateLocalBusinessSchema, generateArticleSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutUsPage() {
    const { phoneNumber, email, ownerName, companyName } = SITE_INFO;

    useEffect(() => {
        const title = "Spokane's Expert House Painters: Our Story & Quality Promise";
        const description = `Meet Robert and the team at ${companyName}. Discover how our Inland Northwest roots and excellence philosophy redefine professional painting in Spokane.`;
        document.title = title;
        
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/about',
            keywords: "about prestige custom painting, robert painting spokane, local spokane painters, professional painting company spokane, house painting philosophy",
            schemas: [
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        topic: title,
                        description,
                        url: "https://prestigecustompaintingllc.com/about"
                    })
                },
                {
                    id: 'local-business',
                    data: generateLocalBusinessSchema()
                },
                {
                    id: 'article',
                    data: generateArticleSchema({
                        topic: "About Prestige Custom Painting: Our Philosophy and Inland Northwest Heritage",
                        description: "An in-depth look at the history, values, and exacting standards of Prestige Custom Painting LLC in Spokane, Washington.",
                        image: "https://prestigecustompaintingllc.com/robert.webp",
                        datePublished: "2024-01-01",
                        dateModified: "2026-04-24",
                        authorName: ownerName,
                        url: "https://prestigecustompaintingllc.com/about"
                    })
                }
            ]
        });
    }, [companyName, ownerName]);

    const values = [
        { icon: <Mountain size={24} />, title: "Local Heritage", description: "Robert was born and raised in the Inland Northwest. We don't just work in Spokane; we live here, and we care about every street we paint. We understand the specific weather challenges our homes face." },
        { icon: <Award size={24} />, title: "The Prestige Standard", description: "We use only the highest-tier coatings from Benjamin Moore and Sherwin Williams, applied with precision mechanical tools to ensure absolute perfection and longevity." },
        { icon: <Shield size={24} />, title: "Absolute Trust", description: "We are fully licensed, bonded, and insured. We believe in 100% transparency from the first quote to the final walkthrough. No hidden fees. No cut corners." },
        { icon: <Clock size={24} />, title: "Time-Tested Execution", description: "Every project strictly adheres to our comprehensive sequencing protocol. We don't rush. Proper curing times and systematic preparation are non-negotiable." },
        { icon: <Compass size={24} />, title: "Technical Expertise", description: "We don't just 'slap paint' on walls. We perform moisture testing, pH balancing for masonry, and utilize electrostatic environments for cabinet refinishing." },
        { icon: <Sparkles size={24} />, title: "Immaculate Clean-up", description: "Our job isn't done when the paint dries. We pride ourselves on leaving your property cleaner than we found it, with zero over-spray and a vacuumed interior." }
    ];

    const qualityChecklist = [
        "1. In-depth biological substrate testing (Moisture/pH)",
        "2. Industrial-grade substrate cleaning and power washing",
        "3. Mechanical sanding of all failed coatings and transitions",
        "4. Premium elastomeric caulking for weather-sealed envelopes",
        "5. High-adhesion specialty priming for durable bonds",
        "6. Two full coats of premium finish for true color depth",
        "7. Final multi-point lighting inspection",
        "8. Personal final walkthrough by Robert on every project",
        "9. Provision of labeled touch-up kits for future use",
        "10. Issuance of our comprehensive multi-year warranty"
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="relative bg-brand-black text-white pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-green/5 -skew-x-12 transform translate-x-24 md:translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-8 animate-fade-in uppercase tracking-widest">
                            <UserCheck size={14} fill="currentColor" /> WHO WE ARE
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1] tracking-tight">
                            More Than Just <br/> <span className="text-brand-green italic">Paint & Brushes.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl font-medium">
                            Discover the uncompromising <strong>"Expect Excellence"</strong> philosophy that has established {companyName} as the Inland Northwest's premier authority on architectural coatings and property transformation.
                        </p>
                    </div>
                </div>
            </header>

            {/* Quick Takeaways / TL;DR */}
            <section className="relative -mt-16 z-20 px-4 mb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <MapPin className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Service Area</span>
                        <span className="text-lg font-bold text-brand-black">Spokane & Coeur d'Alene</span>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <Star className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Reputation</span>
                        <span className="text-lg font-bold text-brand-black">5-Star Verified</span>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-green transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                            <Award className="text-brand-green" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Execution</span>
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
            <section className="py-24 bg-white text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3rem] -rotate-2" />
                            <img
                                src="/robert.webp"
                                alt="Robert, owner of Prestige Custom Painting LLC and professional painter in Spokane WA"
                                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5] hover:scale-[1.02] transition-transform duration-700"
                            />
                            <div className="absolute -bottom-8 -right-8 z-20 bg-brand-black p-8 rounded-3xl shadow-2xl border-b-4 border-brand-green hidden sm:block">
                                <p className="text-white font-bold text-2xl italic font-poppins">"Expect Excellence."</p>
                                <p className="text-brand-green font-semibold mt-2 text-sm uppercase tracking-widest">— {ownerName}, Founder</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black leading-tight">The Inland Northwest <br/> Roots of Excellence</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    The painting industry in Spokane is often plagued by 'chuck-in-a-truck' operations—uninsured, untrained laborers who cut corners and disappear when the paint inevitably fails after the first winter. 
                                </p>
                                <p>
                                    <strong>{companyName}</strong> was founded by <strong>{ownerName}</strong> to aggressively oppose that low-standard norm. As a lifelong resident of the Inland Northwest, Robert saw firsthand how our unique climate—featuring scorching 100°F Augusts and brutal sub-zero December freeze-thaw cycles—destroys standard, builder-grade paint jobs.
                                </p>
                                <p>
                                    We don't build our business model on massive volume. We build it on <strong>retention and referrals</strong>. This means we treat every single South Hill Victorian restoration, every Liberty Lake new build, and every Spokane Valley rancher remodel as if it were our own personal property.
                                </p>
                                <div className="bg-brand-green/5 border-l-4 border-brand-green p-8 my-10 rounded-r-3xl">
                                    <p className="text-brand-black font-bold mb-3 flex items-center gap-2 uppercase tracking-widest text-xs">
                                        <Award size={16} className="text-brand-green shrink-0" /> Our Core Technical Differentiator
                                    </p>
                                    <p className="text-gray-700 text-sm italic m-0">
                                        "Most painting failures in Spokane occur because contractors use standard 'off-the-shelf' caulk and primer that cannot handle our violent expansion and contraction cycles. We exclusively specify and install industrial-grade elastomerics and high-build bonding primers that maintain their structural integrity for over a decade. It costs us more upfront, but it ensures you never have to call us for a warranty fix."
                                    </p>
                                </div>
                                <p>
                                    Whether it's a meticulous interior room transformation involving flawless 'Level 5' drywall finishing, or a large-scale exterior restoration requiring aerial lifts and lead-safe compliance, we execute with military precision. We do not hire 'seasonal' collegiate laborers; our crews are composed of vetted, career professionals who treat your home with absolute respect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Trust Bar */}
            <section className="py-24 bg-brand-gray/30 border-y border-gray-100 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">OUR DNA</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black">The Six Pillars of Prestige</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((v, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-brand-green transition-all duration-300">
                                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 shadow-inner">
                                    {v.icon}
                                </div>
                                <h4 className="text-2xl font-poppins font-bold mb-4 text-brand-black">{v.title}</h4>
                                <p className="text-gray-500 leading-relaxed font-medium text-sm">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Prestige Quality Checklist */}
            <section className="py-24 bg-brand-black text-left text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">THE METHODOLOGY</h2>
                            <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">The 10-Point Quality System</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                We mathematically eliminate the chance of peeling, fading, or failure by adhering to a strict, non-negotiable 10-step protocol on every single job site.
                            </p>
                        </div>
                        <div className="lg:w-2/3">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {qualityChecklist.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                                        <div className="text-brand-green mt-1 shrink-0">
                                            <CheckCircle size={20} />
                                        </div>
                                        <p className="text-gray-300 font-medium text-sm m-0 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Mistakes Section */}
            <section className="py-24 bg-white text-left">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Industry Transparency</h2>
                        <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black">The High Cost of "Cheap" Painting</h3>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-6">Why the lowest bid is usually the most expensive mistake.</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-red-500/10 flex flex-col md:flex-row gap-8 items-start hover:border-red-500/30 transition-colors">
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center shrink-0">
                                <ShieldAlert size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-3 text-brand-black">Mistake #1: Skipping Mechanical Preparation</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">Many crews simply power wash and immediately begin spraying paint over old, loose, and chalky layers. In Spokane, this leads to immediate catastrophic peeling once the first freeze hits. We meticulously perform mechanical sanding to effectively 'de-gloss' the surface and feather transitions, ensuring a flat, chemically bonded profile.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-red-500/10 flex flex-col md:flex-row gap-8 items-start hover:border-red-500/30 transition-colors">
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center shrink-0">
                                <ShieldAlert size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-3 text-brand-black">Mistake #2: Painting Outside of Climate Parameters</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">Applying exterior paint when the ambient temperature drops below 40°F, or when the dew point is too high, immediately halts the acrylic curing process. The paint may look dry, but it has not structurally cross-linked. We utilize digital thermal and moisture meters daily to prove the substrate is perfectly primed before we open a single can.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-red-500/10 flex flex-col md:flex-row gap-8 items-start hover:border-red-500/30 transition-colors">
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center shrink-0">
                                <ShieldAlert size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-3 text-brand-black">Mistake #3: Ignoring Cut-Edges on Siding</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">Thousands of homes in Spokane feature LP SmartSide or engineered wood siding. If a contractor fails to paint the bottom 'drip edges' of these boards, water wicks up into the composite fibers, causing irreversible swelling and rot within years. We mandate edge-painting and specialized caulking protocols for every single siding panel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-8 leading-tight">
                                Partner with Spokane's <br /> <span className="text-brand-green italic">Trusted Local Pros</span>
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12">
                                Stop worrying about peeling paint and unreliable contractors. Reach out today for a meticulous, pressure-free evaluation of your property.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-12 py-6 rounded-2xl font-bold text-2xl transition-transform hover:scale-105 shadow-2xl shadow-green-500/30">
                                    CALL {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
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
