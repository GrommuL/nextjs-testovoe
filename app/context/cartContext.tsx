'use client'

import { FC, ReactNode, createContext, useContext, useState } from 'react'

type AsteroidCartItem = {
	id: string
	name: string
	date: string
}

type CartContextValue = {
	cartItems: AsteroidCartItem[]
	addToCart: (item: AsteroidCartItem) => void
	removeFromCart: (itemId: string) => void
	clearCart: () => void
}

export const CartContext = createContext<CartContextValue>({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {}
})

type CartProviderProps = {
	children: ReactNode
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<AsteroidCartItem[]>([])

	const addToCart = (item: AsteroidCartItem) => {
		setCartItems((prevItems) => [...prevItems, item])
	}

	const removeFromCart = (itemId: string) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
	}

	const clearCart = () => {
		setCartItems([])
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => useContext(CartContext)
