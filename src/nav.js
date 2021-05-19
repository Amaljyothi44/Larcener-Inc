import {
    Link
} from "react-router-dom";
const nav = () => {
    return (
        <ul>
            <li><Link to="/nreg">New Registration</Link></li>
            <li><Link to="/login" >Login</Link></li>
        </ul>
    );
}

export default nav;