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
            <div><h2 className="text-slate-900 text-base font-bold lg:block hidden">
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
                <div className="flex justify-center items-center gap-2 lg:mr-0 mr-10">
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
          <div className='flex gap-3'>
            <div><h3 className='block lg:hidden text-slate-900'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-base font-bold lg:hidden block">
            Apex Artistry</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
          
<p>ApexArtistry is a dynamic, responsive platform enabling users to support artists through donations. Users aspiring to be creators can request admin approval to submit artworks for contests. Winners receive prizes, while non-winners receive donated amounts after platform charges.</p> <br />

<b>Functionality:</b> <br />
To test the functionality, please log in with the following credentials: <br />
- As a User: user@gmail.com <br />
- As a Creator: creator@gmail.com <br/>
- As an Admin: admin@gmail.com <br/>
Password (same for all users): 123456
<br />
<br />
<b>Dashboard:</b> I have created a dashboard for three types of users. <br/>
<br />
1. Normal User: A normal user can select an art and donate using the Card Payment method. In the normal user dashboard, users can check their profile, cart, donated contests, and payment history. <br/>
<br />
2. Creator: A creator can add art by clicking "Add Contest." They can check their submitted contests and verify whether they won a contest or not. If they also donated for an art, they can check their payment history. <br/>
<br />
3. Admin: An admin can manage all users, including making a normal user a creator. If necessary, the admin can delete a user. They can also declare a creator as a winner. The admin has access to the support section, displaying all contact data.
<br /> <br />
<b>User Authentication:</b> For user registration, user login/logout system, I have utilized Firebase. <br />
<b>Security:</b> I have secured this website using Json Web Token (JWT). <br/>

<b>Payment:</b> The most popular payment method, Stripe, is implemented for the payment process. <br/>
<b>DataStore:</b> To store all data, I have used MongoDB.



 
            </h4>
            <div className="grid grid-cols-3 gap-5">
            <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JavaScript</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">React</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Tailwind</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">DaisyUi</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">MongoDb</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Firebase</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JWT</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ApexArtistry;