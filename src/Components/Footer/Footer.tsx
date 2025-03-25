import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface IconAndLabelProps {
  icon: any;
  label: string;
}

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <FooterCol1 />

        <FooterCol2 />

        <FooterCol3 />

        <FooterCol4 />
      </footer>

      <div className="copyright">
        <p>&copy; 2025. Built by Levis.</p>
      </div>
    </div>
  );
}

function FooterCol1() {
  return (
    <div className="footer-col">
      <p className="footer-title">our tracks</p>

      <div className="links-cont">
        <Link to={"#"}>cyber security</Link>
        <Link to={"#"}>ui/ux design</Link>
        <Link to={"#"}>web development</Link>
        <Link to={"#"}>mobile apps development</Link>
        <Link to={"#"}>cloud engineering</Link>
        <Link to={"#"}>power platform</Link>
      </div>
    </div>
  );
}

function FooterCol2() {
  return (
    <div className="footer-col">
      <p className="footer-title">leads</p>

      <div className="links-cont">
        <Link to={"#"}>webster ifedha</Link>
        <Link to={"#"}>manase gunga</Link>
        <Link to={"#"}>carolyn githenduka</Link>
        <Link to={"#"}>stanley amunze</Link>
        <Link to={"#"}>paul karanja</Link>
        <Link to={"#"}>evyon mbithe</Link>
      </div>
    </div>
  );
}

function FooterCol3() {
  return (
    <div className="footer-col">
      <p className="footer-title">reach us</p>

      <IconAndLabel icon={<FaPhoneAlt />} label="+254720875598" />

      <IconAndLabel icon={<FaEnvelope />} label="mutc@gmail.com" />
    </div>
  );
}

function FooterCol4() {
  return (
    <div className="footer-col">
      <p className="footer-title">socials</p>

      <SocialLinksGroup />
    </div>
  );
}

function IconAndLabel({ icon, label }: IconAndLabelProps) {
  return (
    <div className="icon-and-label">
      {icon}
      <Link to={"#"}>{label}</Link>
    </div>
  );
}

function SocialLinksGroup() {
  return (
    <div className="social-links-group">
      <Link to={"#"}>
        <FaFacebook />
      </Link>
      <Link to={"#"}>
        <FaXTwitter />
      </Link>
      <Link to={"#"}>
        <FaInstagram />
      </Link>
    </div>
  );
}

export default Footer;
