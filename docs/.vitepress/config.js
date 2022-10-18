module.exports = {
    title: "Home",
    description:
        "Catherine is a speedy 'pocket' information gathering framework built in Rust!",
    themeConfig: {
        // logo: '/my-logo.svg',
        sidebar: {
            "/": mainContent()
        }
    }
};

function mainContent() {
    return [
        { text: "Catherine Framework Documentation", link: "/catherine-docs/index" },
        {
            text: "Introduction",
            children: [
                { text: "Learn More", link: "/catherine-docs/introduction/learn-more" },
                { text: "Modules", link: "/catherine-docs/introduction/modules" },
                {
                    text: "Rules of Conduct",
                    link: "/catherine-docs/introduction/rules-of-conduct"
                }
            ]
        },
        {
            text: "Using Catherine",
            children: [
                { text: "Getting Started", link: "/catherine-docs/catherine/getting-started" },
                { text: "Basics", link: "/catherine-docs/catherine/basics" },
                { text: "Intermediate", link: "/catherine-docs/catherine/intermediate" },
                { text: "Miscellaneous", link: "/catherine-docs/catherine/miscellaneous" }
            ]
        },
        {
            text: "Advanced",
            children: [
                { text: "Going Further", link: "/catherine-docs/advanced/going-further" },
                { text: "Developing Modules", link: "/catherine-docs/advanced/development" },
                { text: "Contributors", link: "/catherine-docs/advanced/contributors" },
                { text: "Milestones", link: "/catherine-docs/advanced/milestones" }
            ]
        },
        { text: "Contact", link: "/catherine-docs/contact" },
        { text: "Catherine: v0.0.36" },
        { text: "Docs: v0.0.7" }
    ];
}
