import UserCard from "./UserCard";

function UserList ({users, searchTerm}) {
    const filteredUsers =users.filter((u) => {
        return (
            u.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    });

    return (
        <div className = "border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>👥 Registered Users</h3>

            {filteredUsers.length === 0 ? (
                <p className = "text-[#999]">Koi user nahi mila 😕</p>
            ) : (
                <ul className = "pl-5">
                    {filteredUsers.map((user, index) => (
                        <UserCard key = {index} user = {user}/>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default UserList;