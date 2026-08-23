function ProjectItem ({project: {title, tech}}) {
    //const {title, tech} = project;

    return (
        <div className = "project-item">
            <h4><b>Project</b>: {title}</h4>
            <p><b>Tech Stack</b>: {tech.join(", ")}</p>
        </div>
    );
}

export default ProjectItem;