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
            title: "Predictive Battery-Health Model",
            desc: "Real-world predictive maintenance system for Bangladesh's massive e-rickshaw fleet. Logs voltage/current discharge curves via multimeter + relay over charge cycles, then trains ML regression models to predict remaining useful life (RUL) before battery failure. Addresses a genuine underserved market in South Asia.",
            tech: ["Python", "Scikit-learn", "Time Series", "Predictive Maintenance", "IoT Sensors", "Pandas", "NumPy"],
            link: "https://github.com/mostahidx",
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
        // ML / Data Science
        { name: "Python", category: "ML / Data Science" },
        { name: "Scikit-learn", category: "ML / Data Science" },
        { name: "Pandas", category: "ML / Data Science" },
        { name: "NumPy", category: "ML / Data Science" },
        { name: "Matplotlib / Seaborn", category: "ML / Data Science" },
        { name: "Machine Learning", category: "ML / Data Science" },
        { name: "Predictive Maintenance", category: "ML / Data Science" },
        { name: "Time Series Analysis", category: "ML / Data Science" },
        { name: "Data Preprocessing", category: "ML / Data Science" },
        { name: "Feature Engineering", category: "ML / Data Science" },
        { name: "Regression & Classification", category: "ML / Data Science" },
        { name: "Neural Networks", category: "ML / Data Science" },

        // Databases
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        { name: "MySQL", category: "Database" },
        { name: "Firebase", category: "Database" },

        // Backend / Tools
        { name: "Node.js", category: "Backend" },
        { name: "Express.js", category: "Backend" },
        { name: "REST APIs", category: "Backend" },
        { name: "Git", category: "Tools" },
        { name: "Docker", category: "Tools" },
        { name: "AWS", category: "Cloud" },

        // Frontend (Secondary)
        { name: "React", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
    ],
    socials: [
        { name: "GitHub", url: "https://github.com/mostahidx", icon: "gh" },
        { name: "LinkedIn", url: "https://linkedin.com/in/mostahidx", icon: "in" },
        { name: "X", url: "https://x.com", icon: "X" },
        { name: "Email", url: "mailto:mostahidx@gmail.com", icon: "em" }
    ],
    about: {
        bio: "I'm an aspiring Data Scientist and ML Engineer from Dhaka, Bangladesh, currently pursuing my B.Sc. in Computer Science & Engineering at BRAC University. I'm driven by the challenge of turning raw data into actionable intelligence — especially when it solves real problems in my community.",
        description: "My passion lies at the intersection of machine learning and real-world impact. From predictive maintenance for Bangladesh's e-rickshaw fleets to customer churn modeling, I build end-to-end ML pipelines that don't just predict — they inform decisions. I'm particularly drawn to time-series forecasting, sensor data analytics, and predictive modeling for underserved markets.",
        focus: "Currently focused on predictive maintenance, battery health modeling, and deploying ML solutions for South Asian mobility and energy sectors."
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
        },
        {
            title: "Predictive Maintenance Research",
            category: "Technical",
            description: "Developing battery-health-as-a-service models for e-rickshaw fleets — a genuinely hot business model in South Asia right now",
            icon: "🔋",
            year: "2025"
        }
    ],
    stats: [
        { label: "ML Projects", value: "5+" },
        { label: "Models Trained", value: "10+" },
        { label: "Data Points Analyzed", value: "50K+" }
    ],
    logs: [
        { date: "Current", event: "Building predictive battery-health models for e-rickshaw fleets in Bangladesh" },
        { date: "2025", event: "Exploring time-series forecasting and sensor data analytics for predictive maintenance" },
        { date: "2024", event: "Completed ML-based customer churn prediction with neural networks and ensemble methods" },
        { date: "2024", event: "Developed CrisisConnect with geospatial data analysis for emergency response optimization" }
    ]
};