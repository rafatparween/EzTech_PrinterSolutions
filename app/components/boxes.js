import "./boxes.css"

function Boxes() {
  return (
    <div className="container">
      <h1 className="title">Select Your Printer Model</h1>
      <button className="downloadButton">Download Your Printer Drivers</button>
      <div className="cardContainer">
        <div className="card">HP</div>
        <div className="card">Brother</div>
        <div className="card">Epson</div>
      </div>
      <div className="helpSection">
        <h2 className="needhelp">Need Help For Printer & Scanner</h2>
        <p>Call Toll Free & Live Chat With Expert.</p>
        <button className="chatButton">Chat Now</button>
      </div>
    </div>
  );
}
export default Boxes;
