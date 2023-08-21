'use client'

import { ArrowIcon, DangerIcon } from '@/components/ui/icons'
import { DistanceType, MissDistance, NearEarthObject } from '@/app/types'
import { correctDate } from '@/app/services/correctDate'
import { correctDistance } from '@/app/services/correctDistance'
import Image from 'next/image'
import styles from './AsteroidListItem.module.css'
import Link from 'next/link'
import { lunarOrbitsDistance } from '@/app/services/lunarOrbitsDistance'
import { useCartContext } from '@/app/context/cartContext'

type AsteroidListItemProps = {
	id: string
	date: string
	distance: MissDistance
	isBig: boolean
	name: string
	radius: number
	isDanger: boolean
	distanceType: DistanceType
	asteroid: NearEarthObject
}

const AsteroidListItem = ({
	id,
	date,
	distance,
	isBig,
	name,
	radius,
	isDanger,
	distanceType,
	asteroid
}: AsteroidListItemProps) => {
	const formattedDate = correctDate(date)
	const formattedDistance = correctDistance(distance.kilometers)
	const formattedRadius = correctDistance(String(radius))
	const lunarDistance = lunarOrbitsDistance(distance.kilometers)
	const { cartItems, addToCart, removeFromCart } = useCartContext()
	const asteroidCartItem = {
		id,
		name,
		date: formattedDate
	}

	return (
		<div className={styles.item}>
			<Link className={styles.link} href={`/asteroid/${id}`}>
				<h3 className={styles.date}>{formattedDate}</h3>
				<div className={styles.block}>
					<div className={styles.box}>
						{distanceType === 'kilometers' && (
							<span>{formattedDistance} км</span>
						)}
						{distanceType === 'lunar-orbits' && <span>{lunarDistance}</span>}
						<ArrowIcon />
					</div>
					<div className={styles.block}>
						<Image
							src={'/asteroid.png'}
							alt='Asteroid'
							width={isBig ? 57 : 37}
							height={isBig ? 60 : 40}
						/>
						<div className={styles.asteroid}>
							<span className={styles.name}>{name}</span>
							<span>Ø {formattedRadius} м</span>
						</div>
					</div>
				</div>
			</Link>
			<div className={styles.block}>
				{cartItems.some((item) => item.id === id) ? (
					<button className={styles.order} onClick={() => removeFromCart(id)}>
						В корзине
					</button>
				) : (
					<button
						className={styles.order}
						onClick={() => addToCart(asteroidCartItem)}
					>
						Заказать
					</button>
				)}
				{isDanger && (
					<span className={styles.danger}>
						<DangerIcon />
						Опасен
					</span>
				)}
			</div>
		</div>
	)
}

export default AsteroidListItem
