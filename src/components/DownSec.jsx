import "./DownSec.css";
// import Product from "./products/product";
// import EachProduct from "../each.json";
import Card from "./products/card";

const DownSec = () => {
  // const i = 2;
  return (
    <div className="down-sec">
      {/* <Product /> */}
      <Card className="items" />
      <Card className="items" />
      <Card className="items" />
      <Card className="items" />
    </div>
  );
};

export default DownSec;
