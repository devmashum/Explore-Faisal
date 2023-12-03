import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className="flex justify-center items-center gap-5 ">
            <Link className="text-white text-3xl" to={'https://github.com/devmashum'} target="0"><FaGithub /></Link>
            <Link className="text-white text-3xl" to={'https://www.linkedin.com/in/faisal-ahmed-mashum/'} target="0"><FaLinkedin></FaLinkedin></Link>
        </div>
    );
};

export default SocialMedia;