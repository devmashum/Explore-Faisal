import { NavLink } from "react-router-dom";
import img from '../../assets/faisal.jpeg'







const NavBar = () => {

    const navLinks = <>

        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white mr-5'} to={'/'}> Home </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white mr-5'} to={'/about'}> About </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white mr-5'} to={'/portfolio'}> Portfolio </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/contact'}>Contact </NavLink>

    </>

    return (
        <div className="navbar bg-base-100 px-5 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Explore-Faisal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-white ring-offset-base-100">
                        <img src={img} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;