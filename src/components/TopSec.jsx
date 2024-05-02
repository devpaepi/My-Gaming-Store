import "./TopSec.css";
import TempCarou from "./tempCarou";

const TopSec = () => {
  return (
    <section className="top-sec-con">
      <section className="greetings">
        <span className="g-span">Hello 👋!</span>
        <span className="g-span">Welcome To Paepi Store</span>
      </section>
      <section className="carousel">
        <TempCarou />
      </section>
    </section>
  );
};

export default TopSec;
