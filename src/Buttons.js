import {useState} from 'react';
function Buttons(){
const[count,setCount]=useState(0);
function handle(){
    setCount(count+1);
}
 return(
    <>
    <MyButton count={count} onClick={handle}/>
    <MyButton count={count} onClick={handle}/>
    </>
 );

}
function MyButton({count,onClick}){
  return(
    <>
    <button onClick={onClick } style={{margin:"20px",backgroundColor:"lightblue"}}>Clicked {count} times</button>
    <br></br>
    </>
  );
}
export default Buttons;