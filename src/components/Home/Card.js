export default function Card({title, summary, imageUrl}){
return (
    <div className="bg-black bg-gradient-to-br m-8 p-8 w-1/4 rounded-3xl card">
    <h2 className="font-bold pb-4">{title}</h2>
    <p>
      Sinopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. 
      <img src={`${imageUrl}`} alt={title} />
      <button class="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-100 hover:bg-gray-100 hover:text-gray-900 duration-300 mt-3">
        Comprar
      </button>
    </p>
  </div>
)
}