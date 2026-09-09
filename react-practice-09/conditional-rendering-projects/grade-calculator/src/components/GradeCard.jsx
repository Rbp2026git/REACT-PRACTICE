function GradeCard ({studentName, marks}) {
    return (
        <div>
            <h2>{studentName}</h2>
            <p>Marks: {marks}/100</p>

            {(() => {
                if (marks >= 90) {
                    return <h3>Grade: A+ (Excellent)</h3>
                }else if (marks >= 75) {
                    return <h3>Grade: A (Very Good)</h3>
                }else if (marks >= 60) {
                    return <h3>Grade: B (Good)</h3>
                }else if (marks >= 40) {
                    return <h3>Grade: C (Pass)</h3>
                }else {
                    return <h3>Grade: F (Fail)</h3>
                }
            })()}
        </div>
    );
}
export default GradeCard;