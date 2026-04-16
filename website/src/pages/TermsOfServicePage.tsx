import { FileCheck, Gavel, Scale, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function TermsOfServicePage() {
    const { companyName, phoneNumber } = SITE_INFO;

    useEffect(() => {
        const title = `Terms of Service | ${companyName}`;
        const description = `Terms and conditions of service for ${companyName}. Review our service agreements, payment terms, and warranty policies.`;
        document.title = title;
        
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/terms'
        });
    }, [companyName]);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero */}
            <header className="bg-brand-black text-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-green/5 -skew-x-12 transform translate-x-24 md:translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-6 uppercase tracking-widest">
                        <Gavel size={14} /> TERMS & CONDITIONS
                    </div>
                    <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight">Terms of Service</h1>
                    <p className="text-gray-400 mt-4 max-w-2xl text-lg">
                        Clear terms for a seamless professional experience. By engaging with our services, you agree to the following standards.
                    </p>
                </div>
            </header>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg prose-green max-w-none text-gray-600">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                            <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                                <Scale size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-poppins font-bold text-brand-black mb-0">Service Excellence Standards</h2>
                                <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest">Effective Date: April 2026</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-brand-black flex items-center gap-3 mb-4">
                                    <FileCheck size={20} className="text-brand-green" /> 1. Acceptance of Terms
                                </h3>
                                <p>
                                    By using this website or requesting an estimate from {companyName}, you are agreeing to these Terms of Service. These terms apply to all visitors, users, and clients of our painting services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-black flex items-center gap-3 mb-4 text-brand-black">
                                    2. Estimates & Pricing
                                </h3>
                                <p>
                                    Estimates provided by {companyName} are valid for 30 days unless otherwise specified. Final pricing is based on the scope of work detailed in the signed contract. Any changes to the scope of work initiated by the client after the contract is signed may result in additional charges.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-black mb-4">3. Payment Terms</h3>
                                <p className="mb-4 font-bold">A deposit may be required to secure your project dates on our calendar.</p>
                                <p>
                                    Final payment is due upon completion of the project, following the final walkthrough and approval. We accept all major payment methods as specified on your invoice.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-3">
                                    <AlertCircle size={20} className="text-brand-green" /> 4. Client Responsibilities
                                </h3>
                                <p>To ensure a perfect finish, we ask that clients:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Ensure clear access to the areas to be painted.</li>
                                    <li>Notify us of any specific parking or access restrictions.</li>
                                    <li>Provide final color selections at least 5 days before the project starts.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-black mb-4">5. Warranty & Satisfaction</h3>
                                <p>
                                    We stand by our "Expect Excellence" promise. {companyName} provides a warranty on labor and materials as specified in your individual contract. This covers peeling, blistering, or significant fading due to improper application.
                                </p>
                            </div>

                            <div className="pt-10 border-t border-gray-100 text-center">
                                <p className="text-gray-400 mb-6 font-medium">Have questions about our project terms?</p>
                                <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105">
                                    Call {phoneNumber}
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
