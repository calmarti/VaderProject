//TODO: problema: ancho de la imagen mayor que el ancho de viewport
export default function Hero() {
  return (
    <div className="hero">
     
      <h1
        style={{ fontFamily: "Courier Prime" }}
        className="hero-title typing-effect"
      >
        Ibsen Martínez <br/>
      </h1>
     {/*  <br/> */}
      <span className="mr-96 text-xl fade-in">
        Escritor de ficciones, ensayos y artículos
      </span>
   
    </div>
  );
}

//relative top-96 left-24 