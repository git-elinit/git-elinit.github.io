const publicOrigin = (process.env.ELEVENTY_SITE_URL || "").replace(/\/+$/, "");

export default {
  name: "Ellie",
  title: "Ellie — Product designer and independent app maker",
  description:
    "Ellie documents the process of designing and building independent software with AI agents.",
  contactEmail: "madebyellie@proton.me",
  url: publicOrigin,
  language: "en",
  primaryNavigation: [
    { label: "Projects", url: "/projects/", key: "projects" },
    { label: "About", url: "/about/", key: "about" }
  ],
  footerNavigation: [
    { label: "Notes", url: "/notes/", key: "notes" },
    { label: "Projects", url: "/projects/", key: "projects" },
    { label: "About", url: "/about/", key: "about" }
  ]
};
