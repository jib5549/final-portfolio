const header = {
  homepage: "/",
  title: "Junmin.dev",
};

const about = {
  name: "Jun Min Baek",
  role: "Software Engineer",
  photo: "./images/headshot.jpg",

  description:
    "Owning my own business allowed me to be a problem solver and welcomed any type of challenges that came my way. Passionate about setting new goals for myself and through achieving them, it allows me to challenge myself even more with my constant curiosity. I am someone who infuses humor and fun into every day and thrives on collaboration to bring ideas to reality.",
  resume:
    "https://docs.google.com/document/d/1njmio6gsMGjgq6HmmNUGNs33pubCkV2GRyK7-ULNqeM/edit?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/junbaek0307/",
    github: "https://github.com/jib5549",
  },
};

const projects = [
  {
    name: "Compuneed",
    description: "Fancy a gaming pc? Check out my gaming pc website built in React.",
    stack: ["MongoDb", "Express", "React", "Node.js"],
    sourceCode: "https://github.com/jib5549/compuneed",
    livePreview: "https://compuneed.greatestcoderalive.me/",
    // img: "https://i.imgur.com/nFmsf6D.png",
  },
  {
    name: "MovieHub",
    description: "Movie Search app using the OMDb API.",
    stack: ["React"],
    sourceCode: "https://github.com/jib5549/moviehub",
    livePreview: "https://moviehub-jm-9709b2322ea9.herokuapp.com/",
    // img: "https://i.imgur.com/nFmsf6D.png",
  },
  {
    name: "Tic-Tac-Toe",
    description: "Come play tic-tac-toe with some soothing elevator music ",
    stack: ["Html", "Css", "JavaScript"],
    sourceCode: "https://github.com/jib5549/Unit-1-Project",
    livePreview: "https://tictactoe-jmb.netlify.app/",
    // img: "https://i.imgur.com/HIM5RhT.jpg",
  },
  // {
  //   name: "Simply Blogging",
  //   description:
  //     "Full stack app that empowers users to create blogs and connect with others",
  //   stack: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Ejs"],
  //   sourceCode: "https://github.com/jefreyzavala1/simply-blogging",
  //   livePreview: "https://i.imgur.com/yLJCcry.jpg",
  //   // img: "https://i.imgur.com/yLJCcry.jpg",
  // },

  // {
  //   name: "Appointy",
  //   description:
  //     "Full Stack app that enables users to manage their appointments.",
  //   stack: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Ejs"],
  //   sourceCode: "https://github.com/jefreyzavala1/appointment-mvc-auth",
  //   livePreview: "https://appointy-portal.herokuapp.com/",
  //   // img: "https://i.imgur.com/xnF7NGU.jpg",
  // },
  // {
  //   name: "Course Platform",
  //   description:
  //     "created to help users effectively manage their courses by providing features for adding, removing, and updating course information",
  //   stack: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Ejs"],
  //   sourceCode: "https://github.com/jefreyzavala1/school-course-app",
  //   livePreview: "https://class-courses-app.herokuapp.com/",
  //   // img: "https://i.imgur.com/nspjbHZ.jpg",
  // },

  // {
  //   name: "Puzzle Game",
  //   description:
  //     "Game app where the objective is to rearrange nine images into their correct positions while strategizing to achieve the goal in the fewest possible steps",
  //   stack: ["HTML", "CSS", "JavaScript"],
  //   sourceCode: "https://github.com/jefreyzavala1/puzzlegame",
  //   livePreview: "https://jefreypuzzlegame.herokuapp.com/",
  //   // img: "https://i.imgur.com/gBfa4PL.jpg",
  // },
  {
    name: "WeatherWhiz",
    description: "Look up the current weather while enjoying my personal shot of Sedona.",
    stack: ["Html", "Css", "React"],
    sourceCode: "https://github.com/jib5549/weatherapp",
    livePreview: "https://weatherapp-jm-71e9624bdb6f.herokuapp.com/",
    // img: "https://i.imgur.com/QU1nhuO.jpg",
  },
  {
    name: "Todosfoyou🧾",
    description: "People tend to forget things and that's okay. Let me help you remember.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    sourceCode: "https://github.com/jib5549/fullstack-todolist",
    livePreview: "https://todolist.greatestcoderalive.me/",
    // img: "https://i.imgur.com/UJeoZvg.jpg",
  },
];

const skills = [
  "<i class='fab fa-html5 fa-2xl' style='color: #E44D26;'></i>",
  "<i class='fab fa-css3-alt fa-2xl' style='color: #2965F1;'></i>",
  "<i class='fab fa-js fa-2xl' style='color: #F0DB4F;'></i>",
  "<i class='fab fa-react fa-2xl' style='color: #61DAFB;'></i>",
  "<i class='fas fa-database fa-2xl' style='color: #47A248;'></i>",
  "<i class='fab fa-java fa-2xl' style='color: #007396;'></i>",
];

const contact = {
  email: "junbaek0307@gmail.com",
};

export { header, about, projects, skills, contact };
