function SkillsList (){

    const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

    return(
        <div className = "skills-list">
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsList;