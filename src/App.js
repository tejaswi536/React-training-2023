import logo from './logo.svg';
import './App.css';
import List from './List';
import DetailsImage from './DetailsImage';
import DetailButton from './DetailButton';
import {useState} from "react";
import "./TododList";
import TodoList from './TododList';




const xx =  [
  {
    "source": "logo",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
  },
  {
    "source": "logo192.png",
    "type": "image/png",
    "sizes": "192x192"
  },
  {
    "source": "logo512.png",
    "type": "image/png",
    "sizes": "512x512"
  }
]


function App() {
  const show = true;
  const data= {name: "siri", age: 35}
  const[labelName, setLabelName ] = useState("Please click on above button");

function handleClick(label){
  setLabelName(label);
console.log("from insidr app", labelName);
}

console.log("from above app", labelName);
  
  return (
    <div className="App">
      {/* <header className="App-header">
        Hello
      </header>
      {show ? (<List message={data} show={show}></List>) : '' }
    
      hello from App
      <div>
      {xx.map((data)=> <DetailsImage {...data}></DetailsImage>)}
      </div>
    
      <div className="buttons">
      <DetailButton clicked={()=>{handleClick("first")}}>Detail1</DetailButton>
      <DetailButton clicked={()=>{handleClick("secong")}}>Detail2</DetailButton>
      <DetailButton clicked={()=>{handleClick("third")}}>Detail3</DetailButton>
    </div>
    <div>{labelName}</div> */}
    <TodoList></TodoList>
    </div>
  );
}

export default App;







//how to create components
//detructuring
//spread operator
//props, how to send multiple props
// passing functions to props- child to parent data passing
