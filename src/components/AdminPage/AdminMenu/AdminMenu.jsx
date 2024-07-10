import "./AdminMenu.scss"
import { Link } from "react-router-dom"

const AdminMenu = () => {

	return (
		<section className="admin__menu">
			<h1>Розділи</h1>
			<div className="admin__menu-wrapper row">
				<div className="admin__menu-item row">
					<p>Новини</p>
					<div className="admin__menu-nav row">
						<Link to="/admin/news-list" className="nav-link">Переглянути</Link>
						<Link to="/admin/news-editor" className="nav-link">Добавити</Link>
					</div>
				</div>
				{/* <div className="admin__menu-item row">
					<p>Товари</p>
					<div className="admin__menu-nav row">
						<Link to="" className="nav-link">Переглянути</Link>
						<Link to="" className="nav-link">Добавити</Link>
					</div>
				</div>
				<div className="admin__menu-item row">
					<p>Правила</p>
					<div className="admin__menu-nav row">
						<Link to="" className="nav-link">Переглянути</Link>
						<Link to="" className="nav-link">Добавити</Link>
					</div>
				</div>
				<div className="admin__menu-item row">
					<p>Вікі</p>
					<div className="admin__menu-nav row">
						<Link to="" className="nav-link">Переглянути</Link>
						<Link to="" className="nav-link">Добавити</Link>
					</div>
				</div> */}
			</div>
		</section>
	)
}

export default AdminMenu