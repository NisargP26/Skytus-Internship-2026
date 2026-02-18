const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
