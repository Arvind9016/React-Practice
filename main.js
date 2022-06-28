import React from 'react'
import './App.css'

const Main=(props)=>{
 const todos = [
    {
      id:1,
      tittle:"First Todo",
      desc:"This Is Our First Todos List ."
    },
    {
      id:2,
      tittle:"Second Todo",
      desc:"This Is Our Second Todos List ."
    },
    {
      id:3,
      tittle:"Third Todo",
      desc:"This Is Our Third Todos List ."
    }
    ];
  const [card,setCard] = React.useState(todos); 
 const [name,setName] = React.useState("Alen");
 
    
   const deleteHandler =(id)=>{
// const cards = todos.filter(todo=>{
// todo.id !== id
// })
const cards_Copy=todos.filter((item)=>{item.id!==id});
// const cards_Copy = [...todos];
// cards_Copy.slice(id,1)
 setCard(cards_Copy);
    };
 const changeHandler=(e)=>{
       setName(e.target.value)
    }
 
   return(
    <div className="container-wrapper">
    {todos.map((item)=>{
      return(
   <div className="container">
   <p>{item.id}</p>
   <p>{name}</p>
   <p>{item.tittle}</p>
   <p>{item.desc}</p>
   <input type="text" placeholder="Enter NAme"onChange={(e)=>changeHandler(e)}/>
   <br/>
   <button onClick={()=>deleteHandler(item.id)}>Delete</button>
   </div> 
   );
   })};
    </div>
)}
export default Main;

