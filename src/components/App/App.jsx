import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import HomePage from "../HomePage/HomePage"
import AuthPage from "../AuthPage/AuthPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import ShopPage from "../ShopPage/ShopPage"
import WikiPage from "../WikiPage/WikiPage"

import { useState } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
	const [activeMenu, setActiveMenu] = useState(false)
	const [user, setUser] = useState(null)

	return (
		<BrowserRouter>
			<Header menuState={{ activeMenu, setActiveMenu }} user={user} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/wiki" element={<WikiPage />} />
				<Route path="/auth" element={<AuthPage userControll={{ user, setUser }} />} />
			</Routes>
			<Navigation menuState={{ activeMenu, setActiveMenu }} userControll={{ user, setUser }} />
		</BrowserRouter>
	)
}

export default App