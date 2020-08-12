import { getCart } from '../services/cart'

export const sumOfItems = () => {
    const cart = getCart()
    if (cart.length === 0) {
        return 0
    } else {
        const cartQuantities = cart.map(item => item.quantity)
        const sum = cartQuantities.reduce((a, b) => a + b)
        
        return sum
    }
}

export const getTotalPrice = () => {
    const cart = getCart()
    if (cart.length === 0) {
        return 0
    } else {
        const multipliedQuantitityWithPrice = cart.map(item => item.quantity * item.price)
        const total = multipliedQuantitityWithPrice.reduce((a, b) => a + b)

        return total
    }
}

export const getTotalPricePlusShipping = () => {
    const cart = getCart()
    if (cart.length === 0) {
        return 0
    } else {
        const multipliedQuantitityWithPrice = cart.map(item => item.quantity * item.price)
        const subtotal = multipliedQuantitityWithPrice.reduce((a, b) => a + b)
        const total = subtotal + 800

        return total
    }
}







