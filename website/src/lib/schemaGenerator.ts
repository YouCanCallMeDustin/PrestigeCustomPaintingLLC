import { SITE_INFO } from './constants';

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Prestige Custom Painting LLC",
    "image": "https://prestigecustompaintingllc.com/logo.png",
    "@id": "https://prestigecustompaintingllc.com/#organization",
    "url": "https://prestigecustompaintingllc.com",
    "telephone": SITE_INFO.phoneNumber,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Spokane and surrounding areas",
      "addressLocality": "Spokane",
      "addressRegion": "WA",
      "postalCode": "99201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6588,
      "longitude": -117.4260
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      SITE_INFO.facebookUrl,
      SITE_INFO.yelpUrl,
      SITE_INFO.bizapediaUrl,
      SITE_INFO.nextdoorUrl,
      SITE_INFO.liveLocalInwUrl
    ]
  };
};

export const generateBreadcrumbSchema = (items: { name: string; path: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://prestigecustompaintingllc.com${item.path}`
    })),
  };
};

export const generateArticleSchema = (data: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "image": data.image,
    "datePublished": data.datePublished,
    "dateModified": data.dateModified,
    "author": {
      "@type": "Person",
      "name": data.authorName,
      "url": "https://prestigecustompaintingllc.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prestige Custom Painting LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prestigecustompaintingllc.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    }
  };
};

export const generateHowToSchema = (data: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": data.name,
    "description": data.description,
    "step": data.steps.map((step) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }))
  };
};

export const generateServiceSchema = (data: {
  name: string;
  description: string;
  serviceType: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Prestige Custom Painting LLC"
    },
    "name": data.name,
    "description": data.description,
    "areaServed": {
      "@type": "City",
      "name": "Spokane"
    }
  };
};

export const generateWebPageSchema = (data: {
  title: string;
  description: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.title,
    "description": data.description,
    "url": data.url,
    "publisher": {
      "@type": "Organization",
      "name": "Prestige Custom Painting LLC"
    }
  };
};
