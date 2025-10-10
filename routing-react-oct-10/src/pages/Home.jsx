import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Welcome to Our Platform
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                    Discover amazing features and build something incredible. Join us on this journey.
                </p>
                <button onClick={() => navigate('/about')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                    Get Started
                </button>
            </div>

            {/* Features Section */}
            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feature 1</h3>
                        <p className="text-gray-600">Description of the first feature goes here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feature 2</h3>
                        <p className="text-gray-600">Description of the second feature goes here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feature 3</h3>
                        <p className="text-gray-600">Description of the third feature goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home