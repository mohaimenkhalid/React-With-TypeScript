import React from 'react';
import {Greet} from './components/Greet';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        <Greet name="Khalid" messageCount={25} isLoggedIn={true} />
    </div>
  );
}

export default App;
