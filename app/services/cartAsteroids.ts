export const cartAsteroids = (quantity: number) => {
	const lastCartItemNumber = Number(quantity.toString().at(-1))
	const firstCartItemNumber = Number(quantity.toString().at(0))

	if (firstCartItemNumber === 1 && quantity > 10) {
		return `${quantity} астероидов`
	}

	if (quantity === 1 || lastCartItemNumber === 1) {
		return `${quantity} астероид`
	}
	if (quantity === 2 || lastCartItemNumber === 2) {
		return `${quantity} астероида`
	}
	if (quantity === 3 || lastCartItemNumber === 3) {
		return `${quantity} астероида`
	}
	if (quantity === 4 || lastCartItemNumber === 4) {
		return `${quantity} астероида`
	}

	return `${quantity} астероидов`
}
