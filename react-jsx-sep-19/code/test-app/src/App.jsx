import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import dummyData from "./dummy/data";


function App() {
  return (
    <div className="app-container">
      {dummyData.map((user) => (
        <ProfileCard
          key={user.id}
          name={user.name}
          title={user.title}
          email={user.email}
          location={user.location}
          avatar={user.avatar}
          bio={user.bio}
        />
      ))}
    </div>
  );
}

export default App;
