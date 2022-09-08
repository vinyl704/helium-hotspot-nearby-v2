import React,{useState,useEffect} from "react";

export default function Rewards({address,timeFrame,clicked}){
    const [rewards,setRewards] = useState('');
    

    
    if(clicked === true){
        fetch(`https://api.helium.io/v1/hotspots/${address}/rewards/sum?min_time=-${timeFrame}%20day`,{mode:'cors'})
        .then(res=>res.json())
        .then(data=>data.data)
        .then(reward=>reward.total)
        .then(setRewards)
    }
        
    

    return clicked
            ?(<div className="bg-info p-2 rounded"><span>{rewards}</span> HNT in {timeFrame} {timeFrame>1?'days':'day'}</div>)
            :<div className="bg-info p-2 rounded">Click to see rewards</div>
        
    
}

//https://api.helium.io/v1/hotspots/11hW5GTuo64wXDrXxJqRwmYuABfqu8JL7MPPLXeLo98qgzF1BMC/rewards/sum?min_time=-1%20day