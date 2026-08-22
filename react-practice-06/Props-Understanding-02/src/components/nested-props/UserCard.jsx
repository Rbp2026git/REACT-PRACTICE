function UserCard ({user, theme = "Light"}) {
    const {name, address } = user;
    const { city, pincode } = address || {};
    return (

        <div className = {theme}>
            <h2>{name}</h2>
            <p>{city} - {pincode}</p>
        </div>
    );
}
export default UserCard;

//{ user: {name, address: {city, pincode}}, theme = "Light" }