
import React, { useMemo, useState } from "react";
import '../styles/App.css';


const App = () => {
  const todolist=[];
  for (let index = 0; index < 50; index++) {
    const i=index+1;
    if (index%2==0) {
      todolist.push({
        name:'Todo '+i,
        completed:true
      })
    }else{
      todolist.push({
        name:'Todo '+i,
        completed:false
      })
    }
  }//end of forloop
  const [list,setlist]=useState(todolist);
  const handleall=()=>{
    setbtn('All');
    const data=[];
    for (let index = 0; index < 50; index++) {
      const i=index+1;
      if (index%2==0) {
        data.push({
          name:'Todo '+i,
          completed:true
        })
      }else{
       data.push({
          name:'Todo '+i,
          completed:false
        })
      }
    }//end of forloop
    setlist(data);
       }
       const handleactive=()=>{
        setbtn('Active');
        const data=[];
        for (let index = 0; index < 50; index++) {
          const i=index+1;
          if (index%2!=0) {
            data.push({
              name:'Todo '+i,
              completed:false
            })
          }
       }
       setlist(data)}
       const handlecomplete=()=>{
        setbtn('Complete');
        const data=[];
        for (let index = 0; index < 50; index++) {
          const i=index+1;
          if (index%2==0) {
           data.push({
              name:'Todo '+i,
              completed:true
            })
          }
       }
       setlist(data);}
const [mode,setmode]=useState('Dark');
const handledark=()=>{
  if (mode=='Dark') {
   return setmode('Light');
  }
 return setmode('Dark');
}
const [btn,setbtn]=useState('All');
const memolist=useMemo(()=>memofunc(btn),[btn]);
function memofunc(btn){
  let startTime = performance.now();
 while (performance.now() - startTime < 500) {
   // Do nothing for 500 ms to emulate extremely slow code
 }
if (btn=='All') {
  return todolist;
}else if(btn=='Active'){
  const data=[];
        for (let index = 0; index < 50; index++) {
          const i=index+1;
          if (index%2!=0) {
            data.push({
              name:'Todo '+i,
              completed:false
            })
          }
       }
       return data;
}else{
  const data=[];
        for (let index = 0; index < 50; index++) {
          const i=index+1;
          if (index%2==0) {
           data.push({
              name:'Todo '+i,
              completed:true
            })
          }
       }
       return data;
}
}
console.log(memolist);
  return (
    <div className={mode}>
<div className="btns">
  <button onClick={handleall}>All</button>
  <button onClick={handleactive}>Active</button>
  <button onClick={handlecomplete}>Completed</button>
  <button onClick={handledark}>{mode}</button>
</div>
<hr/>
<h4>Note: List is artificially slowed down!</h4>
<ul>
  {
    list.map((item,i)=>{
      if (item.completed==true) {
        return(<li className="completed" key={'a'+i}>{item.name}</li>)
      }else{
        return(<li className="active" key={'a'+i}>{item.name}</li>)
      }
      
    })
  }
</ul>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
