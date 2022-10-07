import { wait } from "@testing-library/user-event/dist/utils";
import React,{useState,useEffect} from "react";

export default function Rewards({address,timeFrame,clicked,rewards}){
  
    



    return clicked
            ?(<div className="bg-info p-2 rounded"><span>{rewards}</span> HNT in {timeFrame} {timeFrame>1?'days':'day'}</div>)
            :<div className="bg-info p-2 rounded">Click to see rewards</div>
        
    
}