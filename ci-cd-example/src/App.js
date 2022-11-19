import { useState } from 'react';

function App() {
  const [text, setText] = useState("Initial text");

  const generateNewText = () => {
    let newText = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;

    for (let i = 0; i < 10; i++) {
      newText += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setText(newText)
  }

  return (
    <div className="App">
      <header data-testid="headerText">
        {text}
      </header>

      <div>
        <button data-testid="generateButton" onClick={() => generateNewText()}>
          Generate some new text!
        </button>
      </div>
    </div>
  );
}

export default App;
