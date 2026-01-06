const Hero = () => {
  return (
    <section style={styles.section}>
      <h1 style={styles.name}>Akshay Kumar Singh</h1>
      <h2 style={styles.role}>Full Stack Web Developer</h2>
      <p style={styles.text}>
        I design and build scalable, modern web applications with a focus on
        performance and clean user experience.
      </p>

      <div style={styles.buttons}>
        <a href="/resume.pdf" download>
          <button style={styles.primary}>Download Resume</button>
        </a>
        <a href="#contact">
          <button style={styles.secondary}>Contact Me</button>
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "80px 10%",
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
  },
  name: {
    fontSize: "3rem",
    color: "#38bdf8",
  },
  role: {
    fontSize: "1.5rem",
    marginTop: "10px",
  },
  text: {
    maxWidth: "600px",
    marginTop: "20px",
    lineHeight: "1.6",
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "15px",
  },
  primary: {
    padding: "12px 24px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  secondary: {
    padding: "12px 24px",
    backgroundColor: "transparent",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Hero;
