
const Experience = () => {
    const experiences = [
        {
            title: "Digital Marketing Strategist",
            company: "GoRanpa / Freelance",
            period: "Present",
            description: "Supporting businesses through digital marketing, CRM-focused thinking, and customer journey optimisation. Building practical growth strategies, portfolio projects, and case-study-led solutions focused on visibility, engagement, and conversion.",
        },
        {
            title: "Deputy Manager – Digital Sales",
            company: "Nations Trust Bank PLC | Colombo",
            period: "May 2023 – Sep 2023",
            description: "Led digital customer acquisition and engagement initiatives across fintech and banking products. Managed CRM-driven outreach, analysed customer behaviour, and supported re-engagement strategies for at-risk and inactive users.",
        },
        {
            title: "Senior Assistant – Onboarding & Acquisitions",
            company: "Nations Trust Bank PLC",
            period: "Jan 2022 – May 2023",
            description: "Supported digital acquisition for personal loans and card products. Helped optimise onboarding, customer follow-up, and KYC / AML-related processes to reduce friction and improve approvals.",
        },
        {
            title: "Cluster Lead – Business Development",
            company: "Nations Trust Bank PLC",
            period: "Aug 2014 – Jan 2022",
            description: "Led acquisition and outreach activity across regional clusters, focusing on customer growth, relationship-building, and cross-sell opportunities through direct engagement and field activation.",
        },
    ];

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-sm sm:text-base text-teal-400 font-bold tracking-widest uppercase mb-3">Career Path</h2>
                    <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-balance">
                        Experience & Expertise
                    </p>
                </div>

                <div className="relative border-l border-gray-200 dark:border-slate-700 ml-4 md:ml-0 md:pl-0 md:border-none md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-8 relative pl-8 md:pl-0">
                            {/* Timeline dot */}
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-teal-400 rounded-full md:hidden"></div>

                            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">{exp.period}</span>
                                <h3 className="mt-3 text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">{exp.title}</h3>
                                <p className="text-gray-500 dark:text-slate-400 font-semibold mb-5">{exp.company}</p>
                                <p className="text-gray-600 dark:text-slate-300 leading-relaxed md:max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
