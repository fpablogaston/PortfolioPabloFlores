import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"
import SobreMi from "./pages/SobreMi"
import Inicio from "./pages/Inicio"
import Header from "./components/Header"


export default function App(){

return(
  <>
  <Router>
  <div className="bg-[url(/img/background.jpg)] bg-cover bg-center min-h-screen ">      
    <Header />
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/Contacto" element={<Contacto />} />
    </Routes> 
    </div>
    </Router>
    </>
  )
}


// <nav className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto
//           h-max bottom-10">  

// <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm ">