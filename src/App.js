import logo from './logo.svg';
import './App.css';

function App() {
  console.log('hello main');
  console.log('yay');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>example string</p>
      </header>
    </div>
  );
}

export default App;
