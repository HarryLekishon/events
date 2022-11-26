import axios from 'axios';
import React, {useEffect,useState } from 'react'
import Book from './Book';
import '../App.css';
import Header from '../components/Header';
import Events from './Events';


const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    
    <body style={{ backgroundColor: "rgb(218, 221, 230);" }}>
      <Header/>
      <Events/>
      <section className="ticket-container" style={{ fontFamily: "'Courier New', Courier, monospace ;" }}>
        <h1>
          Events
        </h1>
        <div className="ticket-row row w-100 p-1">
          
            {books &&
              books.map((book, i) => (
                <div className="card bg-transparent border-0 col-md-6 m-0 p-1" key={i}>
                  <article className="ticket-card">
                    <Book book={book} />
                  </article>
                </div>
              ))}
        </div>
      </section>
    </body>
  );
};

export default Books
