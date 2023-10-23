import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify'
import  'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <RoutesApp/>
      <ToastContainer autoClose={1500}/>
    </div>
  );
}

export default App;
