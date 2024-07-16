import logo from "./logo.svg";
import "./App.css";
// 環境変数 REACT_APP_API_URL を参照
const apiUrl = process.env.REACT_APP_API_URL;
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          {apiUrl}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
