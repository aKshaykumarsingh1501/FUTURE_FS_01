import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 style={styles.heading}>Contact</h2>
      <p>Email: akshaykrsingh.jsr@gmail.com</p>
      <p>GitHub: github.com/aKshaykumarsingh1501</p>
      <p>LinkedIn: linkedin.com/in/akshay-kumar-singh-936274361</p>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    backgroundColor: "#020617",
    color: "#e5e7eb",
  },
  heading: {
    color: "#38bdf8",
    fontSize: "2rem",
    marginBottom: "20px",
  },
};

export default Contact;
