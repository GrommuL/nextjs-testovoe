import type { Metadata } from 'next'
import { Header } from './components/header'
import localFont from 'next/font/local'
import './globals.css'
import { CartProvider } from './context/cartContext'

const helvetica = localFont({
	src: [
		{
			path: './assets/fonts/helvetica_regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './assets/fonts/helvetica_bold.woff2',
			weight: '700',
			style: 'normal'
		}
	]
})
export const metadata: Metadata = {
	title: 'ARMAGEDDON 2023',
	description: 'ООО “Команда им. Б. Уиллиса”.Взрываем астероиды с 1998 года.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={helvetica.className}>
				<Header />
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	)
}
