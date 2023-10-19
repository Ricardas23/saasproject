import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './Page/IndexPage';
import Toolbar from './Components/Toolbar';
import { AOS } from 'aos'
import React, {useEffect, useState} from 'react';


function App() {
  
  const [allreviews, setAllReviews] = useState([])


  return (
    <div className="App">


        <BrowserRouter>
        
        <Toolbar/>

        <Routes>

          <Route path='/saasproject/' element={<IndexPage allreviews={allreviews} setAllReviews={setAllReviews} />} ></Route>


        </Routes>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
