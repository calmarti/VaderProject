import Card
 from "./Card";
export default function More() {
  return (
    <div id="libros" style={{backgroundColor:"#000000"}} className="flex flex-row justify-center text-black text-slate-50 w-screen py-11" >
      <Card title="El Sr. Marx no está en casa" imageUrl="./img/el-senor-marx-foto.jpg" />
      <Card title="El mono aullador de los manglares"/>
     <Card title="Petroleros suicidas"/>
     
    </div>
  );
}
