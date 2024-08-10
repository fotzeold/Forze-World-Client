import "./Navigation.scss"
import {
	iconProfile,
	iconHome,
	iconLogout,
	iconAdmin,
	iconMap,
	iconRules,
	iconShop,
	iconWiki,
	iconLogin
} from "../../services/images.js"
import { PiGameController } from "react-icons/pi";
import { Link } from "react-router-dom"

const Navigation = ({ menuState, userControll }) => {
	const { activeMenu, setActiveMenu } = menuState
	const { user, setUser } = userControll

	const logoutHandler = () => {
		setUser(null)
	}

	return (
		<nav className={`menu row ${activeMenu ? "active" : ""}`}>
			<div className="menu__header">
				forze.cringe.team
			</div>
			<div className="menu__list row">
				<Link onClick={() => setActiveMenu(false)} to="/" className="nav-link"><img src={iconHome} alt="short-icon" /> <span>Головна</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/profile" className="nav-link"><img src={iconProfile} alt="short-icon" /> <span>Профіль</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/shop" className="nav-link"><img src={iconShop} alt="short-icon" /> <span>Магазин</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/games" className="nav-link"><PiGameController /> <span>Міні ігри</span></Link>
				<a target="blank" onClick={() => setActiveMenu(false)} href="http://s26.joinserver.xyz:25594" className="nav-link"><img src={iconMap} alt="short-icon" /> <span>Карта світу</span></a>
				<Link onClick={() => setActiveMenu(false)} to="/rules" className="nav-link"><img src={iconRules} alt="short-icon" /> <span>Правила</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/wiki" className="nav-link"><img src={iconWiki} alt="short-icon" /> <span>Вікі</span></Link>
				{
					user && (user.role === "owner" || user.role === "admin") &&
					<Link onClick={() => setActiveMenu(false)} to="/admin" className="nav-link"><img src={iconAdmin} alt="short-icon" /> <span>Керування</span></Link>
				}
			</div>
			{
				!user ? <Link onClick={() => setActiveMenu(false)} to="/auth" className="menu__auth nav-link">
					<img src={iconLogin} alt="short-icon" />
					<span>
						Увійти
					</span>
				</Link> : <a onClick={logoutHandler} className="nav-link"><img src={iconLogout} alt="short-icon" />
					<span>
						Вийти
					</span></a>
			}
		</nav >
	)
}

export default Navigation