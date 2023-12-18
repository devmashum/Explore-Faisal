const About = () => {
    return (

        <div id="about" className=" text-slate-900  text-base text-justify lg:pt-10">

        <h2 className=" text-slate-900 font-bold">About:</h2>
            <h4> I am a front-end web developer. I love using my creativity to make something new. That's why I enjoy working with React.js, Tailwind, JavaScript, and other web technologies. Over the last year, I have gathered knowledge in various parts of web development on my own. I have also attended two web developer bootcamps to further extend my knowledge in the web technology field. My ultimate goal is to become an awesome full-stack web developer who can create beautiful UIs and also handle the back-end smoothly. 🚀</h4>

            <br />

            <h4 className=" text-slate-900 font-bold py-5">Tech Stack:</h4>

            <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 lg:p-10 lg:bg-gradient-to-br from-blue-300 to-blue-300 rounded-xl py-5">

                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">HTML5</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">CSS3</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JavaScript</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">React</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Next.js</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Tailwind CSS</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">daisyUi</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Material UI</button>
               
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">MongoDB</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Firebase</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JWT</button>
                <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">WordPress</button>
               
            </div>

            
        </div>
    );
};

export default About;





