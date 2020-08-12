export default function changePriceFormat(preis) {
    if (preis === 0) {
        return '0.00'
    }

    const priceToString = preis.toString()
    const priceAfterComma = priceToString.slice(priceToString.length - 2, priceToString.length)
    const priceBeforeComma = priceToString.slice(0, priceToString.length - 2)

    let priceToDisplay = `0.${priceAfterComma}`
    if (priceBeforeComma) {
        priceToDisplay = `${priceBeforeComma}.${priceAfterComma}`
    }
    return priceToDisplay
}