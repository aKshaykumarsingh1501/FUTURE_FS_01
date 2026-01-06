const About = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        I am a passionate Full Stack Web Developer with hands-on experience in
        building responsive and scalable web applications. I enjoy solving
        real-world problems and continuously learning modern technologies.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    backgroundColor: "#020617",
  },
  heading: {
    color: "#38bdf8",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "800px",
    lineHeight: "1.8",
    color: "#e5e7eb",
  },
};

export default About;
