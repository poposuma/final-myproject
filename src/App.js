import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Training from './Training';
import Instructions from './Instructions';
import MyList from './MyList';



function App() {
   
  return <Router>

    <nav>
      <Link to='/myList' className='link'>MyList</Link>
      <Link to='/training' className='link'>Dog training</Link>
      <Link to='/instructions' className='link'>Instructions</Link>
    </nav>
    <Routes>
      <Route path='/myList' element={<MyList/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/instructions' element={<Instructions/>}/>
    </Routes>
  </Router>

}

export default App;
