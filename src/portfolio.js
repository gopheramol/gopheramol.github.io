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
import ETH from "./assests/images/skills/eth.svg";
import WebRTC from "./assests/images/skills/webrtc.svg";
import MySQL from "./assests/images/skills/mysql.svg";
import GRPC from "./assests/images/skills/grpc.svg";
import Hyperledger from "./assests/images/skills/hyperledger.svg";

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
    "Experienced Golang developer specializing in microservices architecture with PostgreSQL, Docker, and Kubernetes. Building scalable applications for finance, cryptocurrency, and social media domains with a focus on quality and test-driven development.",
  og: {
    title: "Amol Gaikwad Portfolio",
    type: "website",
    url: "https://gopheramol.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Amol Gaikwad",
  logo_name: "Amol Gaikwad",
  nickname: "Backend Engineer",
  subTitle:
    "Experienced Golang developer with a track record of success in microservices architecture, utilizing PostgreSQL, Docker, Kubernetes, and CI/CD pipelines. Proficient in Agile methodologies to drive efficient and collaborative development processes. Skilled in building scalable applications for diverse domains including finance, cryptocurrency, and social media. Dedicated to delivering high-quality solutions through Test-Driven Development (TDD) practices. Eager to contribute expertise to dynamic teams and drive innovation in the tech industry.",
  resumeLink: "",
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
        "⚡ Databases: <b>PostgreSQL, MySQL, BBolt DB, MongoDB</b>",
        "⚡ Caching & Messaging: <b>Redis, Kafka</b> for high-performance systems",
        "⚡ Proficient with <b>GORM, Gin, Gorilla/mux, go-mock</b> and other Golang tools",
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
        {
          skillName: "MySQL",
          image: MySQL,
        },
        {
          skillName: "GRPC",
          image: GRPC,
        },
        {
          skillName: "Hyperledger",
          image: Hyperledger,
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms including AWS and GCP",
        "⚡ Proficient with containerization using Docker and orchestration with Kubernetes",
        "⚡ Experience with CI/CD pipelines for automated testing and deployment",
        "⚡ Familiar with infrastructure as code and cloud-native application development",
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
        "⚡ Golang tools: Go-Kit, Go-micro, Gin framework",
        "⚡ gRPC, Protobuf for efficient API development",
        "⚡ GORM, Sqlc, Gorilla Mux, go-mock for database and testing",
        "⚡ go-pg, go-chi for building robust applications",
        "⚡ Version control with Git and collaborative development",
        "⚡ Proficient with Linux environments and command-line tools",
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
      profileLink: "https://leetcode.com/amolasg/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/amol_asg",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/cool_amol",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. D. Y. Patil Institute of Technology Pimpri, Pune",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "dpu.png",
      alt_name: "DYPIET Pimpri",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Graduated with 65.66% from Savitribai Phule Pune University.",
        "⚡ I received the best coder of the computer department award.",
      ],
      website_link: "https://engg.dypvp.edu.in/",
    },
    {
      title: "Nutan Maharashtra Vidya Polytechnic",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "nmvp.jpg",
      alt_name: "NMVP Talegaon",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ The basic subjects studied in computer science include programming in C, RDBMS, operating systems, mathematics, physics, and chemistry.",
        "⚡ Graduated with 65.41% from Maharashtra State Board of Technical Education (MSBTE), Mumbai.",
      ],
      website_link: "",
    },
    {
      title: "New English School Vadgaon Maval",
      subtitle: "Secondary School Certificate (SSC)",
      logo_path: "nmvp.jpg",
      alt_name: "New English School",
      duration: "2010",
      descriptions: [
        "⚡ Completed SSC with 60.15% from Maharashtra State Board.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Platform (GCP) Fundamentals for Beginners",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy",
      credential_id: "UC-99ad7585-f1df-4dea-965e-346476984fd8",
      color_code: "#8C151599",
    },
    {
      title: "Working with Microservices in Go (Golang)",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy",
      credential_id: "UC-b2f71ab7-5b3e-458c-a781-6cb664dca4dd",
      color_code: "#1F70C199",
    },
    {
      title: "Docker and Kubernetes: The Complete Guide",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy",
      credential_id: "UC-a77d0e2b-94a2-4370-a72f-fa85fc6dbebf",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Testing in Go (Golang)",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy",
      credential_id: "UC-db2a53dc-fba7-4ab5-b21d-dd270ea484ba",
      color_code: "#4285F499",
    },
    {
      title: "Working with Concurrency in Go (Golang)",
      subtitle: "- Trevor Sawler",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#2A73CC",
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
          title: "Senior Software Developer",
          company: "AbsoluteLabs",
          company_url: "https://www.absolutelabs.co/",
          logo_path: "absolutelabs.svg",
          duration: "March 2024 - Present",
          location: "Pune, Maharashtra, India · Remote",
          description:
            "Working as a Senior Software Developer with focus on Golang backend development. Building scalable microservices and implementing efficient backend solutions.",
          color: "#0879bf",
        },
        {
          title: "Golang developer",
          company: "Trigent Software Inc",
          company_url: "https://trigent.com/",
          logo_path: "trigent.svg",
          duration: "June 2023 - June 2024",
          location: "Pune, Maharashtra, India · Remote",
          description:
            "Worked on a Credit Line Application (FIRSTmoney) providing a revolving credit line to customers. Implemented standalone document-handler microservice using REST, wrote business logic following TDD approach, implemented new states in existing FSM, and wrote unit tests and integration tests. Technologies used: Golang, Microservices, PostgreSQL, Docker, K8S, Kafka, GOCD, MongoDB, Redis, Oracle, Thought Machine, Jaeger, Grafana.",
          color: "#9b1578",
        },
        {
          title: "Golang Developer",
          company: "Scalent Infotech Pvt. Ltd.",
          company_url: "https://www.scalent.io/",
          logo_path: "scalent.png",
          duration: "February 2021 - June 2023",
          location: "Pune, Maharashtra, India · Hybrid",
          description:
            "Worked on multiple projects: 1) Finance Application: Developed a lending application providing micro-loans with features like VAS, BNPL, merchant offline payments, and credit loans. Implemented microservices using REST and followed clean code architecture. 2) Social Currency Platform: Built a platform based on Ethereum Blockchain for social media celebrities and followers, facilitating interactions through meetups and exclusive content. Implemented OAuth integration, cron jobs, and unit tests. Technologies: Golang, Microservices, PostgreSQL, Docker, K8S, GCP, AWS, GORM.",
          color: "#0879bf",
        },
        {
          title: "Junior Software Engineer",
          company: "Floratechno Solutions Private Limited",
          company_url: "https://in.linkedin.com/company/floratechnosolutions",
          logo_path: "flora.png",
          duration: "March 2020 - October 2020",
          location: "Pune, Maharashtra, India · Remote",
          description:
            "Developed a Social Media Platform where users could upload and share content on platforms like YouTube, LinkedIn, Twitter, and Facebook with a single click. Responsibilities included developing APIs, refactoring code using idiomatic Go, writing unit tests, and participating in testing and team reviews. Technologies: Golang, Microservices, BBoltDB, AWS, WebRTC, FFmpeg, Redis.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Golang developer Intern",
    //       company: "Floratechno Solutions Private Limited",
    //       company_url: "https://in.linkedin.com/company/floratechnosolutions",
    //       logo_path: "flora.png",
    //       duration: "March 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have research for best practices in golang , refactored codebase using idiomatic go, Write unit test cases",
    //       color: "#9b1578",
    //     },
    //   ],
    // },
  ],
};

const projects = {
  data: [
    {
      id: "4",
      name: "Finance Application",
      url: "",
      description:
        "Provide seamless financial services for customers and businesses enabling them to achieve their financial goals. This is a lending application that provides micro-loans to users. Features provided by the application are VAS(Value added services), BNPL(Buy now pay later), Merchant offline payments, Credit loans, Cash loan, etc.",
      isFork: false,
      languages: [
        {
          name: "Go Lang",
          image: GoLang,
        },
        {
          name: "PostgreSQL",
          image: Postresql,
        },
        {
          name: "Dockerfile",
          image: Docker,
        },
        {
          name: "Kubernetes",
          image: Kubernetes,
        },
        {
          name: "GCP",
          image: GCP,
        },
      ],
    },
    {
      id: "3",
      name: "Social Currency Platform for Content Creators",
      createdAt: "2022-03-13T20:41:33Z",
      url: "",
      description:
        "The Project was about the social currency platform based on Ethereum Blockchain. This platform is used to facilitate interactions between social media celebrities and their followers in the form of meetups, giveaways, exclusive content, etc. for social currencies. These social currencies can be earned by different tasks, contributions, contests, etc.",
      isFork: false,
      languages: [
        {
          name: "Go Lang",
          image: GoLang,
        },
        {
          name: "Dockerfile",
          image: Docker,
        },
        {
          name: "ETH",
          image: ETH,
        },
        {
          name: "PostgreSQL",
          image: Postresql,
        },
        {
          name: "GRPC",
          image: GRPC,
        },
        {
          name: "AWS",
          image: AWS,
        },
      ],
    },
    {
      id: "2",
      name: "Social Media Platform for Sharing Content Online",
      url: "",
      description:
        "The Project was about the social media platform where users can upload their own content(like images, audio, and video clips). where users are able to share that Media on Popular social media like YouTube, LinkedIn, Twitter, and Facebook with a single click.",
      isFork: false,
      languages: [
        {
          name: "Go Lang",
          image: GoLang,
        },
        {
          name: "WebRTC",
          image: WebRTC,
        },
        {
          name: "Redis",
          image: Redis,
        },
        {
          name: "Dockerfile",
          image: Docker,
        },
      ],
    },
    {
      id: "1",
      name: "Goxpert – Golang Training Portal",
      url: "",
      description:
        "⚙️ Goxpert is a training and assessment platform. It helps non-Golang developers and freshers to trainthemselves in Golang. This portal has two types of users: Admin and Developer. Admin can create and manage developers, various courses, sections, and questions. Admin can also manage all the developers and see their progress for each course. A developer can opt-in for any course(s) as per their interest and get proficient in the respective course. This platform has an assessment feature that helps hire the best Golang developers",
      isFork: false,
      languages: [
        {
          name: "Go Lang",
          image: GoLang,
        },
        {
          name: "MySQL",
          image: MySQL,
        },
        {
          name: "Dockerfile",
          image: Docker,
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
      "I am available on almost every social media. You can message me, I can help you with Golang. Feel free to reach out for collaborations or discussions about backend development and microservices.",
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
    subtitle: "Pune, Maharashatra, India",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://goo.gl/maps/kQaLpmvpyNjzHURz9",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 9175442277",
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
  projects,
};
