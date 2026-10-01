import "./Work.css";
import Line from "../components/Line";
function Work() {
  return (
    <div className="Work">
      <div className="title-container fx-starlight">
        <div className="title">The Hall of Works</div>
        <div className="subtitle">A collection of my works and projects</div>
        <Line length={200}/>
      </div>
    </div>
  );
}

export default Work;
