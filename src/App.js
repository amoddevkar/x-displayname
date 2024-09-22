
import { useState } from 'react';
import './App.css';

function App() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [display, setDisplay] = useState(false)

  const handleFname = (e) => {
    var term = e.target.value;
    var re = new RegExp("[a-zA-Z]");
    if (re.test(term)) {
      setFName(term)
    }

  }
  const handleLname = (e) => {
    var term = e.target.value;
    var re = new RegExp("[a-zA-Z]");
    if (re.test(term)) {
      setLName(term)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setDisplay(true)
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label for='firstname'>First Name:</label><input pattern="[a-zA-Z]*" type='text' name='firstname' onChange={handleFname} required /><br />
        <label for='lastanme'>Last Name:</label><input pattern="[a-zA-Z]*" type='text' name='lastname' onChange={handleLname} required /><br />
        <button type='submit'>Submit</button>
      </form>

      {display && <p>Full Name: {`${fName} ${lName}`}</p>}
    </div>
  );
}

export default App;
