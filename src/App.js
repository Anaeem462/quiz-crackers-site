
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Utills/Routes';
import { ToastContainer, toast } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
      <ToastContainer
position="top-Center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

<ToastContainer />
    </div>
  );
}

export default App;
