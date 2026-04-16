import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PrivacyPolicyPage() {
    const { companyName, email } = SITE_INFO;

    useEffect(() => {
        const title = `Privacy Policy | ${companyName}`;
        const description = `Privacy Policy for ${companyName}. Learn how we protect your data and handle information for our painting services in Spokane.`;
        document.title = title;
        
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/privacy-policy'
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
                        <Lock size={14} /> LEGAL INFORMATION
                    </div>
                    <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight">Privacy Policy</h1>
                    <p className="text-gray-400 mt-4 max-w-2xl text-lg">
                        Your trust is our most valuable asset. Learn how {companyName} handles your information with care and integrity.
                    </p>
                </div>
            </header>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg prose-green max-w-none text-gray-600">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                            <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-poppins font-bold text-brand-black mb-0">Commitment to Privacy</h2>
                                <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest">Last Updated: April 2026</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-brand-black flex items-center gap-3 mb-4">
                                    <Eye size={20} className="text-brand-green" /> 1. Information We Collect
                                </h3>
                                <p>
                                    At {companyName}, we only collect information necessary to provide you with expert painting services. This includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Contact Information:</strong> Name, address, phone number, and email address provided via our quote forms.</li>
                                    <li><strong>Project Details:</strong> Information about your home, service interests (interior, exterior, etc.), and scheduling preferences.</li>
                                    <li><strong>Usage Data:</strong> Basic technical information about how you interact with our website to help us improve the user experience.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-black flex items-center gap-3 mb-4">
                                    <FileText size={20} className="text-brand-green" /> 2. How We Use Your Data
                                </h3>
                                <p>Your information is used strictly for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Generating accurate project estimates and quotes.</li>
                                    <li>Scheduling and managing your painting projects.</li>
                                    <li>Communicating project updates or responding to inquiries.</li>
                                    <li>Internal record keeping for warranty and service history.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-black mb-4 items-center gap-3">3. Data Sharing & Security</h3>
                                <p className="mb-4">
                                    <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                                </p>
                                <p>
                                    All data collected is stored securely. We only share specific details (like your address) with our crew members and partners when necessary to perform the requested services on your property.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-black mb-4">4. Your Rights</h3>
                                <p>
                                    You have the right to request a copy of the data we have on file for you, or to request the deletion of your personal information after your project is completed and the warranty period has expired.
                                </p>
                            </div>

                            <div className="pt-10 border-t border-gray-100">
                                <h3 className="text-xl font-bold text-brand-black mb-4">5. Contact Our Privacy Lead</h3>
                                <p>If you have questions about this policy or how your data is handled, please contact us at:</p>
                                <a href={`mailto:${email}`} className="text-brand-green font-bold hover:underline">{email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
