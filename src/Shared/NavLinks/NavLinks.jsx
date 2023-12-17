const NavLinks = () => {
    return (

        <div className=" hidden lg:block">

            <div className="my-5">
                <a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">

                    <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-900 text-base font-display">

                        <span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms] sm:delay-[150ms] md:delay-[150ms]" aria-hidden="true">A</span>
                        <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms] sm:delay-[175ms] md:delay-[175ms]" aria-hidden="true">B</span>
                        <span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms] sm:delay-[225ms] md:delay-[225ms]" aria-hidden="true">O</span>
                        <span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms] sm:delay-[250ms] md:delay-[250ms]" aria-hidden="true">U</span>
                        <span className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms] sm:delay-[275ms] md:delay-[275ms]" aria-hidden="true">T</span>


                    </span>

                </span></a>

                <a className="group flex items-center active" href="#portfolio"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">

                    <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-900 base font-display">

                        <span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms] sm:delay-[150ms] md:delay-[150ms]" aria-hidden="true">P</span>
                        <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms] sm:delay-[175ms] md:delay-[175ms]" aria-hidden="true">O</span>
                        <span className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms] sm:delay-[200ms] md:delay-[200ms]" aria-hidden="true">R</span>
                        <span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms] sm:delay-[225ms] md:delay-[225ms]" aria-hidden="true">T</span>
                        <span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms] sm:delay-[250ms] md:delay-[250ms]" aria-hidden="true">F</span>
                        <span className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms] sm:delay-[275ms] md:delay-[275ms]" aria-hidden="true">O</span>
                        <span className="group-hover/korok:text-violet-500 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms] sm:delay-[300ms] md:delay-[300ms]" aria-hidden="true">L</span>
                        <span className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms] sm:delay-[300ms] md:delay-[325ms]" aria-hidden="true">I</span>
                        <span className="group-hover/korok:text-indigo-300 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms] sm:delay-[300ms] md:delay-[350ms]" aria-hidden="true">O</span>

                    </span>


                </span></a>
            </div>

            <div>
                <a className="btn hidden bg-cyan-800 hover:bg-cyan-600 text-white btn-outline mt-5" href="https://drive.google.com/file/d/1xQfZm_5rQASfu0bZXVwMXkwPXlQ7i8tz/view?usp=sharing" target="0">View Full Résumé</a>
            </div>


        </div>
    );
};

export default NavLinks;