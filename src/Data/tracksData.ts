import cyberSecurity from "../assets/cybesecurity.jpg";
import uiUX from "../assets/ui-ux.jpg";
import webDev from "../assets/webdev.jpg";
import mobileDev from"../assets/mobiledev.jpg";
import cloudEngineering from "../assets/cloudengineering.jpg";
import powerPlatform from "../assets/power-platform.jpg";


interface TrackItem {
    id: number;
    trackTitle: string;
    trackExcerpt: string;
    trackImage: string;
  }
  
  const tracksData: TrackItem[] = [
    {
      id: 1,
      trackTitle: "Cyber Security",
      trackExcerpt:
        "Dive into the critical aspects of protecting systems, networks, and data from cyber threats. Learn about security protocols, ethical hacking, encryption, and threat analysis through hands-on projects and real-world scenarios.",
      trackImage: cyberSecurity,
    },
    {
      id:2,
      trackTitle: "UI/UX Design",
      trackExcerpt:
        "Explore the principles of creating user-friendly and visually appealing interfaces. Learn user research, wireframing, prototyping, and usability testing to design intuitive and effective user experiences.",
      trackImage: uiUX,
    },
    {
      id:3,
      trackTitle: "Web Development",
      trackExcerpt:
        "Gain comprehensive knowledge in building dynamic and responsive websites. Learn front-end and back-end development, and develop full-stack web applications through hands-on projects and collaborative coding sessions.",
      trackImage: webDev,
    },
    {
      id:4,
      trackTitle: "Mobile Apps Development",
      trackExcerpt:
        "Learn to design and build applications for mobile devices. Gain proficiency in Android, iOS, and cross-platform development, and create user-friendly and efficient mobile apps through hands-on projects.",
      trackImage: mobileDev,
    },
    {
      id:5,
      trackTitle: "Cloud Engineering",
      trackExcerpt:
        "Dive into the world of cloud computing and its applications. Learn to design, deploy, and manage scalable and secure cloud infrastructures using AWS, Google Cloud, and Microsoft Azure.",
      trackImage: cloudEngineering,
    },
    {
      id:6,
      trackTitle: "Power Platform",
      trackExcerpt:
        "Explore Microsoft's Power Platform to create custom business applications, automate workflows, analyze data, and build chatbots. Gain practical experience in leveraging these tools to enhance business processes.",
      trackImage: powerPlatform,
    },
  ];
  
  export default tracksData;