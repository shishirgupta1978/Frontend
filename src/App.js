import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="banner">
      <Navigation/>
      <div className='body py-2'>

      <Outlet />
      </div>
    </div>
  );
}

export default App;
