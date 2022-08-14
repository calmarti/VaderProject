export default function Card({title, summary, imageUrl}){
return (
    <div style={{backgroundColor:"#F1D6C0"}} className="bg-black bg-gradient-to-br m-8 p-8 w-1/4 rounded-3xl card">
    <h2 className="font-bold text-3xl pb-4">{title}</h2>
    <p class="py-2 text-lg text-justify" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.
      <img class="my-3 block" src={`${imageUrl}`} alt={title} />
      <button class="rounded-lg text-black px-4 py-2 border-2 border-gray-900 text-gray-100 hover:bg-gray-100 hover:text-white hover:bg-black duration-300 mt-3">
        Comprar
      </button>
    </p>
  </div>
)
}