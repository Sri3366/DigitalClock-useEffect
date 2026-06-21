import { useEffect, useState } from "react"

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
        <div>
            <h1>All Products</h1>
            { 
                data.map(item=>(
                <div key={item.id}> {/*further update gani delete gaani cheyaniki key vadtham*/}

                    <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2>{item.price}</h2>

                </div>
                ))
                
    
            }
        </div>
    )
}
export default Products;