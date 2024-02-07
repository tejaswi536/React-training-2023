import {useState} from "react";
function TodoList(){
    const[title, setTitle] =useState("");
    const[list, setList] = useState([]);
    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setList([...list, title]);
        setTitle("");
       
    }


    const handleDelete = (index) => {
        // Create a new array excluding the item at the specified index
        // const updatedList = [...list.slice(0, index), ...list.slice(index + 1)];
        // setList(updatedList);
      };
    
    console.log(list)
    return(
        <div>
             <h1>TODO LIST</h1>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" 
            required
            value = {title}
            onChange={handleChange}
             ></input>
            <button type="submit" >Add</button>
        </form>
        <ul>
            <li>{list.map((bookTitle, index)=>{return (<div><span>{bookTitle}</span> <button onClick={()=>handleDelete(index)}>Delete</button></div>)})}</li>
        </ul>
        </div>
       
    )

}
export default TodoList;