import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div style={styles.content}>
        <p>© {new Date().getFullYear()} Akshay Kumar Singh</p>
        <p>Built with React & Framer Motion</p>
      </div>
    </motion.footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    padding: "40px 10%",
    borderTop: "1px solid rgba(56,189,248,0.2)",
  },
  content: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "0.9rem",
    opacity: 0.8,
    lineHeight: "1.6",
  },
};

export default Footer;
