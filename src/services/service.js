function formatedDate(isoDate) {
	const date = new Date(isoDate)
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0') // getMonth() returns month from 0 to 11
	const year = date.getFullYear()
	return `${day}.${month}.${year}`
}

export { formatedDate }