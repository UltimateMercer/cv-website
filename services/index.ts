import { compareDesc } from "date-fns";

import { allArticles } from "contentlayer/generated";

export const getArticles = allArticles
  .filter((obj) => obj.draft === false)
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

export const getArticle = ({ params }: { params: { slug: string } }) => {
  const article = getArticles.find(
    (article) => article.slug === `/articles/${params.slug}`
  );
  const articleIndex = getArticles.findIndex(
    (article) => article.slug === `/articles/${params.slug}`
  );

  const prev = getArticles[articleIndex + 1];
  const next = getArticles[articleIndex - 1];

  return { article, prev, next };
};

export const user = {
  name: "Julian Silva da Cunha",
  initials: "JSC",
  role: "Desenvolvedor Front-end",
  location: "Pelotas, Rio Grande do Sul, Brasil",
  locationLink: "https://www.google.com/maps/place/Pelotas+-+RS",
  about:
    "Atualmente sou Desenvolvedor Front-end, tendo experiência trabalhando com React e Vue.JS. Em projetos pessoais venho praticando com frameworks back-end, como Express e NestJS, com o intuito de me tornar um Desenvolvedor FullStack.",
  avatar: "https://i.imgur.com/rkCtudG.jpg",
  social: {
    website: "http://ultimatemercer.com",
    email: "ultimatemercer.blklight+dev@gmail.com",
    github: "https://github.com/UltimateMercer",
    linkedin: "https://www.linkedin.com/in/ultimatemercer/",
    behance: "https://www.behance.net/ultimatemercer",
    medium: "https://medium.com/@ultimatemercer",
    instagram: "",
  },
  education: [
    {
      institute: "IFSul - Instituto Federal Sul-rio-grandense - Pelotas/RS",
      course: "Technologist in Internet Systems",
      status: "Graduated",
      image: "https://i.imgur.com/aOYbbmu.jpg",
    },
    {
      institute: "TopWay - English School - Pelotas/RS",
      course: "Inglês - Avançado",
      status: "Concluído em 2018",
      image: "https://i.imgur.com/qrjFnG0.jpg",
    },
    {
      institute: "UFPel - Universidade Federal de Pelotas - Pelotas/RS",
      course: "Bacharelado em Design Digital",
      status: "6° Semestre - em andamento",
      image: "https://i.imgur.com/a7Ul7uG.jpg",
    },
  ],
  experiences: [
    {
      company: "Blklight",
      role: "Fullstack Developer",
      description: "",
      start: "2019-02-01 00:00",
      end: "",
      image: "",
      tags: [
        "React",
        "Next.JS",
        "Vue.JS",
        "Nuxt",
        "Node.js",
        "Javascript",
        "Typescript",
        "Express",
        "NestJS",
        "SCSS",
        "GitHub",
        "Git",
      ],
    },
    {
      company: "blueshift.cc",
      role: "Desenvolvedor Front-end",
      description:
        "Sustentação de um hub para startups; Criação de landing pages;",
      start: "2021-01-01 00:00",
      end: "2022-12-31 23:59",
      image: "https://i.imgur.com/fxDITOw.jpg",
      tags: [
        "Vue.JS (V. 2)",
        "Nuxt",
        "Node.js",
        "Javascript",
        "jQuery",
        "C#",
        "GitHub",
        "Git",
      ],
    },
    {
      company: "bohr.io",
      role: "Desenvolvedor Front-end",
      description:
        "Desenvolvimento de uma landing page para assinatura de uma newsletter; Desenvolvimento de componentes para uma ferramenta de deploy web; Criação de projetos templates.",
      start: "2022-01-01 00:00",
      end: "2022-12-31 23:59",
      image: "https://i.imgur.com/fxDITOw.jpg",
      tags: [
        "Vue.JS (V. 2/ V. 3)",
        "React",
        "Node.js",
        "Javascript",
        "GitHub",
        "Git",
      ],
    },
    {
      company: "Mentorise",
      role: "Desenvolvedor Front-end",
      description:
        "Desenvolvimento de componentes para uma dashboard; Criação de design system para a plataforma;",
      start: "2022-01-01 00:00",
      end: "2022-07-31 23:59",
      image: "",
      tags: ["React", "Node.js", "Javascript", "SCSS", "GitHub", "Git"],
    },

    {
      company: "Mentorise",
      role: "Desenvolvedor Fullstack",
      description:
        "Desenvolvimento e refatoração de componentes e elementos de interface da plataforma; Desenvolvimento e refatoração de rotas e serviços do back-end da plataforma.",
      start: "2023-07-01 00:00",
      end: "2023-12-31 23:59",
      image: "",
      tags: [
        "React",
        "Node.js",
        "Javascript",
        "CSS",
        "Express",
        "Sequelize",
        "SQL",
        "GitHub",
        "Git",
      ],
    },
    {
      company: "QuestõesPRO",
      role: "Desenvolvedor Front-end",
      description: "",
      start: "2020-06-01 00:00",
      end: "2020-09-30 23:59",
      image: "",
      tags: ["Vue.JS (V. 2)", "Nuxt", "Node.js", "Javascript", "GitHub", "Git"],
    },
  ],
};

export const techs = [
  {
    name: "Vue.JS",
    imageUrl: "https://i.imgur.com/qbNTl5W.png",
  },
  {
    name: "React",
    imageUrl: "https://i.imgur.com/Wa0TqhR.jpg",
  },
  {
    name: "Javascript",
    imageUrl: "https://i.imgur.com/MHHLm6d.png",
  },
  {
    name: "Next.JS",
    imageUrl: "https://i.imgur.com/WTpjqbw.jpg",
  },
  {
    name: "Nuxt",
    imageUrl: "https://i.imgur.com/vN0N4iX.jpg",
  },
  {
    name: "Node.js",
    imageUrl: "https://i.imgur.com/nStZvOB.jpg",
  },
  {
    name: "TailwindCSS",
    imageUrl: "https://i.imgur.com/kV9AGth.jpg",
  },
  {
    name: "Bootstrap",
    imageUrl: "https://i.imgur.com/eazD6Ja.jpg",
  },
  {
    name: "SASS",
    imageUrl: "https://i.imgur.com/wqYQJE0.jpg",
  },
  {
    name: "Git",
    imageUrl: "https://i.imgur.com/TFXBfp2.jpg",
  },

  {
    name: "Github",
    imageUrl: "https://i.imgur.com/NQEpMuE.jpg",
  },
  {
    name: "NPM",
    imageUrl: "https://i.imgur.com/AcB6T5Z.jpg",
  },
  {
    name: "Yarn",
    imageUrl: "https://i.imgur.com/3UvMJL4.jpg",
  },
  {
    name: "VSCode",
    imageUrl: "https://i.imgur.com/84ae3eq.jpg",
  },
  {
    name: "Docker",
    imageUrl: "https://i.imgur.com/xPqPYPd.jpg",
  },
  {
    name: "PostgreSQL",
    imageUrl: "https://i.imgur.com/aDnvaLa.jpg",
  },
];
