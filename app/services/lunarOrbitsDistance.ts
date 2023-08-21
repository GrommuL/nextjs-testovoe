export const lunarOrbitsDistance = (distance: string) => {
	const correctDistance = Math.trunc(Math.trunc(Number(distance)) / 2400000)
	const lastCorrectDistanceItem = Number(correctDistance.toString().at(-1))
	const firstCorrectDistanceItem = Number(correctDistance.toString().at(0))

	if (firstCorrectDistanceItem === 1 && correctDistance > 10) {
		return `${correctDistance} лунных орбит`
	}

	if (correctDistance === 1 || lastCorrectDistanceItem === 1) {
		return `${correctDistance} лунная орбита`
	}
	if (correctDistance === 2 || lastCorrectDistanceItem === 2) {
		return `${correctDistance} лунные орбиты`
	}
	if (correctDistance === 3 || lastCorrectDistanceItem === 3) {
		return `${correctDistance} лунные орбиты`
	}
	if (correctDistance === 4 || lastCorrectDistanceItem === 4) {
		return `${correctDistance} лунные орбиты`
	}

	return `${correctDistance} лунных орбит`
}
