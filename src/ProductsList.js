import Product from "./Product";

function ProductsList () {

  let productArr = [
    {id:1, name:"i7-13700k Processor", price:"50,000 Rs", url:"https://m.media-amazon.com/images/I/41g+M6Q-NrL._SL1000_.jpg"},
    {id:2, name:"Asus RTX 4090 GPU", price:"2,50,000 Rs", url:"https://m.media-amazon.com/images/I/815d7TTP5UL._SL1500_.jpg"},
    {id:3, name:"G.Skill DDR5 RAM", price:"12,000", url:"https://m.media-amazon.com/images/I/51tyNdXDcDL._SL1500_.jpg"}

  ]

    return (

      <div className='products'>

      {
        productArr.map((product) => {
          return (

            <Product key={product.id}  name={product.name} price={product.price} url={product.url}/>
          )
        })

      }

      </div>

    )

    

}

export default ProductsList;