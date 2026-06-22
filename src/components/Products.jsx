import { useEffect, useState } from "react"
import '../App.css'

function Products(){
    const[data,setData] = useState([])

    useEffect(()=>{
    async function fetchData(){ //api data ni fetch cheyadaniki time pattiddhi so async await vadatham

        try {
          let res = await fetch("https://fakestoreapi.com/products")
          let jsonRes = await res.json()
          setData(jsonRes)  //setData place lo console.log petti choodu products data vasthay
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    },[])
    return(
        <div className="products-container">
            <h1>🛍️ All Products</h1>
            <div className="products-grid">
            { 
                data.map(item=>(
                <div key={item.id} className="product-card"> {/*further update gani delete gaani cheyaniki key vadtham*/}

                    <img src={item.image} alt="{item.title}" />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2>Price: {item.price}</h2>
                    <h2><span>Rating:</span>⭐ {item.rating.rate}</h2>
                    <button className="add-btn">
                        Add To Cart
                    </button>


                </div>
                ))
                
    
            }
        </div>
        </div>
    )
}
export default Products;