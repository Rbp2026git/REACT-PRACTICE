import Header from "./components/Header";
import CourseCard from "./components/CourseCard";
import coursesData from "./data/coursesData";

function App() {

  const handleEnroll = (courseName) => {
    alert (`You enrolled in: ${courseName}`);
  };

  return (
    <>

      <Header>My Learning Dashboard</Header>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px"
      }}>
        {coursesData.map((course) => (
          <CourseCard
            key= {course.id}
            title= {course.title}
            price={course.price}
            isFree= {course.isFree}
            rating= {course.rating}
            tags= {course.tags}
            instructor= {course.instructor}
            onEnroll={handleEnroll}
          />
        ))}
      </div>
    </>
  );
}

export default App
