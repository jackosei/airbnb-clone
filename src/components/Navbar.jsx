import airbnbLogo from "../assets/airbnb-logo.png"

export default function Navbar() {
	return (
		<nav className="nav">
			<img src={airbnbLogo} alt="airbnb logo" className="nav-logo" />
		</nav>
	)
}
