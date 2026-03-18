import AreaPage from './AreaPage';

export default function CheneyPage() {
    return (
        <AreaPage
            city="Cheney"
            state="WA"
            slug="cheney"
            metaTitle="Professional Painters in Cheney WA | Prestige Custom Painting LLC"
            metaDesc="Searching for professional painters in Cheney, WA? Prestige Custom Painting LLC offers high-quality interior, exterior, and cabinet refinishing services. Expert craftsmanship you can trust."
            heroTagline="CHENEY'S LOCAL PAINTING PROFESSIONALS"
            introParagraphs={[
                "Cheney, WA is a vibrant college town and residential community, and Prestige Custom Painting LLC is the painting company Cheney residents trust for professional interior and exterior painting results. Whether you own a home near Eastern Washington University or in one of Cheney's established residential neighborhoods, we're ready to help you transform your property.",
                "We understand that Cheney homeowners — like homeowners everywhere — want a painting contractor who shows up when promised, communicates clearly, protects their home, and delivers results that look great and last for years. That's exactly what we provide on every project, whether it's a single-room refresh or a complete exterior makeover.",
                "Cheney's mix of older residences and newer construction means we encounter a wide variety of siding materials, wood types, and surface conditions. Our team has the experience to properly prepare and paint all of them — from decades-old wood lap siding that needs careful scraping and priming, to smooth newer stucco finishes that require specific products for proper adhesion.",
                "We're proud to serve the Cheney community and the surrounding areas, including Four Lakes, Tyler, and Medical Lake. If you're looking for a painting contractor in Cheney who will treat your home with care and deliver premium results, give us a call today for your free estimate.",
            ]}
            nearbyAreas={["Airway Heights, WA", "Spokane, WA", "Medical Lake, WA", "Four Lakes, WA", "Tyler, WA", "Reardan, WA"]}
            funFact="Cheney's proximity to Turnbull National Wildlife Refuge means some properties experience more humidity and moisture exposure during spring and fall — making breathable, mold-resistant exterior paint formulas a smart investment for homeowners in lower-elevation or wooded areas of the city."
        />
    );
}
