'use client'

import { useEffect, useState } from 'react'
import { DistanceType, NearEarthObject } from '@/app/types'
import { AsteroidListHeader, AsteroidListItem } from './ui'
import { Cart } from '@/app/components/cart'
import styles from './AsteroidList.module.css'
import { useScrollFetching } from '@/app/hooks/useScrollFetching'

type AsteroidListProps = {
	asteroidsList: { [s: string]: NearEarthObject[] }
}
type Asteroids = [string, NearEarthObject[]]

const AsteroidList = ({ asteroidsList }: AsteroidListProps) => {
	const { scrollNumber, scrollFetching } = useScrollFetching()
	const [distanceType, setDistanceType] = useState<DistanceType>('kilometers')
	const [asteroidData, setAsteroidData] = useState<Asteroids[]>()
	const asteroids: Asteroids[] = Object.entries(asteroidsList)

	useEffect(() => {
		window.addEventListener('scroll', scrollFetching)
		return () => {
			window.removeEventListener('scroll', scrollFetching)
		}
	}, [])

	useEffect(() => {
		setAsteroidData(asteroids)
	}, [])

	return (
		<section className={styles.section}>
			<AsteroidListHeader
				distanceType={distanceType}
				setDistanceType={setDistanceType}
			/>
			<ul className={styles.list}>
				{asteroidData
					?.filter((_, idx: number) => idx < scrollNumber)
					.map(([key, value]) =>
						value.map((asteroid: NearEarthObject) => (
							<li key={asteroid.id}>
								<AsteroidListItem
									id={asteroid.id}
									name={asteroid.name}
									distance={asteroid.close_approach_data[0].miss_distance}
									date={key}
									isDanger={asteroid.is_potentially_hazardous_asteroid}
									radius={Math.trunc(
										asteroid.estimated_diameter.meters.estimated_diameter_max
									)}
									isBig={
										asteroid.estimated_diameter.meters.estimated_diameter_max >
										5000
									}
									distanceType={distanceType}
									asteroid={asteroid}
								/>
							</li>
						))
					)}
			</ul>
			<Cart />
		</section>
	)
}

export default AsteroidList
