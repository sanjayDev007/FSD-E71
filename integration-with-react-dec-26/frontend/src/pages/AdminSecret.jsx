import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminSecret = () => {
  const [secretMessage, setSecretMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchSecretData = async () => {
      try {
        const response = await axios.get('https://entri.skillassign.com/secret', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSecretMessage(response.data.secret);
      } catch (err) {
        setError(err.response?.data || 'Failed to fetch secret data');
      } finally {
        setLoading(false);
      }
    };

    fetchSecretData();
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-600">
          🔒 Admin Secret Page
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : (
            <>
              <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-700 font-semibold">
                  ⚠️ ADMIN ONLY - HIGH SECURITY AREA
                </p>
              </div>
              <div className="bg-linear-to-r from-red-50 to-orange-50 p-8 rounded-lg border-2 border-red-300">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  🔐 Top Secret Information
                </h2>
                <div className="bg-black text-green-400 p-6 rounded font-mono text-lg">
                  {secretMessage}
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded">
                <p className="text-gray-600">
                  <strong>Admin User:</strong> {user?.role}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  This page is only accessible to administrators. Unauthorized access is forbidden.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSecret;
