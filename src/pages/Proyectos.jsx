export default function Proyectos(){
    return(
        <>
        <div className="py-50 ">
            <section className="flex w-[70%] mx-auto justify-around flex-wrap " alt="Projects" >

                {/* card tienda api */}

                <div className="object-cover" alt="cardProjects">
                    <img
                        className="mb-3 w-[400px] h-[400px] rounded-2xl"
                        src="/img/swagger.jpg" // podés cambiarla después
                        alt="API .NET"
                    />

                    <div className="flex justify-between items-center mt-4">
                        <h3 className="text-2xl text-white mb-2">
                        API Tienda (.NET)
                        </h3>

                    <a
                    href="https://api-tienda-net.onrender.com/swagger"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="w-30 h-10 rounded-2xl bg-green-500">
                        Probar API
                    </button>
                    </a>
                </div>

                <p className="text-white font-light">
                    C#, .NET, ASP.NET Core, Entity Framework, JWT
                </p>

                <div className="flex gap-3 mt-3">
                    <a
                    href="https://github.com/fpablogaston/Api-Tienda-Net"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="px-4 py-2 rounded-xl bg-gray-600 text-white">
                        Código
                    </button>
                    </a>
                </div>

                <p className="text-green-400 text-sm mt-3">
                    ● API ONLINE (Swagger)
                </p>

                <p className="text-gray-400 text-sm">
                    Probala directamente desde el navegador
                </p>
                </div>


            {/* card api training planner sin frontend*/}
                <div className="object-cover" alt="cardProjects">
                    <img
                        className="mb-3 w-[400px] h-[400px] rounded-2xl"
                        src="/img/imagenApiTraining.png"
                        alt="API .NET"
                    />

                    <div className="flex justify-between items-center mt-4">
                        <h3 className="text-2xl text-white mb-2">
                        TrainingApp API (.NET)
                        </h3>

                    <a
                    href="https://trainingapp-fduy.onrender.com/swagger/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="w-30 h-10 rounded-2xl bg-green-500">
                        Probar API
                    </button>
                    </a>
                </div>

                <p className="text-white font-light">
                    C#, .NET, ASP.NET Core, Entity Framework, JWT
                </p>

                <div className="flex gap-3 mt-3">
                    <a
                    href="https://github.com/fpablogaston/TrainingApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="px-4 py-2 rounded-xl bg-gray-600 text-white">
                        Código
                    </button>
                    </a>
                </div>

                <p className="text-green-400 text-sm mt-3">
                    ● API ONLINE (Swagger)
                </p>

                <p className="text-gray-400 text-sm">
                    Probala directamente desde el navegador
                </p>
                </div>
        

    {/* card api training planner*/}
<div className="object-cover" alt="cardProjects">
    <img
        className="mb-3 w-[400px] h-[400px] rounded-2xl"
        src="/img/imagenApiTraining.png"
        alt="API .NET"
    />

    <h3 className="text-2xl text-white mb-2">
        Planificador Entrenamiento API (.NET)
    </h3>

    <p className="text-white font-light">
        C#, .NET, ASP.NET Core, Entity Framework, JWT
    </p>

    <div className="flex gap-3 mt-3">
        <a href="https://planificadorentrenamientoapi.onrender.com/swagger/index.html" target="_blank" rel="noopener noreferrer">
            <button className="w-30 h-10 rounded-2xl bg-green-500 px-3">Probar API</button>
        </a>

        <a href="https://github.com/fpablogaston/PlanificadorEntrenamientoAPI.git" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded-xl bg-gray-600 text-white">Código</button>
        </a>
    </div>

    <p className="text-green-400 text-sm mt-3">● API ONLINE (Swagger)</p>
    <p className="text-gray-400 text-sm">Probala directamente desde el navegador</p>
</div>

                {/* card api training planner
                <div className="object-cover" alt="cardProjects">
                    <img
                        className="mb-3 w-[400px] h-[400px] rounded-2xl"
                        src="/img/imagenApiTraining.png" // podés cambiarla después
                        alt="API .NET"
                    />

                    <div className="flex justify-between items-center mt-4">
                        <h3 className="text-2xl text-white mb-2">
                        API Traning Planner (.NET)
                        </h3>

                    <a
                    href="https://trainingplannerapi.onrender.com/swagger"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="w-30 h-10 rounded-2xl bg-green-500">
                        Probar API
                    </button>
                    </a>

                    <a
                    href="https://trainingplanner-frontend.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="w-30 h-10 rounded-2xl bg-green-500">
                        Ver proyecto
                    </button>
                    </a>
                </div>

                <p className="text-white font-light">
                    C#, .NET, ASP.NET Core, Entity Framework, JWT
                </p>

                <div className="flex gap-3 mt-3">
                    <a
                    href="https://github.com/fpablogaston/TrainingPlannerAPI.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="px-4 py-2 rounded-xl bg-gray-600 text-white">
                        Código
                    </button>
                    </a>
                </div>

                <p className="text-green-400 text-sm mt-3">
                    ● API ONLINE (Swagger)
                </p>

                <p className="text-gray-400 text-sm">
                    Probala directamente desde el navegador
                </p>
                </div> */}

                {/* Juego de dados */}

                <div className=" object-cover " alt="cardProjects">
                    <img className="mb-3 w-[400px] h-[400px] rounded-2xl" src="/img/juegodados.webp" alt="" />
                       <div className="flex justify-between items-center mt-4">    
                            <h3 className="text-2xl text-white  mb-2 ">Juego de dados</h3>                                
                            <a href="https://github.com/fpablogaston/JuegoDadosCpp.git" target="_blank" rel="noopener noreferrer">                
                            <button className="w-30 h-10 rounded-2xl bg-amber-500">Ver proyecto</button>
                            </a>
                       </div>  
                    <p className="text-white font-light mb-8" > C++</p>
                </div>

                {/* Ecommerce futbol */}

                <div className=" object-cover" alt="cardProjects">
                    <img className="mb-3 w-[400px] h-[400px] rounded-2xl" src="/img/ecommerce.jpg" alt="" />     
                        <div className="flex justify-between items-center mt-4">
                            <h3 className="text-2xl text-white  mb-2 ">Ecommerce</h3>
                            <a href="https://67d045f64600fd38282bba92--beamish-paprenjak-47613c.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="w-30 h-10 rounded-2xl bg-amber-500">Ver proyecto</button>   
                             </a>
                        </div>
                    <p className="text-white font-light mb-8" >React, JavaScript y TailwindCSS</p>  
                </div>

                {/* Ecommerce coder house */}
                <div className=" object-cover" alt="cardProjects">
                    <img className="mb-3 w-[400px] h-[400px] rounded-2xl" src="/img/imagen principal carrusel 2.jpg" alt="" />
                        <div className="flex justify-between items-center mt-4">
                             <h3 className="text-2xl text-white  mb-2 ">Proyecto Coder House</h3>
                            <a href="https://proyectohtmlcoder.netlify.app/" target="_blank" rel="noopener noreferrer">                
                            <button className="w-30 h-10 rounded-2xl bg-amber-500">Ver proyecto</button>
                            </a>
                       </div>  
                    <p className="text-white font-light mb-2" >Html y Css</p>    
                </div>

            </section>
         </div>
        </>
    )
}

