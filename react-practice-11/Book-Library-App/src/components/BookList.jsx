import BookCard from "./BookCard";

function BookList({books, filterGenre, onToggleRead}) {
    const filteredBook =books.filter((b) =>(
        b.genre.toLowerCase().includes(filterGenre.toLowerCase())
    ));

    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>📖 Your Library</h3>
            {filteredBook.length === 0 ? (
                <p>Koi book nahi mili</p>
            ) : (
                <ul>
                    {filteredBook.map((book, index) => (
                        <BookCard key={index} book={book}  onToggleRead={onToggleRead}/>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default BookList;