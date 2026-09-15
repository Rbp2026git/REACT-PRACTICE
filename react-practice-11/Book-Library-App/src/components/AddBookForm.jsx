import { useState } from "react";

function AddBookForm({onAddBook}) {

    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        genre: '',
        pages: '',
    });

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setBookData((prevData) =>({
            ...prevData,
            [name] : value,
        }));
    };
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
       e.preventDefault();
       if(!bookData.title || !bookData.author || !bookData.genre || !bookData.pages) {
        setError('Sabhi fields bharna jaroori hai !');
        return;
       }
       if(bookData.pages <= 0) {
        setError('pages ek positive number honi chahiye !');
        return;
       }
       onAddBook({...bookData, read: false});
       setBookData({title:'', author:'', genre: '', pages:'',});
       setError('');
    }
    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>📚 Add Book (Multiple Inputs → Single State Object)</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                    type="text"
                    placeholder="Book Title"
                    name="title"
                    value={bookData.title}
                    onChange={inputHandler}
                />
                <input
                    className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={bookData.author}
                    onChange={inputHandler}
                />
                <input
                    className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    value={bookData.genre}
                    onChange={inputHandler}
                />
                <input
                    className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                    type="text"
                    placeholder="Total Pages"
                    name="pages"
                    value={bookData.pages}
                    onChange={inputHandler}
                />
                <button
                    type="submit"
                    className="py-2 px-2 px-4 rounded-[6px] border-0 bg-[#4f46e5] text-white cursor-pointer"
                >
                    Add Book
                </button>
            </form>
            {/* Conditional Rendering */}
            {error && <p className= "text-[#dc2626] text-sm">⚠️{error}</p>}
        </div>
    )
}
export default AddBookForm;