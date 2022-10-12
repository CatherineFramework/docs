module.exports = {
    title: "Catherine Framework Documentation",
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
        { text: "Home", link: "/" },
        {
            text: "Introduction",
            children: [
                { text: "Learn More", link: "/introduction/learn-more" },
                { text: "Modules", link: "/introduction/modules" },
                {
                    text: "Rules of Conduct",
                    link: "/introduction/rules-of-conduct"
                }
            ]
        },
        {
            text: "Using Catherine",
            children: [
                { text: "Getting Started", link: "/catherine/getting-started" },
                { text: "Basics", link: "/catherine/basics" },
                { text: "Intermediate", link: "/catherine/intermediate" },
                { text: "Miscellaneous", link: "/catherine/miscellaneous" }
            ]
        },
        {
            text: "Advanced",
            children: [
                { text: "Going Further", link: "/advanced/going-further" },
                { text: "Developing Modules", link: "/advanced/development" },
                { text: "Contributors", link: "/advanced/contributors" },
                { text: "Milestones", link: "/advanced/milestones" }
            ]
        },
        { text: "Contact", link: "contact" },
        { text: "Catherine: v0.0.29" },
        { text: "Docs: v0.0.6" }
    ];
}
