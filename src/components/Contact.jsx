import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
    id="contact"
      style={styles.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div style={styles.content}>
        <h2 style={styles.heading}>Contact</h2>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:akshaykrsingh.jsr@gmail.com">
            akshaykrsingh.jsr@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/aKshaykumarsingh1501"
            target="_blank"
            rel="noreferrer"
          >
            github.com/aKshaykumarsingh1501
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/akshay-kumar-singh-936274361"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/akshay-kumar-singh-936274361
          </a>
        </p>
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
    lineHeight: "1.8",
  },
  heading: {
    color: "#38bdf8",
    fontSize: "2rem",
    marginBottom: "20px",
  },
};

export default Contact;
