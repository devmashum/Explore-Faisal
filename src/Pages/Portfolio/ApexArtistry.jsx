import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import apexArtistry from '../../assets/apexArtistry.png';
const ApexArtistry = () => {
    return (
        <div>
            <div id="portfolio" className=" lg:hover:-mx-10 shadow-xl lg:p-10 p-5 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-3 mb-5">
            
            <div className='lg:flex gap-3'>
            <div><h3 className='hidden lg:block text-slate-900'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-base font-bold">
            Apex Artistry</h2>
            </div>
            </div>
            <div className="flex justify-center items-center gap-2 w-[40%] mr-5 text-base font-bold">
              <Link className=" text-slate-900" to="https://github.com/devmashum/ApexArtisty-Client" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Client</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className=" text-slate-900" to="https://github.com/devmashum/ApexArtisty-Server" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Server</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className=" text-slate-900" to="https://apexartistry-47b43.web.app/" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Live</span></div>
                <div><FaExternalLinkAlt /></div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="https://apexartistry-47b43.web.app/" target="_blank">
            <img src={apexArtistry} alt="" />
          </Link>
          <div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
            

<p className="font-bold">Concept:</p> <br />
ApexArtistry is a dynamic, responsive platform enabling users to support artists through donations. Users aspiring to be creators can request admin approval to submit artworks for contests. Winners receive prizes, while non-winners get donated amounts after platform charges. <br />

<b>Functionality:</b> <br />
Firebase: To Create an account with user name and email or using gamil account

 
            </h4>
            <div className="grid grid-cols-3 gap-5">
            <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">JavaScript</button>
              <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">React</button>
              <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">Tailwind</button>
              <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">DaisyUi</button>
              <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">MongoDb</button>
              <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">Firebase</button>
              <button className="btn btn-sm px-10 hover:bg-blue-500 bg-blue-700 btn-outline text-white">JWT</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ApexArtistry;