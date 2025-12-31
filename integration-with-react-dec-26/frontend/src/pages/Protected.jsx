import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Protected = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get('https://entri.skillassign.com/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data);
      } catch (err) {
        setError(err.response?.data || 'Failed to fetch protected data');
      } finally {
        setLoading(false);
      }
    };

    fetchProtectedData();
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Protected Page
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : (
            <>
              <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
                <p className="text-green-700 font-semibold">
                  ✓ You are authenticated!
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Message from Server:
                </h2>
                <p className="text-lg text-gray-700">{message}</p>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded">
                <p className="text-gray-600">
                  <strong>Your Role:</strong> {user?.role}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  This page is only accessible to authenticated users.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Protected;
