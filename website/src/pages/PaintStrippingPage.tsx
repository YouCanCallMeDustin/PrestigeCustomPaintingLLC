import { Phone, ArrowLeft, Star, Eraser } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function PaintStrippingPage() {
    const { phoneNumber } = SITE_INFO;

    useEffect(() => {
        document.title = "Paint Stripping Service Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Need a professional paint stripping service in Spokane? We clean old wood and masonry so your property looks perfect again.');
    }, []);

    const servicesList = [
        { name: "Paint Stripping", desc: "Removing old, flaking paint by hand is slow and frustrating. We safely lift away the bad layers so your home is ready for a fresh, clean coat." },
        { name: "Wood Paint Removal", desc: "Historic homes often have original wood siding covered in chipped paint. We clean the timber carefully without damaging the natural grain beneath." },
        { name: "Metal Paint Removal", desc: "Rusty metal railings or old doors need special care. We clear away the crusty old finish to stop rust and prepare the metal for sealing." },
        { name: "Surface Coating Removal", desc: "Sometimes previous owners put the wrong sealer on a beautiful patio or deck. We dissolve those tough coatings quickly." },
        { name: "Paint Removal From Masonry", desc: "Brick and stone look terrible when old paint starts peeling off the sides. We gently lift the color away and let the natural masonry breathe again." },
        { name: "Exterior Paint Removal", desc: "When the outside of your house has layers of failing paint, simply painting over it will not work. We scrape the whole exterior down to a solid base." }
    ];

    const services = servicesList.map(s => ({
        ...s,
        slug: s.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')
    }));

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 outline-none">
                        <img src="/logo.png" alt="Prestige Custom Painting LLC logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="font-poppins font-bold text-base md:text-xl tracking-tight leading-tight">
                            <span className="text-brand-black">PRESTIGE CUSTOM</span>{" "}
                            <span className="text-brand-green">PAINTING</span>{" "}
                            <span className="text-brand-black">LLC.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link to="/our-work" className="hidden md:block text-sm font-bold hover:text-brand-green transition-colors mr-4">OUR WORK</Link>
                        <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </nav>

            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Star size={12} fill="currentColor" /> LOCAL SPOKANE EXPERTS
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            Paint Stripping Service Spokane
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        Last summer, folks in the West Central neighborhood called us when their old porch paint started peeling badly in the hot sun. Older homes have thick layers of old paint that just will not hold a new coat. A fresh coat placed over failing old layers will just peel right off again. As a highly rated paint stripping service in Spokane, we help homeowners do the hard prep work right the first time.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 font-medium">
                        We get calls from people in Cheney and Spokane Valley asking why their exterior paint keeps failing after only two years. The truth is, you have to get down to the bare wood or a really solid base to make it look right. Here is a helpful guide to the exact services we offer to get your home ready for a beautiful new look.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s, idx) => (
                            <Link to={`/service/${s.slug}`} key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-green transition-colors group block">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-green shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                    <Eraser size={24} />
                                </div>
                                <h2 className="text-xl font-poppins font-bold text-brand-black mb-3 group-hover:text-brand-green transition-colors">{s.name}</h2>
                                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>

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

export default PaintStrippingPage;

