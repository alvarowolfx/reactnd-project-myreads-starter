import React from "react";
import Book from './Book';

const BooksGrid = ({ books, onUpdateBookOnShelf }) => {
    return (
        <ol className="books-grid">
            {books.map(book =>
                <li key={book.id}>
                    <Book book={book}
                        onUpdateBookOnShelf={onUpdateBookOnShelf} />
                </li>
            )}
        </ol>
    )
}

export default BooksGrid;