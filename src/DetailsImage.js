function DetailsImage({source, sizes, type}){
   // const {source, sizes, type} = props; // destructing
    return(
        <ul key={type}>
                <li>The source of image-{source} </li>
                <li >The size of image-{sizes} </li>
                <li>The type of image-{type} </li>

        </ul>
    )
}

export default DetailsImage;