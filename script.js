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

const projects = [
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

/**
 *
 * @param {string} type Tag name
 * @param {string} className Class name
 *
 * @returns
 */
const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);

  return element;
};

const createTemplateOne = (project) => {
  const projectsTemplateOne = createElementWithClass(
    "div",
    "projects-template-1"
  );
  const projectImage = createElementWithClass("div", "project-image");
  const image = createElementWithClass("img", "actual-image");
  image.src = project.featureImage;
  image.alt = project.name;
  projectImage.appendChild(image);
  projectsTemplateOne.appendChild(projectImage);
  const projectContainer = createElementWithClass("div", "project-container");
  const h3 = createElementWithClass("h3", "project-name");
  h3.textContent = project.name;
  const projectTags = createElementWithClass("ul", "project-tags");
  project.technologies.forEach((technology) => {
    const li = createElementWithClass("li", "languages");
    li.textContent = technology;
    projectTags.appendChild(li);
  });
  const button = createElementWithClass("button", "project-button");
  button.innerHTML = 'See this project <span class="arrow-icon"></span>';
  projectContainer.appendChild(h3);
  projectContainer.appendChild(projectTags);
  projectContainer.appendChild(button);
  projectsTemplateOne.appendChild(projectContainer);
  return projectsTemplateOne;
};

const projectTemplateX = createTemplateOne(projects[0]);
const firstGrid = document.querySelector(".first-grid");
firstGrid.appendChild(projectTemplateX);

/**
 *
 * @param {object} project Project object
 * @returns {object}
 */
const getTemplateObject = (project) => {
  const el = {
    tag: "div",
    className: "projects-template",
    children: [
      {
        tag: "h3",
        className: "project-name",
        textContent: project.name,
      },
      {
        tag: "div",
        className: "project-image",
        children: [
          {
            tag: "img",
            className: "actual-image",
            attributes: {
              src: project.featureImage,
              alt: project.name,
            },
          },
        ],
      },
      {
        tag: "ul",
        className: "project-tags",
        children: [
          // Inserted below with the technologies array
          // {
          //   tag: 'li',
          //   className: 'languages',
          //   textContent: 'HTML/CSS',
          // },
        ],
      },
      {
        tag: "button",
        className: "project-button",
        attributes: {
          type: "button",
        },
        innerHTML: 'See this project <span class="arrow-icon"></span>',
      },
    ],
  };

  // Add the technologies to the project-tags element
  if (project.technologies) {
    const tagsIndex = el.children.findIndex(
      (item) => item.className === "project-tags"
    );

    project.technologies.forEach((technology) => {
      el.children[tagsIndex].children.push({
        tag: "li",
        className: "languages",
        textContent: technology,
      });
    });
  }

  return el;
};

/**
 *
 * @param {object} param0 Project element object
 * @argument param0.tag {string}
 * @argument param0.className {string}
 * @argument param0.attributes {string}
 * @argument param0.children {array)}
 * @argument param0.innerHTML {string}
 * @argument param0.textContent {string}
 *
 * @returns Element
 */
const buildTemplate = ({
  tag,
  className,
  attributes,
  children,
  innerHTML,
  textContent,
}) => {
  /** @type Element */
  const element = createElementWithClass(tag, className);
  if (textContent) {
    element.textContent = textContent;
  } else if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  if (children) {
    children.forEach((child) => {
      element.appendChild(buildTemplate(child));
    });
  }

  return element;
};

// Get elements
const projectsElement = document.querySelector(".projects-section");

// Append elements to the projects parent
projects.forEach((project) => {
  if (project.id !== projects[0].id) {
    const child = getTemplateObject(project);
    const childElement = buildTemplate(child);
    projectsElement.appendChild(childElement);
  }
});

//Contact Form Validation
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#user-message");
const errorElement = document.querySelector(".error-messages");
const emailField = document.querySelector("#email-input");
const errorMessages = [];

function isNotEmpty(input) {
  if (input.value.trim() === "") {
    return false;
  }
  return true;
}

function isLowerCase(input) {
  if (input.value.toLowerCase() === input.value) {
    return true;
  }
  return false;
}

function isEmail(input) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(input.value.trim())) {
    return true;
  }
  return false;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Reset
  emailField.classList.remove("error");
  emailInput.classList.remove("error");
  errorElement.classList.remove("error");
  errorMessages.splice(0);
  errorElement.textContent = "";

  if (!isNotEmpty(emailInput)) {
    errorMessages.push("Please enter your email address");
  }
  if (!isLowerCase(emailInput)) {
    errorMessages.push("Your submission needs to be all lower case");
  }
  if (!isEmail(emailInput)) {
    errorMessages.push(
      "Your submission needs to be a valid email format, e.g. email@email.com"
    );
  }

  // @TODO: Testing just for email, refactor to include other inputs
  if (errorMessages.length) {
    emailField.classList.add("error");
    emailInput.classList.add("error");
    errorElement.classList.add("error");

    // Display errors
    errorMessages.forEach((error) => {
      const div = createElementWithClass("div", "error-message");
      div.textContent = error;
      div.setAttribute("role", "alert");

      errorElement.appendChild(div);
    });
  } else {
    form.submit();
  }
});
