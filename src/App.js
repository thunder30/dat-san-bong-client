import React from 'react'
import './App.css'
import AuthProvider from './contexts/AuthProvider'
import PitchBranchProvider from './contexts/PitchBranchProvider'
import BookingProvider from './contexts/BookingProvider'
import Router from './router'

function App() {
    return (
        <AuthProvider>
            <PitchBranchProvider>
                <BookingProvider>
                    <Router />
                </BookingProvider>
            </PitchBranchProvider>
        </AuthProvider>
    )
}

export default App
