function BookCard({book, onToggleRead}) {
   return (
    <li>
        <div>
            <strong>{book.title}</strong> by {book.author}
        <br />
        <span>
            {book.genre} * {book.pages} pages
        </span> {' '}
        
        {book.read ? (
            <span>Read</span>
        ) : (
            <span>Unread</span>
        )}
        </div>
        <button
        onClick = {()=> onToggleRead(book.title)}
        className="px-[10px] py-1 rounded-md border border-[#4f46e5] bg-white text-[#4f46e5] cursor-pointer text-xs mt-1.5"
        >
            Markas {book.read ? "Unread" : "Read"}
        </button>
    </li>
    
   )
}
export default BookCard;