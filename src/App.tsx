import React from 'react';
import {Greet} from './components/Greet';
import {Person} from './components/Person';
import {PersonList} from "./components/PersonList";

function App() {
    const personName={
        firstName: "mohaimen",
        lastName: "khalid"
    };
    const nameList = [
        {
            firstName: "Khalid",
            lastName: "mohaimen"
        },
        {
            firstName: "Khalid",
            lastName: "mohaimen"
        },
        {
            firstName: "Khalid",
            lastName: "mohaimen"
        },
        {
            firstName: "Khalid",
            lastName: "mohaimen"
        }
    ]
  return (
    <div className="App">
        <h1>Hello</h1>
        <Greet name="Khalid" messageCount={25} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
    </div>
  );
}

export default App;
