import { useState } from 'react'

import './App.css'

const store = [
  {
    id: 1,
    title: "Il Signore degli Anelli",
    author: "J.R.R. Tolkien",
    state: 'Stock',
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    state: 'on Loan',

  },

  {
    id: 3,
    title: "Orgoglio e Pregiudizio",
    author: "Jane Austen",
    state: 'Stock',

  },

  {
    id: 4,
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    state: 'on Loan',

  },

  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    state: 'Stock',

  }
];

// const store = ["Moby Dick", "Il Grande Gatsby", "Orgoglio e Pregiudizio", "George Orwell", "Il Signore degli Anelli"]

function App() {
  const [books, setBooks] = useState(store)
  const [newBook, setNewBook] = useState('')
  const [title, setTitle] = useState('title')
  const [author, setAuthor] = useState('author')
  const [state, setState] = useState('Stock')

  function heandlerTitle(e) {
    setTitle(e.target.value)
  }
  function heandlerAuthor(e) {
    setAuthor(e.target.value)
  }
  function heandlerState(e) {
    setState(e.target.value)
  }

  function addBook(e) {
    e.preventDefault()
    const newBook = {
      id: books.length + 1,
      title: title,
      author: author,
      state: state
    }
    console.log(newBook);

    const newBooks = [newBook, ...books]
    setBooks(newBooks)
    setNewBook('')
  }

  function deleteBook(e) {
    const dataIndex = e.target.getAttribute('data-index')
    const updatebooks = books.filter((item, index) => item.id != dataIndex)
    setBooks(updatebooks)
  }
  function modifyBook(e) {
    const dataIndex = e.target.getAttribute('data-index')
    const updatebooks = books.filter((book, index) => dataIndex != index)
    const modifyBook = prompt('change name')
    const modifyList = [modifyBook, ...updatebooks]
    setBooks(modifyList)
  }

  return (
    <>
      <h1>titolo</h1>
      <form onSubmit={addBook}>
        <div className="row">
          <label htmlFor="book">add Book</label>
        </div>
        <div className="inputs">
          <label htmlFor="title">Title</label>
          <input type="text" name='title' id='title' value={title} onChange={heandlerTitle} />
          <label htmlFor="author">Author</label>
          <input type="text" name='author' id='author' value={author} onChange={heandlerAuthor} />
          <label htmlFor="state">State</label>
          <input type="text" name='state' id='state' value={state} onChange={heandlerState} />
          <button type='submit'>ADD</button>
        </div>

      </form>
      <ul>
        {books.map((book, index) => (
          <li key={book.id}>
            <span>{book.title}</span>
            <button data-index={book.id} onClick={modifyBook}>Modify</button>
            <button data-index={book.id} onClick={deleteBook}>Delete</button>

          </li>
        ))}
      </ul>


    </>
  )
}

export default App
