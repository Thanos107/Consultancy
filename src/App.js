import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
