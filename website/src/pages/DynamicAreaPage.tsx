import { useParams, Navigate, Link } from 'react-router-dom';
import AreaPage from './AreaPage';
import { areaData } from '../data/areaData';

export default function DynamicAreaPage() {
    const { fullSlug } = useParams<{ fullSlug: string }>();
    
    // Check if the slug starts with "painting-"
    if (!fullSlug || !fullSlug.startsWith('painting-')) {
        // If it doesn't match our pattern, it's actually a 404 or needs to be handled by another route
        // But since this is a catch-all, we should show a 404 style or redirect
        return <Navigate to="/service-area" replace />;
    }

    // Extract the actual town slug (strip "painting-")
    const townSlug = fullSlug.replace('painting-', '');
    
    // Normalize slug (lowercase and trim slashes)
    const normalizedSlug = townSlug.toLowerCase().replace(/\/$/, "");
    
    // Find the area data based on the slug
    const area = areaData.find(a => a.slug.toLowerCase() === normalizedSlug);

    if (!area) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white p-4">
                <div className="text-center max-w-md">
                    <h1 className="text-4xl font-poppins font-bold mb-4">Area Not Found</h1>
                    <p className="text-gray-600 mb-8">We couldn't find a service page for "{townSlug}".</p>
                    <Link to="/service-area" className="bg-brand-green text-white px-8 py-3 rounded-xl font-bold">Back to Service Areas</Link>
                </div>
            </div>
        );
    }

    const { city, heroTagline, funFact } = area;

    return (
        <AreaPage
            city={city}
            state="WA"
            slug={area.slug}
            metaTitle={`Professional House Painters in ${city} WA | Prestige Custom Painting LLC`}
            metaDesc={`Looking for professional painters in ${city}, WA? Prestige Custom Painting LLC specializes in expert interior and exterior painting services for homeowners and businesses in ${city}. Call Today!`}
            heroTagline={heroTagline}
            introParagraphs={[
                `${city} is a key community in the Inland Northwest, and Prestige Custom Painting LLC is proud to serve its homeowners and businesses with professional painting services built to last. Whether you need a fresh interior refresh, a durable exterior repaint, or specialty cabinet refinishing, we're your local painting experts in ${city}.`,
                `The ${city} area has a unique character, from its historic neighborhoods to newer housing developments. With the regional growth in Spokane County comes the need for skilled painting contractors who understand the demands of both classic and modern construction, as well as the specific weathering challenges of our North Central Washington climate.`,
                `We work with homeowners all over the ${city} region. No matter where your property is located, you'll get the same professional-grade service, premium paint products, and 100% satisfaction guarantee that Prestige Custom Painting LLC is known for in communities across Spokane.`,
                `Exterior painting in ${city} is especially important given our local exposure to intense summer sun and freezing winter snow. We exclusively use weather-resistant, premium-grade exterior paints from Sherwin-Williams and Benjamin Moore that are specifically formulated to hold up in ${city}'s environment — protecting your home and maintaining its value for years to come.`
            ]}
            nearbyAreas={["Spokane, WA", "Spokane Valley, WA", "Liberty Lake, WA", "Cheney, WA", "Airway Heights, WA"]}
            funFact={funFact}
        />
    );
}
