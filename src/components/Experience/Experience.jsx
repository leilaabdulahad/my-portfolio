import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import styles from './Experience.module.css'


export const experiences = [
  {
    date: "2024 - present",
    title: "CS50: Introduction to Databases with SQL",
    company: "Harvard University",
    points: [
      "Delving deeper into the realm of databases and SQL, this course is equipping me with the essential skills needed to design, manage, and query databases effectively. From database modeling to complex SQL queries, I'm gaining valuable insights into handling and analyzing data efficiently."
    ]
  },
  {
    date: "2023 - present",
    title: "Frontend Developer",
    company: "Student KYH Stockholm",
    points: [
      "I'm gaining practical experience in frontend development with a focus on HTML, CSS, JS, TS, along with backend development uing technologies such as Node.js and databases like MongoDB."
    ]
  },
  {
    date: "2023 - 2024",
    title: "CS50: Introduction to Computer Science",
    company: "Harvard University",
    points: [
      "This course has equipped me with foundational knowledge in computer science principles, data structures, algorithms and programming languages such as C, Javascript, Python, and SQL.",
      <a href="https://certificates.cs50.io/7d799f15-2d67-4b12-9802-2bd4d6211676.pdf?size=letter" target="_blank" rel="noopener noreferrer">View Certificate</a>
    ]
  },
  {
    date: "2023",
    title: "Swedish as second language teacher",
    company: "Engelska skolan Årsta",
    points: [
      "As a Swedish as Second Language teacher, I had the opportunity to foster an inclusive learning environment for students from diverse linguistic backgrounds. I facilitated language acquisition through engaging lessons and tailored approaches."
    ]
  }
]

export const textVariant = () => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.9,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  }
}

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#31363F", color: "#fff" }}
      contentArrowStyle={{ borderRight: "5px solid  #31363F" }}
      date={experience.date}
      iconStyle={{ background: '#31363F' }}>

      <div>
        <h3 className="experience-title">{experience.title} </h3>
        <p className="experience-company">{experience.company}</p>
      </div>

      <ul style={{ listStyleType: 'none' }}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} style={{ marginBottom: '10px' }}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div id="experience"> 
      <motion.div variants={textVariant()}>
        <h2>Experience</h2>
      </motion.div>

      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience