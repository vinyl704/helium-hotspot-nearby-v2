import React,{ useState } from "react";
import Rewards from "./Rewards";
import TimeFrame from "./TimeFrame";

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

        const [timeFrame, setTimeFrame] = useState(1);
        const [clicked,setClicked] = useState(false);
        const [rewards,setRewards] = useState(0);
        
        const fetchData =()=>{
            fetch(`https://api.helium.io/v1/hotspots/${address}/rewards/sum?min_time=-${timeFrame}%20day`,{mode:"cors"})
                .then(res=>res.json())
                .then(data=>data.data)
                .then(reward=>reward.total)
                .then(setRewards)
                .catch(console.log)
        }

        const handleClick =(e)=>{
            e.preventDefault()
            e.stopPropagation()
            if(!clicked) setClicked(true)
          
            fetchData() 
            
        }

 

        
        
    return (
    
        <div className="card mx-auto mt-2 mb-3 w-35 bg-primary text-white text-center">
            <h4 className="card-header text-outline">{name}</h4>
            <div className="card-body d-flex flex-column text-center justify-content-center align-items-center">
            <p className="card-item d-flex flex-column flex-wrap text-center text-break">Miner Address: {address}</p>
            <p className="card-item">Distance: {isMeters?distance.toFixed(2):metersToMile(distance).toFixed(2)} {unit}</p>
            <p className="card-item">{geocode.short_street}</p>
            <p className="card-item">{geocode.short_city}, {geocode.short_state}</p>
            <div className="card-item mb-2" onClick={handleClick} ><Rewards {...props} rewards={rewards} timeFrame={timeFrame} clicked={clicked}/></div>
            <p className={status.online==="offline"?"card-item bg-danger rounded p-1":"card-item rounded p-1 bg-success"}>{status.online}</p>
            <TimeFrame data={fetchData} setTimeFrame={setTimeFrame} timeFrame={timeFrame} />

            </div>
        </div>
    )
}
