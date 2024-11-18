import { useState } from 'react'

import './App.css'

// const store = [
//   {
//     id: 1,
//     title: "Il Signore degli Anelli",
//     author: "J.R.R. Tolkien",
//     state: 'Stock',
//   },
//   {
//     id: 2,
//     title: "1984",
//     author: "George Orwell",
//     state: 'on Loan',

//   },

//   {
//     id: 3,
//     title: "Orgoglio e Pregiudizio",
//     author: "Jane Austen",
//     state: 'Stock',

//   },

//   {
//     id: 4,
//     title: "Il Grande Gatsby",
//     author: "F. Scott Fitzgerald",
//     state: 'on Loan',

//   },

//   {
//     id: 5,
//     title: "Moby Dick",
//     author: "Herman Melville",
//     state: 'Stock',

//   }
// ];
const store = ["Moby Dick", "Il Grande Gatsby", "Orgoglio e Pregiudizio", "George Orwell", "Il Signore degli Anelli"]
function App() {
  const [books, setBooks] = useState(store)
  const [newBook, setNewBook] = useState('')

  function addBook(e) {
    e.preventDefault()
    const newBooks = [newBook, ...books]
    setBooks(newBooks)
    setNewBook('')
  }
  function deleteBook(e) {
    const dataIndex = e.target.getAttribute('data-index')
    const updatebooks = books.filter((book, index) => dataIndex != index)
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
          <label htmlFor="book">Book</label>
        </div>
        <div className="inputs">
          <input type="text" value={newBook} onChange={e => setNewBook(e.target.value)} />
          <button type='submit'>ADD</button>
        </div>

      </form>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{book}</span>
            <button data-index={index} onClick={modifyBook}>Modify</button>
            <button data-index={index} onClick={deleteBook}>Delete</button>

          </li>
        ))}
      </ul>


    </>
  )
}

export default App
