export default function Rewards({ address, timeFrame, clicked, rewards }) {
  return clicked ? (
    <div className="bg-info p-2 rounded">
      <span>{rewards}</span> HNT in {timeFrame} {timeFrame > 1 ? "days" : "day"}
    </div>
  ) : (
    <div className="bg-info p-2 rounded">Click to see rewards</div>
  );
}
