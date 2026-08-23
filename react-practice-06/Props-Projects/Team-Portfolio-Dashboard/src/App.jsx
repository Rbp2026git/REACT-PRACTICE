import { teamMembers } from "./data";
import MemberCard from "./components/MemberCard";

function App() {
  const handleContact = (name) => {
    alert(`Message sent to ${name}!`);
  };

  return (
    <div className="app">
      <h1>Our Team</h1>

      {teamMembers.map((member) => (
        <MemberCard
          key={member.id}
          name = {member.name}
          role = {member.role}
          experience = {member.experience}
          isAvailable = {member.isAvailable}
          skills = {member.skills}
          project = {member.project}
          onContact = {handleContact}
        >
          {/* ye children props hai */}
          <p>Top performer this quater</p>
        </MemberCard>
      ))}

    </div>
  )
}

export default App
