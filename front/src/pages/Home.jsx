import "./Home.css";
import Line from "../components/Line";
function Home() {
  return (
    <div className="Home">
      <div className="title-container fx-starlight">
        <div className="title">
          Rest here traveler. <br />
          Welcome to my portfolio,
          <br /> <span>Zaki Djaba</span>
        </div>
        <Line length={200} />
        <div className="subtitle">
          Software Engineering Student • Fullstack Web Developper
        </div>
      </div>
    </div>
  );
}

export default Home;
