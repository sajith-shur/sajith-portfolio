import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            name: "HubSpot Digital Marketing Certified",
            issuer: "HubSpot Academy",
            date: "Completed Oct 2023"
        },
        {
            name: "Content Marketing Certified",
            issuer: "HubSpot Academy",
            date: "Completed Oct 2023"
        },
        {
            name: "Social Media Marketing Certification",
            issuer: "Hootsuite Academy",
            date: "Completed Nov 2023"
        },
        {
            name: "Data and Digital Marketing (DDM)",
            issuer: "Institute of Data and Marketing",
            date: "Issued Jul 2024"
        },
        {
            name: "Keyword Research Course",
            issuer: "Semrush Academy",
            date: "Completed Jan 2024"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-sm sm:text-base text-teal-400 font-bold tracking-widest uppercase mb-3 text-balance">Continuous Learning</h2>
                    <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-balance">
                        Professional Certifications
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-slate-400 mx-auto">
                        Industry-recognised certifications that support my work across digital marketing, content, social media, SEO, and data-led growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-[1.25rem] p-8 shadow-sm hover:shadow-xl hover:border-teal-400/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
                            <div>
                                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-[15px] font-semibold text-gray-600 dark:text-slate-300 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                                    {cert.issuer}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-md text-[13px] font-bold tracking-wide uppercase bg-slate-50 text-slate-500 dark:bg-slate-900/50 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                                    {cert.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
