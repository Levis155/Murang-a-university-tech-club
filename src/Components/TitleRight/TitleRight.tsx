import "./TitleRight.css";

interface TitleRightProps {
  subTitle: string;
  mainTitle: string;
}

function TitleRight({ subTitle, mainTitle }: TitleRightProps) {
  return (
    <div className="title-right-cont">
      <h6 className="sub-title-right">{subTitle}</h6>
      <div className="main-title-right-cont">
        <p className="main-title-right">{mainTitle}</p>
        <hr />
      </div>
    </div>
  );
}

export default TitleRight;
