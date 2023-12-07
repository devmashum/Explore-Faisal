import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import kioko from '../../assets/Kioko Sushi GmbH.png';
import dragonNews from '../../assets/dragonNews.png';

const Portfolio = () => {
  return (
    <div>
      {/* Dragon News Project */}
      <div id="portfolio" className="lg:hover:bg-slate-800 lg:hover:-mx-10 shadow-xl lg:p-10 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-5 mb-5">
            <h2 className="text-slate-200 text-base font-bold w-[60%]">Project Title:</h2>
            <div className="flex justify-center items-center gap-5 w-[40%] mr-5 text-base font-bold">
              <Link className="text-white" to="https://github.com/devmashum/the-dragon-news" target="_blank">
                <div className="flex gap-2"><span>Client</span> <FaGithub /></div>
              </Link>
              <Link className="text-white" to="https://github.com/devmashum/the-dragon-news-server" target="_blank">
                <div className="flex gap-2"><span>Server</span> <FaGithub /></div>
              </Link>
              <Link className="text-white" to="https://the-dragon-news-alpha.vercel.app/" target="_blank">
                <div className="flex gap-2"><span>Live</span> <FaExternalLinkAlt /></div>
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
              <button className="btn btn-sm px- hover:bg-cyan-600 bg-cyan-800 text-white">Next.js</button>
              <button className="btn btn-sm px- hover:bg-cyan-600 bg-cyan-800 text-white">Material Ui</button>
              <button className="btn btn-sm px- hover:bg-cyan-600 bg-cyan-800 text-white">Daisy Ui</button>
              <button className="btn btn-sm px- hover:bg-cyan-600 bg-cyan-800 text-white">MongoDb</button>
            </div>
          </div>
        </div>
      </div>

      {/* Kioko Sushi Project */}
      <div id="portfolio" className="lg:hover:bg-slate-800 lg:hover:-mx-10 shadow-xl lg:p-10 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-5 mb-5">
            <h2 className="text-slate-200 text-base font-bold w-[60%]">Project Title:</h2>
            <div className="flex justify-center items-center gap-5 w-[40%] mr-5 text-base font-bold">
              <Link className="text-white" to="#" target="_blank">
                <div className="flex gap-2"><span>Code</span> <FaGithub /></div>
              </Link>
              <Link className="text-white" to="#" target="_blank">
                <div className="flex gap-2"><span>Live</span> <FaExternalLinkAlt /></div>
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
              <a className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 text-white">WordPress</a>
              <a className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 text-white">HTML</a>
              <a className="btn btn-sm px-10 hover:bg-cyan-600 bg-cyan-800 text-white">CSS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
