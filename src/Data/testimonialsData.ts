import johnDoePic from "../assets/john-doe.jpg" 
import janeSmithPic from "../assets/jane-smith.jpg"
import alexJohnsonPic from "../assets/alex-johnson.jpg"

interface TestimonialItem {
    authorPic: string;
    testimonialsCardExcerpt: string;
    authorName: string;
    authorPosition: string;
  }

  const testimonialsData: TestimonialItem[] = [
    {
      authorPic: johnDoePic,
      testimonialsCardExcerpt:
        "Joining this tech club has been a game-changer for me. The workshops and hackathons have helped me grow both personally and professionally. I’ve gained hands-on experience with cutting-edge technologies and built projects that I’m truly proud of.",
      authorName: "John Okello",
      authorPosition: "web developer",
    },
    {
      authorPic: janeSmithPic,
      testimonialsCardExcerpt:
        "The community here is amazing! I've learned so much and made lifelong friends who share the same passion for technology. The collaborative environment and mentorship opportunities have been invaluable in shaping my career as a cloud engineer.",
      authorName: "Jane Cheptoo",
      authorPosition: "cloud engineer",
    },
    {
      authorPic: alexJohnsonPic,
      testimonialsCardExcerpt:
        "This club has given me the confidence to pursue my dreams in tech. The mentors are incredibly supportive and knowledgeable, and the hands-on projects have helped me build a strong portfolio. I’m now more prepared than ever to tackle real-world challenges in UI/UX design.",
      authorName: "Alex Ndung'u",
      authorPosition: "UI/UX Designer",
    },
  ];
  
  export default testimonialsData;