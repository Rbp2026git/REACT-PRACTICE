function Output({name, age, bio, likes}) {
    return (
        <div className=" mt-[20px] p-4 rounded-3xl bg-[#f1f5f9]">
            <h3>{name || "Your name"}</h3>
            <p>Age: {age}</p>
            <p>{bio || "No bio available"}</p>
            <p>Likes: {likes}</p>
        </div>
    );
}
export default Output;