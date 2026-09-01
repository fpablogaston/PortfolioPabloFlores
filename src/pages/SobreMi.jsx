export default function SobreMi(){
    return(
        <>
        <div>
            <section className="  w-[70%]  flex  mx-auto items-center justify-between py-40">
                <h2 className="text-white w-[60%] text-4xl">
                    Hola, soy Pablo, estudiante de la Tecnicatura en Programación en la Universidad Tecnológica Nacional (UTN).     
                    <span className="text-amber-500 text-5xl">  </span>
                </h2>  
               

                <div className="w-[40%] flex justify-center">
                     {/* <img className="h-[300px]"  src="/img/programadoranimado.png" alt="" /> */}
                     <section className="text-white w-[70%] flex mx-auto  justify-around flex-wrap py-12">
                    <a href="https://docs.google.com/document/d/1VEYBs4aHje1NBvr2X3-7NUP2N6dKAAoo/edit" target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 mt-8 text-black border border-black bg-amber-500 rounded-lg ">Curriculum</button>
                     </a>
                     <a href="https://www.linkedin.com/in/pablo-flores-b36971274" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 mt-8 text-black border border-black bg-amber-500 rounded-lg">Linkedin</button>
                     </a>
                 </section>

                </div> 
            </section>
            </div>
            
            <section className="text-[18px] w-[70%] flex flex-col mx-auto gap-4 items-center justify-between text-white">
            <p>Me apasiona el desarrollo web y la programación en general. Cuento con experiencia en proyectos utilizando HTML,
                CSS, JavaScript, React, Tailwind y C++, lo que me ha permitido desarrollar una base sólida en frontend y lógica de programación.</p>
                <p>Me considero una persona sociable, con facilidad para el trabajo en equipo, actitud proactiva y un fuerte sentido de la responsabilidad. 
                Siempre estoy en busca de nuevos desafíos para seguir aprendiendo y creciendo profesionalmente.</p>
            </section>
        </>
    )
}
