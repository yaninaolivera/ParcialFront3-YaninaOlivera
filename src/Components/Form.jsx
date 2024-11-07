import  React, {useState}  from "react";
import Card from "./Card";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    color: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.nombre.trim().length >= 3 &&
      !userData.nombre.startsWith(" ") &&
      userData.color.length >= 6
    ) {
      setShowCard(true);
      setError(false);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={userData.nombre}
                onChange={handleChange}
            />
            <input
                type="text"
                name="color"
                placeholder="Ingresa tu color favorito (formato HEX)"
                value={userData.color}
                onChange={handleChange}
            />
          
            <button type="submit">Enviar</button>
                {error && (
                <h4 style={{ color: "red" }}>
                    Por favor chequea que la información sea correcta
                </h4>
            )}
        </form>
        {showCard && <Card nombre={userData.nombre} color={userData.color} />}
    </div>
  );
};

export default Form;