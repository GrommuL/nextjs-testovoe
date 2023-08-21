'use client'

import { NearEarthObject } from '@/app/types'
import { DangerIcon } from '@/app/components/ui/icons'
import { correctDistance } from '@/app/services/correctDistance'
import styles from './AsteroidInfo.module.css'

type AsteroidInfoProps = {
	asteroid: NearEarthObject
}

export const AsteroidInfo = ({ asteroid }: AsteroidInfoProps) => {
	const formattedRadius = correctDistance(
		String(
			Math.trunc(asteroid.estimated_diameter.meters.estimated_diameter_max)
		)
	)
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<span className={styles.name}>Астероид: {asteroid.name}</span>
				<span>Диаметр астероида: Ø {formattedRadius} м</span>
				<div>
					<span>Опасность:</span>
					{asteroid.is_potentially_hazardous_asteroid ? (
						<span>
							<DangerIcon />
							Опасен
						</span>
					) : (
						<span>Не опасен</span>
					)}
				</div>
			</div>
			<ul className={styles.list}>
				{asteroid.close_approach_data.map((item, idx: number) => (
					<li className={styles.listItem} key={idx}>
						<span>Дата сближения: {item.close_approach_date}</span>
						<span>
							Скорость относительно Земли:{' '}
							{Math.trunc(Number(item.relative_velocity.kilometers_per_hour))}{' '}
							км/ч
						</span>
						<span>
							Расстояние до Земли:{' '}
							{Math.trunc(Number(item.miss_distance.kilometers))} км
						</span>
						<span>Орбита: {item.orbiting_body}</span>
					</li>
				))}
			</ul>
		</section>
	)
}
