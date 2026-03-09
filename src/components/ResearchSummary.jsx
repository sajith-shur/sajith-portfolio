import React, { useEffect } from 'react';

const ResearchSummary = ({ onBack }) => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const findings = [
        {
            title: "1. AI recommendations improve convenience",
            description: "Many participants viewed personalised recommendations positively because they saved time, reduced search effort, and made shopping more efficient. The findings showed that convenience and faster decision-making were among the clearest advantages of AI-driven personalisation."
        },
        {
            title: "2. Trust depends on privacy and transparency",
            description: "Privacy concerns were one of the strongest barriers to acceptance. Participants were often uncomfortable with how much data was collected, how it was used, and how little visibility they had into recommendation logic. The research found that a lack of transparency reduced trust in personalised systems."
        },
        {
            title: "3. Cultural relevance matters",
            description: "The study found that recommendation quality was shaped by cultural fit. Some participants felt that recommendations did not reflect their cultural preferences, product expectations, or shopping habits. This reduced perceived usefulness and engagement, especially for a user group adapting to a new environment."
        },
        {
            title: "4. Personalisation can drive both impulse and fatigue",
            description: "AI recommendations could encourage impulse purchases by surfacing appealing products quickly, but poorly targeted or repetitive recommendations also created frustration, overwhelm, and advertising fatigue. This highlighted the need for balance between relevance and overexposure."
        },
        {
            title: "5. Better personalisation needs more user control",
            description: "The dissertation concluded that e-commerce platforms can improve long-term engagement by being more transparent about data collection, giving users more control over their information, and building recommendation systems that are more culturally aware and less intrusive."
        }
    ];

    return (
        <div className="pt-20 pb-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="group inline-flex items-center text-sm font-semibold text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors mb-10"
                >
                    <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Portfolio
                </button>

                {/* Header */}
                <div className="mb-16">
                    <h2 className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-extrabold uppercase tracking-widest text-teal-600 bg-teal-50 dark:text-cyan-400 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50">
                        Academic Research
                    </h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-8">
                        AI Personalisation in E-Commerce
                    </h1>
                    <span className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        Based on 12 semi-structured interviews with international students in the UK.
                    </span>
                </div>

                {/* Content Sections */}
                <div className="prose prose-xl dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-medium">

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
                        <p className="leading-relaxed">
                            This research explored how AI-driven personalised recommendations influence the purchasing behaviour of international students in the UK. The study focused on how users experience convenience, trust, privacy concerns, cultural relevance, and the wider effect of personalisation on online shopping decisions.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research Context</h2>
                        <p className="leading-relaxed">
                            AI-powered recommendation systems have become a major part of e-commerce, helping platforms deliver more relevant product suggestions, improve engagement, and support customer retention. At the same time, concerns around privacy, transparency, and over-personalisation continue to shape how consumers respond to these systems. My dissertation examined this tension through the lens of international students in the UK, an under-researched but economically significant and culturally diverse consumer segment.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research Aim</h2>
                        <p className="leading-relaxed mb-4">
                            The aim of the study was to understand how AI-driven personalised recommendations affect the purchasing behaviour of international students on e-commerce platforms in the UK. The research focused on three areas:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-teal-500">
                            <li>how international students perceive and engage with personalised recommendations</li>
                            <li>which cultural, behavioural, and demographic factors shape their responses</li>
                            <li>how privacy concerns influence acceptance and trust in these systems</li>
                        </ul>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Methodology</h2>
                        <p className="leading-relaxed">
                            The project used a qualitative research design based on <strong className="text-gray-900 dark:text-white font-bold">12 semi-structured interviews</strong> with international students in the UK. A thematic analysis approach was used to identify recurring patterns across the data, with themes developed around engagement, privacy, trust, cultural relevance, and the behavioural effects of recommendation systems.
                        </p>
                    </div>

                </div>

                {/* Insight Cards */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Findings</h2>
                    <div className="space-y-6">
                        {findings.map((finding, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-[1.25rem] p-8 sm:p-10 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {finding.title}
                                </h3>
                                <p className="text-[16px] text-gray-600 dark:text-slate-300 leading-relaxed">
                                    {finding.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* More Content Sections */}
                <div className="prose prose-xl dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-300 mb-16 leading-relaxed font-medium">

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Practical Implications</h2>
                        <p className="leading-relaxed mb-4">
                            This research suggests that effective AI personalisation is not only about recommendation accuracy. It also depends on whether users feel understood, respected, and informed. For marketers, CRM teams, and e-commerce platforms, the findings point to several priorities:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-teal-500">
                            <li>improve transparency around data collection and recommendation logic</li>
                            <li>reduce intrusive or repetitive targeting</li>
                            <li>account for cultural and financial context in personalisation</li>
                            <li>give users clearer control over preferences and privacy settings</li>
                        </ul>
                    </div>

                    <div className="mb-14 mt-20">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why This Matters</h2>
                        <p className="leading-relaxed">
                            International students represent a diverse and globally relevant consumer group, yet their response to AI-driven e-commerce personalisation is not widely explored in existing research. This dissertation contributes both academic and practical insight by showing that convenience alone is not enough. Trust, cultural relevance, and ethical data use are equally important in shaping how people respond to AI-powered customer experiences.
                        </p>
                    </div>

                    <div className="mb-12 mt-20">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research Limitations</h2>
                        <p className="leading-relaxed">
                            The study was based on a relatively small qualitative sample of 12 participants, with a UK-based focus and limited cultural spread. That means the findings offer depth and insight, but should not be treated as universally representative. Future research could expand the sample, include more regions, and combine qualitative interviews with quantitative data.
                        </p>
                    </div>

                </div>

                <div className="border-t border-slate-200 dark:border-slate-700/50 pt-16 pb-8 text-center">
                    <p className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed text-balance max-w-3xl mx-auto italic mb-12">
                        "This dissertation strengthened my interest in the intersection of customer insight, digital experience, AI personalisation, and ethical marketing strategy."
                    </p>

                    <div className="flex items-center justify-center">
                        <button
                            onClick={onBack}
                            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] w-full sm:w-auto"
                        >
                            Back to Portfolio
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResearchSummary;
