const URL = process.env.REACT_APP_SERVER_URL
// const URL = "http://localhost:5000/"

async function loginUser(user) {
	try {
		let res = await fetch(URL + "users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user)
		})

		let data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return error
	}
}

async function getNews() {
	try {
		console.log(process.env.REACT_APP_SERVER_URL)
		let res = await fetch(URL + "news/all")
		let data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return error
	}
}

async function postNews(news) {
	try {
		let res = await fetch(URL + "news/create", {
			method: "POST",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("user-token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(news)
		})

		let data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return error
	}
}

async function deleteNews(newsId) {
	try {
		let res = await fetch(URL + "news/delete", {
			method: "DELETE",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("user-token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ newsId })
		})
		let data = await res.json()
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
		return error
	}
}

export { loginUser, getNews, postNews, deleteNews }

