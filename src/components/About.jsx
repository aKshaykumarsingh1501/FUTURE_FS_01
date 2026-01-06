const About = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.text}>
        I am an aspiring Software Engineer currently pursuing a Bachelor of
        Engineering in Artificial Intelligence and Machine Learning. I have a
        strong foundation in data structures, algorithms, and object-oriented
        programming.
      </p>

      <p style={styles.text}>
        I enjoy building full-stack web applications, Android apps, and AI-driven
        solutions. I actively participate in hackathons and contribute to tech
        communities like Google Developer Groups.
      </p>
    </section>
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
  text: {
    maxWidth: "900px",
    lineHeight: "1.8",
    marginBottom: "15px",
  },
};

export default About;
