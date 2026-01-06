const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.grid}>
        {skills.map((skill) => (
          <span key={skill} style={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
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
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  skill: {
    padding: "10px 20px",
    border: "1px solid #38bdf8",
    borderRadius: "20px",
    color: "#38bdf8",
    fontWeight: "500",
  },
};

export default Skills;
