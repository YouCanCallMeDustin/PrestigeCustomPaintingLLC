import { ArrowLeft, Heart, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutUsPage() {
    const { phoneNumber, email, ownerName } = SITE_INFO;

    useEffect(() => {
        const title = "About Us | Prestige Custom Painting LLC | Spokane House Painters";
        const description = "Learn about Prestige Custom Painting LLC, a locally owned painting company in Spokane, WA. Meet Robert and discover our commitment to premium quality and 5-star service.";
        document.title = title;
        return injectPageSEO({
            title,
            description,
            path: '/about',
        });
    }, []);

    const values = [
        { icon: <Heart size={24} />, title: "Local Roots", desc: "Born and raised in the Inland Northwest, we care about the beauty and longevity of our local neighborhoods." },
        { icon: <Award size={24} />, title: "Premium Standards", desc: "We use only top-tier materials like Benjamin Moore and Sherwin Williams to ensure lasting results." },
        { icon: <Shield size={24} />, title: "Full Trust", desc: "Licensed, insured, and committed to absolute transparency on every project." },
    ];

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
                            About <span className="text-brand-green">Prestige</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                            Founded on the principle of "Expect Excellence," Prestige Custom Painting LLC is Spokane's dedicated partner for high-end residential and commercial transformations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-brand-green/5 rounded-[3rem] -rotate-2" />
                            <img
                                src="/robert.jpg"
                                alt="Robert, owner of Prestige Custom Painting LLC in Spokane WA"
                                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-8 -right-8 z-20 bg-brand-black p-8 rounded-3xl shadow-2xl border-b-4 border-brand-green hidden sm:block">
                                <p className="text-white font-bold text-2xl italic">"Expect Excellence."</p>
                                <p className="text-brand-green font-semibold mt-2">— {ownerName}, Founder</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">A Higher Standard of Professional Care</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At <strong>Prestige Custom Painting LLC</strong>, we believe that painting is more than just applying color to a surface. It's about protecting one of your most significant investments and creating a space that inspires you every day.
                                </p>
                                <p>
                                    Founded by <strong>{ownerName}</strong>, a lifelong resident of the Inland Northwest, our company was built to address a need for reliable, detail-oriented painters who communicate clearly and deliver on their promises. We've grown into one of Spokane's most trusted painting contractors by focusing on one thing: <strong>uncompromising quality</strong>.
                                </p>
                                <p>
                                    From the initial estimate to the final walkthrough, we treat your home as if it were our own. We use state-of-the-art equipment and specialized techniques—like HVLP spraying for cabinets—to provide finishes that standard painting companies simply can't match.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-x-8 gap-y-4">
                                    <div className="flex items-center gap-2 text-brand-black font-bold">
                                        <CheckCircle size={20} className="text-brand-green" /> Licensed & Insured
                                    </div>
                                    <div className="flex items-center gap-2 text-brand-black font-bold">
                                        <CheckCircle size={20} className="text-brand-green" /> 5-Star Rated
                                    </div>
                                    <div className="flex items-center gap-2 text-brand-black font-bold">
                                        <CheckCircle size={20} className="text-brand-green" /> Locally Owned
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 md:py-32 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Our Core Values</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-brand-black">The Prestige Way</h3>
                    </div>
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
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-poppins font-bold text-white mb-8">
                                Trust your home to <br className="hidden md:block" /> the <span className="text-brand-green italic">Spokane Experts</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-green-500/20">
                                    GET FREE ESTIMATE
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl backdrop-blur-md transition-all">
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
