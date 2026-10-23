
import{Link} from 'react-router-dom'

function Header_component() {
    return (
        <div>
           <div className="header"></div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/about">About Us</Link>
            <Link to="/Login">Login</Link>
        </div>
    );
}

export default Header_component;