import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, []);

//  const ipUrl = "https://ipinfo.io";

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      <div className="grid">
        {characters.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} className="card-image" />

            <div className="card-info">
              <h2>{char.name}</h2>
<p>это проверка кода</p>
              <div className="status">
                <span
                  className={`status-indicator ${
                    char.status === "Alive"
                      ? "alive"
                      : char.status === "Dead"
                      ? "dead"
                      : "unknown"
                  }`}
                ></span>
                <p>
                  {char.status} – {char.species}
                </p>
              </div>

              <div className="extra-info">
                <p className="label">Last known location:</p>
                <p onClick={() => window.open("https://rickandmortyapi.com/api/location/" )} className="value">{char.location?.name}</p>

                <p className="label">First seen in:</p>
                <p className="value">{char.origin?.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
