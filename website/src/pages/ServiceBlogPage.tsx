import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Phone, CheckCircle2, AlertCircle, Lightbulb, ChevronRight, ListChecks } from 'lucide-react';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { blogData } from '../data/blogContent';
import NotFound from './NotFound';
import { injectPageSEO, generateWebPageSchema, generateFAQSchema } from '../lib/seo';

function ServiceBlogPage() {
    const { serviceSlug } = useParams();
    const { phoneNumber } = SITE_INFO;

    const data = serviceSlug ? blogData[serviceSlug] : null;

    useEffect(() => {
        if (data && serviceSlug) {
            const schemas: { id: string; data: any }[] = [
                { id: 'webpage-schema', data: generateWebPageSchema({
                    topic: `${data.h1} | Prestige Custom Painting LLC`,
                    description: data.metaDescription,
                    url: `https://prestigecustompaintingllc.com/service/${serviceSlug}`
                }) }
            ];

            if (data.faqs && data.faqs.length > 0) {
                schemas.push({ id: 'faq-schema', data: generateFAQSchema(data.faqs) });
            }

            return injectPageSEO({
                seoTitle: `${data.h1} | Prestige Custom Painting LLC`,
                description: data.metaDescription,
                keywords: data.keywords,
                path: `/service/${serviceSlug}`,
                schemas
            });
        }
    }, [data, serviceSlug]);

    if (!data) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to={data.parentRoute} className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO {data.parentName.toUpperCase()}
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6">
                            <Star size={12} fill="currentColor" /> LOCAL SPOKANE EXPERTS
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                            {data.h1}
                        </h1>
                        {data.readingTime && (
                          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                            <span>Reading Time: {data.readingTime}</span>
                          </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <article className="lg:w-2/3">
                        
                        {/* TL;DR Section */}
                        {data.tldr && data.tldr.length > 0 && (
                          <div className="mb-12 bg-gray-50 border-l-4 border-brand-green p-8 rounded-r-3xl">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <ListChecks className="text-brand-green" /> Key Takeaways
                            </h2>
                            <ul className="space-y-3">
                              {data.tldr.map((point, i) => (
                                <li key={i} className="flex gap-2 text-gray-700">
                                  <ChevronRight size={18} className="text-brand-green shrink-0 mt-1" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Definition Section */}
                        {data.definition && (
                          <div className="mb-12">
                            <h2 className="text-2xl font-bold font-poppins mb-4">What is {data.h1}?</h2>
                            <p className="text-xl text-gray-600 italic leading-relaxed">
                              {data.definition}
                            </p>
                          </div>
                        )}

                        {/* Core Content */}
                        <div className="prose prose-lg prose-green max-w-none">
                            {data.content}
                        </div>

                        {/* Who This Is For Section */}
                        {data.whoThisIsFor && data.whoThisIsFor.length > 0 && (
                          <div className="mt-16 bg-brand-gray/30 p-10 rounded-3xl">
                            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-brand-black mb-8">Who This Is For</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                              {data.whoThisIsFor.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-brand-black">
                                    <CheckCircle2 className="text-brand-green" size={20} /> {item.target}
                                  </h3>
                                  <p className="text-gray-600 text-sm leading-relaxed">{item.summary}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Step-by-Step System */}
                        {data.processSteps && data.processSteps.length > 0 && (
                          <div className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-brand-black mb-8">Our Proven {data.h1} Process</h2>
                            <div className="space-y-8">
                              {data.processSteps.map((step, i) => (
                                <div key={i} className="flex gap-6">
                                  <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg">
                                    {i + 1}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-3">{step.step}</h3>
                                    <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-200">
                                      <p className="text-gray-700 leading-relaxed mb-4">{step.why}</p>
                                      <div className="flex flex-col md:flex-row gap-4 mt-4">
                                        {step.tip && (
                                          <div className="flex-1 flex gap-2 text-sm bg-brand-green/10 p-3 rounded-xl">
                                            <Lightbulb className="text-brand-green shrink-0" size={18} />
                                            <span className="text-brand-black font-medium"><strong className="text-brand-green">Pro Tip:</strong> {step.tip}</span>
                                          </div>
                                        )}
                                        {step.mistake && (
                                          <div className="flex-1 flex gap-2 text-sm bg-red-50 p-3 rounded-xl border border-red-100">
                                            <AlertCircle className="text-red-500 shrink-0" size={18} />
                                            <span className="text-brand-black font-medium"><strong className="text-red-500">Pitfall:</strong> {step.mistake}</span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Comparison Table */}
                        {data.comparisonTable && (
                          <div className="mt-16 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
                            <div className="bg-brand-black text-white p-6">
                              <h3 className="text-xl font-bold">Options Comparison</h3>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                  <tr>
                                    {data.comparisonTable.headers.map((header, i) => (
                                      <th key={i} className="px-6 py-4 font-bold text-brand-black text-sm uppercase">{header}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.comparisonTable.rows.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                      {row.map((cell, j) => (
                                        <td key={j} className="px-6 py-4 text-gray-600 text-sm">{cell}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* FAQ Section */}
                        {data.faqs && data.faqs.length > 0 && (
                          <div className="mt-16 pt-16 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-brand-black mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                              {data.faqs.map((faq, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-3xl">
                                  <h3 className="text-lg font-bold mb-4 text-brand-black flex gap-3">
                                    <span className="text-brand-green">Q:</span> {faq.q}
                                  </h3>
                                  <p className="text-gray-600 leading-relaxed pl-7">
                                    {faq.a}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-16 pt-16 border-t border-gray-100 text-sm italic text-gray-400">
                          Last updated by Spokane SEO Expert Task Force.
                        </div>
                        
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-brand-black text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl shadow-brand-green/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl rounded-full" />
                                <h3 className="text-2xl font-poppins font-bold mb-4 relative z-10">Free {data.parentName} Estimate</h3>
                                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">We provide transparent pricing and expert advice for your Spokane property. Call us direct.</p>
                                <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 w-full bg-brand-green hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-xl relative z-10">
                                    <Phone size={20} /> {phoneNumber}
                                </a>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl">
                                <h3 className="text-xl font-poppins font-bold mb-4">Service Access</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">Available quickly for all properties operating across the entire Inland Northwest network.</p>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/house-painters-spokane" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Spokane</Link>
                                    <Link to="/painting-spokane-valley" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Spokane Valley</Link>
                                    <Link to="/painting-liberty-lake" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Liberty Lake</Link>
                                    <Link to="/painting-cheney" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Cheney</Link>
                                    <Link to="/painting-airway-heights" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Airway Heights</Link>
                                    <Link to="/service-area" className="px-4 py-2 bg-brand-green/10 border border-brand-green/20 rounded-full text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-all">View All 60+ Areas</Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

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

export default ServiceBlogPage;
