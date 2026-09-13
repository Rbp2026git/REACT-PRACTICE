function UserCard ({user}) {
    return (
        <li className="mb-1.5">
            <strong>{user.name}</strong> ({user.email}) - Age: {user.age} {" "}
            {Number(user.age) < 18 && <span className = "bg-[#fde68a] text-[#92400e] text-xs py-0.5 px-1.5 rounded"> Minor</span>}
        </li>
    );
}
export default UserCard;