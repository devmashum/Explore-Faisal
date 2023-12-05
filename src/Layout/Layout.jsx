import SideBar from '../Shared/SideBar/SideBar';
import Portfolio from '../Pages/Portfolio/Portfolio';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const Layout = () => {
    return (

        <div>

            <div className='lg:flex'>
                <SideBar></SideBar>

                <div className='lg:w-[60%] p-10'>

                    <About></About>
                    <Portfolio></Portfolio>
                    <div className='lg:hidden block '>
                        <Contact></Contact>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Layout;