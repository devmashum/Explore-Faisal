import { Link } from 'react-router-dom';
import kioko from '../../assets/Kioko Sushi GmbH.png'
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div>
            <a href="https://kioko-sushi.de/" target='0'>
                <div id="portfolio" className="lg:flex hover:bg-slate-800  shadow-xl p-10 rounded-lg">
                    <div className="lg:w-[30%]">
                        <h3 className=" text-slate-500 text-xl">2018—PRESENT</h3>
                    </div>
                    <div className="lg:w-[70%]">
                        <div className='flex justify-start item-center gap-5 mb-5'>
                            <h2 className=" text-slate-200 text-2xl mb-3">Lead Engineer · Upstatement</h2>
                            <div className="flex justify-center items-center gap-5 ">
                                <Link className="text-white text-3xl" to={'https://github.com/devmashum'} target="0"><FaGithub /></Link>
                                <Link className="text-white text-3xl" to={'https://www.linkedin.com/in/faisal-ahmed-mashum/'} target="0"><FaExternalLinkAlt /></Link>
                            </div>
                        </div>
                        <img src={kioko} alt="" />
                        <h4 className=" text-slate-500 my-3">Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</h4>
                        <div className="grid grid-cols-4 gap-4">
                            <button className="btn btn-sm px-7 btn-accent">WordPress</button>
                            <button className="btn btn-sm px-7 btn-accent">HTML</button>
                            <button className="btn btn-sm px-7 btn-accent">CSS</button>




                        </div>

                    </div>
                </div>
            </a> ≈dcd
        </div>
    );
};

export default Portfolio;