import logo from './logo.svg';
import './index.css';
import Logo from "./assets/Header.png"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Exhibitions from './pages/Exhibitions';
import Questionnaires from './pages/Questionnaires';


function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/exhibitions' element={<Exhibitions />}></Route>
          <Route exact path='/questionnaires' element={<Questionnaires />}></Route>

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
