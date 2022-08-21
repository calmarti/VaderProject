export default function Card({title, summary, imageUrl}){
return (
    <div className="card" >
    <h2 className="card-title">{title}</h2>
    <p className="card-content" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.
      
      <img className="card-image" src={`${imageUrl}`} alt={title} />
          
      <button className="card-button">
        Comprar
      </button>
    </p>
  </div>
)
}