import React,{ useState } from "react";
import Rewards from "./Rewards";

export default function Miner(props){
    
    const {distance,
        status,
        name,
        geocode,
        address,
        unit,
        isMeters,
        metersToMile
        } = props

        const [clicked,setClicked] = useState(false);

        const handleClick =(e)=>{
            e.preventDefault()
            e.stopPropagation()
            setClicked(true)

        }
        
    return(
        <div className="card mx-auto mt-2 mb-3 w-35 bg-primary text-white text-center" onClick={handleClick} >
            <h4 className="card-header text-outline">{name}</h4>
            <div className="card-body d-flex flex-column text-center justify-content-center align-items-center">
            <p className="card-item d-flex flex-column flex-wrap text-center text-break">Miner Address: {address}</p>
            <p className="card-item">Distance: {isMeters?distance.toFixed(2):metersToMile(distance).toFixed(2)} {unit}</p>
            <p className="card-item">{geocode.short_street}</p>
            <p className="card-item">{geocode.short_city}, {geocode.short_state}</p>
            <div className="card-item mb-2"><Rewards {...props} clicked={clicked}/></div>
            <p className={status.online==="offline"?"card-item bg-danger rounded p-1":"card-item rounded p-1 bg-success"}>{status.online}</p>
            </div>
        </div>
    )
}
