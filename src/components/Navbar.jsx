import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to={"/"} className={({isActive}) => ( isActive ? "active" : "")}>Home</NavLink >
        <NavLink to={"/about"} className={({isActive}) => ( isActive ? "active" : "")}>About</NavLink >
        <NavLink to={"/products"} className={({isActive}) => ( isActive ? "active" : "")}>Products</NavLink >
    </nav>
  )
}

export default Navbar