const element = (
  <div className="main-container">
    <h1 className="congrats-heading">Congratulations</h1>
    <div className="bttom-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img1"
      />
      <h1>Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram{" "}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img1"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
