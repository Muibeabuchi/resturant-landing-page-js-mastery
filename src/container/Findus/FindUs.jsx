import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__wrapper app__bg section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          {" "}
          20b prince Onunwo street offf Aker road port-harcourt
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon-Fri: 10am - 02:00am</p>
        <p className="p__opensans">Sat-Sun: 10am - 03:00am</p>
        <button type="button" className="custom__button">
          View Us
        </button>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
