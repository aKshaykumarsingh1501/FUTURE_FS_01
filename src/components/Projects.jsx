const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A professional portfolio website to showcase skills, projects, and achievements.",
      tech: "React, CSS, GitHub, Vite",
    },
    {
      title: "Mini E-Commerce Store",
      description:
        "A simple e-commerce platform with product listing and cart functionality.",
      tech: "React, Context API, CSS",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.container}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>
            <p style={styles.tech}>
              <strong>Tech:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    backgroundColor: "#0f172a",
  },
  heading: {
    color: "#38bdf8",
    fontSize: "2rem",
    marginBottom: "30px",
  },
  container: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },
  card: {
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "10px",
    color: "#e5e7eb",
    border: "1px solid #38bdf8",
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
};

export default Projects;
