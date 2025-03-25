import patronPic from  "../assets/patron.jpg";
import chairpersonPic from "../assets/chairperson-pic.jpg";
import viceChairPic from "../assets/vice-chair-person-pic.jpg";
import secretaryPic from "../assets/secretary-pic.jpg";
import treasurerPic from  "../assets/treasurer-pic.jpg";
import cyberSecurityLead from "../assets/cybersecurity-lead-pic.jpg";
import uiUxLead from "../assets/ui-ux-lead-pic.jpg";
import webDevLead from "../assets/web-dev-lead.jpg";
import mobileDevLead from  "../assets/mobile-dev-lead.jpg";
import cloudEngineeringLead from "../assets/cloud-engineering-lead.jpg";
import powerPlatformLead from "../assets/power-platform-lead.jpg";
interface LeadershipItem {
    leaderImage: string;
    leaderName: string;
    leaderPosition: string;
    leaderBio: string;
    socialMedia: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      instagram?: string;
    };
  }
  
  const leadershipData: LeadershipItem[] = [
    {
      leaderImage: patronPic,
      leaderName: "Dr. John Ndia",
      leaderPosition: "Patron of the Club",
      leaderBio: "A visionary leader with a passion for fostering innovation and mentorship in the tech community. Dr. Ndia brings years of experience in academia and industry, inspiring members to push boundaries and achieve excellence.",
      socialMedia: {
        linkedin: "https://linkedin.com/john-ndia",
        twitter: "https://twitter.com/john-ndia",
        facebook: "https://facebook.com/john-ndia",
      },
    },
    {
      leaderImage: chairpersonPic,
      leaderName: "Victory Njeri",
      leaderPosition: "Chairperson of the Club",
      leaderBio: "A dynamic leader dedicated to driving the club's mission and empowering members to achieve their full potential. Victory is known for her strategic thinking and ability to bring people together to achieve common goals.",
      socialMedia: {
        linkedin: "https://linkedin.com/victory-njeri",
        twitter: "https://twitter.com/victory-njeri",
        facebook: "https://facebook.com/victory-njeri",
        instagram: "https://instagram.com/victory-njeri",
      },
    },
    {
      leaderImage: viceChairPic,
      leaderName: "Allan Muhari",
      leaderPosition: "Vice Chairperson of the Club",
      leaderBio: "A strategic thinker with a knack for problem-solving and a commitment to fostering collaboration within the club. Allan plays a key role in planning and executing the club's initiatives, ensuring their success.",
      socialMedia: {
        linkedin: "https://linkedin.com/allan-muhari",
        twitter: "https://twitter.com/allan-muhari",
      },
    },
    {
      leaderImage: secretaryPic,
      leaderName: "Bridget Gitonga",
      leaderPosition: "Secretary of the Club",
      leaderBio: "An organized and detail-oriented leader who ensures the smooth operation of the club's activities. Bridget is responsible for maintaining records, coordinating meetings, and keeping everyone on track.",
      socialMedia: {
        linkedin: "https://linkedin.com/bridget-gitonga",
        twitter: "https://twitter.com/bridget-gitonga",
      },
    },
    {
      leaderImage: treasurerPic,
      leaderName: "Ruth Mutisya",
      leaderPosition: "Treasurer of the Club",
      leaderBio: "A financial expert who manages the club's resources with integrity and transparency. Ruth ensures that the club's finances are well-organized and used effectively to support its mission.",
      socialMedia: {
        linkedin: "https://linkedin.com/ruth-mutisya",
        instagram: "https://instagram.com/ruth-mutisya",
      },
    },
    {
      leaderImage: cyberSecurityLead,
      leaderName: "Webster Ifedha",
      leaderPosition: "Cyber Security Lead",
      leaderBio: "A cybersecurity enthusiast with a passion for protecting digital assets and educating others on best practices. Webster leads initiatives to raise awareness about cybersecurity and build secure systems.",
      socialMedia: {
        linkedin: "https://linkedin.com/webster-ifedha",
        twitter: "https://twitter.com/webster-ifedha",
        facebook: "https://facebook.com/webster-ifedha",
        instagram: "https://instagram.com/webster-ifedha",
      },
    },
    {
      leaderImage: uiUxLead,
      leaderName: "Manase Gunga",
      leaderPosition: "UI/UX Lead",
      leaderBio: "A creative designer who specializes in crafting intuitive and user-friendly digital experiences. Manase is passionate about design thinking and ensuring that users have seamless interactions with technology.",
      socialMedia: {
        linkedin: "https://linkedin.com/manase-gunga",
        twitter: "https://twitter.com/manase-gunga",
        facebook: "https://facebook.com/manase-gunga",
        instagram: "https://instagram.com/manase-gunga",
      },
    },
    {
      leaderImage: webDevLead,
      leaderName: "Carolyne Githenduka",
      leaderPosition: "Web Development Lead",
      leaderBio: "A web development expert with a passion for building scalable and innovative web solutions. Carolyne mentors members in web technologies and leads projects that showcase the club's technical prowess.",
      socialMedia: {
        linkedin: "https://linkedin.com/carolyne-githenduka",
        twitter: "https://twitter.com/carolyne-githenduka",
        facebook: "https://facebook.com/carolyne-githenduka",
        instagram: "https://instagram.com/carolyne-githenduka",
      },
    },
    {
      leaderImage: mobileDevLead,
      leaderName: "Stanley Amunze",
      leaderPosition: "Mobile Apps Development Lead",
      leaderBio: "A mobile app developer with a passion for creating seamless and engaging user experiences. Stanley leads the club's mobile development initiatives, helping members build cutting-edge apps.",
      socialMedia: {
        linkedin: "https://linkedin.com/stanley-amunze",
        twitter: "https://twitter.com/stanley-amunze",
        facebook: "https://facebook.com/stanley-amunze",
        instagram: "https://instagram.com/stanley-amunze",
      },
    },
    {
      leaderImage: cloudEngineeringLead,
      leaderName: "Paul Karanja",
      leaderPosition: "Cloud Engineering Lead",
      leaderBio: "A cloud computing expert with a focus on building scalable and secure cloud infrastructure. Paul is passionate about leveraging cloud technologies to solve complex problems and drive innovation.",
      socialMedia: {
        linkedin: "https://linkedin.com/paul-karanja",
        twitter: "https://twitter.com/paul-karanja",
        facebook: "https://facebook.com/paul-karanja",
        instagram: "https://instagram.com/paul-karanja",
      },
    },
    {
      leaderImage: powerPlatformLead,
      leaderName: "Evyonn Mbithe",
      leaderPosition: "Power Platform Lead",
      leaderBio: "A Power Platform specialist with a passion for automating processes and building innovative solutions. Evyonn empowers members to harness the power of low-code platforms to create impactful applications.",
      socialMedia: {
        linkedin: "https://linkedin.com/evyonn-mbithe",
        twitter: "https://twitter.com/evyonn-mbithe",
        facebook: "https://facebook.com/evyonn-mbithe",
        instagram: "https://instagram.com/evyonn-mbithe",
      },
    },
  ];
  
  export default leadershipData;