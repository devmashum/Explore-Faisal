import NavLinks from "../NavLinks/NavLinks";
import HeaderSection from "../HeaderSection/HeaderSection";
import Contact from "../../Pages/Contact/Contact";
import SocialMedia from "../SocialMedia/SocialMedia";

const SideBar = () => {
    return (
        <div className="lg:w-[40%]  lg:min-h-screen lg:pt-10 p-10">
            <div className='lg:fixed'>

                <HeaderSection></HeaderSection>
                <NavLinks></NavLinks>
                <Contact></Contact>
                <SocialMedia></SocialMedia>

                <br />








            </div>

        </div>
    );
};

export default SideBar;