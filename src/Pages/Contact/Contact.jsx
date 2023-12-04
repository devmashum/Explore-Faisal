import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (

        <div id="contact">
            <div className=" my-10">
                <form className="card-body rounded-xl border border-slate-200">
                    <div>
                        <h3 className=" text-slate-200">Contact</h3>
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

                <div className="flex justify-center items-center gap-5 mt-5">
                    <Link className="text-white text-3xl" to={'https://github.com/devmashum'} target="0"><FaGithub /></Link>
                    <Link className="text-white text-3xl" to={'https://www.linkedin.com/in/faisal-ahmed-mashum/'} target="0"><FaLinkedin></FaLinkedin></Link>

                    <Link className="text-white text-3xl" href="mailto:dev.mashum@gmail.com"><MdEmail></MdEmail></Link>
                </div>
            </div>
        </div>


    );
};

export default Contact;