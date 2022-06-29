import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 

<div>

<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid justify-content-start">

  <Link to='/'>

    <button className="btn btn-outline-success me-2" type="button">Star Wars API</button>
    </Link>

       <Link to='/people'>
    <button className="btn btn-outline-success me-2" type="button">People</button>
    </Link>
    <Link to='/planets'>

    <button className="btn btn-outline-success me-2" type="button">Planets</button>
    </Link>
    <Link to='/vehicles'>

    <button className="btn btn-outline-success me-2" type="button">Vehicles</button>
    </Link>
    <Link to='/favorites'>

<button className="btn btn-outline-success me-2" type="button">Favorites</button>
</Link>

  </div>
</nav>

</div>

     );
}
 


export default NavBar;