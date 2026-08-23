import SkillTag from "./SkillTag";
import ProjectItem from "./ProjectItem";

function MemberCard ({name, role, experience, isAvailable, skills, project, onContact, children}) {

    return (
        <div className = "member-card">
            <h2>Name: {name}</h2>
            <p><b>Role</b>: {role} . {experience} years experience</p>
            <p style = {{ color: isAvailable? "green" : "red" }}>
                <b>IsAvailable</b>: 
                {isAvailable? "Available for projects" : "Currently Bussy"}
            </p>
            <div className = "skills">
                <b>Skills</b>: 
                {skills.map((skill, index) =>(
                    <SkillTag key = {index} skill = {skill} />
                ))}
            </div>

            <ProjectItem project = {project} />
            <button onClick = {() => onContact(name)}>Contact {name}</button>

            {/* children props yahan render ho rha hai */}
            <div className = "extra-note" style = {{textDecoration: "underline"}}>{children}</div>
            <hr></hr>
        </div>
    );
}
export default MemberCard;