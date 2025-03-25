import "./TestimonialsSection.css";
import TitleRight from "../TitleRight/TitleRight";
import testimonialsData from "../../Data/testimonialsData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface TestimonialsCardProps {
  authorPic: string;
  testimonialsCardExcerpt: string;
  authorName: string;
  authorPosition: string;
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <TitleRight subTitle="what our members say" mainTitle="testimonials" />
      <TestimonialCardsCont />
    </section>
  );
}

function TestimonialCardsCont() {
  return (
    <div className="testimonial-cards-cont">
      {testimonialsData.map((data) => (
        <TestimonialsCard
          key={data.authorName}
          authorPic={data.authorPic}
          testimonialsCardExcerpt={data.testimonialsCardExcerpt}
          authorName={data.authorName}
          authorPosition={data.authorPosition}
        />
      ))}

      <button className="testimonials-right-button">
        <FaAngleLeft />{" "}
      </button>
      <button className="testimonials-left-button">
        <FaAngleRight />
      </button>
    </div>
  );
}

function TestimonialsCard({
  authorPic,
  testimonialsCardExcerpt,
  authorName,
  authorPosition,
}: TestimonialsCardProps) {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card-top-row">
        <div className="author-pic-cont">
          <img src={authorPic} alt="" />
        </div>
      </div>

      <div className="testimonials-card-middle-row">
        <p className="testimonials-card-excerpt">
          <span>"</span>
          {testimonialsCardExcerpt}
          <span>"</span>
        </p>
      </div>

      <div className="testimonials-card-bottom-row">
        <p className="author-name">{authorName}</p>
        <p className="authors-credentials">{authorPosition}</p>
      </div>
    </div>
  );
}

export default TestimonialsSection;
