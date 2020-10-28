import React from 'react';
import './App.css';
import ParentPPAL from './Components/ParentPPAL';

function App() {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <ParentPPAL />
      </header>
    </div>
  );
}

export default App;
