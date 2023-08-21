'use client'

import styles from './SwitchButton.module.css'

type SwitchButtonProps = {
	label: string
	onClick: () => void
	isActive: boolean
}

const SwitchButton = ({ label, onClick, isActive }: SwitchButtonProps) => {
	return (
		<button
			className={`${styles.button} ${isActive && styles.active}`}
			onClick={onClick}
		>
			{label}
		</button>
	)
}

export default SwitchButton
