import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import kioko from '../../assets/Kioko Sushi GmbH.png';
const Kioko = () => {
    return (
        <div>
               <div id="portfolio" className="lg:hover:-mx-10 shadow-xl lg:p-10 p-5 rounded-lg lg:mt-10 lg:pt-5 pt-10">
        <div className="">
          <div className="flex justify-between item-center gap-5 mb-5">
          <div className='lg:flex gap-3'>
            <div><h3 className='hidden lg:block text-slate-900'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-base font-bold">
            Kioko-Sushi</h2>
            </div>
            </div>
            <div className="flex justify-center items-center gap-2 w-[40%] mr-5 text-base font-bold">
              <Link className="text-slate-900" to="#" target="_blank">
                <div className="flex gap-2"><span></span></div>
              </Link>
              <Link className="text-slate-900" to="https://kioko-sushi.de/" target="_blank">
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
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3 text-justify text-base">
          
<b>Dine-In Reservations:</b> <br />
Customers can effortlessly reserve a table through this user-friendly website. They simply need to select their preferred date and time, and specify the number of guests they'll be bringing.
<br /> <br />
<b>Online Ordering:</b> <br />
For added convenience, customers can order their food for home delivery or takeaway directly through the website. The online ordering feature enables customers to explore an extensive menu, place an order, and choose whether they want their meal delivered or prepared for takeaway.
            </h4>
            <div className="grid grid-cols-3 gap-5">
              <a className="btn btn-sm px-10hover:bg-blue-700 bg-blue-500 btn-outline text-white">WordPress</a>
              <a className="btn btn-sm px-10hover:bg-blue-700 bg-blue-500 btn-outline text-white">HTML</a>
              <a className="btn btn-sm px-10hover:bg-blue-700 bg-blue-500 btn-outline text-white">CSS</a>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Kioko;