// import Timeline from "./Timeline"
import Timeline from "./Timeline";

const experienceItems = [
    {
        title: "Front End Developer Contributor",
        company: "Loriginal",
        companyUrl: "https://www.loriginal.org/?srsltid=AfmBOopNhd344vZyZUl3mPtY7KBg-6cDGKJ91EXOQXr37RfT1pjmBotb",
        description: "Contributing to the development of user-friendly web applications.",
        start: "July 2025",
        end: "Present",
        details: "Involved in all stages of the development process, from planning to deployment."
    },
    {
        title: "Technical Support Associate",
        company: "Fusion CX | TELUS Business Apps",
        companyUrl: "https://www.fusioncx.com/locations/canada/",
        description: "Providing technical support and troubleshooting for business applications.",
        start: "June 2024",
        end: "Present",
        details: "Assisted clients in deploying and configuring Microsoft 365, Microsoft Azure, Google Workspace, and Eschat for distributed teams."
        +"Executed technical support scripts (Bash/Python) for cloud app migrations; coordinated with SMEs to triage service bugs and feature requests."
        +"Participated in DNS configuration and mailbox cutover strategy during data onboarding (e.g., SkyKick and AWS Workspaces)."
        +"Onboarded new clients end-users on new features and functionalities of the Telus Business Platform."
        +"Coordinated with cross-functional teams internally, with Microsoft and Google to solve technical issues and bugs on cloud applications."
        +"Provided training and documentation for new hires."
    },
    {
        title: "Web Developer Consultant",
        company: "SDESJ",
        companyUrl: "https://sdesj.org/",
        description: "Consulting on web development projects and best practices.",
        start: "June 2023",
        end: "June 2024",
        details: "Refactored legacy codebases for reliability, performance and stability"
    },
    {
        title: "Software Developer Intern",
        company: "DORSAL Lab",
        companyUrl: "https://www.dorsal.polymtl.ca/en/",
        description: "Assisting in the development of software solutions.",
        start: "May 2022",
        end: "Dec 2022",
        details: "Developed real-time data acquisition protocols and a Partial State Estimator in Java and C++."
    },
    {
        title: "FullStack Developer Contributor",
        company: "METIS, Polytechnique Montreal",
        companyUrl: "https://heka.polymtl.ca/",
        description: "Contributing to full-stack development projects.",
        start: "August 2017",
        end: "June 2018",
        details: "Engineered Jetson-based system interfaces for embedded processing and signal analysis."
        + " Member of the GUI team responsible for developing the interface of the club’s robotics platform."
    },
    {
        title: "Laboratory Teaching Assistant - Microcomputer Architecture",
        company: "Polytechnique Montreal",
        companyUrl: "https://www.polymtl.ca/programmes/cours/architecture-des-micro-ordinateurs",
        description: "Assisting in teaching laboratory sessions.",
        start: "2018",
        end: "2018"
    }
];

/*const getDuration = (start, end) => {
    start = new Date(start);
    if (end === "Present") end = new Date();
    else end = new Date(end);

    // check if start and end are valid dates
    if (!start) return 0;
    if (!end) end = new Date();

    // check if start and end are valid dates
    if (!start || isNaN(start.getTime())) return 0;
    if (!end || isNaN(end.getTime())) end = new Date();

    // calculate duration in months
    const duration = Math.round((end - start) / (1000 * 60 * 60 * 24 * 30)); // in months
    
    return duration > 0 ? duration : 1; // Ensure at least 1 month
};*/

export default function Experience() {
    return (
        <section className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <ul className="space-y-4">
                <Timeline items={experienceItems} />
            </ul>
        </section>
    )
}
