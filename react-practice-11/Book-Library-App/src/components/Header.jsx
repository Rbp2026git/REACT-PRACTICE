function Header ({totalBooks}) {
    return (
        <div className="text-center mb-[20px]">
            <h3>📚 Book Library Tracker"</h3>
            <p className="mt-1">Total Books: {totalBooks}</p>
        </div>
    );
}
export default Header;