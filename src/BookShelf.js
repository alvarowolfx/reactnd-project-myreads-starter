import React from 'react';
import BooksGrid from './BooksGrid';

const BookShelf = ({ name, books, onUpdateBookOnShelf }) => {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    {books.length > 0 ?
                        <BooksGrid books={books}
                            onUpdateBookOnShelf={onUpdateBookOnShelf} />
                        :
                        <h3> No books on this section </h3>
                    }

                </div>
            </div>
        </div>
    )
}

export default BookShelf;