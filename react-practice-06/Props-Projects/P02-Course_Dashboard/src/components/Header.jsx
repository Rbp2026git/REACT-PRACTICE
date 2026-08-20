function Header({ children }) {

    return (
        <div style={{
            background: "#282c34",
            color: "white",
            padding: "15px",
            textAlign: "center"
        }}>
            <h1>{children}</h1>
        </div>
    )
}

export default Header;