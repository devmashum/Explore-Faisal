import SideBar from '../Shared/SideBar/SideBar';
// import About from '../Pages/About/About';
import Education from '../Pages/Education/Education';
import Portfolio from '../Pages/Portfolio/Portfolio';



const Layout = () => {
    return (
        <div className='lg:flex'>
            <SideBar></SideBar>

            <div className='lg:w-[60%] p-10'>
                <Education></Education>
                {/* <About></About> */}
                <Portfolio></Portfolio>

            </div>
        </div>
    );
};

export default Layout;