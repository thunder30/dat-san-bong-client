import React, { createContext, useReducer } from 'react'
import reducer, { initialState } from '../reducers/bookingReducer/reducer'
import * as types from '../reducers/bookingReducer/constants'
import * as services from '../core/services/booking'

export const BookingContext = createContext()

function BookingProvider({ children }) {
    const [bookingState, dispatch] = useReducer(reducer, initialState)

    //console.log('bookingState: ', { bookingState })

    const checkBooking = async ({ startTime, endTime, pitch }) => {
        const data = await services.checkBooking({
            startTime,
            endTime,
            pitch: pitch._id,
        })
        if (data.success) {
            dispatch({
                type: types.SET_BOOKING,
                payload: {
                    startTime,
                    endTime,
                    pitch,
                    price: data.price,
                },
            })
        } else {
            dispatch({
                type: types.LOAD_FAILED,
            })
        }
        return data
    }

    const confirmBooking = async (booking) => {
        return services.confirmBooking(booking)
    }

    const getHistoryBooking = async (userId) => {
        dispatch({
            type: types.SET_LOADING,
            payload: true,
        })

        const data = await services.getHistoryBooking(userId)
        //console.log(`bookings data: `, data)
        if (data.success) {
            dispatch({
                type: types.LOAD_SUCCESS,
                payload: data.bookings,
            })
        } else {
            dispatch({
                type: types.LOAD_FAILED,
            })
        }
        return data
    }

    const value = {
        bookingState,
        checkBooking,
        confirmBooking,
        getHistoryBooking,
    }
    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider
