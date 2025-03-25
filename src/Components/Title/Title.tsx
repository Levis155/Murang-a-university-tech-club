import "./Title.css";

interface TitleProps {
  subTitle: string;
  mainTitle: string;
}

function Title({ subTitle, mainTitle }: TitleProps) {
  return (
    <div className="title-cont">
      <h6 className="sub-title">{subTitle}</h6>
      <div className="main-title-cont">
        <p className="main-title">{mainTitle}</p>
        <hr />
      </div>
    </div>
  );
}

export default Title;
