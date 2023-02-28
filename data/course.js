import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "Marcos López",
    company: "Profesor de íngles",
  },
  title: "Curso de íngles para principiantes",
  subtitle: "Por Marcos López",
  frontendMastersLink: "",
  description: "Curso para personas que no saben íngles",
  keywords: ["Íngles", "Lenguajes", "Curso", "Presencial","Online"],
  social: {
    linkedin: "marcmel",
    github: "english-marcmel",
    twitter: "musicmarcmel",
    instagram: "music.marcmel"
  },
  productionBaseUrl: "/english-course",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
