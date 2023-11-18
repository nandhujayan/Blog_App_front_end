import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddPost } from './components/AddPost';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { ViewPost } from './components/ViewPost';
import { Search } from './components/Search';
import { Delete } from './components/Delete';
import { MyPost } from './components/MyPost';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='Registration' element={<Registration/>}/>
        <Route path='AddPost' element={<AddPost/>}/>
        <Route path='ViewPost' element={<ViewPost/>}/>
        <Route path='MyPost' element={<MyPost/>}/>
        <Route path='Search' element={<Search/>}/>
        <Route path='Delete' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
