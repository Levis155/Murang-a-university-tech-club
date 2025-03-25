import aboutData from "../../Data/aboutData";
import "./AboutSection.css";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/about-image.jpg"

interface AboutCardProps {
  aboutCardTitle: string;
  aboutCardExcerpt: string;
}

function AboutSection() {
  return (
    <section className="about-section">
      <AboutLeft />
      <AboutRight />
    </section>
  );
}

function AboutLeft() {
  return (
    <div className="about-left">
      <Title subTitle="about" mainTitle="mutc" />

      {aboutData.map((data) => (
        <AboutCard
          key={data.aboutTitle}
          aboutCardTitle={data.aboutTitle}
          aboutCardExcerpt={data.aboutExcerpt}
        />
      ))}

      <div className="about-link-cont">
        <Link to={"#"}>learn more</Link>
      </div>
    </div>
  );
}

function AboutCard({ aboutCardTitle, aboutCardExcerpt }: AboutCardProps) {
  return (
    <div className="about-card">
      <h6 className="about-sub-title">{aboutCardTitle}</h6>
      <p className="about-card-excerpt">{aboutCardExcerpt}</p>
    </div>
  );
}

function AboutRight() {
  return (
    <div className="about-right">
      <div className="about-image-cont">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
}

export default AboutSection;
