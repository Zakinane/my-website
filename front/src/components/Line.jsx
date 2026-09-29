import "./Line.css";

function Line({ length = 400, color = "#b2622c" }) {
  return (
    <div
      className="Line"
      style={{
        "--line-length": `${length}px`,
        "--line-color": color,
      }}
    />
  );
}

export default Line;