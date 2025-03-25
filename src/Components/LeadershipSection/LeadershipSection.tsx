import "./LeadershipSection.css";
import TitleRight from "../../Components/TitleRight/TitleRight";
import leadershipData from "../../Data/LeadershipData";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

interface LeaderCardProps {
  leaderPic: string;
  leaderName: string;
  leaderPosition: string;
  leaderBiography: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

function LeadershipSection() {
  return (
    <section className="leadership-section">
      <TitleRight
        subTitle="the minds behind the mission"
        mainTitle="leadership"
      />
      <div className="leadership-cards">
        {leadershipData.map((data) => (
          <LeaderCard
            key={data.leaderName}
            leaderPic={data.leaderImage}
            leaderName={data.leaderName}
            leaderPosition={data.leaderPosition}
            leaderBiography={data.leaderBio}
            socialMedia={data.socialMedia}
          />
        ))}
      </div>
    </section>
  );
}

function LeaderCard({
  leaderPic,
  leaderName,
  leaderPosition,
  leaderBiography,
  socialMedia,
}: LeaderCardProps) {
  return (
    <div className="leader-card">
      <div className="leader-card-img-cont">
        <img src={leaderPic} alt="" />
      </div>

      <div className="leader-details">
        <p className="leader-name">{leaderName}</p>
        <p className="leader-position">{leaderPosition}</p>
        <p className="leader-biography">{leaderBiography}</p>
        <div className="leader-social-links">
          {socialMedia.linkedin && (
            <Link to={"#"}>
              <FaLinkedin />
            </Link>
          )}
          {socialMedia.twitter && (
            <Link to={"#"}>
              <FaTwitter />
            </Link>
          )}
          {socialMedia.facebook && (
            <Link to={"#"}>
              <FaFacebook />
            </Link>
          )}
          {socialMedia.instagram && (
            <Link to={"#"}>
              <FaInstagram />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeadershipSection;
