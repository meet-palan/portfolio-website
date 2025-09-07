export const profileData = {
  personal: {
    name: "Meet Palan",
    title: "Aspiring Business Analyst & Product Manager",
    tagline: "Bridging business needs with innovative solutions",
    profileImage: "/profile-placeholder.jpg", // Replace with your actual image path
    linkedin: "https://www.linkedin.com/in/meetpalan2003/",
    github: "https://github.com/meet-palan",
    instagram: "https://www.instagram.com/meet_palann/",
  },

  about: {
    objective: "I’m a Computer Engineering graduate and aspiring Business Analyst & Product Manager with hands-on experience in requirement gathering, stakeholder collaboration, and Agile project coordination.",
    description: "Skilled in SQL, Tableau, Power BI, and data visualization, I have delivered impactful projects like the Netflix Analytics Dashboard and Washington House Sales Dashboard, transforming data into actionable insights. With certifications in Business Analysis, SQL, and AI/Prompt Engineering, I bring a strong mix of technical and analytical expertise.",
    passion: "Passionate about process optimization, data-driven decision-making, and user-centric product strategy, I aim to grow into a Product Management role and build innovative, scalable solutions.",
    stats: {
      cgpa: 9.44,
      projects: 3,
      certifications: 3,
      internships: 2
    }
  },

  skills: {
    technical: [
      "Business Analysis",
      "SQL",
      "Agile & Scrum Methodologies", 
      "JAVA",
      "Digital Marketing",
      "Requirement Gathering",  
      "JAVA",
      
    ],
    soft: [
      "Leadership",
      "Teamwork",
      "Business Acumen", 
      "Adaptability",
      "Time Management",
      "Communication",
      "Presentation Skills",
      "Active Listening",
      "Critical Thinking",
      "Problem Solving"
    ],
    tools: [
      "Microsoft Office Suite",
      "Tableau",
      "SQL Server",
      "WordPress",
      "Figma"
    ]
  },

  projects: [
    {
      id: 1,
      title: "Food Recipe App",
      year: "2025",
      description: "The Food Recipe App simplifies cooking with recipe discovery, meal planning, and a recipe selling marketplace, empowering users to cook, organize, and share with ease.",
      role: "Business Analyst & project manager",
      tools: ["Figma", "Flutter","MS WORD and Powerpoint"],
      image: "/1.jpg",
      githubUrl: "https://github.com/meet-palan",
      detailUrl: "#",
      impact: "Simplified cooking, saved time, and built a connected community of food enthusiasts.",
      problem: "Difficulty in discovering, organizing, and managing recipes across multiple platforms.",
      approach: "User research, competitor analysis, and requirements gathering for cooking and recipe management.",
      solution: "Food Recipe App with recipe search, filters, meal planner, “My Recipes,” and recipe selling features."

    },
    {
      id: 2,
      title: "Expense Tracker App",
      year: "2024",
      description: "Developed a comprehensive BRD outlining essential features including categorization, visualization, and reminders for effective expense tracking. Created detailed Market Research Document with competitor and user analysis.",
      role: "Business Analyst",
      tools: ["Microsoft Word"],
      image: "/1.jpg",
      githubUrl: "https://github.com/meet-palan",
      detailUrl: "#",
      impact: "Comprehensive requirements documentation for expense management solution",
      problem: "Need for systematic expense tracking and budgeting solution",
      approach: "Requirements gathering, competitor analysis, and user research",
      solution: "Detailed BRD with feature specifications and market insights"
    },
    {
      id: 3, 
      title: "Netflix Dashboard",
      year: "2024",
      description: "Developed interactive Tableau dashboard analyzing user preferences and viewing patterns to help Netflix enhance content recommendations and marketing strategies.",
      role: "Data Analyst",
      tools: ["Tableau"],
      image: "/1.jpg",
      githubUrl: "https://github.com/meet-palan",
      detailUrl: "#",
      impact: "Enhanced content recommendation insights through data visualization",
      problem: "Lack of user preference insights for content strategy",
      approach: "Data analysis and interactive dashboard development",
      solution: "Comprehensive Tableau dashboard with user insights"
    },
    {
      id: 4,
      title: "Movie Ticket Booking System", 
      year: "2022",
      description: "Developed a desktop application to streamline the movie ticket booking process with QR code-based authentication for secure entry and user verification.",
      role: "Software Developer",
      tools: ["JAVA Swing", "JDBC", "QR Code API"],
      image: "/Pic.jpg",
      githubUrl: "https://github.com/meet-palan",
      detailUrl: "#",
      impact: "Streamlined booking process with secure QR authentication",
      problem: "Manual ticket booking and verification inefficiencies",
      approach: "Desktop application development with secure authentication",
      solution: "Complete booking system with QR code integration"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Intern",
      company: "Tibicle LLP",
      location: "Ahmedabad, Gujarat",
      duration: "April 2025 – Present",
      current: true,
      responsibilities: [
        "Managed multiple cross-functional projects, ensuring on-time delivery and effective coordination",
        "Collaborated with clients to gather requirements and provide tailored technical solutions",
        "Facilitated stakeholder communication and project documentation"
      ],
     
    },
    {
      id: 2,
      title: "Intern",
      company: "Fuerte Developers", 
      location: "Rajkot, Gujarat",
      duration: "May 2023 – Jul 2023",
      current: false,
      responsibilities: [
        "Developed and customized 2 WordPress website clones using plugins and themes",
        "Enhanced content management skills through hands-on development experience",
        "Collaborated with design and development teams"
      ],
      
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in",
      field: "Computer Engineering",
      institution: "Marwadi University",
      location: "Rajkot, Gujarat",
      duration: "2022 - 2025",
      cgpa: "9.44",
      status: "completed",
      accreditation: "NAAC A+ & NBA",
    },
    {
      id: 2,
      degree: "Diploma in",
      field: "Computer Engineering", 
      institution: "A.V. Parekh Technical Institute",
      location: "Rajkot, Gujarat",
      duration: "2019 - 2022",
      cgpa: "8.69",
      status: "completed",
      accreditation: "NBA",
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Career Essentials in Business Analysis",
      issuer: "Microsoft and LinkedIn",
      date: "Jun 2024",
      status: "completed",
      description: "Gained expertise in business analysis, requirements gathering, and project management",
      skills: ["Business Analysis", "Requirements Gathering", "Project Management"]
    },
    {
      id: 2,
      name: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "Oct 2022", 
      status: "completed",
      description: "Developed a strong SQL skills for database management and data-driven decision-making",
      skills: ["SQL", "Database Management", "Data Analysis"]
    },
    {
      id: 3,
      name: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      date: "May 2022",
      status: "completed", 
      description: "Acquired foundational knowledge in digital marketing and online business growth strategies",
      skills: ["Digital Marketing", "SEO", "Analytics", "Online Strategy"]
    }
  ],

  
  interests: [
    "Sports",
    "Listening Music",
    "Blogging", 
    "Business Strategy",
    "Project Management",
    "Case Studies",
    "Data Analysis",
    "Technology Trends"
  ],

  
}