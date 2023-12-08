import { useState } from "react";

function Product(props) {

    function makeNotAvailable(){
        setIsAvailable("No")
    }


    let [isAvailable, setIsAvailable] = useState("Yes");

    return (

        

        <div className="product">
            <img className="img" src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{isAvailable}</p>

            <button onClick={makeNotAvailable}>Click</button>

        </div>

    )

}

export default Product;