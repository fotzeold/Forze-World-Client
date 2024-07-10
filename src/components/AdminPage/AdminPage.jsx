import "./AdminPage.scss"

import AdminMenu from "./AdminMenu/AdminMenu";
import NewsEditor from "./NewsEditor/NewsEditor";
import NewsList from "./NewsList/NewsList";

import { useNavigate } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

const AdminPage = ({ user, newsControll }) => {

	const navigate = useNavigate()

	useEffect(() => {
		if (!user || (user.role !== "owner" && user.role !== "admin")) {
			navigate("/")
		}
	})

	return (
		<main className="admin">
			<div className="container">
				<Routes>
					<Route path="/" element={<AdminMenu />} />
					<Route path="/news-editor" element={<NewsEditor user={user} newsControll={newsControll} />} />
					<Route path="/news-list" element={<NewsList newsControll={newsControll} />} />
				</Routes>
			</div>
		</main>
	)
}

export default AdminPage