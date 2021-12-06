import React, { createContext, useReducer, useEffect } from 'react'
import reducer, { initialState } from '../reducers/pitchBranchReducer/reducer'
import * as types from '../reducers/pitchBranchReducer/constants'
import * as services from '../core/services/pitchBranch'

export const PitchBranchContext = createContext()

function PitchBranchProvider({ children }) {
    const [branchState, dispatch] = useReducer(reducer, initialState)

    console.log(branchState)

    const getBranch = async () => {
        const data = await services.getBranch()
        if (data.success) {
            dispatch({
                type: types.LOAD_SUCCESS,
                payload: data.pitchBranch,
            })
        } else {
            dispatch({
                type: types.LOAD_FAILED,
            })
        }
    }

    const getBranchById = async (id) => {
        const data = await services.getBranchById(id)
        if (data.success) {
            dispatch({
                type: types.SET_CURRENT_BRANCH,
                payload: {pitchTypes: data.pitchTypes, pitchBranchId: id},
            })
        } else {
            dispatch({
                type: types.LOAD_FAILED,
            })
        }
    }


    useEffect(() => {
        getBranch()
    }, [])

    const value = { branchState, getBranchById}
    return (
        <PitchBranchContext.Provider value={value}>
            {children}
        </PitchBranchContext.Provider>
    )
}

export default PitchBranchProvider
