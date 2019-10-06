const debug = process.env.NODE_ENV !== 'production'
export const API_HOST = debug ? 'http://127.0.0.1:8000' : 'https://ongrad.herokuapp.com'
export const API_ROOT = 'api'
export const API_VERSION = 'v1'
export const API_URL = `${API_HOST}/${API_ROOT}/${API_VERSION}`

// Apartment API
const APARTMENT = 'apartment'
export const GET_APARTMENT_LIST = `/${APARTMENT}/`
