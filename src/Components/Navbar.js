import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Family blog

            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >Create New Blogg</Link>
            </div>
        </nav>
      );
}
 
export default NavBar; 