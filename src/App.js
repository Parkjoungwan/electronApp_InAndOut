import logo from "./logo.svg";
import "./App.css";
import { SEND_MAIN_PING } from "./constants";

function App() {
  const { ipcRenderer } = window.require("electron");
  const sendMail = () => {
    ipcRenderer.send(SEND_MAIN_PING, "send");
  };
  ipcRenderer.on("test", (event, arg) => {
    console.log(arg);
  })
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
          Learn React
        </a>
        <button onClick={sendMail}>Send Mail</button>
      </header>
    </div>
  );
}

export default App;
