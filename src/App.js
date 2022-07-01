import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TO DO APP
        </p>
        <MainComponent />
      </header>
      
    </div>
  );
}

export default App;
