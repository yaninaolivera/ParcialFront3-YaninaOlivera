import React from "react";
const Card = ({ nombre, color }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
      <p>Hola <strong>{nombre}</strong> !</p>
      <p><strong>Sabemos que tu color favorito:</strong></p>
      <div
        style={{
          height: "50px",
          backgroundColor: color,
          padding: "10px",
          width: "100%"
        }}
      >{color}</div>
    </div>
  );
};

export default Card;