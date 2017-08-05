import React from "react";
import Book from './Book';

const BooksGrid = ({ books, onUpdateBookShelf }) => {
    return (
        <ol className="books-grid">
            {books.map(book =>
                <li key={book.id}>
                    <Book book={book}
                        onUpdateBookShelf={onUpdateBookShelf} />
                </li>
            )}
        </ol>
    )
}

export default BooksGrid;