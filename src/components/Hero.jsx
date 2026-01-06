import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={styles.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Akshay Kumar Singh
        </motion.h1>

        <motion.h2
          style={styles.role}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I design and build scalable, modern web applications with a strong
          focus on performance, clean architecture, and user experience.
        </motion.p>

        <motion.div
          style={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            style={styles.primary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>

          <motion.button
            style={styles.secondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #020617 0%, #020617 65%, rgba(56,189,248,0.1) 100%)",
    color: "#e5e7eb",
  },
  content: {
    maxWidth: "900px",
    padding: "0 10%",
  },
  name: {
    fontSize: "3.5rem",
    color: "#38bdf8",
  },
  role: {
    fontSize: "1.6rem",
    marginTop: "10px",
  },
  text: {
    marginTop: "20px",
    maxWidth: "700px",
    lineHeight: "1.8",
  },
  buttons: {
    marginTop: "35px",
    display: "flex",
    gap: "16px",
  },
  primary: {
    padding: "12px 28px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  secondary: {
    padding: "12px 28px",
    backgroundColor: "transparent",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Hero;
