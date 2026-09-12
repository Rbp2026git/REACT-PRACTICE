import BookCard from "./BookCard";
function BookList ({books, useIndexAsKey}) {

    if (books.length === 0) {
        return <p>Koi book nhi bachi. Niche se add karo.</p>
    }

    return (
        <div style = {{ display: "flex", gap: "10px"}}>
            {books.map ((book, index) =>(
                <BookCard 
                key = {useIndexAsKey ? index : book.id}
                book = {book}
                />
            ))}
        </div>
    );
}
export default BookList;