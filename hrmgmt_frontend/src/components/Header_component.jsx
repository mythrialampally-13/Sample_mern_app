
import{Link,useLocation, useNavigate} from 'react-router-dom'

function Header_component() {
    useLocation() //reload the menubar

    let currentuser=JSON.parse(localStorage.getItem("currentuser") || "null")
    let navigate=useNavigate()

    let handleLogout=(e)=>{
        localStorage.removeItem("currentuser")
        navigate("/login")
    }
    return (
        <div>
           <div className="header"></div>
           {/* command menu */}
            <Link to="/home">Home</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/about">About Us</Link>
            {/* if not logged in */}
            {!currentuser && (
                <div>
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                </div>
            )}
             {/* if not logged in as hr */}
             {currentuser && currentuser.role=="HR" && (
                <div>
                    <Link to="#">Assign task</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
             )}
              {/* if not logged in as emp*/}
              {currentuser && currentuser.role=="EMP" && (
                <div>
                    <Link to="#">View task</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
             )}
        </div>
    );
}

export default Header_component;