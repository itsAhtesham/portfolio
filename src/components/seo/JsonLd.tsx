import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    url: siteConfig.url,
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "RemoteState",
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.leetcode,
    ],
    knowsAbout: [
      "Node.js",
      "NestJS",
      "NextJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Google Cloud Platform",
      "Cloud Pub/Sub",
      "AWS",
      "MongoDB",
      "Docker",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
