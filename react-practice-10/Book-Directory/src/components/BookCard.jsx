function BookCard({ book }) {
    return (
        <div style={{boxSizing: "border-box", width: "170px", height: "210px", border: "1px solid black", borderRadius: "8px", padding: "8px"}}>
            <div>
                <h3>{book.title}</h3>
                <p>{book.author} . {book.year}</p>
            </div>
            <span>{book.genre}</span>
        </div>
    );
}
export default BookCard;