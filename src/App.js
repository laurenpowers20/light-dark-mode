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
          <span className="bn54span">SWITCH</span>
        </button>
      </div>

      <p className="neon">
        <b>
          Ch<span>an</span>ge <span>m</span>e
        </b>
      </p>
      <div className="center">
        <a href="https://react-portfolio-lauren-powers.netlify.app/">
          <button className="button-54">Back to Lil' Portfolio</button>
        </a>
      </div>
    </div>
  );
}

export default App;
