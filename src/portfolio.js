/* Change this file to get your personal Porfolio */
import GoLang from "./assests/images/skills/go.svg";
import Docker from "./assests/images/skills/docker.svg";
import Redis from "./assests/images/skills/redis.svg";
import Mongo from "./assests/images/skills/mongo.svg";
import Kafka from "./assests/images/skills/kafka.svg";
import AWS from "./assests/images/skills/aws.svg";
import GCP from "./assests/images/skills/gcp.svg";
import Kubernetes from "./assests/images/skills/kubernetes.svg";
import Postresql from "./assests/images/skills/postgresql.svg";

import Vscode from "./assests/images/skills/vscode.svg";
import Linux from "./assests/images/skills/linux.svg";
import Postman from "./assests/images/skills/postman.svg";
import Git from "./assests/images/skills/git.svg";
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amol Gaikwad",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Amol Gaikwad Portfolio",
    type: "website",
    url: "http://AmolGaikwad.com/",
  },
};

//Home Page
const greeting = {
  title: "Amol Gaikwad",
  logo_name: "Amol Gaikwad",
  nickname: "Backend Engineer",
  subTitle:
    "3.5 Years of professional experience Building efficient backend solutions with Golang",
  resumeLink:
    "https://drive.google.com/file/d/1erR1HAR6YgfQOwo2_n9LPfjdAxX21pvs/view?usp=sharing",
  portfolio_repository: "https://github.com/gopheramol",
  githubProfile: "https://github.com/gopheramol?tab=projects",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // linkedin: "https://www.linkedin.com/in/Amol-Gaikwad-88710b138/",
  // gmail: "AmolGaikwad98@gmail.com",
  // gitlab: "https://gitlab.com/AmolGaikwad98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Amol_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/gopheramol",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amolasg/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCC5rFGMyebkCLPA6PDETINQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:amol.asg@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/amolasg",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Backend, Databases, Caching",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience in Software Design and Developing enterprise applications",
        "⚡ Strong understanding of <b>Goroutines, Channels, and TDD</b> in Golang.",
        "⚡ Experience in developing <b>REST, and gRPC APIs for Monolithic and Microservices architecture </b> using Golang",
        "⚡ Databases: <b>Postgresql, MySQL, BBolt DB</b>",
      ],
      softwareSkills: [
        {
          skillName: "Go Lang",
          image: GoLang,
        },

        {
          skillName: "Redis",
          image: Redis,
        },
        {
          skillName: "Kafka",
          image: Kafka,
        },
        {
          skillName: "Mongo",
          image: Mongo,
        },

        {
          skillName: "Postgre SQL",
          image: Postresql,
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          image: AWS,
        },
        {
          skillName: "GCP",
          image: GCP,
        },
        {
          skillName: "Docker",
          image: Docker,
        },
        {
          skillName: "Kubernetes",
          image: Kubernetes,
        },
      ],
    },
    {
      title: "Platform and Tools",
      fileName: "PlatformTools",
      skills: [
        "⚡ Golang tools : Go-Kit, Go-micro",
        "⚡ gRPC , Protobuf",
        "⚡ GORM, Gorilla/mux, go-mock",
        "⚡ go-pg, go-chi",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          image: Linux,
        },
        {
          skillName: "Git",
          image: Git,
        },
        {
          skillName: "Postman",
          image: Postman,
        },
        {
          skillName: "VS Code",
          image: Vscode,
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Amol_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Amol391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. D. Y. Patil Institute of Technology Pimpri, Pune",
      subtitle: "Bachelor of Engineering. in Computer Engineering",
      logo_path: "dpu.png",
      alt_name: "DYPIET Pimpri",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on English Langauge and Android Software Development.",
        "⚡ I received the best coder of the computer department award.",
      ],
      website_link: "https://engg.dypvp.edu.in/",
    },
    {
      title: "Nutan Maharashtra Vidya Polytechnic",
      subtitle: "Diploma. in Computer Engineering",
      logo_path: "nmvp.jpg",
      alt_name: "NMVP Talegaon",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ The basic subjects studied in computer science include programming in C, RDBMS, operating systems, mathematics, physics, and chemistry.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Working with Concurrency in Go (Golang)",
      subtitle: "- Trevor Sawler",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Golang Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Scalent Infotech Pvt. Ltd.",
          company_url: "https://www.scalent.io/",
          logo_path: "scalent.png",
          duration: "Augest 2019 - Present",
          location: "Baner, Pune",
          description:
            "Developing and Designing Monolithic as well as Microservices-based projects",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Golang developer Intern",
          company: "Floratechno Solutions Private Limited",
          company_url: "https://in.linkedin.com/company/floratechnosolutions",
          logo_path: "flora.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have research for best practices in golang , refactored codebase using idiomatic go, Write unit test cases",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create high scalable, resilient application and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name: "AdaptiveFramework for Energy Efficiency and User Satisfaction",
      createdAt: "2017-03-03T16:26:54Z",
      description:
        "In this system we tried to implement some modules which will help us to save few % of energy by using AdaptiveFramework technology. ",
      url: "https://iarjset.com/upload/2017/march-17/IARJSET%2016.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "amol.jpeg",
    description:
      "I am available on almost every social media. You can message me, I can help you with Golang.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://gophersgo.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Vadgaon Maval, Pune, Maharashatra 412 106",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
