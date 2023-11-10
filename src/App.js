import Navbar from './components/Navbar';
import Content from './components/Content';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
    </div>
    // <Routes>
    //   <Route path='/' element={<Navbar/>}/>
    //   <Route path='/content' element={<Content/>}/>
    // </Routes>
  );
}

export default App;
