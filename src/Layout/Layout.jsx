

import SideBar from '../Shared/SideBar/SideBar';
import About from '../Pages/About/About';



const Layout = () => {
    return (
        <div className='lg:flex'>
            <SideBar></SideBar>

            <div className='lg:w-[60%] p-10'>
                <About></About>
            </div>
        </div>
    );
};

export default Layout;