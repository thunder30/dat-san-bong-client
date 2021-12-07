import * as types from './constants'

export const initialState = {
    branches: [],
    features: [],
    current: {
        branch: null,
        pitchTypes: [],
    },
    isLoading: true,
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case types.LOAD_SUCCESS:
            const branches = payload
            let features = []
            if (branches.length < 5) features = [...branches]
            else
                for (let i = 0; i < 4; i++) {
                    features.push(branches[i])
                }
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
        case types.SET_CURRENT_BRANCH:
            const { pitchBranchId, pitchTypes } = payload
            const branch = state.branches.find(
                ({ _id }) => _id === pitchBranchId
            )
            return {
                ...state,
                current: { branch, pitchTypes },
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
