import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Overview from './components/main/Overview/Overview';
import Tickets from './components/Tickets/Tickets';
import Ideas from './components/Ideas/Ideas';
import { Route , Routes } from 'react-router';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='sectionBox'>
        <Header/>

        <Routes>
          <Route index element={<Overview />} />
          <Route path="/tickets" element={<Tickets />}/>
          <Route path="/ideas" element={<Ideas />}/>

        </Routes>

      </div>
    </div>
    
  );
}


export default App;
