import * as types from './constants'

export const initialState = {
    bookings: [],
    current: null,
    isLoading: true,
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case types.SET_BOOKING:
            return {
                ...state,
                current: payload,
                isLoading: false,
            }
        case types.SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}
