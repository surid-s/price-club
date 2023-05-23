import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className='text-4xl font-bold bg-green-400 underline'>This is a big header</h1>
      <p>This is a simple paragraph</p>
      <Pricing />
    </div>
  );
}

export default App;
