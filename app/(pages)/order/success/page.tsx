'use client'

import { useCartContext } from '@/app/context/cartContext'
import styles from './pages.module.css'
import { useRouter } from 'next/navigation'

const Order = () => {
	const { cartItems, clearCart } = useCartContext()
	const router = useRouter()

	const redirectToHomePage = () => {
		clearCart()
		router.push('/')
	}
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Ваш заказ отправлен</h2>
			<div className={styles.table}>
				{cartItems.map((item) => (
					<div className={styles.block} key={item.id}>
						<span>
							Номер астероида:
							<br />
							{item.id}
						</span>
						<span>
							Наименование:
							<br />
							{item.name}
						</span>
						<span>
							Дата приближения:
							<br />
							{item.date}
						</span>
					</div>
				))}
			</div>
			<button className={styles.button} onClick={redirectToHomePage}>
				Вернуться на главную
			</button>
		</section>
	)
}

export default Order
