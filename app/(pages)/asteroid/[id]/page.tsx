import { NearEarthObject } from '@/app/types/AsteroidType'
import { AsteroidInfo } from './components'

interface Props {
	params: {
		id: string
	}
}

async function getAsteroidById(id: string) {
	try {
		const response = await fetch(
			`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NASA_API}`
		)
		return response.json()
	} catch (error) {
		console.log(error)
	}
}

const Asteroid = async ({ params: { id } }: Props) => {
	const asteroid: NearEarthObject = await getAsteroidById(id)

	return (
		<main>
			<AsteroidInfo asteroid={asteroid} />
		</main>
	)
}

export default Asteroid
