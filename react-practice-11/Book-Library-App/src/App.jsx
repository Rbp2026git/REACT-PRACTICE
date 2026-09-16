import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import GenreFilter from './components/GenreFilter';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import QuickReviewForm from './components/QuickReviewForm';

function App() {
  
  const [books, setBooks] = useState([]);
  const [filterGenre, setFilterGenre] = useState('');

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook])
  };

  const handleToggleRead = (title) =>{
    setBooks((prevBooks) => 
    prevBooks.map((b) => b.title === title ? {...b, read: !b.read } : b )
    );
  };

  return (
    <div className="font-sans max-w-[480px] mx-auto p-4" >

      <Header totalBooks = {books.length} />
      <GenreFilter filterGenre = {filterGenre} onFilterChange = {setFilterGenre} />
      <AddBookForm onAddBook={handleAddBook} />
      <BookList 
      books = {books}
      filterGenre = {filterGenre}
      onToggleRead = {handleToggleRead}
      />
      <QuickReviewForm />

    </div >
  )
}

export default App
