import ProfileInfo from "./ProfileInfo";
import SkillsList from "./SkillsList";

function ProfileCard() {
    const currentYear = new Date().getFullYear();

    return(
        <div className="profile-card">
            <ProfileInfo />
            <SkillsList />
            <p>&copy; {currentYear} Raushan Bhai Patel</p>
        </div>
    )
}
export default ProfileCard;