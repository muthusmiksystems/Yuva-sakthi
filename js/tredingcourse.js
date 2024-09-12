// Course data
const courses = [
  //Masters Program
  {
    title: "Cloud Masters Program",
    description: "Cloud Masters Program Training Course ",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",

      "What will I learn?",
      "Cloud Masters Program – An overview",
      "EC2 Instance",
      "Understand Identity Access Management of Cloud Masters Program",
    ],
    link: "cloud-master.html",
  },
  {
    title: "Data Science Masters Program ",
    description: "Data Science Masters Program. Become a Data Scientist",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 750+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Data Science",
      "Introduction to Python",
      "Python Basics",
    ],
    link: "data-science-master-program.html",
  },
  {
    title: "Java Full Stack Masters Training",
    description:
      "Java Full Stack Development Training. Become a Java Full Stack Developer",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 600+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Basics",
      "Conditional Statements",
      "Unconditional Statements",
    ],
    link: "java-full-stack-master-program.html",
  },
  {
    title: "MERN Stack Masters Program ",
    description: "MERN Stack Masters Program. Become a MERN Stack Developer",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 600+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to HTML, CSS",
      "Bootstrap",
      "Javascript",
    ],
    link: "mern-master.html",
  },
  {
    title: "MEAN Stack Masters Program",
    description: "MEAN Stack Training. Become a MEAN Stack Developer",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 600+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to HTML, CSS",
      "Bootstrap",
      "Javascript",
    ],
    link: "mean-stack-training.html",
  },
  {
    title: "React JS Masters Program",
    description: "React JS Training. Master React JS Development.",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration:  200+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Origins of React",
      "React.js Syntax",
      "Overview of JSX and why you should use it",
    ],
    link: "react-js.html",
  },
  {
    title: "DotNet Masters Program",
    description: "DotNet Masters Program Master. DotNet Development.",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 600+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is .NET?",
      "What is the CLR?",
      "The FCL",
    ],
    link: "dotnet-masters-program.html",
  },
  {
    title: "PHP Masters Program",
    description: "PHP Masters Program. Master PHP Web Development",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is PHP?",
      "Setting up the environment",
      "Basic PHP Syntax",
    ],
    link: "php-laravel-masters-program.html",
  },
  {
    title: "Big Data Masters Program",
    description: "Big Data Masters Program. Become a Big Data Expert.",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Getting Familiar with Spark",
      "Working with Resilient Distributed Dataset (RDD)",
      "Spark Application Programming",
    ],
    link: "bigdata-master-program.html",
  },
  {
    title: "DevOps Master Programs",
    description: "DevOps Master Program. Master DevOps Practices.",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "A Linux Introduction",
      "Open Source Philosophy",
      "Distributions",
    ],
    link: "devops-master-program.html",
  },

  {
    title: "Software Testing Masters Program",
    description:
      "Software Testing Masters Program. Master Software Testing Techniques.",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Manual Testing",
      "software Testing",
      "Perform Testing",
    ],
    link: "software-testing-master-program.html",
  },
  {
    title: "Business Intelligence Masters Program",
    description: "Business Intelligence Masters Program. Master BI Tools.",
    rating: 5,
    category: "Masters Program",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Client/Server Concepts",
      "Database and Database Objects",
      "Data Definition using SQL",
    ],
    link: "business-intelligence-master-program.html",
  },

  //cloud computing

  {
    title: "AWS Training Course",
    description: "AWS Training Course. Become an Expert in AWS.",
    rating: 5,
    category: "Cloud Computing",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Linux Fundamentals",
      "Why Cloud?",
      "AWS – An overview",
    ],
    link: "aws.html",
  },
  {
    title: "AWS DevOps Training Course",
    description: "AWS DevOps Training Course. Master AWS DevOps Practices.",
    rating: 5,
    category: "Cloud Computing",
    additionalInfo: [
      "Special Features",
      "Duration: 40 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "A Linux Introduction",
      "Open Source Philosophy",
      "Distributions",
    ],
    link: "aws-devops.html",
  },

  {
    title: "Azure DevOps Training  Course ",
    description:
      "Azure DevOps Training  Course. Master Azure DevOps Practices.",
    rating: 5,
    category: "Cloud Computing",
    additionalInfo: [
      "Special Features",
      "Duration: 450+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Azure DevOps Overview",
      "Importance of Azure DevOps",
      "Types of Azure DevOps",
    ],
    link: "azure-devops.html",
  },
  // {
  //   title: "Salesforce Training Course",
  //   description: "Salesforce Training Course. Become a Salesforce Expert.",
  //   rating: 5,
  //   category: "Cloud Computing",
  //   additionalInfo: [
  //     "Special Features",
  //     "Duration: 450+ hours",
  //     "Level: Begginer to Advanced",
  //     "What will I learn?",
  //     "What is Cloud Computing",
  //     "Service and Deployment models in the Cloud",
  //     "Market situation",
  //   ],
  //   link: "salesforce-training.html",
  // },
  {
    title: "Salesforce Developer Training Course",
    description:
      "Salesforce Developer Training Course. Master Salesforce Developer Platform.",
    rating: 5,
    category: "Cloud Computing",
    additionalInfo: [
      "Special Features",
      "Duration: 450+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is Cloud Computing",
      "Salesforce.com",
      "Services",
    ],
    link: "salesforce-developer.html",
  },

  {
    title: "Salesforce Administrator Training Course",
    description:
      "Salesforce Administrator Training Course. Master Salesforce Administrator Platform",
    rating: 5,
    category: "AI & Data Science",
    additionalInfo: [
      "Special Features",
      "Duration: 450+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is Cloud Computing",
      "Salesforce.com Overview",
      "Salesforce Services",
    ],
    link: "salesforce-adminstrator.html",
  },

  //AI and Data
  {
    title: "Machine Learning Training Course",
    description:
      "Machine Learning Training Course. Master Machine Learning Techniques.",
    rating: 5,
    category: "AI & Data Science",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Data Analytics",
      "Business Analytics, Data, Information",
      "Understanding Business Analytics and R",
    ],
    link: "machine-learning.html",
  },

  {
    title: "Data Science Training Course",
    description:
      "Data Science Training Course. Master Data Science Techniques.",
    rating: 5,
    category: "AI & Data Science",
    additionalInfo: [
      "Special Features",
      "Duration: 750+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Data Science",
      "What is Data Science?",
      "What is Machine Learning?",
    ],
    link: "datascience.html",
  },

  {
    title: "Python with Data Science Training Course",
    description:
      "Python with Data Science Training. Master Python for Data Science.",
    rating: 5,
    category: "AI & Data Science",
    additionalInfo: [
      "Special Features",
      "Duration: 750+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Data Science",
      "What is Data Science?",
      "What is Machine Learning?",
    ],
    link: "python-with-datascience.html",
  },

  {
    title: "Artificial Intelligence Training Course",
    description: "Artificial Intelligence Training Course. Master AI Concepts.",
    rating: 5,
    category: "AI & Data Science",
    additionalInfo: [
      "Special Features",
      "Duration: 450+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction",
      "Sample or population data?",
      "The fundamentals of descriptive statistics",
    ],
    link: "artificial-intelligence.html",
  },

  //Software Testing
  {
    title: "Selenium Training Course",
    description:
      "Selenium Training Course. Master Automation Testing with Selenium",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 60+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction of selenium",
      "Selenium components",
      "How differs from other automation tools",
    ],
    link: "selenium-training.html",
  },
  {
    title: "LoadRunner Training Course",
    description:
      "LoadRunner Training Course. Master Performance Testing with LoadRunner",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 70+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "LoadRunner Installation",
      "LoadRunner architecture",
      "Where to install LoadRunner components",
    ],
    link: "loadrunner-training.html",
  },
  {
    title: "JMeter Training Course",
    description:
      "JMeter Training Course. Master Performance Testing with JMeter",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 60 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What are Classes and Objects?",
      "What are Methods and Functions?",
      "What is Inheritance?",
    ],
    link: "jmeter-training.html",
  },
  {
    title: "Manual Testing Training Course",
    description: "Manual Testing Training Course. Master Manual Testing Skills",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 80 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to testing",
      "Verification vs validation",
      "Types of Applications",
    ],
    link: "manual-testing-training.html",
  },
  {
    title: "Coded UI Training Course",
    description: "Coded UI Training Course. ",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 60 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Benefits of Test Automation",
      "Visual Studio Interface Overview",
      "Basic on C#",
    ],
    link: "coded-ui-training.html",
  },
  {
    title: "ETL Training Course",
    description: "ETL Training Course. Master ETL Processes and Tools",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 60 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "DWH: Data Ware Housing Concepts",
      "What is Data Warehouse?",
      "Need of Data Warehouse",
    ],
    link: "etl-testing-training.html",
  },
  {
    title: "Big Data Testing Training Course",
    description: "Big Data Testing Training Course. Master Big Data Testing",
    rating: 5,
    category: "Software Testing",
    additionalInfo: [
      "Special Features",
      "Duration: 80 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Big Data and Bad Data",
      "Characteristics of Big Data (3Vs)",
      "Big Data Testing Vs. Traditional Database Testing",
    ],
    link: "big-data-testing-training.html",
  },

  //programming
  {
    title: "Python Training Course",
    description: "Python Training Course. Master Python Programming.",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 750 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "An Introduction to Python",
      "What can Python do?",
      "Why Python?",
    ],
    link: "python-training.html",
  },

  {
    title: "JavaScript Training Course",
    description: "JavaScript Training Course. Master JavaScript Development",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 50+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Javascript",
      "What is JavaScript?",
      "Developer Essentials",
    ],
    link: "javascript-training.html",
  },

  {
    title: "Unix Shell Scripting Training Course",
    description: "Unix Shell Scripting Training Course. Master Shell Scripting",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 80+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Basics of computer applications",
      "Unix Course Introductions",
      "Pre-requisites",
    ],
    link: "unix-shell-scripting-training.html",
  },

  {
    title: "PHP Training Course",
    description: "PHP Training Course. Master PHP Web Development",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 600 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is PHP?",
      "The history of PHP",
      "Embedding PHP code on a page",
    ],
    link: "php-training.html",
  },

  {
    title: "Java Training Course",
    description: "Java Training Course. Master Java Programming",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 600 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Java Why? What? How? When? Where?",
      "Different Java Versions.",
      "How Java is different from other Technologies",
    ],
    link: "java-training.html",
  },

  {
    title: "DotNet Training Course",
    description: "DotNet Training Course. Master DotNet Development",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 600 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is .NET?",
      "What is the CLR?",
      "The FCL",
    ],
    link: "dotnet-training.html",
  },

  {
    title: "C & C++ Training Course",
    description: "C & C++ Training Course. Master C & C++ Programming",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 600 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "The C Language and its Advantages",
      "The Structure of a C Program",
      "Writing C Programs",
    ],
    link: "c-c++-training.html",
  },

  {
    title: "R Programming Training Course",
    description: "R Programming Training Course. Master Data Analysis with R",
    rating: 5,
    category: "Programming",
    additionalInfo: [
      "Special Features",
      "Duration: 600 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Business Analytics, Data, Information",
      "Understanding Business Analytics and R",
      "Compare R with other software in analytics",
    ],
    link: "r-programming-training.html",
  },

  // {
  //   title: "Android Development Bootcamp",
  //   description: "Comprehensive training for Android app development.",
  //   rating: 5,
  //   category: "Mobile Development",
  //   additionalInfo: [
  //     "Duration: 45 hours",
  //     "Level: Advanced",
  //     "Instructor: Diana Blue",
  //   ],
  // },
];

const coursesSecond = [
  //web designing
  {
    title: "Angular Training Course",
    description: "Angular Training Course. Master Angular Framework.",
    rating: 5,
    category: "Web Designing",
    additionalInfo: [
      "Special Features",
      "Duration: 450+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Web Designing",
      "HTML",
      "Building Blocks",
    ],
    link: "angular-training.html",
  },
  {
    title: "React JS Training Course",
    description: "React JS Training Course. Master React JS Development",
    rating: 5,
    category: "Web Designing",
    additionalInfo: [
      "Special Features",
      "Duration: 40 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction To React &#038; JSX",
      "Origins of React",
      "React.js Syntax",
    ],
    link: "react-training.html",
  },
  {
    title: "NodeJS Training Course",
    description: "NodeJS Training Course. Master NodeJS Development.",
    rating: 5,
    category: "Web Designing",
    additionalInfo: [
      "Special Features",
      "Duration: 200+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction",
      "What is Node JS?",
      "Advantages of Node JS",
    ],
    link: "node.js-training.html",
  },
  {
    title: "MEAN Stack Training Course",
    description: "MEAN Stack Training Course. Become a MEAN Stack Developer",
    rating: 5,
    category: "Web Designing",
    additionalInfo: [
      "Special Features",
      "Duration: 400+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Getting started with Node.js",
      "Node Package Manager",
      "Modules",
    ],
    link: "mean-stack-training.html",
  },

  {
    title: "HTML Training Course",
    description: "HTML Training Course. Master HTML for Web Development",
    rating: 5,
    category: "Web Designing",
    additionalInfo: [
      "Special Features",
      "Duration: 50+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "HTML – Introduction",
      "HTML – Elements",
      "HTML – Tags",
    ],
    link: "html-training.html",
  },
  {
    title: "CSS Training Course",
    description: "CSS Training Course. Master CSS for Web Development.",
    rating: 5,
    category: "Web Designing",
    additionalInfo: [
      "Special Features",
      "Duration: 40+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "CSS Introduction",
      "CSS Syntax",
      "CSS Selectors (ID, Class, Tags, Attributes)",
    ],
    link: "css-training.html",
  },

  //database
  {
    title: "MySQL Training Course ",
    description: "MySQL Training Course. Master MySQL Database Management.",
    rating: 5,
    category: "Databases",
    additionalInfo: [
      "Special Features",
      "Duration: 40+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Theory, Terminology and Concepts",
      "Client/Server Concepts",
      "Database and Database Objects",
    ],
    link: "mysql-training.html",
  },

  {
    title: "MongoDB Training Course",
    description: "MongoDB Training Course. Master MongoDB Database.",
    rating: 5,
    category: "Databases",
    additionalInfo: [
      "Special Features",
      "Duration: 70+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to NoSQL Architecture with MongoDB",
      "What is Mongo DB",
      "Installation and Configuration",
    ],
    link: "mongodb-training.html",
  },
  {
    title: "SQL Server DBA Training Course",
    description:
      "SQL Server DBA Training Course. Master SQL Server Database Administration",
    rating: 5,
    category: "Databases",
    additionalInfo: [
      "Special Features",
      "Duration: 70+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Blocking and Deadlocks",
      "Partitioning Techniques",
      "DB Snapshots and usage",
    ],
    link: "sql-server-dba-training.html",
  },
  {
    title: "Apache Cassandra Training Course",
    description: "Apache Cassandra Training Course. Master NoSQL Databases.",
    rating: 5,
    category: "Databases",
    additionalInfo: [
      "Special Features",
      "Duration: 50+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Cassandra",
      "Cassandra Architecture",
      "Cassandra Installation and Configuration",
    ],
    link: "apache-cassandra-training.html",
  },
  {
    title: "Teradata Training Course",
    description: "Teradata Training. Master Teradata Database.",
    rating: 5,
    category: "Databases",
    additionalInfo: [
      "Special Features",
      "Duration: 40+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "INTRODUCTION TO TERADATA",
      "Architecture",
      "Comparative Study between Teradata an Other RDBMS",
    ],
    link: "teradata-training.html",
  },
  {
    title: "SQL Server Developer Training Course",
    description:
      "SQL Server Developer Training Course. Master SQL Server Development",
    rating: 5,
    category: "Databases",
    additionalInfo: [
      "Special Features",
      "Duration: 60+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "MS SQL Training Concepts",
      "DBMS introduction",
      "What is mean by DBMS and its usage?",
    ],
    link: "sql-server-developer-training.html",
  },

  //microsoft training
  {
    title: "Microsoft Azure Training",
    description: "Microsoft Azure Training. Master Azure Cloud Platform.",
    rating: 5,
    category: "Microsoft Training",
    additionalInfo: [
      "Special Features",
      "Duration: 200+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Business Statistics",
      "Introduction to Statistical Analysis",
      "Counting, Probability, and Probability Distributionssssssss",
    ],
    link: "index.html",
  },
  {
    title: "Power BI Training Course",
    description: "Power BI Training. Master Data Visualization with Power BI.",
    rating: 5,
    category: "Microsoft Training",
    additionalInfo: [
      "Special Features",
      "Duration: 200+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Power BI",
      "What is Power BI?",
      "why Power BI?",
    ],
    link: "power-bi-training.html",
  },
  {
    title: "Microsoft Dynamics Training Course",
    description:
      "Microsoft Dynamics Training Course. Master Microsoft Dynamics",
    rating: 5,
    category: "Microsoft Training",
    additionalInfo: [
      "Special Features",
      "Duration: 40 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to Microsoft Dynamics AX Development",
      "Load BalancersFeatures of Microsoft Dynamics AX",
      "Elements of Microsoft Dynamics AX Development",
    ],
    link: "microsoft-dynamics-crm-training.html",
  },
  {
    title: "PowerShell Training Course",
    description:
      "PowerShell Training Course. Master Scripting with PowerShell.",
    rating: 5,
    category: "Microsoft Training",
    additionalInfo: [
      "Special Features",
      "Duration: 80+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "What is an Operating system?",
      "Load BalancersTypes of Windows operating system",
      "Difference between client and server OS",
    ],
    link: "powershell-training.html",
  },

  //agile training
  {
    title: "Agile Training Course",
    description: "Agile Training Course. Master Agile Methodologies",
    rating: 5,
    category: "Project Management",
    additionalInfo: [
      "Special Features",
      "Duration: 60+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Introduction to AGILE",
      "Roles in Agile",
      "Cross-functional Team",
    ],
    link: "agile-training.html",
  },
  {
    title: "Microsoft Excel Training Course",
    description: "Microsoft Excel Training Course. Master Excel Functions",
    rating: 5,
    category: "Project Management",
    additionalInfo: [
      "Special Features",
      "Duration: 80 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Manage Workbook Options and Settings",
      "Create Worksheets and Workbooks",
      "Format Worksheets and Workbooks",
    ],
    link: "microsoft-excel-training.html",
  },
  {
    title: "Advanced Excel Training Course",
    description:
      "Advanced Excel Training Course. Master Functions & Data Analysis",
    rating: 5,
    category: "Project Management",
    additionalInfo: [
      "Special Features",
      "Duration: 60+ hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "Advanced Excel Course - Overview of the Basics of Excel",
      "Customizing common options in Excel",
      "Absolute and relative cells",
    ],
    link: "advanced-excel-training.html",
  },
  {
    title: "Scrum Training Course",
    description: "Scrum Training. Master Scrum Framework.",
    rating: 5,
    category: "Project Management",
    additionalInfo: [
      "Special Features",
      "Duration: 40 hours",
      "Level: Begginer to Advanced",
      "What will I learn?",
      "The Core Principles of Scrum",
      "Data from Teams Using Scrum &#8212; Impact on Productivity, Morale, Quality, etc.",
      "Difficulties Teams Encounter, and Key Strategies for Success",
    ],
    link: "scrum-master-training.html",
  },
];

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star ${i <= rating ? "" : "empty"}">&#9733;</span>`;
  }
  return stars;
}

// Reference to the container
const coursesContainer = document.getElementById("courses-container");
const coursesContainer2 = document.getElementById("courses-container2");
function adjustCardWidths() {
  let cardWidth = "20%";
  if (window.innerWidth <= 576) {
    cardWidth = "250px";
  } else if (window.innerWidth <= 768) {
    cardWidth = "250px";
  } else if (window.innerWidth <= 1024) {
    cardWidth = "250px";
  } else if (window.innerWidth > 1024) {
    cardWidth = "250px";
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.width = cardWidth;
  });
}
// Dynamically create course cards
function renderCourses(coursesToRender) {
  coursesContainer.innerHTML = "";

  // Create a wrapper for the slider
  // const slickContainer = document.createElement("div");
  // slickContainer.className = "course-slider";  // Ensure this matches the selector used for Slick
  // coursesContainer.appendChild(slickContainer);
  coursesToRender.forEach((course) => {
    const card = document.createElement("div");
    card.className = "card";
    // card.style.width = "20%";
    card.style.margin = "10px";

    card.innerHTML = `
         <div class="" style= >
 <div style="background: linear-gradient(242deg, #f49cae, #b05ce2);" class="coursemain">
   <div style="height:55px;width:25%" class="bg-white d-flex align-items-center justify-content-center rounded-circle">
     <img src="./image/blockchain.png" alt="blockchain" style="width:40px">
   </div>
   <div style="width:75%">
     <h3 class="ml-3 cr_title">${course.title}</h3>
   </div>
 </div>
 <div class="coursedetails">
   <p class="desc">${course.description}</p>
   <div class="star-rating">${generateStars(course.rating)}</div>
 </div>
 </div>
 <div class="overlay">
   <div class="additional-info">
     <ul>
       <li class="batchtxt"> ${course.additionalInfo[0]}</li>
       <div class="nextbatch">
       <li> ${course.additionalInfo[1]} </li>
       <li>${course.additionalInfo[2]}</li>
       </div>
       <div class="mt-4">

         <div class="learnlist">
           <li>${course.additionalInfo[3]}</li>
         </div>
         <ul class="course_intro">
           <li> ${course.additionalInfo[4]}</li>
           <li> ${course.additionalInfo[5]}</li>
           <li> ${course.additionalInfo[6]}</li>
         </ul>
       </div>
       <button class="view-details seemorebtn" onclick="location.href='${
         course.link
       }'">View Details</button>
     </ul>
   </div>
 </div>`;
    coursesContainer.appendChild(card);
  });
  adjustCardWidths();
  // setTimeout(() => {
  //     setupSlick();
  // }, 10000);
}

function renderCourses2(coursesToRender) {
  coursesContainer2.innerHTML = "";

  // Create a wrapper for the slider
  // const slickContainer = document.createElement("div");
  // slickContainer.className = "course-slider";  // Ensure this matches the selector used for Slick
  // coursesContainer.appendChild(slickContainer);
  coursesToRender.forEach((course) => {
    const card = document.createElement("div");
    card.className = "card";
    // card.style.width = "20%";
    card.style.margin = "10px";

    card.innerHTML = `
   <div class="" style= >
<div style="background: linear-gradient(242deg, #f49cae, #b05ce2);" class="coursemain">
<div style="height:55px;width:25%" class="bg-white d-flex align-items-center justify-content-center rounded-circle">
<img src="./image/blockchain.png" alt="blockchain" style="width:40px">
</div>
<div style="width:75%">
<h3 class="ml-3 cr_title">${course.title}</h3>
</div>
</div>
<div class="coursedetails">
<p class="desc">${course.description}</p>
<div class="star-rating">${generateStars(course.rating)}</div>
</div>
</div>
<div class="overlay">
<div class="additional-info">
<ul>
 <li class="batchtxt"> ${course.additionalInfo[0]}</li>
 <div class="nextbatch">
 <li> ${course.additionalInfo[1]} </li>
 <li>${course.additionalInfo[2]}</li>
 </div>
 <div class="mt-4">

   <div class="learnlist">
     <li>${course.additionalInfo[3]}</li>
   </div>
   <ul class="course_intro">
     <li> ${course.additionalInfo[4]}</li>
     <li> ${course.additionalInfo[5]}</li>
     <li> ${course.additionalInfo[6]}</li>
   </ul>
 </div>
 <button class="view-details seemorebtn" onclick="location.href='${
   course.link
 }'">View Details</button>
</ul>
</div>
</div>`;
    coursesContainer2.appendChild(card);
  });
  adjustCardWidths();
  // setTimeout(() => {
  //     setupSlick();
  // }, 10000);
}

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add active class to the clicked tab
      this.classList.add("active");

      // Get the selected category
      const selectedCategory = this.getAttribute("data-category");
      const selectedCategory2 = this.getAttribute("data-category");

      filterTrendingCourses(selectedCategory);
      filterTrendingCourses2(selectedCategory2);
    });
  });
  renderCourses(courses);
  renderCourses2(coursesSecond);
  setupCarousel();
  // Adjust card widths on initial load
  adjustCardWidths();

  // Adjust card widths when the window is resized
  window.addEventListener("resize", adjustCardWidths);
});

function filterTrendingCourses(category) {
  let filteredCourses =
    category === "all"
      ? courses
      : courses.filter((course) => course.category === category);

  renderCourses(filteredCourses);
}
function filterTrendingCourses2(category) {
  let filteredCourses2 =
    category === "all"
      ? coursesSecond
      : coursesSecond.filter((course) => course.category === category);

  renderCourses2(filteredCourses2);
}

function setupCarousel() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const prevButton2 = document.getElementById("prev2");
  const nextButton2 = document.getElementById("next2");
  const container = coursesContainer;
  const container2 = coursesContainer2;

  prevButton.addEventListener("click", () => {
    container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
  });

  prevButton.addEventListener("click", () => {
    container2.scrollBy({ left: -container2.clientWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    container2.scrollBy({ left: container2.clientWidth, behavior: "smooth" });
  });
}
