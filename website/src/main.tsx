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
import ServiceBlogPage from './pages/ServiceBlogPage.tsx'
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
                <Route path="/service/:serviceSlug" element={<ServiceBlogPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
