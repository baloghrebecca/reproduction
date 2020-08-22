export const onCookieAccept = () => {
    localStorage.setItem('cookies', JSON.stringify(true))
}

export const hasCookieBeenAccepted = () => {
    if (typeof localStorage !== 'undefined') {
        const cookies = JSON.parse(localStorage.getItem('cookies'))

        if (!cookies) {
            return false;
        }

        if (cookies === true) {
            return true;
        }

    } else {
        return false;
    }

}