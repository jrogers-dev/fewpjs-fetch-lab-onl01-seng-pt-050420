function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books');
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  let fetchedBooks = fetchBooks().then(function(response){ return response.json()});
  console.log(fetchedBooks[0]);
  console.log(fetchedBooks[1]);
  console.log(fetchedBooks[2]);
  console.log(fetchedBooks[3]);
  renderBooks(fetchedBooks);
})
