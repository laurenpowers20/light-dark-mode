import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`} style={{ textAlign: "center" }}>
      <div className="button-container">
        <button
          className="bn54"
          onClick={toggleTheme}
          style={{ textAlign: "center" }}
        >
          <span className="bn54span">CHANGE</span>
        </button>
      </div>

      <p className="neon">
        <b>
          Welc<span>om</span>e
        </b>
      </p>
      <p className="neon">
        <b>
          Change <span>m</span>e
        </b>
      </p>
    </div>
  );
}

export default App;
