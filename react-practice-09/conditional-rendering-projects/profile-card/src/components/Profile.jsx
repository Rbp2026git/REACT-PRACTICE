function Profile ({userName, bio, city, avatar}) {
    return (
        <div>
            <img 
            src = {avatar || "https://"}
            alt = "Avatar"/>
            <h2>{userName || "Unnknown User"}</h2>
            <p>{bio || "No bio added yet. "}</p>
            <p>{city || "Location not set."}</p>

        </div>
    );
}
export default Profile;z