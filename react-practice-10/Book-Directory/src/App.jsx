import { useState } from 'react';
import initialBooks from './components/data';
import BookList from './components/BookList';

function App() {

  const [books, setBooks] = useState(initialBooks);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [useIndexAsKey, setUseIndexAsKey] = useState(false);

  function addBook() {

    if (title.trim() === "" || author.trim() === "") return;

    const newBook = {
      id: "b" + Date.now(),
      title,
      author,
      genre: "Function",
      year: new Date().getFullYear(),
    };
    setBooks((prevBook) => [newBook, ...prevBook]);
    setTitle("");
    setAuthor("");
  }

  function sortByTitle() {
    setBooks((prevBooks) => {
      return [...prevBooks].sort((a, b) => a.title.localeCompare(b.title));
    });
  }

  return (
    <div>
      <div>
        <header>
          <h1>Book Directory</h1>
          <p>Lists &amp; Keys - Add, sort, Delete books and effect of Keys</p>
        </header>

        {/* Add form */}
        <div>
          <div>
            <label>Book's name : </label>
            <input
              type="text"
              placeholder="Book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label>Book's Author : </label>
            <input
              type="text"
              placeholder="Author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button onClick={addBook}>Add Book</button>

        </div>
        <hr />
        
        {/* Control to demonstrate the Key concept in React. */}
        <div>

          <div>
            <span>
              Key mode: <strong>{useIndexAsKey ? "index (galat tarika)" : "book.id (sahi tarika)"}</strong>
            </span>
            <button
              onClick={() => setUseIndexAsKey(
                (prev) => !prev
              )}
            >
              Switch to: {useIndexAsKey ? "book.id" : "index"}
            </button>
          </div>

          <button onClick={sortByTitle}>Sort A - Z</button>

          <p>
            Try Karo: kisi bhi book card ke "note" input mein likho, phir "Sort A - Z" dabao.
            Index-mode mein galat card pe chala jayega.
            Id-mode mein note sahi book ka saath hi rahega.
          </p>
        </div>
      </div>
      <hr />

      <BookList
        books={books}
        useIndexAsKey={useIndexAsKey}
      />

    </div>
  )
}

export default App
