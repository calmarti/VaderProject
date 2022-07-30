import Card
 from "./Card";
export default function More() {
  return (
    <div id="libros" className="flex flex-row justify-center bg-white text-slate-50 w-screen" >
      <Card title="El Sr. Marx no está en casa" imageUrl="./img/el-senor-marx-foto.jpg" />
      <Card title="El mono aullador de los manglares"/>
     <Card title="Petroleros suicidas"/>
     
    </div>
  );
}
