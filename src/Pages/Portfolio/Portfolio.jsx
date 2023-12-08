import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import kioko from '../../assets/Kioko Sushi GmbH.png';
import dragonNews from '../../assets/dragonNews.png';
import apexArtistry from '../../assets/apexArtistry.png';

const Portfolio = () => {
  return (
    <div>
          {/* Apex Artistry */}
<div id="portfolio" className="lg:hover:bg-slate-800 lg:hover:-mx-10 shadow-xl lg:p-10 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-3 mb-5">
            
            <div className='lg:flex gap-3'>
            <div><h3 className='hidden lg:block text-white'>Project Title: </h3></div>
            <div><h2 className="text-slate-200 text-base font-bold">
            Apex Artistry</h2>
            </div>
            </div>
            <div className="flex justify-center items-center gap-2 w-[40%] mr-5 text-base font-bold">
              <Link className="text-white" to="https://github.com/devmashum/ApexArtisty-Client" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Client</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className="text-white" to="https://github.com/devmashum/ApexArtisty-Server" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Server</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className="text-white" to="https://apexartistry-47b43.web.app/" target="_blank">
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
            <h3 className="text-slate-200 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-500 my-3 lg:hover:text-slate-400 text-justify text-base">
              Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.
            </h4>
            <div className="grid grid-cols-3 gap-5">
            <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">JavaScript</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">React</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">Tailwind</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">DaisyUi</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">MongoDb</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">Firebase</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">JWT</button>
            </div>
          </div>
        </div>
      </div>
          
          {/* Dragon News Project */}
      <div id="portfolio" className="lg:hover:bg-slate-800 lg:hover:-mx-10 shadow-xl lg:p-10 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-5 mb-5">
          <div className='lg:flex gap-3'>
            <div><h3 className='hidden lg:block text-white'>Project Title: </h3></div>
            <div><h2 className="text-slate-200 text-base font-bold">
           Dragon-News</h2>
            </div>
            </div>
            <div className="flex justify-center items-center gap-2 w-[40%] mr-5 text-base font-bold">
              <Link className="text-white" to="https://github.com/devmashum/the-dragon-news" target="_blank">
                <div className="flex justify-center items-center gap-2">
               <div> <span>Client</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className="text-white" to="https://github.com/devmashum/the-dragon-news-server" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Server</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className="text-white" to="https://the-dragon-news-alpha.vercel.app/" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Live</span></div>
                <div><FaExternalLinkAlt /></div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="https://the-dragon-news-alpha.vercel.app/" target="_blank">
            <img src={dragonNews} alt="" />
          </Link>
          <div>
            <h3 className="text-slate-200 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-500 my-3 lg:hover:text-slate-400 text-justify text-base">
              Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.
            </h4>
            <div className="grid grid-cols-3 gap-5">
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">Next.js</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">Material Ui</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">Daisy Ui</button>
              <button className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">MongoDb</button>
            </div>
          </div>
        </div>
      </div>

      {/* Kioko Sushi Project */}
      <div id="portfolio" className="lg:hover:bg-slate-800 lg:hover:-mx-10 shadow-xl lg:p-10 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-5 mb-5">
          <div className='lg:flex gap-3'>
            <div><h3 className='hidden lg:block text-white'>Project Title: </h3></div>
            <div><h2 className="text-slate-200 text-base font-bold">
            Kioko-Sushi</h2>
            </div>
            </div>
            <div className="flex justify-center items-center gap-2 w-[40%] mr-5 text-base font-bold">
              <Link className="text-white" to="#" target="_blank">
                <div className="flex gap-2"><span></span></div>
              </Link>
              <Link className="text-white" to="https://kioko-sushi.de/" target="_blank">
                <div className="flex justify-center item-center gap-2">
                <div><span>Live</span></div>
                <div><FaExternalLinkAlt /></div>
                </div>
              </Link>
            </div>
          </div>
          <Link to="https://kioko-sushi.de/" target="_blank">
            <img src={kioko} alt="" />
          </Link>
          <div>
            <h3 className="text-slate-200 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-500 my-3 lg:hover:text-slate-400 text-justify text-base">
              Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within the engineering department through close collaboration, knowledge shares, and mentorship.
            </h4>
            <div className="grid grid-cols-3 gap-5">
              <a className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">WordPress</a>
              <a className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">HTML</a>
              <a className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 btn-outline text-white">CSS</a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Portfolio;
