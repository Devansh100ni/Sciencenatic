import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import './styles/App.scss'
function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
        <Routes> 
          <Route index element={<Home/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
