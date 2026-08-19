function MovieCard(Props) {

    return (
        <div style={{width: "320px", height: "400px", border: "1px solid gray", borderRadius: "10px", margin: "10px", padding: "10px" }}>

            <img src={Props.image} alt={Props.title}  style = {{ width: "100%", borderRadius: "10px" }}/>
            <h2>{Props.title}</h2>
            <p>Year: {Props.year}</p>
            <p>Rating: {Props.rating}</p>

        </div>
    )
}

export function Greeting (Props) {
    return (
        <h2>Hello, {Props.name}</h2>
    )
}

export default MovieCard;