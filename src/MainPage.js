import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// imports Shelf from './Shelf';
import Book from './Book';


function MainPage(props) {


    return (

      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

          <div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  props.books
                  //bookshelf
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                        book={book}
                        changeShelves={props.changeShelves}
                        currentShelf="currentlyReading"
                        />
                      </li>
                    ))
                }
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  props.books
                  //bookshelf
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                        book={book}
                        changeShelves={props.changeShelves}
                        currentShelf="wantToRead"
                        />
                      </li>
                    ))
                }

                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  props.books
                  //bookshelf
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                        book={book}
                        changeShelves={props.changeShelves}
                        currentShelf="read"
                        />
                      </li>
                    ))
                }
                </ol>
              </div>
            </div>


          </div>

        </div>

        <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
        </div>
      </div>
    )
  }

export default MainPage;
