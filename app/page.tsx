import { AsteroidList } from '@/components/asteroids-list'
import styles from './page.module.css'
import { getCurrentDate } from './services/getCurrentDate'
import { MobileCart } from './components/mobile-cart'

async function getAsteroids() {
	const date = getCurrentDate()
	try {
		const response = await fetch(
			`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=${process.env.NASA_API}`
		)
		return response.json()
	} catch (error) {
		console.log(error)
	}
}

const Home = async () => {
	const asteroids = await getAsteroids()
	return (
		<main className={styles.main}>
			<AsteroidList asteroidsList={asteroids.near_earth_objects} />
			<MobileCart />
		</main>
	)
}

export default Home
