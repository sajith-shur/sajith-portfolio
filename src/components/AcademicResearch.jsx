import React, { useState } from 'react';
import ResearchSummary from './ResearchSummary';

const AcademicResearch = () => {
    const [isResearchOpen, setIsResearchOpen] = useState(false);
    const findings = [
        {
            title: "Consumer Convenience",
            description: "AI recommendations were valued for saving time and simplifying decision-making."
        },
        {
            title: "Trust & Privacy",
            description: "Lack of transparency and privacy concerns reduced trust in personalised recommendations."
        },
        {
            title: "Cultural Relevance",
            description: "The usefulness of recommendations was shaped by students' cultural backgrounds."
        },
        {
            title: "Impulse vs Fatigue",
            description: "Personalisation drove impulse purchases, but poorly targeted suggestions caused fatigue."
        },
        {
            title: "Strategic Implication",
            description: "Transparent and culturally aware AI personalisation improves the customer experience."
        }
    ];

    return (
        <>
        <section id="research" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="lg:text-center mb-16">
                    <h2 className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-extrabold uppercase tracking-widest text-teal-600 bg-teal-50 dark:text-cyan-400 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50">
                        MSc Dissertation
                    </h2>
                    <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-balance">
                        AI Personalisation in E-Commerce
                    </p>
                    <p className="mt-6 max-w-3xl text-[17px] text-gray-600 dark:text-slate-300 mx-auto leading-relaxed">
                        Explored how AI-driven personalised recommendations influence the purchasing behaviour of international students in the UK, with insights into convenience, trust, privacy, cultural relevance, and user response to personalisation.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto mb-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {findings.map((finding, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-teal-400/50 transition-all duration-300 group flex flex-col">
                                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {finding.title}
                                </h3>
                                <p className="text-[15px] font-medium text-gray-600 dark:text-slate-400 leading-relaxed">
                                    {finding.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
                    <span className="inline-flex items-center px-5 py-2.5 rounded-full text-[15px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        Study Overview
                    </span>
                    <button
                        onClick={() => setIsResearchOpen(true)}
                        className="group/btn inline-flex items-center justify-center px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-[15px] font-bold rounded-full text-slate-700 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-slate-900 cursor-pointer"
                    >
                        View Research Summary
                        <svg className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </div>
        </section>

        <ResearchSummary isOpen={isResearchOpen} onClose={() => setIsResearchOpen(false)} />
        </>
    );
};

export default AcademicResearch;
