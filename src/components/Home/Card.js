export default function Card({title, summary, image}){
return (
    <div className="bg-black bg-gradient-to-br m-8 p-8 w-1/5 rounded-3xl card">
    <p className="font-bold pb-4">{title}</p>
    <p>
      Sinopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
)
}