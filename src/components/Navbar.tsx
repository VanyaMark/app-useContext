/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AUthContextProvider";
import "./Navbar.css";

export default function NavBar() {
	//3 Consume context
	const auth = useAuthContext();
	console.log(auth)
	return (
		<div className="navbar">
			<nav>
				<ul>
					<li className="nav-link">
						<Link to="/">HomePage</Link>
					</li>
					<li className="nav-link">
						{auth?.isLoggedIn &&<Link to="/private">PrivateData</Link>}
					</li>
					<li className="nav-link">
						{auth?.isLoggedIn ? <button>Logout</button> : <Link to="/login">Login</Link>}
					</li>
				</ul>
			</nav>
		</div>
	);
}
