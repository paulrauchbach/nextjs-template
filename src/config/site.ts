export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "TemplateSite",
    description: "Template description",
    mainNav: [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ],
    links: {
        twitter: "https://twitter.com",
        github: "https://github.com",
    },
};
