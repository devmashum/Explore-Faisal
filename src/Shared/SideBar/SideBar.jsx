import NavLinks from "../NavLinks/NavLinks";
import HeaderSection from "../HeaderSection/HeaderSection";
import Contact from "../../Pages/Contact/Contact";

const SideBar = () => {
    return (
        <div className="lg:w-[40%] lg:min-h-screen lg:pt-10 p-10">

            <div className='lg:fixed'>
                <HeaderSection></HeaderSection>
                <NavLinks></NavLinks>
                <div className="md:hidden hidden lg:block ">
                    <Contact></Contact>
                </div>
            </div>

        </div>
    );
};

export default SideBar;