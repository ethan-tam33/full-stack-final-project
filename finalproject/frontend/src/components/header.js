import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
        <ul>
            {/* <li><Link to="../login">Login</Link></li> */}
            {/* <li><Link to="../home">Sign Up</Link></li> */}
            <li><Link to="../main">Main</Link></li>
            {/* <li><Link to="../newpost">Create New Post</Link></li> */}
        </ul>
    </div>
)}

export default Header;