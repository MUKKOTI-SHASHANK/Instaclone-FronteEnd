import Landing_page from './scripts/landing_page';
import './App.css';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Postview from './components/postview';
import UploadView from './components/uploadview';

function App() {
  return (
    <div className="App">
      {/* <h1>Pulla Reddy ka Shar</h1> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element= {<Landing_page/>} />
          <Route path='/postview' element={<Postview/>}/>
          <Route path='/uploadview' element={<UploadView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
