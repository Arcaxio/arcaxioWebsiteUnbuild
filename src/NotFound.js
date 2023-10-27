import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, this page does not exist!</h2>
            <Link to="/">Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;