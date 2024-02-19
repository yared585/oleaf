const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        {/*  <h2 style={{ color: "blue", textAlign: "center" }}>
          Welcome to Our Car Rental Service
        </h2> */}
      </div>
      <div className="featured-cars">
        <div className="car">
          <img src={require("../images/Chevrolet/suburban1.jpg")} alt="Car 1" />
          <div className="overlay-text">
            <p>Let's start our journey together.</p>
          </div>
          <p className="description"></p>
          <ul className="highlights"></ul>
        </div>
      </div>
      <h2
        style={{ textAlign: "center", paddingTop: "550px", fontWeight: "bold" }}
      >
        OLEAF LLC CHAUFFEURED TRANSPORTATION
      </h2>

      <div
        style={{ textAlign: "center", width: "70%", margin: "auto" }}
        className="service"
      >
        <p style={{ lineHeight: "1.5" }}>
          provides premier Black car and Black SUV services in Washington DC.
          Besides rides to the airport, people trust us for all kinds of events
          like going to hotels, weddings, meetings, and family get-togethers. We
          make sure to be on time, act professionally, and provide personalized
          service that goes beyond what you expect, meeting all your needs.
        </p>
      </div>
      <div className="car2">
        <div  style={{marginTop: "50px",lineHeight: "1.5",width: "40%",marginRight: "auto",marginLeft: "auto", }}>
           <p>
            Experience the thrill of the open road with the iconic Benz. Its
            powerful engine, sleek design, and agile handling make it a favorite
            among performance enthusiasts.
          </p>
        </div>
        <img src={require("../images/Mercedes/eClass.png")} alt="Car 2" />
      </div>

  <div style={{ textAlign: "center", paddingTop: "100px" }} className="makeReservation">
  <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <button>RESERVE NOW</button>
  </a>
</div>

     {/* Gallery section */}
     <div className="gallery">
        {/* Gallery images go here */}
      </div>

      {/* About Us section */}
      <div className="about">
        <h2></h2>
      </div>

      {/* Services Offered section */}
      <div className="services">
        {/* Services offered list goes here */}
      </div>

      {/* Special Offers or Promotions section */}
      <div className="special-offers">
        {/* Special offers or promotions content goes here */}
      </div>

      {/* Contact Form section */}
      <div className="contact-form">
        {/* Contact form goes here */}
      </div>

    </div>
  );
};

export default Home;
