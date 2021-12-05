import React from 'react'
import './App.css'
import AuthProvider from './contexts/AuthProvider'
import PitchBranchProvider from './contexts/PitchBranchProvider'
import Router from './router'

function App() {
    return (
        <AuthProvider>
            <PitchBranchProvider>
                <Router />
            </PitchBranchProvider>
        </AuthProvider>
    )
}

export default App
