import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './Page/IndexPage';
import Toolbar from './Components/Toolbar';
import { AOS } from 'aos'
import React, {useEffect} from 'react';

function App() {


  return (
    <div className="App">


        <BrowserRouter>
        
        <Toolbar/>

        <Routes>

          <Route path='/saasproject/' element={<IndexPage/>} ></Route>


        </Routes>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
