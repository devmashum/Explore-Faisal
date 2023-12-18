import { Link } from 'react-router-dom';
import dragonNews from '../../assets/dragonNews.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
const DragonNews = () => {
    return (
        <div>
              <div id="portfolio" className="lg:hover:-mx-10 shadow-xl lg:p-10 p-5 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-5 mb-5">
          <div className='lg:flex gap-3'>
            <div><h3 className='hidden lg:block text-slate-900'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-base font-bold hidden lg:block">
           Dragon-News</h2>
            </div>
            </div>
            <div className="flex justify-center items-center gap-2 w-[40%] mr-5 text-base font-bold">
              <Link className="text-slate-900" to="https://github.com/devmashum/the-dragon-news" target="_blank">
                <div className="flex justify-center items-center gap-2">
               <div> <span>Client</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className="text-slate-900" to="https://github.com/devmashum/the-dragon-news-server" target="_blank">
                <div className="flex justify-center items-center gap-2">
                <div><span>Server</span></div>
                <div><FaGithub /></div>
                </div>
              </Link>
              <Link className="text-slate-900" to="https://the-dragon-news-alpha.vercel.app/" target="_blank">
                <div className="flex justify-center items-center gap-2 lg:mr-0 mr-10">
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
          <div className='flex gap-3'>
            <div><h3 className='block lg:hidden text-slate-900'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-base font-bold lg:hidden block">
            The Dragon News</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
              Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.
            </h4>
            <div className="grid grid-cols-3 gap-5">
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Next.js</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Material Ui</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Daisy Ui</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">MongoDb</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DragonNews;