//TODO: problema: ancho de la imagen mayor que el ancho de viewport
import profilePic from "./Ibsen_Martinez_Bogota.jpg"

export default function Hero() {
  return (
    <div className="hero">
      <img  className="hero-image" src={profilePic}  alt="Ibsen Martínez" />
      <div className="hero-content">
      <h2 className="hero-title">Ibsen Martínez</h2>
      <div className="hero-text"> 
      <p className="hero-text-block"> 
        Soy escritor de profesión. Vivo en Caracas, Venezuela, petroestado
        populista de la Cuenca del Caribe. 
        Escribo ficciones, ensayos y
        artículos.
        </p>
        <p className="hero-text-block">Mi trabajo puede leerse regularmente en publicaciones locales
        y extranjeras, tales como los diarios “El Nacional”, “Tal Cual” , “El
        Mundo, economía y negocios” y el semanario “Zeta”, todos de Caracas. </p>
        
        
        <p className="hero-text-block">En prensa extranjera soy colaborador de “El País”, “ABC/abcd” (suplemento
        cultura del diario “ABC”) y “El Mundo”, de Madrid. También de “El
        Espectador” de Bogotá, así como de las revistas literarias y de ideas
        “Letras Libres”, de España y El Malpensante, de Bogotá.</p>
        
        
        <p className="hero-text-block">Desde 2005 he escrito ocasionalmente en inglés para “Foreign Policy”, “The Washington
        Post” y durante cinco años para la página estadounidense “Econlib.org”,
        especializada en temas económicos. </p>
        
        <p className="hero-text-block">Dediqué veinte años de mi juventud a escribir culebrones y, si bien hoy aborrezco de la televisión, parte de
        mis novelas, relatos y ensayos giran en torna a ese medio y al
        significado que la telenovela ha tenido en la región. Me interesan
        sumamente la historia económica, la literatura pianística, los temas
        petroleros y energéticos, los cambios que trae consigo la vejez y la
        reseña periodística de las ideas ajenas.</p>
        
        <p className="hero-text-block">He publicado dos novelas ( “El mono aullador de los manglares”, Mondadori, Caracas, 2000) y “El señor
        Marx no está en casa” ( Colección La otra orilla, Norma, Bogotá, 2009).
        </p>

        </div>
      </div>

      {/* <h1
        style={{ fontFamily: "Courier Prime" }}
        className="hero-title typing-effect"
      >
        Ibsen Martínez <br/>
      </h1>
      <span className="hero-subtitle fade-in">
        Escritor de ficciones, ensayos y artículos
      </span>
    */}
    </div>
  );
}

