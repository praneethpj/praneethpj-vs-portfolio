import {
  FaMedium,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDochub,
  FaFilePdf,
} from "react-icons/fa";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/praneethpj",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/praneethpj/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:pubudupraneeth@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Find me on Medium",
    href: "https://medium.com/@pubudupraneeth",
    icon: <FaMedium />,
  },
  {
    index: 4,
    title: "Download by Resume",
    href: "../pages/files/Herath.M.P.P.J.pdf",
    icon: <FaFilePdf />,
  },
];
