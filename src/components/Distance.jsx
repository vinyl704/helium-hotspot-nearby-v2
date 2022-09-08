export default function Distance(props) {
  const { distance, setDistance, unit } = props;
  const handleChange = (e) => {
    e.preventDefault();
    setDistance(unit==="Meters"?e.target.value:e.target.value*1609.34);
  };
  return (
    <div className="input-group mb-3 justify-content-center w-50">
      <input aria-label="Distance" aria-describedby="basic-addon2" className="form-control form-control-lg text-center" type="number" name="distance" id="distance" value={unit==="Meters"?distance:distance/1609.34} onChange={handleChange}/>
      <span className="input-group-text" id="basic-addon2">{unit}</span>
    </div>
  );
}


