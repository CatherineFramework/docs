export default {
    github: "https://github.com/Hifumi1337/catherine-docs",
    docsRepositoryBase: "https://github.com/Hifumi1337/catherine-docs/tree/main",
    titleSuffix: " | Catherine Framework",
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline" style={{ fontSize: "25px" }}>
                Catherine Framework
            </span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="Catherine framework documentation" />
            <meta name="keywords" content="blue team, defense framework, rust cybersecurity framework, rust framework, rust blue team framework, hifumi1337, catherine framework documentation, catherine framework" />
            <meta name="og:description" content="Catherine framework documentation" />
            <meta name="apple-mobile-web-app-title" content="Catherine framework documentation" />
        </>
    ),

    search: true,
    prevLinks: true,
    nextLinks: true,
    footer: true,
    footerEditLink: "Edit this page on GitHub",
    footerText: <>Hifumi1337 © {new Date().getFullYear()}</>,
    unstable_faviconGlyph: "🦀"
};
