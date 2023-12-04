import React, { useState } from 'react';
import Header from "./components/Header";
import UserInput from './components/UserInput'; 
import Footer from './components/Footer'; 
import PokemonVote from "./components/Votes";

function App() {
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
  };
  
  console.log("app.js name: ", name)
  
  return (
    <div className="App">
      <Header />
      <UserInput onSubmit={handleNameSubmit} />
      <PokemonVote name={name} />
      <Footer/>
    </div>
  );
}

export default App;