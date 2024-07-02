import "./Navigation.scss"
import { iconProfile } from "../../services/images.js"
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
				<Link onClick={() => setActiveMenu(false)} to="/" className="nav-link"><img src={iconProfile} alt="short-icon" /> <span>Головна</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/profile" className="nav-link"><img src={iconProfile} alt="short-icon" /> <span>Профіль</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/shop" className="nav-link"><img src={iconProfile} alt="short-icon" /> <span>Магазин</span></Link>
				<Link onClick={() => setActiveMenu(false)} to="/wiki" className="nav-link"><img src={iconProfile} alt="short-icon" /> <span>Вікі</span></Link>
			</div>
			{
				!user ? <Link onClick={() => setActiveMenu(false)} to="/auth" className="menu__auth nav-link">
					<img src={iconProfile} alt="short-icon" />
					<span>
						Увійти
					</span>
				</Link> : <a onClick={logoutHandler} className="nav-link"><img src={iconProfile} alt="short-icon" />
					<span>
						Вийти
					</span></a>
			}
		</nav>
	)
}

export default Navigation