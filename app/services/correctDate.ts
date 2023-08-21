export const correctDate = (date: string) => {
	const dateParts = date.split('-')
	const year = Number(dateParts[0])
	const month = Number(dateParts[1])
	const day = Number(dateParts[2])

	const createDate = new Date(year, month - 1, day)
	const monthNames = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	]

	const monthName = monthNames[createDate.getMonth()]
	return `${createDate.getDate()} ${monthName} ${createDate.getFullYear()}`
}
