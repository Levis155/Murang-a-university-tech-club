import "./TracksSection.css";
import TitleRight from "../TitleRight/TitleRight";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import tracksData from "../../Data/tracksData";

interface TracksCardProps {
  trackTitle: string;
  trackExcerpt: string;
  trackImg: string;
  className: string;
}

interface InputProps {
  labelFor: string;
  label: string;
  inputType: string;
  id: string;
  placeHolder: string;
}

function TracksSection() {
  return (
    <>
      <section className="tracks-section">
        <div className="tracks-section-title">
          <TitleRight subTitle="discover your path" mainTitle="tracks" />
        </div>

        <div className="track-cards-container">
          {tracksData.map((data) => (
            <TrackCard
              key={data.trackTitle}
              trackTitle={data.trackTitle}
              trackExcerpt={data.trackExcerpt}
              trackImg={data.trackImage}
              className={data.className}
            />
          ))}
        </div>
      </section>

      <section className="registration-section">
        <div className="registration-title">
          <Title subTitle="become a member" mainTitle="registration" />
        </div>

        <form action="" className="form-container">
          <div className="form-row">
            <LongInput
              labelFor="name-input"
              label="full name"
              inputType="text"
              id="name-input"
              placeHolder="enter your full name"
            />
          </div>
          <div className="form-row">
            <ShortInput
              labelFor="email-input"
              label="email"
              inputType="text"
              id="email-input"
              placeHolder="enter your email address"
            />
            <ShortInput
              labelFor="course-input"
              label="course"
              inputType="text"
              id="course-input"
              placeHolder="enter your course"
            />
          </div>
          <div className="form-row">
            <ShortInput
              labelFor="year-input"
              label="year of study"
              inputType="number"
              id="year-input"
              placeHolder="enter your year of study"
            />
            <TracksSelect />
          </div>

          <Link to={"#"}>register</Link>
        </form>
      </section>
    </>
  );
}

function TrackCard({
  trackTitle,
  trackExcerpt,
  trackImg,
  className,
}: TracksCardProps) {
  return (
    <div className={className}>
      <div className="track-card-details">
        <p className="track-card-title">{trackTitle}</p>
        <p className="track-card-excerpt">{trackExcerpt}</p>
        <div className="track-card-links-cont">
          <Link className="enroll-link" to={"#"}>
            enroll now <FaArrowRightLong />
          </Link>
          <Link className="learn-link" to={"#"}>
            learn more{" "}
          </Link>
        </div>
      </div>

      <div className="track-card-img">
        <div className="track-card-img-wrapper">
          <img src={trackImg} alt="" />
        </div>
      </div>
    </div>
  );
}

function LongInput({
  labelFor,
  label,
  inputType,
  id,
  placeHolder,
}: InputProps) {
  return (
    <div className="long-input">
      <label htmlFor={labelFor}>{label}</label>
      <input type={inputType} id={id} placeholder={placeHolder} />
    </div>
  );
}

function ShortInput({
  labelFor,
  label,
  inputType,
  id,
  placeHolder,
}: InputProps) {
  return (
    <div className="short-input">
      <label htmlFor={labelFor}>{label}</label>
      <input type={inputType} id={id} placeholder={placeHolder} />
    </div>
  );
}

function TracksSelect() {
  return (
    <div className="tracks-select">
      <label htmlFor="track-input">preferred track</label>
      <select name="tracks" id="tracks-select">
        <option value="cyber security">cyber security</option>
        <option value="uiux">ui/ux design</option>
        <option value="webdev">web development</option>
        <option value="mobapps">mobile apps development</option>
        <option value="cloud">cloud engineering</option>
        <option value="power">power platform</option>
      </select>
    </div>
  );
}
export default TracksSection;
