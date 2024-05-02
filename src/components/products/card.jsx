import "./card.css";

// import { useState } from "react";
const card = () => {
  // const [showFullDescription, setShowFullDescription] = useState(false);

  //   let description = job.description;

  //   if (!showFullDescription) {
  //     description = description.substring(0, 90) + "...";
  //   }

  return (
    <div className="product-card">
      <img src="/src/components/products/pimg.png" className="image" />
      <div className="title">FF ANDROID SENSI </div>
      <div className="device">
        <span style={{ color: "#9ca3af" }}>Device :</span>
        <span>Redmi Note 12</span>
      </div>
      <div className="price">
        <span style={{ color: "#9ca3af" }}>Price :</span>
        <span> Watch 3 Ads</span>
      </div>
      <button>Watch ADS</button>
    </div>
  );
};

export default card;
