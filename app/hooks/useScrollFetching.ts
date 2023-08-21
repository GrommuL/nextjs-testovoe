import { useState } from 'react'

export const useScrollFetching = () => {
	const [scrollNumber, setScrollNumber] = useState(1)

	const scrollFetching = (e: any) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			1
		) {
			setScrollNumber((prev) => prev + 1)
		}
		if (e.target.documentElement.scrollTop === 0) {
			setScrollNumber(1)
		}
	}

	return {
		scrollNumber,
		scrollFetching
	}
}
