import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEOHead 
                seoTitle="Page Not Found | Prestige Custom Painting LLC"
                description="The page you are looking for does not exist. Return to our homepage to explore our Spokane painting services."
                path="/404"
                noindex={true}
            />
            <Navbar />
            
            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="text-center max-w-2xl">
                    <div className="inline-block p-4 rounded-full bg-brand-green/10 text-brand-green mb-8">
                        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-poppins font-bold text-brand-black mb-6">404</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h2>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        It looks like the painting project you're looking for has moved or the link is broken. 
                        Let's get you back to the right place.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="bg-brand-green text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-green-500/20">
                            Back to Home
                        </Link>
                        <Link to="/service-area" className="bg-brand-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all">
                            View Service Areas
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
