import "./HeroSection.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-image.jpg"

function HeroSection() {
  return (
    <section className="hero-section">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="hero-left">
      <p className="hero-tagline">
        code.
        <br /> create. <br /> innovate.
      </p>
      <p className="hero-excerpt">
        From coding workshops to hackathons, we're here to fuel your passion for
        innovation. Join a community of thinkers, builders, and dreamers shaping
        the future of tech!
      </p>
      <Link to={"#"}>join us</Link>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="hero-right">
      <img src={heroImg} alt="" />
    </div>
  );
}

export default HeroSection;
