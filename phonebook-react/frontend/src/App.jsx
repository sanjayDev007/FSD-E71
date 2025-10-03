import React, { use, useEffect } from 'react'
import axios from 'axios'
import baseUrl from './api/baseUrl'

function App() {
  const [contacts, setContacts] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  async function fetchData() {
    const response = await axios.get(baseUrl + '/contacts')
    setContacts(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  async function handleAddContact(event) {
    event.preventDefault()
    const newContact = { name, phone }
    await axios.post(baseUrl + '/contacts', newContact)
    setName('')
    setPhone('')
    fetchData()
  }

  async function handleEditContact(event) {
    event.preventDefault()
    const updatedContact = { name, phone }
    await axios.put(`${baseUrl}/contacts/${editingId}`, updatedContact)
    setName('')
    setPhone('')
    setIsEditing(false)
    setEditingId(null)
    fetchData()
  }
  const handleDeleteContact = async (id) => {
    await axios.delete(`${baseUrl}/contacts/${id}`)
    fetchData()
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-800 drop-shadow-sm">Phonebook</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{isEditing ? 'Edit' : 'Add'} Contact</h2>
          <form onSubmit={isEditing ? handleEditContact : handleAddContact} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input 
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder="Enter name" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
                required
                value={name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel" 
                placeholder="Enter phone number" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
                required
                value={phone}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold shadow-md"
            >
              {isEditing ? 'Update' : 'Add'} Contact
            </button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map(contact => (
            <div key={contact.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{contact.name}</h2>
              </div>
              <p className="text-gray-600 text-sm">{contact.phone}</p>
              <button className="text-indigo-600 hover:underline" onClick={()=>{
                setIsEditing(true);
                setEditingId(contact.id);
                setName(contact.name);
                setPhone(contact.phone);
              }}>Edit</button>
              <button className="text-red-600 hover:underline ml-4" onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App