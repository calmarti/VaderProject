//TODO: problema: ancho de la imagen mayor que el ancho de viewport
export default function Hero() {
  return (
    <div className="box-border overflow-hidden overscroll-none flex flex-col justify-center items-center w-screen bg-center bg-cover h-screen bg-[url('/public/img/pen-gfae9aaaab_1920.jpg')]">
     
      <p
        style={{ fontFamily: "Courier Prime" }}
        className="mr-96 text-6xl typing-effect"
      >
        Ibsen Martínez <br/>
      </p>
     {/*  <br/> */}
      <p className="mr-96 text-xl fade-in">
        Escritor de ficciones, ensayos y artículos
      </p>
   
    </div>
  );
}

//relative top-96 left-24 