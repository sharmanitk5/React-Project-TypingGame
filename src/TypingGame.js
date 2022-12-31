import React, { useEffect, useState } from 'react'
import word from './words'

export default function TypingGame() {
const [text,setText]=useState("save")
const [inp,setInp] = useState("")
const [push,setPush] = useState(['correct'])
const [right,setRight] = useState(['wrong'])
const [mid,setMid] = useState('30')
const [disable,setDisable] = useState(false)
useEffect(()=>{
 setText( word[Math.floor(Math.random()*word.length)])
},[push])
  function changeText(){
  //   fetch("https://official-joke-api.appspot.com/random_joke")
      
  //     .then(res=> res.json())
  //     .then(response =>{
  //         //here you got response
  //         //that is an object
          
  //         setText(response.setup)

    
  // });

}
 function pushRight(){
   
   if(inp==text){
    setPush(prev=>[...prev,inp])
    return;
   }
   else{
setRight(prev=>[...prev,inp])
   }
 }; 
 
 
 useEffect(()=>{
  if(mid<=30&& mid!==0&&disable===false){
  setTimeout(()=>{
        
    setMid((prev)=>prev-1)
 },1000)
  }
  else if(disable){
    
     setMid(30)
  }
  else if(mid===0){
    setDisable(true);
  }
 },[disable,mid])
 
 function Timer(){
  setDisable(!disable)
  setPush([])
  setRight([])
  setInp([])
 }

  return (

    <div>




    
    <div className='container'><div className='time'>{mid}</div>
        
        
        <button className='button'onClick={changeText} >{text}</button>
        
        <div className='bottom'><input placeholder={disable?'please type here':"Running"} value={inp} onChange={e=>setInp(e.target.value)} onClick={pushRight} ></input>
        <button className='end' onClick={Timer}> {disable ? "Start" :"Restart"}</button></div>
        
        </div>
        <div className='right'> 
          
        <div className='corner'>
          
       <div><div className='wrong'>Correct Ans</div>

       <div>
            {
              push.map((push)=><div><button className='cover'>{push}</button></div>)
            }
            </div>
       </div>
       <div>
        <div className='wrong'>Wrong Ans</div>
       <div>
            {
              right.map((right)=><div><button className='red'>{right}</button></div>)
            }
            </div>
       
       </div>
         
           
          

          
           
        
           
            
        </div>
        </div>
        </div>
        
  );
}
