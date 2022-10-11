
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { routers } from './Utills/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
