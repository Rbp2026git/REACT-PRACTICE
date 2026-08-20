import InstructorBadge from "./InstructorBadge.jsx";

function CourseCard ({title, price, isFree, rating, tags, instructor, onEnroll}) {
    
    return (
        <div style= {{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "16px",
            width: "280px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{isFree? "Free Course" : `₹${price}`}</p>

            <div>
                {tags.map((tag, index) => (
                    <span key= {index} style = {{
                        background: "#eee",
                        padding: "3px 8px",
                        marginRight: "5px",
                        borderRadius: "5px",
                        fontSize: "12px"
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            <InstructorBadge instructor= {instructor} />

            <button onClick = {()=> onEnroll(title)} style= {{marginTop: "10px"}}>
                Enroll Now
            </button>
        </div>
    );
}

export default CourseCard;