const URL = "https://server.forze-coin.space/"

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
		let res = await fetch(URL + "news/all")
		let data = await res.json()

		return data
	} catch (error) {
		console.log(error)
		return error
	}
}

export { loginUser, getNews }

