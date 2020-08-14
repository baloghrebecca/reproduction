export const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart)) //it needs to be a string, otherwise we get [object Object] back from the localstorage instead of our actual object
}

export const getCart = () => {
    const emptyArray = []
    const cart = JSON.parse(localStorage.getItem('cart'))

    if (cart) {
        return cart
    }

    return emptyArray
}

export const addToCart = (product) => {
    const cart = getCart()

    //Is Item already there?
    const indexOfProduct = findProduct(cart, product)

    if(indexOfProduct !== -1) {
        cart[indexOfProduct].quantity++
    } else {
        product.quantity = 1
        cart.push(product)
    }

    setCart(cart)
}


export const removeProduct = (product) => {
    const cart = getCart()
    const indexOfProduct = findProduct(cart, product)
    
    if(indexOfProduct !== -1) {
        cart.splice( indexOfProduct, 1 );
    } 

    setCart(cart)
}

export const decrementQuantity = (product) => {
    const cart = getCart()
    const indexOfProduct = findProduct(cart, product)
    
    if(indexOfProduct !== -1) {
       const cartProduct = cart[indexOfProduct]
       if (cartProduct.quantity === 1) {
        removeProduct(product)
        return;
       } 
       
       cartProduct.quantity--
    } 

    setCart(cart)
}

export const incrementQuantity = (product) => {
    const cart = getCart()
    const indexOfProduct = findProduct(cart, product)
    
    if(indexOfProduct !== -1) {
       const cartProduct = cart[indexOfProduct]
       cartProduct.quantity++
    } 

    setCart(cart)
}



function findProduct(cart, product) {
    return cart.findIndex((productInCart) => productInCart.id === product.id)
}
