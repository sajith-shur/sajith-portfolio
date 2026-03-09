
const Services = () => {
    const services = [
        {
            title: "CRM & Lifecycle Marketing",
            description: "Customer engagement, retention thinking, journey optimisation, and reactivation strategy."
        },
        {
            title: "Customer Acquisition & Onboarding",
            description: "Digital onboarding, lead conversion, KYC-aware acquisition, and friction reduction."
        },
        {
            title: "Growth Strategy & Digital Marketing",
            description: "Campaign thinking, customer insight, content-led growth, and commercially focused execution."
        },
        {
            title: "Analytics & Commercial Awareness",
            description: "Using customer data, behaviour patterns, and performance insight to support better decisions."
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-sm sm:text-base text-teal-400 font-bold tracking-widest uppercase mb-3">Core Competencies</h2>
                    <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-balance">
                        Skills & Expertise
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 rounded-lg hover:border-teal-400 transition-colors">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-gray-500 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
