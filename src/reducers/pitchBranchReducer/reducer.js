import * as types from './constants'

export const initialState = {
    branches: [],
    features: [],
    isLoading: true,
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case types.LOAD_SUCCESS:
            const branches = payload
            const features = branches.filter(({ isFeature }) => isFeature)
            return {
                ...state,
                branches,
                features,
                isLoading: false,
            }
        case types.LOAD_FAILED:
            return {
                ...state,
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
