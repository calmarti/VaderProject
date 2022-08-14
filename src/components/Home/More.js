import Card
 from "./Card";
export default function More() {
  return (
    <div id="libros" style={{backgroundColor:"#1A181B"}} className="flex flex-row justify-center text-black text-slate-50 w-screen py-11" >
      <Card title="El Sr. Marx no está en casa" imageUrl="./img/el-senor-marx-foto.jpg" />
      <Card title="Simpatía por King Kong"/>
     <Card title="Petroleros suicidas"/>
     
    </div>
  );
}
