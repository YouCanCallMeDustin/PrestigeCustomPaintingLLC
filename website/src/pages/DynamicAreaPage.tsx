import { useParams } from 'react-router-dom';
import AreaPage from './AreaPage';
import { areaData } from '../data/areaData';
import NotFound from './NotFound';

export default function DynamicAreaPage() {
    const { fullSlug } = useParams<{ fullSlug: string }>();
    
    // Check if the slug starts with "painting-"
    if (!fullSlug || !fullSlug.startsWith('painting-')) {
        // Guideline 9: Return NotFound instead of a redirect
        return <NotFound />;
    }

    // Extract the actual town slug (strip "painting-")
    const townSlug = fullSlug.replace('painting-', '');
    
    // Normalize slug (lowercase and trim slashes)
    const normalizedSlug = townSlug.toLowerCase().replace(/\/$/, "");
    
    // Find the area data based on the slug
    const area = areaData.find(a => a.slug.toLowerCase() === normalizedSlug);

    if (!area) {
        return <NotFound />;
    }

    const { city, heroTagline, funFact } = area;

    return (
        <AreaPage
            city={city}
            state="WA"
            slug={area.slug}
            metaTitle={`House Painters in ${city} WA | Prestige Custom Painting`}
            metaDesc={`Looking for expert painters in ${city}? Prestige Custom Painting LLC delivers premium interior and exterior finishes for homes and businesses in your local Spokane area.`}
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
