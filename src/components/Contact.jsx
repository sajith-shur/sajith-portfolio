
const Contact = () => {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-balance leading-tight">
                        Let’s Build Growth That Goes Beyond Clicks
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        I’m interested in CRM, lifecycle, digital marketing, and customer growth opportunities where strategy, insight, and execution come together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="mailto:contact@goranpa.com" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-100 transition-colors shadow-lg">
                            Let's Connect
                        </a>
                        <a href="https://www.linkedin.com/in/sajith-ranpa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
