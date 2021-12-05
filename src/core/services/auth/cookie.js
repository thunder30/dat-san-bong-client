export const setCookie = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getCookie = (key) => {
    return JSON.parse(localStorage.getItem(key)) || ''
}

export const removeCookie = (key) => {
    localStorage.removeItem(key)
}
