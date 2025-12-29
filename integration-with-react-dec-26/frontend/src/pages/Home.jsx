import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Home Page
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            This is a public page accessible to everyone.
          </p>
          {user ? (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-4">
              <p className="text-green-700">
                You are logged in as: <strong>{user.role}</strong>
              </p>
            </div>
          ) : (
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
              <p className="text-blue-700">
                You are not logged in. Please login or register to access protected pages.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
