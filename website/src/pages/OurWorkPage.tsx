import { Phone, Mail, MapPin, ArrowLeft, Star, Camera, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function OurWorkPage() {
    const { phoneNumber, email } = SITE_INFO;

    useEffect(() => {
        const title = "Our Work: Spokane Painting Contractor Portfolio | Prestige Custom Painting LLC";
        const description = "View our portfolio of exterior house painting, fence staining, and meticulous prep work in Spokane, WA. See the Prestige Custom Painting difference today.";
        
        const cleanup = injectPageSEO({
            seoTitle: title,
            description: description,
            path: '/our-work',
            schemas: [
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        topic: title,
                        description: description,
                        url: "https://prestigecustompaintingllc.com/our-work"
                    })
                },
                {
                    id: 'business',
                    data: generateLocalBusinessSchema()
                },
                {
                    id: 'breadcrumb',
                    data: generateBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Our Work", path: "/our-work" }
                    ])
                },
                {
                    id: 'faq',
                    data: generateFAQSchema([
                        {
                            question: "Do you do prep work before painting exterior fences or walls?",
                            answer: "Absolutely. Proper preparation is the most critical step. We extensively pressure wash, scrape loose paint, sand rough edges, and carefully mask surrounding areas (like retaining walls and plants) with plastic before applying any primer or paint."
                        },
                        {
                            question: "What kind of paint do you use for Spokane exteriors?",
                            answer: "We use premium, climate-appropriate paints from Benjamin Moore and Sherwin Williams. These products are specifically formulated to expand and contract with the extreme temperature swings of the Inland Northwest, preventing premature peeling and cracking."
                        },
                        {
                            question: "Can you stain cedar or pine wood fences?",
                            answer: "Yes, we specialize in professional wood fence and deck staining. We use deep-penetrating oil or high-quality solid acrylic stains to protect the wood from UV damage and winter moisture while enhancing its natural beauty."
                        }
                    ])
                }
            ]
        });

        window.scrollTo(0, 0);
        return cleanup;
    }, []);

    const existingGalleryImages = [
        { id: 1, src: "/1.jpg", alt: "Interior - Custom cabinet drawer detail with floral lining" },
        { id: 2, src: "/2.jpg", alt: "Interior - Professional cabinet refinishing (green dresser medium shot)" },
        { id: 3, src: "/3.jpg", alt: "Interior - Furniture/Cabinet transformation showcase in living area" },
        { id: 4, src: "/4.jpg", alt: "Exterior - Professional wooden deck painting and house siding refresh" },
        { id: 5, src: "/5.jpg", alt: "Interior - Clean living room wall and window painting" },
        { id: 6, src: "/6.jpg", alt: "Interior - Professional trim work and internal window cutout/pass-through" },
        { id: 7, src: "/7.jpg", alt: "Interior - Detail-oriented window trim and turquoise accent wall" },
        { id: 8, src: "/8.jpg", alt: "Exterior - Side siding and trim detail on a residential home" },
        { id: 9, src: "/9.jpg", alt: "Interior - Custom blue-grey painted cabinetry/shelving" },
        { id: 10, src: "/10.jpg", alt: "Exterior - Upper level siding and chimney painting" },
        { id: 11, src: "/11.jpg", alt: "Exterior - Full two-story residential exterior painting (white with black trim)" },
        { id: 12, src: "/12.jpg", alt: "Exterior - Single-story house siding and trim refresh (beige/tan)" },
        { id: 13, src: "/13.jpg", alt: "Exterior - Patio area and French door trim painting" },
        { id: 14, src: "/14.jpg", alt: "Exterior - Front entrance portico and black door painting" },
        { id: 15, src: "/15.jpg", alt: "Exterior - Modern house facade with stone accents and brown garage door" },
        { id: 16, src: "/16.jpg", alt: "Exterior - Multi-texture house exterior (upper shingles and lower siding)" },
        { id: 17, src: "/17.jpg", alt: "Exterior - Professional window and siding paint application" },
        { id: 18, src: "/18.jpg", alt: "Exterior - Durable siding and trim protection on house wall" },
        { id: 19, src: "/19.jpg", alt: "Exterior - House siding and wooden fence/screen refresh" },
        { id: 20, src: "/20.jpg", alt: "Exterior - Vertical siding and corner trim detail" },
        { id: 21, src: "/21.jpg", alt: "Exterior - Back porch pillars and siding transformation" },
        { id: 22, src: "/22.jpg", alt: "Exterior - Large window facade and vertical siding refresh" },
        { id: 23, src: "/23.jpg", alt: "Exterior - Complete high-end residential exterior refresh (full house view)" },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm md:text-base">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <Camera size={14} /> Spokane Painting Contractor Portfolio
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
                            Our <span className="text-brand-green">Work</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
                            Discover the Prestige Custom Painting difference. As a top-rated <Link to="/house-painters-spokane" className="text-brand-green hover:underline">Spokane painting contractor</Link>, we believe that seeing is believing. Browse our featured projects below to see our commitment to meticulous prep work, premium materials, and flawless execution.
                        </p>
                    </div>
                </div>
            </header>

            {/* Featured Case Studies / Deep Dives */}
            <main className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Project Showcase</h2>
                        <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black">Recent Spokane Painting Projects</h3>
                    </div>

                    <div className="space-y-20 md:space-y-32">
                        {/* Project 1: Cabin Exterior */}
                        <article className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                            <div className="lg:w-1/2">
                                <figure className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                                    <img 
                                        src="/work-cabin-exterior.jpg" 
                                        alt="Exterior house painting Spokane - Vibrant orange wood cabin siding restoration" 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </figure>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 text-brand-green font-bold mb-4 uppercase text-sm tracking-wide">
                                    <CheckCircle size={16} /> Exterior Siding Refresh
                                </div>
                                <h4 className="text-3xl font-poppins font-bold text-brand-black mb-6">Custom Wood Siding Restoration</h4>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    When tackling wood siding in the Inland Northwest, proper sealing is critical. For this vibrant cabin project, we performed extensive scraping and sanding to ensure a smooth, stable substrate. We then applied a high-adhesion primer followed by premium exterior paint designed to resist UV fading and block moisture. 
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    The vibrant orange finish not only beautifully contrasts with the surrounding pine trees but is engineered to withstand Spokane's harsh winter freeze-thaw cycles.
                                </p>
                                <Link to="/house-painters-spokane" className="text-brand-black font-bold border-b-2 border-brand-green hover:text-brand-green transition-colors pb-1">Learn about our exterior process</Link>
                            </div>
                        </article>

                        {/* Project 2 & 4: Fence Staining combined */}
                        <article className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                                <figure className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <img 
                                        src="/work-fence-stain.png" 
                                        alt="Close up of professional wood fence staining showing rich brown color" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>
                                <figure className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <img 
                                        src="/work-yard-fence.jpg" 
                                        alt="Wide view of a freshly stained wooden yard fence in Spokane" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 text-brand-green font-bold mb-4 uppercase text-sm tracking-wide">
                                    <Shield size={16} /> Fence & Deck Protection
                                </div>
                                <h4 className="text-3xl font-poppins font-bold text-brand-black mb-6">Professional Wood Fence Staining</h4>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    A wooden fence is a significant investment for your property. Without proper protection, Spokane's intense summer sun and wet winters can cause rapid graying, warping, and rot. Our professional fence staining services restore the rich, natural look of the wood while providing a durable barrier against the elements.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    We start by carefully <Link to="/pressure-washing-spokane" className="text-brand-green font-semibold hover:underline">pressure washing</Link> the wood to remove dirt and mildew. Once dry, we apply a deep-penetrating stain—like the rich brown finish seen here—that enhances the grain and extends the lifespan of the fence by years.
                                </p>
                            </div>
                        </article>

                        {/* Project 3: Prep Work */}
                        <article className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                            <div className="lg:w-1/2">
                                <figure className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                                    <img 
                                        src="/work-retaining-wall-prep.jpg" 
                                        alt="Retaining wall painting prep showing plastic masking and tape" 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 text-brand-green font-bold mb-4 uppercase text-sm tracking-wide">
                                    <Star size={16} /> The Prestige Standard
                                </div>
                                <h4 className="text-3xl font-poppins font-bold text-brand-black mb-6">Meticulous Prep Work Excellence</h4>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    What separates an amateur job from a professional painting contractor is the preparation. We firmly believe that a flawless finish is impossible without flawless prep. As shown in this fence project, we use heavy-duty plastic masking and premium painter's tape to protect your landscaping, hardscaping, and property features.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    We never cut corners. Every surface surrounding the paint zone is covered. This ensures sharp, crisp lines and guarantees that paint only goes exactly where it's supposed to—leaving your property pristine.
                                </p>
                            </div>
                        </article>

                        {/* Project 5: Brown House Deck */}
                        <article className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
                            <div className="lg:w-1/2">
                                <figure className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                                    <img 
                                        src="/work-house-deck.jpg" 
                                        alt="Brown house exterior painting with beautiful green landscaping and patio" 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 text-brand-green font-bold mb-4 uppercase text-sm tracking-wide">
                                    <MapPin size={16} /> Residential Facelift
                                </div>
                                <h4 className="text-3xl font-poppins font-bold text-brand-black mb-6">Complete Exterior Revitalization</h4>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    This beautiful multi-level home showcases our ability to handle complex architectural features, including large windows, upper-level balconies, and integrated stonework. The deep, rich brown siding complements the natural, lush landscaping of the property.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Using top-tier coatings ensures that the dark color resists chalking and fading from UV exposure. We meticulously cut in around the trim and windows to deliver a crisp, professional aesthetic that elevates the entire property's curb appeal.
                                </p>
                            </div>
                        </article>

                        {/* Project 6: Redwood Siding & Deck Balcony */}
                        <article className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                            <div className="lg:w-1/2">
                                <figure className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                                    <img 
                                        src="/work-cabin-deck.jpg" 
                                        alt="Cedar toned siding and dark brown deck balcony painting in Spokane" 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 text-brand-green font-bold mb-4 uppercase text-sm tracking-wide">
                                    <Shield size={16} /> Balcony & Trim Restoration
                                </div>
                                <h4 className="text-3xl font-poppins font-bold text-brand-black mb-6">Multi-Level Redwood Balcony & Trim Painting</h4>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    This custom home in the Spokane region required a protective coating that could highlight its unique cedar-toned wood siding, dark brown deck railing, and modern dark window trims. We applied high-durability acrylic coatings to protect the wood balcony against rain and snow melt, while meticulously painting the trim adjacent to the stone veneer entryway on the ground floor.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    The finished project integrates beautifully with the surrounding forested landscape, offering both premium aesthetic appeal and long-term protection against the elements.
                                </p>
                            </div>
                        </article>

                    </div>
                </div>
            </main>

            {/* Why the Detail Matters (SEO Depth) */}
            <section className="py-16 md:py-24 bg-brand-gray/50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-brand-black">Why Spokane Homeowners Choose Prestige</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A lasting paint job requires more than just a brush. It requires environmental knowledge, specific material selection, and rigorous preparation protocols. 
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
                                <Shield size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-black mb-3">Premium Materials</h4>
                            <p className="text-gray-600 leading-relaxed">We refuse to use builder-grade paint. By partnering with industry leaders like Sherwin Williams and Benjamin Moore, we guarantee exceptional coverage and longevity.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
                                <Star size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-black mb-3">Meticulous Prep</h4>
                            <p className="text-gray-600 leading-relaxed">Scraping, sanding, filling, caulking, and extensive masking. We spend more time preparing your home than we do actually painting it, because prep is the foundation of quality.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
                                <MapPin size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-black mb-3">Local Expertise</h4>
                            <p className="text-gray-600 leading-relaxed">As a local Spokane company, we understand the specific challenges our climate poses to exterior coatings. We apply products engineered to survive our dramatic seasons.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold text-brand-black mb-4">Extended Project Gallery</h3>
                        <p className="text-gray-600">Browse more of our interior and exterior transformations.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {existingGalleryImages.map((image) => (
                            <div 
                                key={image.id} 
                                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-50"
                            >
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex items-center gap-2 text-brand-green mb-2">
                                        <CheckCircle size={14} />
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">Prestige Quality</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm leading-snug">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-brand-gray/50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold text-brand-black mb-4">Frequently Asked Questions</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-bold mb-3 text-brand-black">Do you do prep work before painting exterior fences or walls?</h4>
                            <p className="text-gray-600 leading-relaxed">Absolutely. Proper preparation is the most critical step. We extensively pressure wash, scrape loose paint, sand rough edges, and carefully mask surrounding areas (like retaining walls and plants) with plastic before applying any primer or paint.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-bold mb-3 text-brand-black">What kind of paint do you use for Spokane exteriors?</h4>
                            <p className="text-gray-600 leading-relaxed">We use premium, climate-appropriate paints from Benjamin Moore and Sherwin Williams. These products are specifically formulated to expand and contract with the extreme temperature swings of the Inland Northwest, preventing premature peeling and cracking.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-bold mb-3 text-brand-black">Can you stain cedar or pine wood fences?</h4>
                            <p className="text-gray-600 leading-relaxed">Yes, we specialize in professional wood fence and deck staining. We use deep-penetrating oil or high-quality solid acrylic stains to protect the wood from UV damage and winter moisture while enhancing its natural beauty.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-8">
                                Ready for your own <br /><span className="text-brand-green">transformation?</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-green-500/20">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl backdrop-blur-md transition-all">
                                    GET A FREE QUOTE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
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

export default OurWorkPage;
