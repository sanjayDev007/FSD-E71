import React from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'


function App() {
  const [userData, setUserData] = React.useState([]);
  React.useEffect(() => {
    getUsers();
  }, []);
  function getUsers () {
    fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUserData(data));
  }
  return (
    <>
    {
      userData.length > 0 ? (
        <>
          {userData.map((user, index) => (
            <ProfileCard 
              key={index}
              name={user.name?.firstname + ' ' + user.name?.lastname}
              phone={user.phone}
              // image={user.image}
            />
          ))}
        </>
      ) : (
        <p>No user data available.</p>
      )
    }
    </>
  )
}

export default App