import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Swati Arts – Full Stack Artwork Ordering Website",
      desc: "Client-based full stack artwork ordering platform with secure backend APIs, SEO optimization, and cloud-based image delivery.",
      tech: "HTML, CSS, JavaScript, Node.js, Express.js, Cloudinary",
      link: "https://swatiarts.onrender.com",
    },
    {
      title: "EmotionVerse – AI Story Generator",
      desc: "AI-powered web application that detects facial emotions using a CNN model and generates emotion-based stories in multiple languages.",
      tech: "Python, TensorFlow, Streamlit, OpenCV",
    },
    {
      title: "ManoSaathi – Mental Well-Being Companion",
      desc: "Interactive mental health support platform with mood tracking, journaling features, and an AI-powered chatbot for personalized guidance.",
      tech: "HTML, CSS, JavaScript, Node.js, Express.js",
      link: "https://mano-saathi.vercel.app",
    },
    {
      title: "Melody App – Android Music Player",
      desc: "Android music player app that scans local storage to fetch MP3 files and provides full playback controls with notifications and playlist looping.",
      tech: "Java, XML, Android Studio",
    },
  ];

  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div style={styles.content}>
        <h2 style={styles.heading}>Projects</h2>

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              style={styles.card}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <h3 style={styles.title}>{p.title}</h3>
              <p style={styles.desc}>{p.desc}</p>
              <p style={styles.tech}>
                <strong>Tech:</strong> {p.tech}
              </p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  Live Demo →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    backgroundColor: "#020617",
    color: "#e5e7eb",
  },
  content: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heading: {
    color: "#38bdf8",
    fontSize: "2rem",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid rgba(56,189,248,0.4)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#020617",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  title: {
    color: "#38bdf8",
    marginBottom: "10px",
  },
  desc: {
    marginBottom: "10px",
    lineHeight: "1.6",
  },
  tech: {
    fontSize: "0.9rem",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#38bdf8",
    fontWeight: "500",
  },
};

export default Projects;
