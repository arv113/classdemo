import logo from "./logo.svg";
import "./App.css";

//for building react components there are 2 syntaxes
// class model or function model --> 2 sets of syntax where you can do the same thing
// function method is the preferred methods atm --> more concise method but little less control
// rick requires us to learn both and will specify when
// see examples on Canvas rick linked

//shows what an "App" is
//function called App lol
function App() {
  //whatever it returns is what an App is
  //Looks like html hmmm
  return (
    <div className="App">
      {" "}
      {/* className for styling purposes*/}
      <header className="App-header">
        <h1>Bitch</h1> {/* Adding h1 in here */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
