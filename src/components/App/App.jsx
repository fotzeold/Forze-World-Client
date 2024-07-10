import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import HomePage from "../HomePage/HomePage"
import AuthPage from "../AuthPage/AuthPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import ShopPage from "../ShopPage/ShopPage"
import WikiPage from "../WikiPage/WikiPage"
import RulesPage from "../RulesPage/RulesPage"
import AdminPage from "../AdminPage/AdminPage"

import { useState, useEffect } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { getNews } from "../../services/server"

const App = () => {
	const [activeMenu, setActiveMenu] = useState(false)
	const [user, setUser] = useState(null)
	const [newsList, setNewsList] = useState([])

	useEffect(() => {
		getNews().then((data) => {
			if (data.status) {
				setNewsList(data.news)
			}
		})
	}, [])

	return (
		<BrowserRouter>
			<Header menuState={{ activeMenu, setActiveMenu }} user={user} />
			<Routes>
				<Route path="/" element={<HomePage newsList={newsList} />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/wiki" element={<WikiPage />} />
				<Route path="/auth" element={<AuthPage userControll={{ user, setUser }} />} />
				<Route path="/rules" element={<RulesPage />} />
				<Route path="/admin/*" element={<AdminPage user={user} newsControll={{ newsList, setNewsList }} />} />
			</Routes>
			<Navigation menuState={{ activeMenu, setActiveMenu }} userControll={{ user, setUser }} />
		</BrowserRouter>
	)
}

export default App