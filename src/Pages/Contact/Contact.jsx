import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiGithubLogo } from "react-icons/pi";
import { SiMaildotcom } from "react-icons/si";

const Contact = () => {
    return (


        <div className="lg:flex justify-center items-center lg:gap-5 lg:flex-row-reverse my-5">
            <form className="card-body rounded-xl border border-slate-200">
                <div>
                    <h3 className=" text-slate-200 text-2xl">Contact</h3>
                </div>
                <div className="form-control">
                    <label className="label">

                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">

                    </label>

                    <textarea type="textArea" placeholder="Message" className="input input-bordered h-20 w-full" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">Send</button>

                </div>
            </form>

            <div className="lg:block flex justify-center items-center  mt-5 lg:mt-0 gap-5 ">
                <div className="py-5 hover:pb-10">
                    <Link className="text-white text-3xl hover:text-cyan-300 " to={'https://github.com/devmashum'} target="0">
                        <PiGithubLogo />
                    </Link>
                </div>
                <div className="lg:pb-5 hover:pb-10">
                    <a className="text-3xl text-white  hover:text-cyan-300" href="mailto:dev.mashum@gmail.com">
                        <IoMdMail />

                    </a>
                </div>
                <div className="hover:pb-10">
                    <Link className="text-white text-3xl hover:text-cyan-300" to={'https://www.linkedin.com/in/faisal-ahmed-mashum/'} target="0">
                        <SlSocialLinkedin />
                    </Link>
                </div>
            </div>
        </div>



    );
};

export default Contact;