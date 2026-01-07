import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div style={styles.content}>
        <h2 style={styles.heading}>Skills</h2>

        <p><b>Languages:</b> Java, Python, C, C++, JavaScript, SQL</p>
        <p><b>Web & Mobile:</b> HTML, CSS, React, Node.js, Express, XML, Flutter</p>
        <p><b>Core CS:</b> Data Structures & Algorithms, OOP, ML Basics</p>
        <p><b>Tools:</b> Git, GitHub, Android Studio, VS Code</p>
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
    marginBottom: "20px",
  },
};

export default Skills;
