const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        isbn: {
            type: Number,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true,
            enum: [
                "The Great Gatsby",
                "To Kill a Mockingbird",
                "1984",
                "Pride and Prejudice",
                "The Catcher in the Rye",
                "The Hobbit",
                "Brave New World",
                "Moby Dick",
                "War and Peace",
                "Great Expectations",
                "Ulysses",
                "Crime and Punishment",
                "The Brothers Karamazov",
                "One Hundred Years of Solitude",
                "Anna Karenina",
                "The Odyssey",
                "Les Misérables",
                "The Iliad",
                "Don Quixote",
                "Madame Bovary",
                "Jane Eyre",
                "The Divine Comedy",
                "Wuthering Heights",
                "Frankenstein",
                "The Picture of Dorian Gray",
                "The Lord of the Rings",
                "Harry Potter and the Sorcerer's Stone",
                "The Chronicles of Narnia",
                "The Alchemist",
                "The Little Prince",
                "Dracula",
                "The Grapes of Wrath",
                "The Book Thief",
                "The Kite Runner",
                "The Girl with the Dragon Tattoo",
                "Gone Girl",
                "The Hunger Games",
                "The Da Vinci Code",
                "Memoirs of a Geisha",
                "The Fault in Our Stars",
                "A Tale of Two Cities",
                "The Catcher in the Rye",
                "The Road",
                "Life of Pi",
                "The Help",
                "The Handmaid's Tale",
                "The Secret Life of Bees",
                "Water for Elephants",
                "The Night Circus",
                "The Goldfinch"
            ]           

        },
        
        author : {
            type : String,
            required : true,
            enum : [
                "F. Scott Fitzgerald",
                "Harper Lee",
                "George Orwell",
                "Jane Austen",
                "J.D. Salinger",
                "J.R.R. Tolkien",
                "Aldous Huxley",
                "Herman Melville",
                "Leo Tolstoy",
                "Charles Dickens",
                "James Joyce",
                "Fyodor Dostoevsky",
                "Gabriel Garcia Marquez",
                "Homer",
                "Victor Hugo",
                "Miguel de Cervantes",
                "Gustave Flaubert",
                "Charlotte Bronte",
                "Dante Alighieri",
                "Emily Bronte",
                "Mary Shelley",
                "Oscar Wilde",
                "J.K. Rowling",
                "C.S. Lewis",
                "Paulo Coelho",
                "Antoine de Saint-Exupéry",
                "Bram Stoker",
                "John Steinbeck",
                "Markus Zusak",
                "Khaled Hosseini",
                "Stieg Larsson",
                "Gillian Flynn",
                "Suzanne Collins",
                "Dan Brown",
                "Arthur Golden",
                "John Green",
                "Charles Dickens",
                "Cormac McCarthy",
                "Yann Martel",
                "Kathryn Stockett",
                "Margaret Atwood",
                "Sue Monk Kidd",
                "Sara Gruen",
                "Erin Morgenstern",
                "Donna Tartt",
                "Ernest Hemingway",
                "William Faulkner",
                "J.D. Salinger",
                "Virginia Woolf",
                "Agatha Christie"
            ]
            
        },

        genre : {
            type : String,
            required : true,
            enum : [
                "Fiction",
                "Non-Fiction",
                "Fantasy",
                "Science Fiction",
                "Dystopian",
                "Mystery",
                "Thriller",
                "Romance",
                "Horror",
                "Historical Fiction",
                "Biography",
                "Autobiography",
                "Self-Help",
                "Philosophy",
                "Poetry",
                "Classic",
                "Adventure",
                "Young Adult",
                "Children's",
                "Magical Realism",
                "Graphic Novel",
                "Short Story",
                "Memoir",
                "Epic",
                "Modernist",
                "Realism",
                "Gothic Fiction",
                "Psychological Fiction",
                "Philosophical Fiction",
                "Political Fiction",
                "Urban Fantasy",
                "Paranormal",
                "Crime",
                "Detective",
                "Satire",
                "Western",
                "Chick Lit",
                "New Adult",
                "Literary Fiction",
                "Contemporary",
                "Saga",
                "Speculative Fiction",
                "Suspense",
                "Humor",
                "War",
                "Spiritual",
                "Travel",
                "True Crime",
                "Erotica"
            ]            
        }
    },
    {
        collection: 'bookDataCollection'
    }
)

module.exports = mongoose.model('bookDataCollection', bookSchema)