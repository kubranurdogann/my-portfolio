import coffee from "./images/coffee_icon.png";

function CoffeeButton() {
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-circle coffee-button"
      
    >
      <svg
        viewBox="0 0 200 200"
        className="position-absolute"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100,100
         m -70,0
         a 70,70 0 1,1 140,0
         a 70,70 0 1,1 -140,0"
          />
        </defs>
        <text
          fill="black"
          fontSize="17"
          fontWeight="600"
          style={{ letterSpacing: "1px" }}
        >
          <textPath
            href="#circlePath"
            startOffset="25%" // 🔧 yazıyı yukarı taşı, görünür ve ortalı hale getir
            textAnchor="middle"
          >
            Buy me a cup of coffee
          </textPath>
        </text>
      </svg>

      <img
        src={coffee}
        alt="coffee-icon"
        className="img-fluid logo-hover"
        width="70"
      />
    </div>
  );
}

export default CoffeeButton;
