const projects = [
  {
    url: "project1.html",
    img: "./image/courses/java.jpg",
    title: "Library Management System",
    description:
      "A comprehensive Java-based project that automates library operations, including book lending, return tracking, and member management.",
  },
  {
    url: "project2.html",
    img: "./image/courses/data-analytics.jpg",
    title: "E-commerce Sales Analysis",
    description:
      "A data analytics project that uses sales data from an e-commerce platform to derive insights on customer behavior, product performance, and sales trends.",
  },
  {
    url: "project3.html",
    img: "./image/courses/devops.jpg",
    title: "DevOps Automation",
    description:
      "This project showcases the implementation of DevOps practices to automate the CI/CD pipeline for a web application, ensuring seamless deployments and integrations.",
  },
  {
    url: "project4.html",
    img: "./image/courses/python.jpg",
    title: "Weather Forecasting App",
    description:
      "A Python-based project that fetches real-time weather data and provides forecasts, alerts, and weather-related news to users.",
  },
  {
    url: "project5.html",
    img: "./image/courses/mobile.jpg",
    title: "Fitness Tracking App",
    description:
      "A mobile application developed to help users track their fitness activities, set goals, and monitor progress through an intuitive interface.",
  },
  {
    url: "project6.html",
    img: "./image/courses/saas-concept-collage.jpg",
    title: "SaaS Inventory Management",
    description:
      "A Software-as-a-Service (SaaS) project designed to help businesses manage their inventory, track stock levels, and automate reorder processes.",
  },
  {
    url: "project7.html",
    img: "./image/courses/data-analytics.jpg",
    title: "Healthcare Data Analysis",
    description:
      "An advanced data analytics project that examines healthcare data to identify trends, optimize treatment plans, and improve patient outcomes.",
  },
  {
    url: "project8.html",
    img: "./image/courses/powerbi.jpg",
    title: "Financial Dashboard with Power BI",
    description:
      "A project utilizing Power BI to create a financial dashboard that provides insights into company performance, including revenue, expenses, and profitability metrics.",
  },
];

//   <p class="card-text text-justify">${project.description}</p>

// Initialize the Slick Carousel

function loadProjects() {
  const carousel = $("#project-carousel");
  carousel.empty();
  projects.forEach((project) => {
    const projectCard = `
           <div class="project-card mt-5 borders">
        <a href="${project.url}" class="card-link">
          <div class="card  border-0">
            <img src="${project.img}" alt="${project.title}" class="card-img-top">
            <div class="card-body">
            <div style="height:35px;">
              <h5 class="card-title">${project.title}</h5>
            </div>
            <div style="height:100px;">
              <p class="card-text text-justify" >${project.description}</p>
            </div>
            </div>
          </div>
        </a>
      </div>
          `;
    carousel.append(projectCard);
  });

  // Initialize the Slick Carousel with responsive settings
  carousel.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $("#prev-btn"),
    nextArrow: $("#next-btn"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

function loadProjects2() {
  const carousel1 = $("#project-carousel-2");
  carousel1.empty();
  projects.forEach((project) => {
    const projectCard = `
           <div class="project-card mt-5 borders">
        <a href="${project.url}" class="card-link">
          <div class="card  border-0">
            <img src="${project.img}" alt="${project.title}" class="card-img-top">
            <div class="card-body">
            <div style="height:35px;">
              <h5 class="card-title">${project.title}</h5>
            </div>
            <div style="height:100px;">
              <p class="card-text text-justify" >${project.description}</p>
            </div>
            </div>
          </div>
        </a>
      </div>
          `;
    carousel1.append(projectCard);
  });

  // Initialize the Slick Carousel with responsive settings
  carousel1.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $("#prev-btn"),
    nextArrow: $("#next-btn"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

$(document).ready(() => {
  loadProjects();
});

$(document).ready(() => {
  loadProjects2();
});
