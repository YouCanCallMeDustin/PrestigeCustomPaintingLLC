import AreaPage from './AreaPage';

export default function SpokaneValleyPage() {
    return (
        <AreaPage
            city="Spokane Valley"
            state="WA"
            slug="spokane-valley"
            metaTitle="House Painters Spokane Valley WA | Prestige Custom Painting LLC"
            metaDesc="Professional house painters in Spokane Valley, WA. Prestige Custom Painting LLC offers interior, exterior, and cabinet painting with a satisfaction guarantee. Call (509) 714-9491 for a free estimate."
            heroTagline="SPOKANE VALLEY'S TRUSTED PAINTING COMPANY"
            introParagraphs={[
                "If you're searching for a reliable, professional painting company in Spokane Valley, WA, look no further than Prestige Custom Painting LLC. We've built our reputation right here in the Inland Northwest by delivering premium-quality interior and exterior painting results that our neighbors are proud to show off.",
                "Spokane Valley is one of the fastest-growing communities in Eastern Washington, and the homes here deserve top-tier care. Whether you own a newer build in the Greenacres area, a classic ranch-style home near Sullivan Park, or a townhouse closer to Sprague Avenue, we bring the same level of craftsmanship and professionalism to every single project.",
                "Our Spokane Valley painting process begins with a thorough free estimate and consultation. We take the time to understand exactly what you're hoping to achieve — whether that's a fresh, modern interior palette, a durable exterior finish that stands up to our cold winters, or a stunning cabinet transformation that makes your kitchen feel brand new.",
                "From full interior repaints and exterior overhauls to specialty cabinet refinishing and trim work, Prestige Custom Painting LLC handles it all — with the care and attention to detail that Spokane Valley homeowners deserve.",
            ]}
            nearbyAreas={["Spokane, WA", "Liberty Lake, WA", "Greenacres, WA", "Millwood, WA", "Dishman, WA", "Veradale, WA"]}
            funFact="Spokane Valley's varied neighborhood architecture — from mid-century ranches to new construction — means we regularly work with a wide range of siding materials, from T1-11 and Hardiplank to stucco and vinyl, and we know exactly which products and techniques work best on each."
        />
    );
}
