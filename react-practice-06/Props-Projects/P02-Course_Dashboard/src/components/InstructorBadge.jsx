function InstructorBadge ({instructor}) {

    return (
        <div style= {{
            fontSize: "13px",
            color: "#555"
        }}>
            <span style= {{marginRight: "5px", textDecoration: "underline", color: "blue"}}>#{instructor.name}</span>
            <span style={{}}>. {instructor.experience} experience</span>
        </div>
    )
}

export default InstructorBadge;