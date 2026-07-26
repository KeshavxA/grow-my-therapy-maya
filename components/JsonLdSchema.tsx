export default function JsonLdSchema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["Physician", "LocalBusiness", "MedicalBusiness"],
        "name": "Dr. Maya Reynolds Therapy Sanctuary",
        "alternateName": "Dr. Maya Reynolds - Holistic Therapy & Trauma Recovery",
        "description": "Specializing in holistic, body-centered therapy and EMDR for trauma recovery, anxiety, and relationship issues in Seattle, WA and online across Washington and Minnesota.",
        "url": "https://drmayareynolds.com",
        "telephone": "+1-206-555-0199",
        "email": "hello@drmayareynolds.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1200 Westlake Ave N",
            "addressLocality": "Seattle",
            "addressRegion": "WA",
            "postalCode": "98109",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "47.6289",
            "longitude": "-122.3387"
        },
        "areaServed": [
            {
                "@type": "State",
                "name": "Washington"
            },
            {
                "@type": "State",
                "name": "Minnesota"
            }
        ],
        "availableService": [
            {
                "@type": "MedicalProcedure",
                "name": "Individual Holistic & Body-Centered Therapy"
            },
            {
                "@type": "MedicalProcedure",
                "name": "EMDR Trauma Recovery Therapy"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Couples & Relationship Counseling"
            }
        ],
        "priceRange": "$$$",
        "paymentAccepted": ["Cash", "Credit Card", "Out-of-Network Superbill Reimbursement"],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "09:00",
                "closes": "15:00"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
