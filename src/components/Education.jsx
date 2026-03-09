
const Education = () => {
    const education = [
        {
            degree: "MSc Strategic & Digital Marketing",
            school: "University of South Wales, Cardiff, UK",
            period: "2023 – 2024",
            description: "Focused on digital strategy, CRM and lifecycle marketing, customer journey mapping, analytics, performance measurement, and AI in marketing."
        },
        {
            degree: "Diploma in Financial Technology",
            school: "London School of Business",
            period: "2022 – 2023",
            description: "Built knowledge in digital banking, fintech ecosystems, and technology-enabled financial services."
        },
        {
            degree: "Postgraduate Diploma in Marketing",
            school: "Sri Lanka Institute of Marketing",
            period: "2016 – 2017",
            description: "Developed a foundation in marketing strategy, brand thinking, and commercial communication."
        }
    ];

    return (
        <section id="education" className="pt-20 pb-12 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-8">
                    <h2 className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-2">Academic Background</h2>
                    <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                        Education
                    </p>
                </div>

                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-transparent border-t border-slate-200 dark:border-slate-700/50 py-1">
                            <div className="px-2 py-3 sm:px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                    <h3 className="text-base font-bold text-gray-800 dark:text-slate-200">
                                        {edu.degree}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-slate-400 font-medium">
                                        {edu.school} <span className="hidden md:inline mx-2 text-slate-300 dark:text-slate-600">|</span> <span className="text-teal-600 dark:text-teal-500 block md:inline mt-1 md:mt-0">{edu.period}</span>
                                    </p>
                                </div>
                            </div>
                            {edu.description && (
                                <div className="px-2 pb-3 sm:px-4">
                                    <p className="text-sm text-gray-500 dark:text-slate-400">
                                        {edu.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
