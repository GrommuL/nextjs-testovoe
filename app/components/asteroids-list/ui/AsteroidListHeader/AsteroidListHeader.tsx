'use client'

import { SwitchButton } from '@/components/ui/buttons'
import { DistanceType } from '@/app/types'
import { Dispatch, SetStateAction } from 'react'
import styles from './AsteroidListHeader.module.css'

type AsteroidListHeaderProps = {
	distanceType: DistanceType
	setDistanceType: Dispatch<SetStateAction<DistanceType>>
}

const AsteroidListHeader = ({
	distanceType,
	setDistanceType
}: AsteroidListHeaderProps) => {
	return (
		<div className={styles.heading}>
			<h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
			<div className={styles.block}>
				<SwitchButton
					label='в километрах'
					isActive={distanceType === 'kilometers'}
					onClick={() => setDistanceType('kilometers')}
				/>
				<span>|</span>
				<SwitchButton
					label='в лунных орбитах'
					isActive={distanceType === 'lunar-orbits'}
					onClick={() => setDistanceType('lunar-orbits')}
				/>
			</div>
		</div>
	)
}

export default AsteroidListHeader
