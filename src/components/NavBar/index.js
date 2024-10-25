import './index.css'
import {Link} from 'react-router-dom'

const NavBar = () => (
  <div className="nav-conatiner">
    <Link to="/" className="nav-heading">
      <h1>Drinks</h1>
    </Link>
    <Link to="/" className="nav-para">
      <p>Home</p>
    </Link>
  </div>
)
export default NavBar
