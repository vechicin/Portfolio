// Elements
const navButton = document.querySelector(".btn-icon");
const menuMobile = document.querySelector(".hamburger");
const menuButtons = document.querySelectorAll(".actual-links");

// Functions
const handleLink = () => {
  menuButtons.forEach((menuButton) =>
    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      navButton.click();
    })
  );
};

const handleClick = (event) => {
  event.stopPropagation();
  event.preventDefault();
  menuMobile.classList.toggle("mobile-menu");

  handleLink();
};

const handleWindow = () => {
  navButton.addEventListener("click", handleClick);
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 992) {
    handleWindow();
  } else {
    menuMobile.classList.remove("mobile-menu");
  }
});

// Popup menu script

let projects = [
  {
    id: 1,
    name: "Project name goes here",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi eligendi molestias veniam, voluptas officiis nihil laudantium sed, cumque, fugiat fuga unde repudiandae dolores dolorum veritatis quia aliquam sunt illum!Impedit minima blanditiis unde obcaecati libero, esse magnam repellendus doloribus ducimus modi enim laborum praesentium! Explicabo soluta a voluptatem itaque optio! Eius id saepe nisi ut dolorum iusto illo quos?",
    featureImage: "images/image1.png",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
  },
  {
    id: 2,
    name: "Project name goes here",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi eligendi molestias veniam, voluptas officiis nihil laudantium sed, cumque, fugiat fuga unde repudiandae dolores dolorum veritatis quia aliquam sunt illum!Impedit minima blanditiis unde obcaecati libero, esse magnam repellendus doloribus ducimus modi enim laborum praesentium! Explicabo soluta a voluptatem itaque optio! Eius id saepe nisi ut dolorum iusto illo quos?",
    featureImage: "images/image2.png",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
  },
  {
    id: 3,
    name: "Project name goes here",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi eligendi molestias veniam, voluptas officiis nihil laudantium sed, cumque, fugiat fuga unde repudiandae dolores dolorum veritatis quia aliquam sunt illum!Impedit minima blanditiis unde obcaecati libero, esse magnam repellendus doloribus ducimus modi enim laborum praesentium! Explicabo soluta a voluptatem itaque optio! Eius id saepe nisi ut dolorum iusto illo quos?",
    featureImage: "images/image3.png",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
  },
  {
    id: 4,
    name: "Project name goes here",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi eligendi molestias veniam, voluptas officiis nihil laudantium sed, cumque, fugiat fuga unde repudiandae dolores dolorum veritatis quia aliquam sunt illum!Impedit minima blanditiis unde obcaecati libero, esse magnam repellendus doloribus ducimus modi enim laborum praesentium! Explicabo soluta a voluptatem itaque optio! Eius id saepe nisi ut dolorum iusto illo quos?",
    featureImage: "images/image4.png",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
  },
  {
    id: 5,
    name: "Project name goes here",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi eligendi molestias veniam, voluptas officiis nihil laudantium sed, cumque, fugiat fuga unde repudiandae dolores dolorum veritatis quia aliquam sunt illum!Impedit minima blanditiis unde obcaecati libero, esse magnam repellendus doloribus ducimus modi enim laborum praesentium! Explicabo soluta a voluptatem itaque optio! Eius id saepe nisi ut dolorum iusto illo quos?",
    featureImage: "images/image5.png",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
  },
  {
    id: 6,
    name: "Project name goes here",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi eligendi molestias veniam, voluptas officiis nihil laudantium sed, cumque, fugiat fuga unde repudiandae dolores dolorum veritatis quia aliquam sunt illum!Impedit minima blanditiis unde obcaecati libero, esse magnam repellendus doloribus ducimus modi enim laborum praesentium! Explicabo soluta a voluptatem itaque optio! Eius id saepe nisi ut dolorum iusto illo quos?",
    featureImage: "images/image6.png",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
  },
];

const modal = document.querySelector(".modal");
const projectTemplate = document.querySelector(".article");
const createElementWithClass = function(type, className) {
  const element = document.createElement(type)
  element.classList.add(className);
  return element;  
}

let createTemplateOne = function (project) {
  let projectsTemplateOne = createElementWithClass('div', 'projects-template-1');
  let projectImage = createElementWithClass('div', 'project-image');
  let image = createElementWithClass('img', 'actual-image');
  image.src = project.featureImage;
  image.alt = project.name;
  projectImage.appendChild(image);
  projectsTemplateOne.appendChild(projectImage);
  let projectContainer = createElementWithClass('div', 'project-container');
  let h3 = createElementWithClass('h3', 'project-name');
  h3.textContent = project.name;
  let projectTags = createElementWithClass('ul', 'project-tags');
  project.technologies.forEach(technology => {
    let li = createElementWithClass('li', 'languages');
    li.textContent = technology;
    projectTags.appendChild(li);    
  }); 
  let button = createElementWithClass('button', 'project-button');
  button.innerHTML = 'See this project <span class="arrow-icon"></span>';
  projectContainer.appendChild(h3);
  projectContainer.appendChild(projectTags);
  projectContainer.appendChild(button);
  projectsTemplateOne.appendChild(projectContainer);
  return projectsTemplateOne;
}

let projectTemplateX = createTemplateOne(projects[0]);
let firstGrid = document.querySelector('.first-grid');
firstGrid.appendChild(projectTemplateX);

// projects.forEach((project) => {
//   const temp = project.content.cl;
//   const menuButton = project.querySelector(".project-button");
//   menuButton.addEventListener("click", () => {
//     console.log("clicked");
//   });
// });

