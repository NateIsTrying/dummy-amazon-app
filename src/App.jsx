import './App.css'
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FetchAllProducts from './components/FetchAllProducts';
import ShowAllProducts from './components/ShowAllProducts';
import ShowIndividualProduct from './components/ShowIndividualProduct';

const App = () => {
  const [allDummyProducts, setAllDummyProducts] = useState([]);

  return (
    <>
      <Router>
        <h1>This is your App page</h1>
        <FetchAllProducts setAllDummyProducts={setAllDummyProducts}/>
        <Routes>
          <Route path='/' element={<ShowAllProducts allDummyProducts={allDummyProducts} />} />      
          <Route path='/product/:id' element={<ShowIndividualProduct allDummyProducts={allDummyProducts}/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App;
