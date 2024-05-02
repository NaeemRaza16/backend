import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJoke] = useState([]);

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>Jokes {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
