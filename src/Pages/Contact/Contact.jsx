
const Contact = () => {
    return (

        <div className="lg:w-[500px] my-10">
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
                    <input type="text" placeholder="Message" className="input input-bordered h-20" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">Send</button>

                </div>
            </form>
        </div>


    );
};

export default Contact;