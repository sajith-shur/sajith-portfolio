import React, { useState } from 'react';

const CaseStudies = () => {
    const [selectedCase, setSelectedCase] = useState(null);

    const cases = [
        {
            title: "Turning Market Insight into Lending Growth",
            category: "Lending Growth",
            metric: "Consultative Sales",
            description: "Used customer segmentation and consultative selling to unlock a resilient post-COVID lending audience and support strong disbursement performance.",
            impact: "Strong disbursement performance",
            shortOverview: "After moving into personal loans in the post-COVID period, I identified IT professionals as a resilient customer segment and introduced a consultative, financial planning-led sales approach that improved lending conversations, supported stronger disbursement, and created long-term portfolio value.",
            stats: [
                { value: "Resilient Segment", label: "IT professionals identified" },
                { value: "Advisory Model", label: "Financial check-up led sales" },
                { value: "2% Issues", label: "Over 5-year period" },
                { value: "98% Stable", label: "Responsible credit performance" }
            ],
            processFlow: [
                { label: "Market Shift", icon: "search" },
                { label: "IT Segment Identified", icon: "briefcase" },
                { label: "Financial Check-Up", icon: "clipboard-check" },
                { label: "Lending Solution", icon: "document-text" },
                { label: "Team Adoption", icon: "trending-up" }
            ],
            problem: [
                "Post-COVID borrowing behaviour had changed",
                "Many professionals had stronger savings and lower urgency to borrow",
                "Traditional loan pitches were less effective",
                "Personal lending was a new territory for me"
            ],
            strategy: [
                "Identified IT professionals as a resilient segment",
                "Used LinkedIn to start advisory-led conversations",
                "Offered a personal financial check-up",
                "Recommended tailored lending solutions based on financial goals and credit behaviour",
                "Helped create a repeatable sales angle later used by the team"
            ],
            before: [
                "Standard personal loan pitches had weaker response",
                "Customers were less motivated by immediate borrowing",
                "New lending segment with uncertain traction"
            ],
            after: [
                "Stronger engagement from a high-potential audience",
                "More trust-led and consultative sales conversations",
                "Scalable proposition adopted by the wider team"
            ],
            results: [
                "Contributed to the bank’s strongest loan disbursement performance during that period",
                "Opened a high-potential customer segment within the IT sector",
                "Created future cross-selling opportunities for flexible facilities and related banking products",
                "Built a lending proposition that scaled beyond individual sales activity"
            ],
            longTermQuality: [
                "Only 2% showed repayment-related issues over five years",
                "98% maintained their facilities responsibly",
                "No significant overutilisation or widespread default behaviour"
            ],
            takeaway: "This case study shows how segmentation, market insight, and consultative selling can unlock growth while maintaining strong long-term portfolio quality."
        },
        {
            title: "Activating the Stalled Download",
            category: "Customer Activation",
            metric: "CRM & Lifecycle",
            description: "Built a multi-touchpoint activation strategy that helped move users from incomplete onboarding to active customer status.",
            impact: "553 active conversions in one month",
            shortOverview: "Many users downloaded the app but dropped off before completing KYC verification. I led a multi-channel activation strategy to recover stalled users, reduce onboarding friction, and increase active customer conversions.",
            stats: [
                { value: "553", label: "L3 activations in one month" },
                { value: "6,000+", label: "Total activations in 12 months" },
                { value: "Multi-channel", label: "Calls, SMS, app notifications" },
                { value: "KYC Recovery", label: "Reduced onboarding drop-off" }
            ],
            processFlow: [
                { label: "Download", icon: "download" },
                { label: "Onboarding Started", icon: "user-plus" },
                { label: "KYC Pending", icon: "clock" },
                { label: "Follow-up", icon: "phone" },
                { label: "Verified", icon: "shield-check" },
                { label: "Active", icon: "trending-up" }
            ],
            problem: [
                "Strong app downloads but weak KYC completion",
                "Missed calls reduced verification success",
                "Document and technical issues caused friction",
                "Many users stalled before activation"
            ],
            strategy: [
                "Optimised outbound call timing",
                "Ran SMS and push reminder sequences",
                "Escalated hesitant users for tailored follow-up",
                "Coordinated branch support for verification issues",
                "Launched campaigns to drive first transactions"
            ],
            before: [
                "Users dropped off during KYC",
                "High volume of unanswered verification calls",
                "Low conversion from download to active use"
            ],
            after: [
                "Better contact timing and follow-up",
                "Improved verification completion",
                "Higher conversion to active customers"
            ],
            results: [
                "553 L3 activations in a single month",
                "6,000+ total activations over 12 months",
                "Improved movement from KYC pending to active status",
                "Increased first-transaction behaviour after verification"
            ],
            takeaway: "A proactive lifecycle strategy helped convert stalled onboarding into measurable activation growth through better timing, operational support, and targeted incentives."
        },
        {
            title: "Turning a Street Book Stall into a Digital Preloved Book Brand",
            category: "Social Commerce Growth",
            metric: "Social Commerce",
            description: "Created an Instagram-led social commerce presence that turned an offline preloved book stall into a growing digital sales channel.",
            impact: "200+ monthly orders",
            shortOverview: "I identified a preloved book seller with no digital presence and created BookTales_LK as an Instagram-led sales channel. Through daily content, community building, and a simple request-tracking system, I helped transform a street-level stall into a growing digital book business.",
            featuredImage: {
                src: "/booktales-ig.png",
                caption: "Instagram storefront built from scratch for BookTales_LK"
            },
            stats: [
                { value: "200+", label: "Orders per month" },
                { value: "Instagram-Led", label: "Brand built from scratch" },
                { value: "Lead Capture", label: "Book request tracking system" },
                { value: "Repeat Demand", label: "More follow-up and referrals" }
            ],
            processFlow: [
                { label: "Street Stall Discovery", icon: "search" },
                { label: "Instagram Brand Launch", icon: "device-mobile" },
                { label: "Daily Content", icon: "photograph" },
                { label: "Book Requests Captured", icon: "clipboard-list" },
                { label: "Repeat Orders & Growth", icon: "refresh" }
            ],
            problem: [
                "Offline seller with no digital presence",
                "Dependent on walk-in traffic only",
                "No structured way to capture customer demand",
                "Strong niche potential among book lovers"
            ],
            strategy: [
                "Built the Instagram brand from scratch",
                "Posted book content consistently",
                "Used stories, static posts, and video content",
                "Created a Google Sheet system for requested books",
                "Used follow-up to drive repeat orders and referrals"
            ],
            before: [
                "Street stall only",
                "No online audience",
                "No lead capture",
                "Limited repeat sales system"
            ],
            after: [
                "Recognisable niche Instagram book page",
                "200+ monthly orders",
                "Reader request tracking",
                "Better repeat demand and word-of-mouth growth"
            ],
            results: [
                "Built a niche digital book brand from zero",
                "Generated 200+ monthly orders",
                "Increased repeat sales through request tracking and follow-up",
                "Expanded the business beyond physical foot traffic",
                "Strengthened visibility among preloved book buyers in Sri Lanka"
            ],
            takeaway: "This project showed how a simple content and lead-generation system can turn a small offline business into a discoverable, repeat-order digital brand."
        },
    ];

    // Close modal handle
    const closeModal = () => setSelectedCase(null);

    // Prevent scrolling on body when modal is open
    React.useEffect(() => {
        if (selectedCase) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [selectedCase]);

    return (
        <section id="case-studies" className="py-20 bg-slate-50 dark:bg-slate-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-14">
                    <h2 className="text-sm sm:text-base text-teal-400 font-bold tracking-widest uppercase mb-3">Results</h2>
                    <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-balance">
                        Selected Case Studies
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 font-medium">
                        Examples of how I’ve used customer insight, digital execution, and growth thinking to solve real business challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((project, index) => (
                        <div key={index} className="flex flex-col bg-white dark:bg-slate-800/80 rounded-[1.25rem] border border-slate-100 dark:border-slate-700/60 shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex-1 p-7 sm:p-8 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="mb-5">
                                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest text-teal-600 bg-teal-50 dark:text-cyan-400 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug mb-3">
                                        {project.title}
                                    </h3>

                                    {project.impact && (
                                        <div className="flex items-start gap-3 mt-4 mb-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                                            <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            <span className="text-[15px] font-bold text-slate-800 dark:text-slate-200">{project.impact}</span>
                                        </div>
                                    )}

                                    <p className="text-[15px] text-gray-600 dark:text-slate-400 leading-relaxed font-medium line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => setSelectedCase(project)}
                                            className="group/btn inline-flex items-center text-[15px] font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                                        >
                                            Read the Story
                                            <svg className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                                            {project.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedCase && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center pt-24 pb-8 px-4 sm:px-6">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                        onClick={closeModal}
                        aria-hidden="true"
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto transform transition-all border border-slate-200 dark:border-slate-700">

                        {/* Header Image (Optional Decorative) */}
                        <div className="h-32 bg-gradient-to-r from-teal-500/20 to-blue-500/20 w-full rounded-t-2xl flex items-end px-8 pb-6">
                            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl shadow-lg flex items-center justify-center translate-y-8 border-4 border-white dark:border-slate-800">
                                <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors backdrop-blur-md"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Body - 10 Step Wireframe Structure */}
                        <div className="px-6 sm:px-10 pt-12 pb-12">
                            {/* 1. Category Label & 2. Main Title */}
                            <div className="mb-10 text-center sm:text-left text-balance">
                                <p className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-3">
                                    {selectedCase.category}
                                </p>
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                                    {selectedCase.title}
                                </h3>
                            </div>

                            {/* 3. Stat Cards Row */}
                            {selectedCase.stats?.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                    {selectedCase.stats.map((stat, idx) => (
                                        <div key={idx} className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 flex flex-col items-center sm:items-start text-center sm:text-left shadow-lg">
                                            <span className="text-2xl sm:text-3xl font-black text-white block mb-1">
                                                {stat.value}
                                            </span>
                                            <span className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* 4. Short Overview */}
                            {selectedCase.shortOverview && (
                                <div className="mb-12">
                                    <p className="text-lg text-slate-300 leading-relaxed font-medium">
                                        {selectedCase.shortOverview}
                                    </p>
                                </div>
                            )}

                            {/* 4.5. Featured Image Screenshot */}
                            {selectedCase.featuredImage && (
                                <div className="mb-14">
                                    <div className="bg-slate-800/40 rounded-3xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-inner bg-slate-900 mx-auto max-w-sm">
                                            {/* decorative top bar for mobile mockup feel */}
                                            <div className="bg-slate-800 px-4 py-2 flex items-center justify-center gap-2 border-b border-slate-700">
                                                <div className="w-16 h-4 bg-slate-900 rounded-full"></div>
                                            </div>
                                            <img
                                                src={selectedCase.featuredImage.src}
                                                alt="Case Study Featured"
                                                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="mt-6 text-center relative z-10">
                                            <p className="text-sm font-semibold text-teal-400 capitalize tracking-wide flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                {selectedCase.featuredImage.caption}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 5. Visual Process Flow */}
                            {selectedCase.processFlow?.length > 0 && (
                                <div className="mb-14">
                                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 sm:p-8 overflow-x-auto custom-scrollbar">
                                        <div className="flex items-center min-w-max">
                                            {selectedCase.processFlow.map((step, idx) => (
                                                <React.Fragment key={idx}>
                                                    <div className="flex flex-col items-center mx-2 first:ml-0 last:mr-0 min-w-[100px]">
                                                        <div className="w-12 h-12 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                                                            {/* Render Icons based on label name */}
                                                            {step.icon === 'download' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                            )}
                                                            {step.icon === 'user-plus' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                                                            )}
                                                            {step.icon === 'clock' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                            )}
                                                            {step.icon === 'phone' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                            )}
                                                            {step.icon === 'shield-check' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                                            )}
                                                            {step.icon === 'trending-up' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                                            )}
                                                            {step.icon === 'search' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                            )}
                                                            {step.icon === 'briefcase' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                            )}
                                                            {step.icon === 'clipboard-check' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                                                            )}
                                                            {step.icon === 'document-text' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                                            )}
                                                            {step.icon === 'device-mobile' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                                            )}
                                                            {step.icon === 'photograph' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                            )}
                                                            {step.icon === 'clipboard-list' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                                                            )}
                                                            {step.icon === 'refresh' && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                                            )}
                                                            {!['download', 'user-plus', 'clock', 'phone', 'shield-check', 'trending-up', 'search', 'briefcase', 'clipboard-check', 'document-text', 'device-mobile', 'photograph', 'clipboard-list', 'refresh'].includes(step.icon) && (
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                                            )}
                                                        </div>
                                                        <span className="text-xs font-semibold text-slate-300 text-center uppercase tracking-wider">{step.label}</span>
                                                    </div>

                                                    {idx < selectedCase.processFlow.length - 1 && (
                                                        <div className="flex-1 min-w-[40px] px-2 flex items-center justify-center">
                                                            <div className="w-full h-px bg-slate-700/80 relative">
                                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 border-t border-r border-slate-500 rotate-45"></div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 6. Two-Column Block (Problem / Strategy) */}
                            {(selectedCase.problem?.length > 0 || selectedCase.strategy?.length > 0) && (
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-14">
                                    {/* Problem */}
                                    <div className="bg-slate-800/30 rounded-2xl p-6 sm:p-8 border border-slate-700/30">
                                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                            <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                            The Problem
                                        </h4>
                                        <ul className="space-y-4">
                                            {selectedCase.problem.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-slate-300">
                                                    <span className="text-rose-400/50 mr-3 mt-1 text-sm">●</span>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Strategy */}
                                    <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-teal-500/20 shadow-[0_0_30px_rgba(20,184,166,0.05)] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                                            <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                            My Strategy
                                        </h4>
                                        <ul className="space-y-4 relative z-10">
                                            {selectedCase.strategy.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-slate-200">
                                                    <span className="text-teal-400 mr-3 mt-1 text-sm">●</span>
                                                    <span className="leading-relaxed font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* 7. Before / After Block */}
                            {(selectedCase.before?.length > 0 && selectedCase.after?.length > 0) && (
                                <div className="mb-14">
                                    <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-700/50 flex-col md:flex-row shadow-lg">
                                        {/* Before */}
                                        <div className="bg-slate-800/60 p-6 sm:p-8">
                                            <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                Before
                                            </h5>
                                            <ul className="space-y-4">
                                                {selectedCase.before.map((item, idx) => (
                                                    <li key={idx} className="flex items-start text-slate-300">
                                                        <svg className="w-5 h-5 text-slate-500 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* After */}
                                        <div className="bg-slate-700/40 p-6 sm:p-8 relative">
                                            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-600/50 to-transparent hidden md:block"></div>
                                            <h5 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                After
                                            </h5>
                                            <ul className="space-y-4">
                                                {selectedCase.after.map((item, idx) => (
                                                    <li key={idx} className="flex items-start text-white">
                                                        <svg className="w-5 h-5 text-teal-400 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                        <span className="leading-relaxed font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 8. Results Section */}
                            {selectedCase.results?.length > 0 && (
                                <div className="mb-14 pb-14 border-b border-slate-700/50">
                                    <h4 className="text-2xl font-bold text-white mb-8">Results Showcase</h4>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {selectedCase.results.map((item, idx) => {
                                            // Bold the first part of the result if it contains numbers/metrics, else standard formatting
                                            const parts = item.split(' ');
                                            const isMetric = /[0-9]/.test(parts[0]);

                                            // Optional text splitting rendering for bolded metrics
                                            const formattedItem = isMetric ? (
                                                <>
                                                    <span className="font-extrabold text-white block sm:inline mr-2">{parts.slice(0, 3).join(' ')}</span>
                                                    <span className="text-slate-300">{parts.slice(3).join(' ')}</span>
                                                </>
                                            ) : (
                                                <span className="text-slate-300 font-medium">{item}</span>
                                            );

                                            return (
                                                <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4 hover:border-teal-500/30 transition-colors">
                                                    <div className="p-2 bg-slate-900 rounded-lg text-teal-400 shrink-0">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                    </div>
                                                    <div className="mt-1 leading-relaxed">
                                                        {formattedItem}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* 8.5. Long-Term Portfolio Quality Block */}
                            {selectedCase.longTermQuality?.length > 0 && (
                                <div className="mb-14 bg-slate-800/80 rounded-2xl border border-cyan-500/20 p-6 sm:p-8 flex flex-col md:flex-row shadow-[0_4px_30px_rgba(6,182,212,0.1)] overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <svg className="w-40 h-40 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <div className="md:w-1/3 mb-6 md:mb-0 md:border-r border-slate-700/50 md:pr-8 relative z-10 flex flex-col justify-center">
                                        <h4 className="text-2xl font-bold text-white mb-2 leading-tight">Long-Term<br />Portfolio Quality</h4>
                                        <p className="text-sm text-cyan-400 font-medium">Sustainable growth through smart segmentation.</p>
                                    </div>
                                    <div className="md:w-2/3 md:pl-8 flex flex-col justify-center relative z-10">
                                        <ul className="space-y-4">
                                            {selectedCase.longTermQuality.map((item, idx) => {
                                                const parts = item.split(' ');
                                                const hasHighlight = parts.some(p => p.includes('%') || (!isNaN(p.replace(/[^0-9]/g, "")) && p.length <= 2));

                                                return (
                                                    <li key={idx} className="flex items-start text-slate-300">
                                                        <svg className="w-5 h-5 text-cyan-400 mr-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                        <span className="leading-relaxed font-medium">
                                                            {hasHighlight ? (
                                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\b(\d+%?)\b/g, '<strong class="text-white font-black">$1</strong>') }} />
                                                            ) : (
                                                                item
                                                            )}
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* 9. Bottom Takeaway */}
                            {selectedCase.takeaway && (
                                <div className="mb-6">
                                    <div className="border-l-4 border-teal-500 pl-6 py-2">
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Key Takeaway</p>
                                        <p className="text-xl text-white font-medium leading-relaxed tracking-tight italic">
                                            "{selectedCase.takeaway}"
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Divider & Close Button Wrapper */}
                            <div className="mt-12 pt-8 border-t border-slate-700/50 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors"
                                >
                                    Close Case Study
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CaseStudies;
