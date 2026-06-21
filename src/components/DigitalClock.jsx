import { useEffect, useState } from "react"
import '../App.css'

function DigitalClock(){
    const[date,setDate] = useState(new Date())

    useEffect(()=>{
        let timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return()=>{
            clearInterval(timer)
    }
    },[])

    return(
        <div className="clock-container">
            <h1 className="clock-time">{date.toLocaleTimeString()}</h1>
        </div>
    )
}
export default DigitalClock