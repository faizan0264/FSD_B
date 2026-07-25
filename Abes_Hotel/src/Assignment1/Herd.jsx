import React from 'react'

const Herd = () => {
  return (
    <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: "10px",
  }}
>
  <img
    style={{
      border: "5px solid red",
      borderRadius: "10px",
      marginRight: "20px",
      flexDirection: "left"
    }}
    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hotel-logo-design-template-43d1b8e8bc1364c43895c4897b520005_screen.jpg?ts=1753967811"
    height="200px"
    width="300px"
    alt="Hotel Logo"
  />

  <h1 style={{ color: "white" }}>Welcome Abes Hotel</h1>
</div>
  )
}

export default Herd