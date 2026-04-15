import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import InteriorPaintingPage from './pages/InteriorPaintingPage.tsx'
import ExteriorPaintingPage from './pages/ExteriorPaintingPage.tsx'
import HousePaintersPage from './pages/HousePaintersPage.tsx'
import CommercialPaintingPage from './pages/CommercialPaintingPage.tsx'
import CabinetPaintingPage from './pages/CabinetPaintingPage.tsx'
import SpokaneValleyPage from './pages/SpokaneValleyPage.tsx'
import LibertyLakePage from './pages/LibertyLakePage.tsx'
import AirwayHeightsPage from './pages/AirwayHeightsPage.tsx'
import CheneyPage from './pages/CheneyPage.tsx'
import DeerParkPage from './pages/DeerParkPage.tsx'
import OurWorkPage from './pages/OurWorkPage.tsx'
import DrywallContractorPage from './pages/DrywallContractorPage.tsx'
import WallpaperInstallerPage from './pages/WallpaperInstallerPage.tsx'
import PaintStrippingPage from './pages/PaintStrippingPage.tsx'
import PressureWashingPage from './pages/PressureWashingPage.tsx'
import BlogPricingSpokane from './pages/blog/BlogPricingSpokane.tsx'
import BlogBestExteriorPaint from './pages/blog/BlogBestExteriorPaint.tsx'
import BlogHowOftenToPaint from './pages/blog/BlogHowOftenToPaint.tsx'
import BlogInteriorTips from './pages/blog/BlogInteriorTips.tsx'
import SpokaneHomeImprovementPage from './pages/blog/SpokaneHomeImprovementPage.tsx'
import ServiceBlogPage from './pages/ServiceBlogPage.tsx'
import CostToPaintAHouse from './pages/costs/CostToPaintAHouse.tsx'
import ExteriorPaintingCost from './pages/costs/ExteriorPaintingCost.tsx'
import InteriorPaintingCost from './pages/costs/InteriorPaintingCost.tsx'
import RoomPaintingCost from './pages/costs/RoomPaintingCost.tsx'
import PainterHourlyRates from './pages/costs/PainterHourlyRates.tsx'
import TwoStoryHouseCost from './pages/costs/TwoStoryHouseCost.tsx'
import DiyVsProfessionalCost from './pages/costs/DiyVsProfessionalCost.tsx'
import PaintCalculatorPage from './pages/costs/PaintCalculatorPage.tsx'
import CabinetPaintingCost from './pages/costs/CabinetPaintingCost.tsx'
import BlogListPage from './pages/BlogListPage.tsx'
import AboutUsPage from './pages/AboutUsPage.tsx'
import TestimonialsPage from './pages/TestimonialsPage.tsx'
import FaqPage from './pages/FaqPage.tsx'
import ColorConsultationPage from './pages/ColorConsultationPage.tsx'
import ServiceAreaPage from './pages/ServiceAreaPage.tsx'
import DynamicAreaPage from './pages/DynamicAreaPage.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import TermsOfServicePage from './pages/TermsOfServicePage.tsx'
import PaintingGlossaryPage from './pages/PaintingGlossaryPage.tsx'
import './index.css'
import { initGA } from './lib/analytics'
import PageTracker from './components/PageTracker'

// Initialize GA4
initGA();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <PageTracker />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/our-work" element={<OurWorkPage />} />
                <Route path="/interior-painting-spokane" element={<InteriorPaintingPage />} />
                <Route path="/exterior-painting-spokane" element={<ExteriorPaintingPage />} />
                <Route path="/house-painters-spokane" element={<HousePaintersPage />} />
                <Route path="/commercial-painting-spokane" element={<CommercialPaintingPage />} />
                <Route path="/cabinet-painting-spokane" element={<CabinetPaintingPage />} />
                <Route path="/painting-spokane-valley" element={<SpokaneValleyPage />} />
                <Route path="/painting-liberty-lake" element={<LibertyLakePage />} />
                <Route path="/painting-airway-heights" element={<AirwayHeightsPage />} />
                <Route path="/painting-cheney" element={<CheneyPage />} />
                <Route path="/painting-deer-park" element={<DeerParkPage />} />
                <Route path="/drywall-contractor-spokane" element={<DrywallContractorPage />} />
                <Route path="/wallpaper-installer-spokane" element={<WallpaperInstallerPage />} />
                <Route path="/paint-stripping-spokane" element={<PaintStrippingPage />} />
                <Route path="/pressure-washing-spokane" element={<PressureWashingPage />} />
                <Route path="/blog/cost-to-paint-house-spokane" element={<BlogPricingSpokane />} />
                <Route path="/blog/best-exterior-paint-spokane" element={<BlogBestExteriorPaint />} />
                <Route path="/blog/how-often-to-paint-house-spokane" element={<BlogHowOftenToPaint />} />
                <Route path="/blog/interior-painting-tips-spokane" element={<BlogInteriorTips />} />
                <Route path="/spokane-home-improvement-guide" element={<SpokaneHomeImprovementPage />} />
                <Route path="/blog" element={<BlogListPage />} />
                <Route path="/service/:serviceSlug" element={<ServiceBlogPage />} />
                
                {/* SEO Pillar & Spoke Routes */}
                <Route path="/cost-to-paint-a-house" element={<CostToPaintAHouse />} />
                <Route path="/cost-to-paint-house-exterior" element={<ExteriorPaintingCost />} />
                <Route path="/cost-to-paint-house-interior" element={<InteriorPaintingCost />} />
                <Route path="/cost-to-paint-a-room" element={<RoomPaintingCost />} />
                <Route path="/how-much-do-painters-charge-per-hour" element={<PainterHourlyRates />} />
                <Route path="/cost-to-paint-a-two-story-house" element={<TwoStoryHouseCost />} />
                <Route path="/diy-vs-hiring-a-painter" element={<DiyVsProfessionalCost />} />
                <Route path="/how-much-paint-do-i-need" element={<PaintCalculatorPage />} />
                <Route path="/cost-to-paint-kitchen-cabinets" element={<CabinetPaintingCost />} />
                
                {/* NEW SEO PAGES */}
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/color-consultation" element={<ColorConsultationPage />} />
                <Route path="/service-area" element={<ServiceAreaPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/spokane-painting-glossary" element={<PaintingGlossaryPage />} />
                
                {/* Catch-all for Dynamic Area Pages (painting-*) */}
                <Route path="/:fullSlug" element={<DynamicAreaPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
