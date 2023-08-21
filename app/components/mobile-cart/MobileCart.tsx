'use client'

import { useRouter } from 'next/navigation'
import { useCartContext } from '@/app/context/cartContext'
import { cartAsteroids } from '@/app/services/cartAsteroids'
import styles from './MobileCart.module.css'

const MobileCart = () => {
	const { cartItems } = useCartContext()
	const quantity = cartItems.length
	const cartEntity = cartAsteroids(quantity)
	const router = useRouter()

	return (
		<div className={styles.bucket}>
			<div className={styles.info}>
				<h4>Корзина</h4>
				{cartItems.length ? <p>{cartEntity}</p> : <p>Корзина пуста</p>}
			</div>
			{cartItems.length > 0 && (
				<button
					className={styles.button}
					onClick={() => router.push('/order/success')}
				>
					Отправить
				</button>
			)}
		</div>
	)
}

export default MobileCart
