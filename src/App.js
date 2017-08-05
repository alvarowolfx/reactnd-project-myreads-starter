import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import SearchPage from './SearchPage';
import BookShelfPage from './BookShelfPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    booksOnShelf: [],
    showSearchPage: true
  };

  async componentDidMount() {
    let booksOnShelf = await BooksAPI.getAll()
    this.setState({ booksOnShelf });
  }

  async updateBookOnShelf(book, shelf) {

    let { booksOnShelf } = this.state;
    let bookOnShelf = booksOnShelf.filter(bookOnShelf => (
      bookOnShelf.id === book.id
    ))[0];

    if (bookOnShelf) {
      bookOnShelf.shelf = shelf;
      this.setState({ booksOnShelf })
    } else {
      book.shelf = shelf;
      this.setState({
        booksOnShelf: booksOnShelf.concat(book)
      })
    }

    await BooksAPI.update(book, shelf);
  }

  goToSearch() {
    this.setState({ showSearchPage: true })
  }

  goToShelf() {
    this.setState({ showSearchPage: false })
  }

  render() {
    let { booksOnShelf } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage
          ? <SearchPage
            booksOnShelf={booksOnShelf}
            onAddBookOnShelf={(book, shelf) => this.updateBookOnShelf(book, shelf)}
            onBackClick={() => this.goToShelf()} />
          : <BookShelfPage
            booksOnShelf={booksOnShelf}
            onUpdateBookShelf={(book, shelf) => this.updateBookOnShelf(book, shelf)}
            onAddBookClick={() => this.goToSearch()} />}
      </div>
    );
  }
}

export default BooksApp;
