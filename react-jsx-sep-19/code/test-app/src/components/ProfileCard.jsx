import React from "react";

function ProfileCard(props) {
  return (
      <div class="card">
        <img class="card-image" src={props.avatar} alt="User profile" />
        <h2 class="card-name">{props.name}</h2>
        <p class="card-title">Title: {props.title}</p>
        <p class="card-bio">Bio: {props.bio}</p>
        <p class="card-email">Email: {props.email}</p>
        <p class="card-location">Location: {props.location}</p>
      </div>
  );
}

export default ProfileCard;
