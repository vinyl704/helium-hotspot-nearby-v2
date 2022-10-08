export default function TimeFrame({ handleChange }) {
  return (
    <select className="form-control-lg" onChange={handleChange}>
      <option value="1">1 Day</option>
      <option value="7">7 Days</option>
      <option value="14">14 Days</option>
      <option value="30">30 Days</option>
    </select>
  );
}
