function List(props){
    const myList= false;
    return (
        <section className="my-component">
            <p>age-{props.message.age}</p>
            <div className="first-heading">my first html</div>
            {myList ? (<p>jjhj</p>): "ghgh"}   
            <div>hello</div>
        </section>
       
    )

}

export default List;