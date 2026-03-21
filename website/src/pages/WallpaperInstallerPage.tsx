import { Phone, ArrowLeft, Star, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';

function WallpaperInstallerPage() {
    const { phoneNumber } = SITE_INFO;

    useEffect(() => {
        document.title = "Wallpaper Installer Spokane | Prestige Custom Painting LLC";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Looking for an expert wallpaper installer in Spokane? We offer local advice and professional removal and installation for your beautiful property.');
    }, []);

    const servicesList = [
        { name: "Wallpaper Removal", desc: "Taking down old paper is sticky, frustrating work. We use safe steam and soaking methods to lift it off without ruining your walls." },
        { name: "Wallpaper Installation", desc: "Hanging new patterns requires a steady hand and perfect measuring. We match every seam so your walls look like one solid, beautiful piece." },
        { name: "Wallpaper Repair", desc: "A peeling corner or a small tear can catch your eye every time you walk by. We carefully patch and glue those edges back into place." },
        { name: "Wallpaper Service Preparation", desc: "New paper will not stick properly to a dirty or bumpy wall. We clean, sand, and smooth the surface so your new design lays flat." },
        { name: "Decorative Wallpaper Installation", desc: "Custom murals or expensive textured papers require special handling. We treat your high-end materials with extreme care during the hanging process." }
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
                            Wallpaper Installer Spokane
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        A few months ago, a family near Manito Park called us when they tried to take down 30-year-old floral paper by themselves. They ended up tearing holes right down to the bare drywall. It happens all the time here in Spokane. Old, stubborn glue can turn a fun weekend project into a huge mess. As an expert wallpaper installer in Spokane, we help families avoid these costly mistakes.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 font-medium">
                        We get calls from folks all across Spokane Valley and Liberty Lake asking how to make their rooms look modern again. The truth is, whether you want to remove an ugly old pattern or hang a beautiful new design, it takes patience and the right tools. Here is a helpful guide to the exact services we offer to get your walls looking perfect.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s, idx) => (
                            <Link to={`/service/${s.slug}`} key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-green transition-colors group block">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-green shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                    <Layout size={24} />
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

export default WallpaperInstallerPage;

