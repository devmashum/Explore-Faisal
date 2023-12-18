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
              <div><h2 className="text-slate-900 text-base font-bold hidden lg:block">Dragon-News</h2></div>
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
              <div><h2 className="text-slate-900 text-base font-bold lg:hidden block">The Dragon News</h2></div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
              I am currently in the process of learning Next.js and Material-UI, and as part of this exploration,
              I have developed an online newspaper portal using Next.js and Material-UI, with MongoDB serving as the database.  <br /> <br />

              <b>Key Features:</b> <br />
              <b>Next.js Framework:</b> <br /> Leveraging the capabilities of Next.js for building a robust and performant React-based web application. <br />
              <b>Material-UI Integration:</b> <br /> Implementing a sleek and responsive user interface with the help of Material-UI components, ensuring a modern and intuitive design. <br />
              <b>MongoDB Database:</b> <br /> Utilizing MongoDB to store and manage the data for the online newspaper, providing scalability and flexibility. <br />

              <b>Functionalities:</b> <br />
              <b>Article Display:</b> <br /> Presenting news articles with features such as headlines, images, and summaries. <br />
              <b>Category Navigation:</b> <br /> Organizing news articles into categories for easy navigation and user convenience. <br />
              <b>Responsive Design:</b> <br /> Ensuring a seamless user experience across various devices, including desktops, tablets, and smartphones. <br />
              <b>Dynamic Routing:</b> <br /> Utilizing Next.js dynamic routing for efficient handling of different pages and content. <br />
              <b>Latest News Section:</b> <br /> Showcasing the most recent and trending news prominently on the homepage.

              <b>Interactive User Interface:</b> Using Material-UI components to create an interactive and visually appealing user interface.
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
