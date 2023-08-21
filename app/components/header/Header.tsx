import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>
				<Link className={styles.title} href={'/'}>
					ARMAGEDDON 2023
				</Link>
			</h1>
			<p className={styles.description}>
				ООО “Команда им. Б. Уиллиса”.
				<br />
				Взрываем астероиды с 1998 года.
			</p>
		</header>
	)
}

export default Header
