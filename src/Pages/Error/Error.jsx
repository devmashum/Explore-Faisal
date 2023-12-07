import { Link, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className=" min-h-screen text-red-700 p-20">
            <h1 className="text-7xl mb-5">Oops!</h1>
            <p className="mb-5">Sorry, an unexpected error has occurred.</p>
            <p >
                <i>{error.statusText || error.message}</i>
            </p>


            <Link to={'/'}><button className="btn btn-accent btn-outline mt-10">Back to Home</button></Link>
        </div>
    );
}