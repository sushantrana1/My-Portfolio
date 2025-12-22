import React, { useEffect, useState } from 'react';
import { own } from './image';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaMoon } from 'react-icons/fa';
import { MdSunny } from "react-icons/md";

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const name = 'Sushant Rana';

  const email = "sushantrana1121@gmail.com";
  const skills: { name: string; level: number }[] = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 70 },
    { name: 'Tailwind', level: 80 },
  ];

  const technicalSkills = [
    {
      title: "Programming Languages",
      items: ["PHP", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "React.js"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "PHP"],
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "XAMPP",
        "npm",
        "MS Word",
        "Excel",
        "PowerPoint",
      ],
    },
  ]

  const projects = [
    {
      title: "Pharmacy Management System",
      description:
        "A full-stack web application designed to manage pharmacy inventory, medicine sales, billing, and reports. Implemented user authentication and CRUD operations for efficient management.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/sushantrana1/Pharmacy-Management-System",
    },
    {
      title: "ShopEase Website",
      description:
        "An e-commerce website with product listing, cart functionality, and admin-side management. Focused on responsive UI and dynamic data handling.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sushantrana1/Shopease",
    },
    {
      title: "Basic Calculator",
      description:
        "A simple calculator web application supporting basic arithmetic operations with a clean and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sushantrana1/Basic-Calculator",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Management (BIM)",
      institution: "Sudur Paschimanchal Campus, Tribhuvan University",
      period: "7th Semester | Expected 2026",
    },
    {
      degree: "+2 in Commerce",
      institution: "National Academy of Science and Technology",
      period: "2077 - 2079",
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Shree Saraswati Secondary School",
      period: "2075 - 2076",
    },
  ];

  const certifications = [
  {
    title: "MERN Stack Course",
    year: "2025",
  },
  {
    title: "Artificial Intelligence for Development",
    year: "2025",
  },
  {
    title: "Hardware & Networking Training",
    year: "2024",
  },
  {
    title: "Basic Computer Course",
    year: "2022",
  },
];




  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden font-sans">

      {/* Navbar */}
      <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <nav className="flex items-center gap-4">
            <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
            <a href="#skills" className="hover:text-indigo-500 transition">Skills</a>
            <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
            <button onClick={() => setDark(!dark)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition">
              {dark ? <FaMoon/> : <MdSunny/>}
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-24 max-w-6xl mx-auto px-6">

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Hi, I’m {name}.
            </h2>

            <p className="text-indigo-600 font-medium text-lg">
              BIM Student | MERN Stack Learner
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Bachelor of Information Management (BIM) student with a strong foundation in
              the MERN stack (MongoDB, Express.js, React.js, Node.js) and hands-on experience
              in full-stack web development. Skilled in building responsive user interfaces,
              developing RESTful APIs, and managing databases. Additionally experienced in
              PHP and MySQL through academic projects. Passionate about learning modern
              technologies and seeking an IT/Software Development internship to apply and
              enhance practical skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg"
              >
                See Projects
              </a>

              <a
                href={`mailto:${email}`}
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1">
              <img
                src={own}
                alt="Sushant Rana"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
          </div>
        </section>


        {/* Skills */}
        <section id="skills" className="my-12">
          <h3 className="text-3xl font-bold text-indigo-600 mb-8">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  {skill.title}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-indigo-50 dark:bg-gray-700 
                         text-indigo-600 dark:text-indigo-400 
                         rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="my-12">
          <h3 className="text-3xl font-bold text-indigo-600 mb-8">
            Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg 
                   hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full 
                 bg-indigo-100 dark:bg-gray-700 
                 text-indigo-600 dark:text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 
             border border-indigo-600 text-indigo-600 
             rounded-full hover:bg-indigo-600 hover:text-white 
             transition text-sm"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>


        <section id="resume-education" className="my-12">
          <h3 className="text-3xl font-bold text-indigo-600 mb-8">
            Resume & Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Resume Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold mb-3">Resume</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Download my resume to view detailed information about my skills,
                education, and projects.
              </p>

              <a
                href="/Sushant_Rana_Resume.pdf"
                download
                className="inline-block px-6 py-3 bg-indigo-600 text-white 
                   rounded-full hover:bg-indigo-700 transition shadow-lg"
              >
                Download Resume
              </a>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold mb-4">Education</h4>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-b pb-3 last:border-none">
                    <h5 className="font-semibold">{edu.degree}</h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*traninig*/}
        <section id="certifications" className="my-12">
  <h3 className="text-3xl font-bold text-indigo-600 mb-8">
    Training & Certifications
  </h3>

  <div className="grid md:grid-cols-2 gap-6">
    {certifications.map((cert) => (
      <div
        key={cert.title}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
                   hover:shadow-xl transition"
      >
        <h4 className="text-xl font-semibold">
          {cert.title}
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          {cert.year}
        </p>
      </div>
    ))}
  </div>
</section>



        {/* Contact */}
        <section id="contact" className="my-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">Get in touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Email me at <a href={`mailto:${email}`} className="underline">{email}</a> or connect via social links:</p>
          <div className="flex gap-4">
            <a href={`mailto:${email}`} className="px-4 py-2 bg-indigo-600 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition"><FaEnvelope /> Email</a>
            <a href="https://www.linkedin.com/in/sushant-rana-5770a6266/" className="px-4 py-2 bg-indigo-600 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/sushantrana1" className="px-4 py-2 bg-indigo-600 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition"><FaGithub /> GitHub</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-1 px-8 flex items-center justify-center">Made with  < FaHeart />  by {name}</footer>
      </main>
    </div>
  );
};

export default App;
