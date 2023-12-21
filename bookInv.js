// Sample book inventory
const bookInventory = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publishedYear: 1937,
        available: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publishedYear: 1960,
        available: true
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        publishedYear: 2003,
        available: true
    },
   ];

// Map: Create a new array with titles and authors
const titlesAndAuthors = bookInventory.map(book => `${book.title} by ${book.author}`);
console.log("Titles and Authors:", titlesAndAuthors);

// Filter: Filter books by genre
const genreToFilter = "Mystery";
const filteredBooks = bookInventory.filter(book => book.genre !== genreToFilter);
console.log(`Books not in ${genreToFilter} genre:`, filteredBooks);

// Find: Find a specific book by title
const titleToFind = "The Hobbit";
const foundBook = bookInventory.find(book => book.title === titleToFind);
console.log("Details of", titleToFind, ":", foundBook);

// ForEach: Update availability status for books published before a certain year
const yearToMarkUnavailable = 2010;
bookInventory.forEach(book => {
    if (book.publishedYear < yearToMarkUnavailable) {
        book.available = false;
    }
});

// Display the modified book inventory
console.log("Updated Book Inventory:", bookInventory);
