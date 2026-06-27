import { siteConfig } from "@/config/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    sameAs: [siteConfig.instagram],
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
