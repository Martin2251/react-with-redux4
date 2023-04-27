import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
// state inside the store we want to return the state 
  const account = useSelector((state) =>state)
  // we can use it any part of the app


  return (
    <div className="App">
 
    </div>
  );
}

export default App;
