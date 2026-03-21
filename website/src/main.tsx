import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
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
import BlogPricingSpokane from './pages/blog/BlogPricingSpokane.tsx'
import BlogBestExteriorPaint from './pages/blog/BlogBestExteriorPaint.tsx'
import BlogHowOftenToPaint from './pages/blog/BlogHowOftenToPaint.tsx'
import BlogInteriorTips from './pages/blog/BlogInteriorTips.tsx'
import './index.css'
import { initGA } from './lib/analytics'
import PageTracker from './components/PageTracker'

// Initialize GA4
initGA();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <PageTracker />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/services" element={<ServicesPage />} />
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
                <Route path="/blog/cost-to-paint-house-spokane" element={<BlogPricingSpokane />} />
                <Route path="/blog/best-exterior-paint-spokane" element={<BlogBestExteriorPaint />} />
                <Route path="/blog/how-often-to-paint-house-spokane" element={<BlogHowOftenToPaint />} />
                <Route path="/blog/interior-painting-tips-spokane" element={<BlogInteriorTips />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
