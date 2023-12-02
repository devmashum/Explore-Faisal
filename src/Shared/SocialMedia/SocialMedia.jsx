import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialMedia = () => {
    return (
        <div className="flex justify-center items-center gap-5 mt-10">

            <Link className="text-white text-3xl" to={'https://github.com/devmashum'} target="0"><FaGithub /></Link>
            <Link className="text-white text-3xl" to={'https://github.com/devmashum'} target="0"><FaGithub /></Link>


        </div>
    );
};

export default SocialMedia;