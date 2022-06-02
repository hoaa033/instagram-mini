import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <div className='home-page'>
        
        <HomePage />
      </div>
      <div className='login'>
      <Login />
      </div>
      

    </div>
  );
}

export default App;
