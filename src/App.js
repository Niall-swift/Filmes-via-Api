import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify'
import  'react-toastify/dist/ReactToastify.css';

import {register} from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
register();


function App() {
  return (
    <div className="App">
      <RoutesApp/>
      <ToastContainer autoClose={1500}/>
    </div>
  );
}

export default App;
