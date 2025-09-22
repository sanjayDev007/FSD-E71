import React from 'react'

function ProfileCard(props) {
  return (
    <>
        <div className="profile-card" style={styles.profileCard}>
            {/* <img src={props.image} alt="Profile" style={styles.profileImage} /> */}
            <h2 style={{fontSize: '1.2em', margin: '12px 0'}}>{props.name}</h2>
            <p style={{margin: '8px 0'}}>{props.phone}</p>
        </div>
    </>
  )
}

const styles = {
    profileCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        width: '200px',
        margin: '16px auto'
    },
    profileImage: {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        objectFit: 'cover'
    }
}
export default ProfileCard