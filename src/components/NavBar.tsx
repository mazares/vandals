import { Link } from "@tanstack/react-router"

export default function NavBar() {
  return <nav>
    <ul className="flex flex-col gap-1 lg:flex-row">
<li>
<Link to ={"/"}>Home</Link>
</li>
<li>
<Link to ={"/about"}>About</Link>
</li>
<li>
<Link to ={"/products"}>Products</Link>
</li>
<li>
<Link to ={"/contact"}>Contacy</Link>
</li>
<li>
<Link to={"/dashboard"}>DashBoard</Link>
</li>
  </ul>
</nav>}
