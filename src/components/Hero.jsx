
const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20 pb-16">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-900/0 to-transparent z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col text-center lg:text-left order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 animate-fade-in-up">
                            Sajith Ranpa
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-8 tracking-tight leading-snug">
                            CRM, Lifecycle & <br className="hidden lg:block" />Digital Marketing Professional
                        </h2>
                        <p className="mt-4 text-xl sm:text-2xl text-slate-200 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed font-bold">
                            Combining banking discipline, customer insight, and digital strategy to drive measurable growth.
                        </p>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-loose font-medium">
                            I bring 9+ years of experience across banking, digital customer acquisition, onboarding, and growth-focused engagement, supported by an MSc in Strategic & Digital Marketing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <a
                                href="#case-studies"
                                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
                            >
                                View Case Studies
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-600 text-base font-bold rounded-lg text-white bg-transparent hover:bg-slate-800 hover:border-slate-500 transition-colors"
                            >
                                Let's Connect
                            </a>
                            <a
                                href="/sajith-ranpa-cv.pdf"
                                download="Sajith-Ranpa-CV"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-slate-600 text-base font-bold rounded-lg text-white bg-transparent hover:bg-slate-800 hover:border-slate-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                                Download CV
                            </a>
                        </div>

                        {/* Proof Metrics Layer */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-slate-700/50 max-w-3xl mx-auto lg:mx-0">
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <span className="text-xl sm:text-2xl font-black text-white mb-1 whitespace-nowrap">9+ Years</span>
                                <span className="text-sm font-medium text-slate-400">Banking & Growth Experience</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-t sm:border-t-0 sm:border-l border-slate-700/50 pt-4 sm:pt-0 sm:pl-4 lg:pl-8">
                                <span className="text-xl sm:text-2xl font-black text-white mb-1 whitespace-nowrap">3 Case Studies</span>
                                <span className="text-sm font-medium text-slate-400">Real Business Outcomes</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-t sm:border-t-0 sm:border-l border-slate-700/50 pt-4 sm:pt-0 sm:pl-4 lg:pl-8">
                                <span className="text-xl sm:text-2xl font-black text-white mb-1 whitespace-nowrap">MSc</span>
                                <span className="text-sm font-medium text-slate-400">Strategic & Digital Marketing</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex justify-center lg:justify-end order-2 mb-10 lg:mb-0">
                        <div className="relative group w-[300px] h-[400px] sm:w-[380px] sm:h-[480px] lg:w-[460px] lg:h-[560px]">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-blue-500/20 rounded-[3rem] blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

                            {/* Image — frameless, blends into background */}
                            <div className="relative h-full w-full overflow-hidden z-10">
                                <img
                                    src="/propic.png"
                                    alt="Sajith Ranpa - CRM & Digital Marketing Professional"
                                    className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="eager"
                                />
                                {/* Bottom vignette — fades photo into section background */}
                                <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
