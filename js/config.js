// js/config.js
const PortfolioData = {
    profile: {
        name: "Md Mostahid Hasan",
        title: "Aspiring Data Scientist & ML Engineer",
        location: "Dhaka, Bangladesh",
        status: "B.Sc. Computer Science & Engineering, BRAC University"
    },
    projects: [
        {
            title: "Ki Khabo -- AI-Powered Smart Food Platform",
            desc: "Group project (4 members) for CSE471. Owned four modules (M1-3, M2-1, M3-1, M3-2), including the OpenAI API integration, on a feature branch in a shared team repository.",
            tech: ["Node.js", "OpenAI API"],
            link: "https://github.com/swapnilrob/ki-khabo",
            highlight: true
        },
        {
            title: "Customer Churn Prediction",
            desc: "End-to-end ML pipeline predicting customer churn using Logistic Regression, KNN, and Neural Networks. Includes complete data preprocessing, feature engineering, model evaluation, and comparative analysis across algorithms.",
            tech: ["Python", "Scikit-learn", "Neural Networks", "Data Analysis", "Feature Engineering", "Classification"],
            link: "https://github.com/mostahidx/customer-churn-prediction"
        },
        {
            title: "CrisisConnect",
            desc: "Disaster management platform with real-time geospatial mapping and intelligent skill matching. Built ML-driven volunteer coordination and emergency response optimization using spatial data analysis.",
            tech: ["Next.js", "PostgreSQL", "Real-time Maps", "REST API", "Geospatial Analysis"],
            link: "https://github.com/mostahidx/CrisisConnect"
        },
        {
            title: "BloodLine",
            desc: "Hospital management system with data-driven patient portal. Features AJAX-driven analytics dashboard for medical records, bed inventory forecasting, and appointment optimization using historical data patterns.",
            tech: ["PHP", "MySQL", "JavaScript", "AJAX", "Data Visualization"],
            link: "https://github.com/mostahidx/BloodLine"
        },
        {
            title: "Mini-VSFS",
            desc: "User-space file system emulator implementing block-based storage with CRC32 integrity checks and binary serialization. Demonstrates low-level systems thinking relevant to data pipeline reliability.",
            tech: ["C17", "OS Concepts", "Binary Data", "System Design", "Data Integrity"],
            link: "https://github.com/mostahidx/Mini-VSFS-"
        }
    ],
    skills: [
    // Languages
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "PHP", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "Assembly (8086)", category: "Languages" },

    // Web & Backend
    { name: "React", category: "Web & Backend" },
    { name: "Next.js", category: "Web & Backend" },
    { name: "Node.js", category: "Web & Backend" },
    { name: "Express", category: "Web & Backend" },
    { name: "FastAPI", category: "Web & Backend" },
    { name: "REST APIs", category: "Web & Backend" },
    { name: "Tailwind CSS", category: "Web & Backend" },

    // Databases
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "Firebase", category: "Databases" },

    // AI / ML
    { name: "TensorFlow", category: "AI / ML" },
    { name: "Scikit-learn", category: "AI / ML" },
    { name: "Pandas", category: "AI / ML" },
    { name: "NumPy", category: "AI / ML" },
    { name: "Matplotlib", category: "AI / ML" },
    { name: "Seaborn", category: "AI / ML" },
    { name: "LLMs", category: "AI / ML" },
    { name: "RAG", category: "AI / ML" },
    { name: "Multimodal AI", category: "AI / ML" },
    { name: "OpenRouter", category: "AI / ML" },
    { name: "Groq", category: "AI / ML" },
    { name: "Neural Networks", category: "AI / ML" },
    { name: "Feature Engineering", category: "AI / ML" },
    { name: "Time-Series Analysis", category: "AI / ML" },

    // Tools & Platforms
    { name: "Git", category: "Tools & Platforms" },
    { name: "GitHub", category: "Tools & Platforms" },
    { name: "Linux", category: "Tools & Platforms" },
    { name: "Jupyter", category: "Tools & Platforms" },
    { name: "Cisco Packet Tracer", category: "Tools & Platforms" }
    ],
    socials: [
        { name: "GitHub", url: "https://github.com/mostahidx", icon: "gh" },
        { name: "LinkedIn", url: "https://linkedin.com/in/mostahidx", icon: "in" },
        { name: "X", url: "https://x.com/mostahidx", icon: "X" },
        { name: "Email", url: "https://mail.google.com/mail/?view=cm&to=mostahid.hq@gmail.com", icon: "em" }
    ],
    about: {
        bio: "I’m a CSE undergraduate at BRAC University exploring how thoughtful software and machine learning can solve practical problems. My work spans web applications, systems programming, and research into self-supervised learning for steel defect detection.",
        description: "Computer Science and Engineering undergraduate at BRAC University with hands-on experience in machine learning pipelines, database-backed web applications and low-level systems programming. My ongoing research explores self-supervised learning for robust steel surface defect detection and localization. Seeking internship and entry-level opportunities in Software Engineering, Data Science, and Machine Learning, with a longer-term goal of graduate study in AI and Data Science.",
        focus: "Currently focused on self-supervised learning, machine learning pipelines, and robust steel surface defect detection and localization."
    },
    achievements: [
        {
            title: "B.Sc. Computer Science & Engineering",
            category: "Academic",
            description: "BRAC University — Building strong foundations in algorithms, data structures, machine learning, and statistical analysis",
            icon: "🎓",
            year: "2027"
        },
        {
            title: "Carrom Champion",
            category: "Sports",
            description: "Crowned Champion in BRAC University's Residential Semester (RS64) Carrom Championship — strategic thinking under pressure",
            icon: "🏆",
            year: "2024"
        }
    ],
    stats: [
        { label: "ML Projects", value: "5+" },
        { label: "Models Trained", value: "10+" },
        { label: "Data Points Analyzed", value: "50K+" }
    ],
    logs: [
        { date: "2025", event: "Exploring time-series forecasting and sensor data analytics for predictive maintenance" },
        { date: "2024", event: "Completed ML-based customer churn prediction with neural networks and ensemble methods" },
        { date: "2024", event: "Developed CrisisConnect with geospatial data analysis for emergency response optimization" }
    ]
};
