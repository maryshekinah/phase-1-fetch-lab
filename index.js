function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    // Use the fetch function to make a request to the API
    return fetch('https://anapioficeandfire.com/api/books')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        // Once the data is fetched and parsed, call the renderBooks function
        renderBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
