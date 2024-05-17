import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Panthi - Tuition Classes in Sri Lanka - Personal Project",
    description:
      "Developed 'Panthi', a mobile application designed to connect students and parents with tuition classes in Sri Lanka. This platform facilitates the advertising of tuition sessions by educators and enables students to select classes based on subject and location",
    tools: ["Flutter", "Firebase"],
    role: "My own personal project",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "First Aid Bot to Help in Domestic Accidents - Research Project",
    description:
      "Contributed to a research project focused on developing a first-aid chatbot that assists during domestic accidents. Key responsibilities included implementing augmented reality features and training a TensorFlow model to identify human body points for enhanced first-aid guidance.",
    tools: ["TensorFlow Lite", "Flutter"],
    role: "Implemented AR module and trained a TensorFlow model to identify human body points",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "E-commerce Website for Jewel Pack- Software Project",
    description:
      "Created an e-commerce platform for Jewel Pack to expand their online presence and customer reach. Managed the website's hosting and maintenance",
    tools: ["Vue.js", "Laravel", "MySQL", "Peek Hosting", "JWT"],
    code: "",
    role: "Implemented the user module",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Fingerprint Based Key Handling System - Hardware Project",
    description:
      "Designed and implemented a key management system using biometric and RFID technologies, enhancing security for medium-scale facilities.",
    tools: [
      "AVR ATmega32",
      "R305 Fingerprint Scanner",
      "MFRC522 RFID",
      "Atmel Studio",
    ],
    code: "",
    demo: "",
    image: ayla,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
