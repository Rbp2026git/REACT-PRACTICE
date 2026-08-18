import raushanImg from './assets/raushan-img.jpg'
import './ProfileCard.css'

function ProfileCard() {
    return (
        <div className="profile-card">
            <img className= "profile-image" src= {raushanImg} alt= "Raushan Bhai Patel" />
            <h2>Raushan Bhai Patel</h2>
            <h2>Courses : </h2>
            <ol type= "1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>GitHub</li>
                <li>React</li>
            </ol>
            <button onClick={callMe}>Follow Me</button>
        </div>
    )

    function callMe() {
        alert("You have clicked on the button")
    }
}

export default ProfileCard