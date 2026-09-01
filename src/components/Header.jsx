import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <nav className="w-full md:w-[70%] m-auto  px-10 mt-10 fixed md:mx-[15%] justify-between h-[80px] border
          rounded-full flex items-center text-lg bg-white/15">
           <div className="flex"> 
             <p className="text-amber-500 text-3xl">Pablo Flores</p>
           </div>

            {/* links visibles en desktop */}
           <div className="text-white hidden md:flex gap-8">             
              <Link to="/Inicio" className="rounded-lg transition duration-150 cursor-pointer hover:bg-amber-500">Inicio</Link> 
              <Link to="/Proyectos" className="rounded-lg transition duration-150 cursor-pointer hover:bg-amber-500">Proyectos</Link> 
              <Link to="/SobreMi" className="rounded-lg transition duration-150 cursor-pointer hover:bg-amber-500">Sobre Mi</Link> 
              <Link to="/Contacto" className="rounded-lg transition duration-150 cursor-pointer hover:bg-amber-500">Contacto</Link> 
          </div>
        </nav>

        </>
    );
}


