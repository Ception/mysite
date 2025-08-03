export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aleks Manov",
    url: "https://aleksmanov.me",
    email: "contact@aleksmanov.me",
    jobTitle: "Full Stack Developer & Cloud Architect",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Digital Realm",
    },
    sameAs: [
      "https://linkedin.com/in/aleksmanov",
      "https://github.com/Ception",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Cloud Architecture",
      "React",
      "Next.js",
      "TypeScript",
      "AWS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Serverless Computing",
    ],
    description:
      "Innovative Full Stack Developer and Cloud Architecture Expert specializing in scalable web applications, serverless solutions, and cutting-edge technologies.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aleks Manov Portfolio",
    url: "https://aleksmanov.me",
    description:
      "Portfolio website of Aleks Manov, Full Stack Developer & Cloud Architect",
    author: {
      "@type": "Person",
      name: "Aleks Manov",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aleksmanov.me/projects?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
