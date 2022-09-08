import React,{ useState } from "react";
import Rewards from "./Rewards";

export default function Miner(props){
    
    const {distance,
        status,
        //payer,
        //owner,
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

/*

{
    "lng": -81.11039573529595,
    "lat": 35.354320652801285,
    "distance": 1423.61193408,
    "timestamp_added": "2022-01-24T16:50:47.000000Z",
    "status": {
        "timestamp": null,
        "online": "offline",
        "listen_addrs": null,
        "height": null
    },
    "reward_scale": null,
    "payer": "13MS2kZHU4h6wp3tExgoHdDFjBsb9HB9JBvcbK9XmfNyJ7jqzVv",
    "owner": "14e2f8JgraJqZrRcjJFYbVx3tpwdYrWSFTXeur2LhFK7pBgUHKu",
    "nonce": 1,
    "name": "silly-daisy-dove",
    "mode": "full",
    "location_hex": "8844d8630dfffff",
    "location": "8c44d8630c255ff",
    "last_poc_challenge": null,
    "last_change_block": 1196473,
    "geocode": {
        "short_street": "Dogwood Ln",
        "short_state": "NC",
        "short_country": "US",
        "short_city": "Stanley",
        "long_street": "Dogwood Lane",
        "long_state": "North Carolina",
        "long_country": "United States",
        "long_city": "Stanley",
        "city_id": "c3RhbmxleW5vcnRoIGNhcm9saW5hdW5pdGVkIHN0YXRlcw"
    },
    "gain": 12,
    "elevation": 0,
    "block_added": 1196459,
    "block": 1506896,
    "address": "11hW5GTuo64wXDrXxJqRwmYuABfqu8JL7MPPLXeLo98qgzF1BMC"
}

*/