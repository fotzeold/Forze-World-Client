import "./Header.scss"
import { Link } from "react-router-dom"
import { iconUser } from "../../services/images.js"

const Header = ({ menuState, user }) => {
	const { activeMenu, setActiveMenu } = menuState
	return (
		<header>
			<div className="row">
				<div className="header__location row">
					<div className={`header__location-burger ${activeMenu ? "active" : ""}`} onClick={() => setActiveMenu(status => !status)}>
						<figure></figure>
						<figure></figure>
						<figure></figure>
					</div>

					<div className="header__location-page">
						Головна
					</div>
				</div>
				<div className="header__profile">
					{
						user ? <div className="row">
							<div className="header__profile-balance">
								{user.money} FRZC
							</div>
							<Link to="/profile" className="header__profile-user nav-link row">
								<img src={iconUser} alt="player" />
								<span>{user.username.length > 10 ? user.username.substring(0, 8) + "..." : user.username}</span>
							</Link>
						</div> : <Link to="/auth" className="nav-link log-btn">Увійти</Link>
					}
				</div>
			</div>
		</header>
	)
}

export default Header