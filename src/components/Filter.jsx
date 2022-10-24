export default function Filter(props){
   // console.log(props)

    const handleChange = (e) => {
        if(e.target.checked === true){
            console.log("button should be checked")
        props.setFilter(prev => ({...prev,[e.target.name]:e.target.checked}))
    }

        if(e.target.checked === false){
            return props.setFilter(prev =>{
                console.log("button should be unchecked",Array.isArray(prev))
            })
        }
    }

    //console.log(props.filter)
    return(
        <>
        <label htmlFor="online" className="text-white">Show Online Only?&nbsp;</label>
        <input onChange={handleChange} type="checkbox" name="online" id="online" value={`#`}/>
        {/* <label htmlFor="somethingElse">Show Online Only?</label>
        <input onChange={handleChange} type="checkbox" name="somethingElse" id="somethingElse" value={`#`}/>
        <label htmlFor="other">Show Online Only?</label>
        <input onChange={handleChange} type="checkbox" name="other" id="other" value={`#`}/> */}
        </>
    )
}