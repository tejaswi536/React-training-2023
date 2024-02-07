function DetailButton({children, clicked}){
   
return(
    <div>
        <button onClick={clicked}>{children}</button>
    </div>
)
}

export default DetailButton;