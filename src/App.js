import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DisplayAllBooks from './components/DisplayAllBooks';
import AddBooks from './components/AddBooks';
import UpdateBooks from './components/UpdateBooks';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
<Route path='/' element={<DisplayAllBooks/>}/>
<Route path='/books/add' element={<AddBooks/>}/>
<Route path='/books/update/:bookid' element={<UpdateBooks/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
