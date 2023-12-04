import { GiHamburgerMenu } from "react-icons/gi";
const Demo = () => {
    return (
        <div>
            <div className="navbar bg-slate-200 lg:hidden fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-3xl border-dotted border-slate-900 border-4 ">
                            <GiHamburgerMenu />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div>
                                <a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a>


                                <a className="group flex items-center py-3 active" href="#portfolio"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Portfolio</span></a>
                            </div>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">

                </div>

            </div>
        </div>
    );
};

export default Demo;