export default function Hero() {
  return (
    <div className="bg-cover h-screen bg-[url('/public/img/pen-g55cb87a4a_1280.jpg')]">
      <div className="">
        <div
          style={{ fontFamily: "Courier Prime" }}
          className="text-left relative top-96 left-24 text-6xl font-bold drop-shadow-2xl typing-effect"
        >
          Ibsen Martínez
        </div>
        <div className="text-left relative top-96 left-28 font-bold text-xl fade-in">
          Escritor de ficciones, ensayos y artículos
        </div>
      </div>
    </div>
  );
}
