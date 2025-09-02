import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);

  const colors = ["red", "yellow", "green", ...(hasPurple ? ["purple"] : [])];

  // Cambia al siguiente color de la lista
  const handleNextColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div className="traffic-container">
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "active" : ""}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handleNextColor}>Cambiar color</button>
        <button onClick={() => setHasPurple(true)}>Añadir púrpura</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);
