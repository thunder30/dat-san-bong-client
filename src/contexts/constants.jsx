const API_BASE_URL =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'https://datsanbong.herokuapp.com/api'
const LOCAL_STORAGE_TOKEN_NAME = 'PATE_TEAM_TOKEN'

export { API_BASE_URL, LOCAL_STORAGE_TOKEN_NAME }
