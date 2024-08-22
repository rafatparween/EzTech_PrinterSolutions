"use client"
import "./supportoption.css"; // Import the external CSS file

const SupportOptions = () => {
  return (
    <>
      <div className="container">
        <h2 className="moresupport">More support options for this topic</h2>
        <div className="support-options">

          <div className="option-card">
            <div className="option-header software">
              <img src="img1.webp"/>
            </div>
          </div>

          <div className="option-card">
            <img src="img2.webp"/>

          </div>
          <div className="option-card">
          <img src="img3.webp"/>

          </div>

        </div>
      </div>
    </>
  );
};

export default SupportOptions;
