import React, { useEffect } from 'react';

const ResearchSummary = ({ isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

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
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 pb-8 px-4 sm:px-6">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Panel */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all border border-slate-200 dark:border-slate-700">

                {/* Decorative header bar */}
                <div className="h-28 bg-gradient-to-r from-teal-500/20 to-blue-500/20 w-full rounded-t-2xl flex items-end px-8 pb-5 shrink-0">
                    <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center translate-y-7 border-4 border-white dark:border-slate-900">
                        <svg className="w-7 h-7 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors backdrop-blur-md"
                    aria-label="Close research summary"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Scrollable body */}
                <div className="px-6 sm:px-10 pt-12 pb-12">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-extrabold uppercase tracking-widest text-teal-600 bg-teal-50 dark:text-cyan-400 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50">
                            Academic Research
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
                            AI Personalisation in E-Commerce
                        </h2>
                        <span className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            Based on 12 semi-structured interviews with international students in the UK.
                        </span>
                    </div>

                    {/* Content sections */}
                    <div className="prose prose-lg dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Overview</h3>
                            <p>This research explored how AI-driven personalised recommendations influence the purchasing behaviour of international students in the UK. The study focused on how users experience convenience, trust, privacy concerns, cultural relevance, and the wider effect of personalisation on online shopping decisions.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Research Context</h3>
                            <p>AI-powered recommendation systems have become a major part of e-commerce, helping platforms deliver more relevant product suggestions, improve engagement, and support customer retention. My dissertation examined this tension through the lens of international students in the UK — an under-researched but economically significant and culturally diverse consumer segment.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Research Aim</h3>
                            <p className="mb-3">The aim was to understand how AI-driven personalised recommendations affect the purchasing behaviour of international students on UK e-commerce platforms, focusing on:</p>
                            <ul className="list-disc pl-5 space-y-1.5 marker:text-teal-500">
                                <li>how students perceive and engage with personalised recommendations</li>
                                <li>which cultural, behavioural, and demographic factors shape their responses</li>
                                <li>how privacy concerns influence acceptance and trust</li>
                            </ul>
                        </div>
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Methodology</h3>
                            <p>A qualitative research design based on <strong className="text-gray-900 dark:text-white font-bold">12 semi-structured interviews</strong> with international students in the UK. Thematic analysis identified recurring patterns around engagement, privacy, trust, cultural relevance, and the behavioural effects of recommendation systems.</p>
                        </div>
                    </div>

                    {/* Key Findings cards */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Key Findings</h3>
                        <div className="space-y-4">
                            {findings.map((finding, index) => (
                                <div key={index} className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">{finding.title}</h4>
                                    <p className="text-[15px] text-gray-600 dark:text-slate-300 leading-relaxed">{finding.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Practical implications */}
                    <div className="prose prose-lg dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-12">
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Practical Implications</h3>
                            <p className="mb-3">Effective AI personalisation depends on users feeling understood, respected, and informed. For marketers and CRM teams, the findings point to:</p>
                            <ul className="list-disc pl-5 space-y-1.5 marker:text-teal-500">
                                <li>improving transparency around data collection and recommendation logic</li>
                                <li>reducing intrusive or repetitive targeting</li>
                                <li>accounting for cultural and financial context in personalisation</li>
                                <li>giving users clearer control over preferences and privacy settings</li>
                            </ul>
                        </div>
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Matters</h3>
                            <p>International students represent a diverse and globally relevant consumer group whose response to AI personalisation is rarely explored. This dissertation shows that convenience alone is not enough — trust, cultural relevance, and ethical data use are equally important.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Research Limitations</h3>
                            <p>The study used a small qualitative sample of 12 UK-based participants. The findings offer depth and insight, but should not be treated as universally representative. Future research could expand the sample, include more regions, and combine qualitative interviews with quantitative data.</p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="border-l-4 border-teal-500 pl-6 py-2 mb-10">
                        <p className="text-lg text-gray-900 dark:text-white font-medium leading-relaxed italic">
                            "This dissertation strengthened my interest in the intersection of customer insight, digital experience, AI personalisation, and ethical marketing strategy."
                        </p>
                    </div>

                    {/* Footer close button */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-700/50 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchSummary;
