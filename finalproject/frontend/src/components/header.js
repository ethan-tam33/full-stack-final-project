import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
        <ul>
            <li><Link to="../home">Login</Link></li>
            <li><Link to="../main">Main</Link></li>
        </ul>
    </div>
)}

export default Header;