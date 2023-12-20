class Book {
    constructor(title, author, genre, publishedYear, available = true) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publishedYear = publishedYear;
        this.available = available;
    }
}

const library=[  new Book("The Secret Lake","Karen Inglis","Science Fiction",2011),
                 new Book("One Arranged Marraige Murder","Chetan Bhagat","Fiction",2020),
                 new Book("Don't Let Her Stay","Nicola Sanders","Thriller",2023),
                 new Book("Unfinished:A Memoir","Priyanka Chopra Jonas","Biography",2022),
                 new Book("The Hunting Moon","Susan Dennard","Fantasy",2023),
                ]
//displays all books in the array
console.log(library);

//Map: Create a new array containing titles and authors of all the books
const titlesAndAuthors = library.map(book=>`${book.title} by ${book.author}`);
console.log("Mapped Titles and Authors:", titlesAndAuthors);

//Filter: Filter out all the books that belong to a particular genre (e.g., "Fantasy" & "Thiller")
const filteredbooks1 = library.filter(book=>book.genre=="Fantasy");
console.log("Filtered Books in gerne:",filteredbooks1);
const filteredbooks2 = library.filter(book=>book.genre=="Thriller");
console.log("Filtered Books in gerne:",filteredbooks2);

// Find: Find a specific book by its title and return its details
const BookToFind = library.find(book=>book.title=="The Secret Lake");
console.log("Bookfound is",BookToFind);

//ForEach: Update the availability status of all the books published before a certain year(e.g., 2023)
const MarkThemUnavailable = library.forEach(book => 
    {
    if (book.publishedYear < 2023) 
    {
        book.available = false;
    }
});
console.log("Availability status got updated:");
library.forEach(book => {
    console.log(`${book.title} (${book.publishedYear}) - Available: ${book.available}`);
});






