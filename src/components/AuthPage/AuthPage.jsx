import "./AuthPage.scss"

import { useState } from "react"
import { loginUser } from "../../services/server.js"
import { useNavigate } from "react-router-dom"

const AuthPage = ({ userControll }) => {
	const { user, setUser } = userControll

	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		username: "",
		password: ""
	})
	const [message, setMessage] = useState("")

	const authUser = (event) => {
		event.preventDefault()
		loginUser(formData).then(data => {
			if (data.status) {
				setUser(data.user)
				localStorage.setItem("user-token", data.token)
				navigate('/')
			} else {
				setMessage(data.message)
				setTimeout(() => {
					setMessage("")
				}, 3000)
			}
		})
	}

	return (
		<main className="auth-page">
			<section className="auth">
				<form onSubmit={(event) => authUser(event)}>
					<h1>Увійдіть у свій акаунт</h1>
					<input
						type="text"
						placeholder="Ваш нік з гри"
						value={formData.username}
						onChange={(event) => setFormData(prevData => ({ ...prevData, username: event.target.value }))}
					/>
					<input
						type="password"
						placeholder="Ваш пароль з грі"
						value={formData.password}
						onChange={(event) => setFormData(prevData => ({ ...prevData, password: event.target.value }))}
					/>
					{
						message && <p>{message}</p>
					}
					<button>Увійти</button>
				</form>
			</section>
		</main>
	)
}

export default AuthPage
