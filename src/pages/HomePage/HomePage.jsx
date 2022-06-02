import "./HomePage.css";
import RightNav from "../../components/RightNav/RightNav";
import Content from "../../components/Content/Content";

function HomePage() {
  return (
    <div>
      <div className="home-page__row">
        <div className="home-page__news">
          <Content />
        </div>
        <RightNav className="home-page__user" />
      </div>
    </div>
  );
}

export default HomePage;
