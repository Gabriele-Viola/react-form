import { useState } from 'react'

import './App.css'

// const books = [
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

  console.log(books);

  return (
    <>
      <header>
        <h1>Leggere fa bene</h1>
      </header>
      <main>
        {books.map((book, index) => {
          <span>{book}</span>
        })}
      </main>


    </>
  )
}

export default App
