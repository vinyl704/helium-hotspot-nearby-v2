import { useEffect } from "react"

export default function TimeFrame({data,setTimeFrame,timeFrame}){
    const handleChange=(e)=>{
        e.preventDefault()
        e.stopPropagation()

        setTimeFrame(timeFrame)
    }

    useEffect(()=>data,[timeFrame])
    return(
        <select className="form-control-lg" onChange={handleChange} value={timeFrame}>
            <option value="1">1 Day</option>
            <option value="7">7 Days</option>
            <option value="14">14 Days</option>
            <option value="30">30 Days</option>
        </select>
    )
}
