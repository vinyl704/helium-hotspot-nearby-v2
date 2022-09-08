export default function Unit({setUnit}){
    
return(
    <select className="form-control-lg mt-3" onChange={(e)=>setUnit(e.target.value)}>
    <option value="Meters">Meters</option>
    <option value="Miles">Miles</option>
  </select>
  )
}