import React, { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1 className="app-title">Puppy Pals</h1>
      <div className="pupppy-list">
        {puppies.map(
          (puppy) => (
            console.log("puppy id: ", puppy.id),
            (
              <p
                className="puppy-item"
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            )
          )
        )}
      </div>
      {featPupId && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
