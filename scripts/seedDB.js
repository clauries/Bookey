const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    "_id": ObjectId("5e8b784685aeb726d05c1557"),
    "authors": [
      "Philip Zaleski",
      "Carol Zaleski"
    ],
    "googleId": "oTREBQAAQBAJ",
    "title": "The Fellowship",
    "subtitle": "The Literary Lives of the Inklings: J.R.R. Tolkien, C. S. Lewis, Owen Barfield, Charles Williams",
    "link": "https://play.google.com/store/books/details?id=oTREBQAAQBAJ&source=gbs_api",
    "description": "C. S. Lewis is the 20th century's most widely read Christian writer and J.R.R. Tolkien its most beloved mythmaker. For three decades, they and their closest associates formed a literary club known as the Inklings, which met every week in Lewis's Oxford rooms and in nearby pubs. They discussed literature, religion, and ideas; read aloud from works in progress; took philosophical rambles in woods and fields; gave one another companionship and criticism; and, in the process, rewrote the cultural history of modern times. In The Fellowship, Philip and Carol Zaleski offer the first complete rendering of the Inklings' lives and works. The result is an extraordinary account of the ideas, affections and vexations that drove the group's most significant members. C. S. Lewis accepts Jesus Christ while riding in the sidecar of his brother's motorcycle, maps the medieval and Renaissance mind, becomes a world-famous evangelist and moral satirist, and creates new forms of religiously attuned fiction while wrestling with personal crises. J.R.R. Tolkien transmutes an invented mythology into gripping story in The Lord of the Rings, while conducting groundbreaking Old English scholarship and elucidating, for family and friends, the Catholic teachings at the heart of his vision. Owen Barfield, a philosopher for whom language is the key to all mysteries, becomes Lewis's favorite sparring partner, and, for a time, Saul Bellow's chosen guru. And Charles Williams, poet, author of \"supernatural shockers,\" and strange acolyte of romantic love, turns his everyday life into a mystical pageant. Romantics who scorned rebellion, fantasists who prized reality, wartime writers who believed in hope, Christians with cosmic reach, the Inklings sought to revitalize literature and faith in the twentieth century's darkest years-and did so in dazzling style.",
    "image": "http://books.google.com/books/content?id=oTREBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "__v": 0
  },
  {
    "_id": ObjectId("5e8b784f85aeb726d05c1558"),
    "authors": [
      "J.R.R. Tolkien"
    ],
    "googleId": "yl4dILkcqm4C",
    "title": "The Lord of the Rings",
    "subtitle": "One Volume",
    "link": "https://play.google.com/store/books/details?id=yl4dILkcqm4C&source=gbs_api",
    "description": "A PBS Great American Read Top 100 Pick One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider. This new edition includes the fiftieth-anniversary fully corrected text setting and, for the first time, an extensive new index. J.R.R. Tolkien (1892-1973), beloved throughout the world as the creator of The Hobbit, The Lord of the Rings, and The Silmarillion, was a professor of Anglo-Saxon at Oxford, a fellow of Pembroke College, and a fellow of Merton College until his retirement in 1959. His chief interest was the linguistic aspects of the early English written tradition, but while he studied classic works of the past, he was creating a set of his own.",
    "image": "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "__v": 0
  },
  {
    "_id": ObjectId("5e8b785385aeb726d05c1559"),
    "authors": [
      "J.R.R. Tolkien"
    ],
    "googleId": "4OfWWfRDAXcC",
    "title": "The Silmarillion",
    "link": "https://play.google.com/store/books/details?id=4OfWWfRDAXcC&source=gbs_api",
    "description": "A number-one New York Times bestseller when it was originally published, THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT. Tolkien considered THE SILMARILLION his most important work, and, though it was published last and posthumously, this great collection of tales and legends clearly sets the stage for all his other writing. The story of the creation of the world and of the the First Age, this is the ancient drama to which the characters in THE LORD OF THE RINGS look back and in whose events some of them, such as Elrond and Galadriel, took part. The three Silmarils were jewels created by Feanor, most gifted of the Elves. Within them was imprisoned the Light of the Two Trees of Valinor before the Trees themselves were destroyed by Morgoth, the first Dark Lord. Thereafter, the unsullied Light of Valinor lived on only in the Silmarils, but they were seized by Morgoth and set in his crown, which was guarded in the impenetrable fortress of Angband in the north of Middle-earth. THE SILMARILLION is the history of the rebellion of Feanor and his kindred against the gods, their exile from Valinor and return to Middle-earth, and their war, hopeless despite all their heroism, against the great Enemy. This second edition features a letter written by J.R.R. Tolkien describing his intentions for the book, which serves as a brilliant exposition of his conception of the earlier Ages of Middle-earth.",
    "image": "http://books.google.com/books/content?id=4OfWWfRDAXcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "__v": 0
  },
  {
    "_id": ObjectId("5e8b786085aeb726d05c155a"),
    "authors": [
      "J. R. R. Tolkien"
    ],
    "googleId": "rIqOaeTx074C",
    "title": "The Hobbit (Enhanced Edition)",
    "link": "http://books.google.com/books?id=rIqOaeTx074C&dq=the+fellowship+of+the+rin&hl=&as_ebook=1&source=gbs_api",
    "description": "Exclusive to this Enhanced version of the eBook are recently discovered audio recordings by J.R.R. Tolkien, and new high-resolution colour images of all of Tolkien’s illustrations for the book, many of which are also included in their earlier black-and-white versions and can be revealed by a simple swipe of the screen.",
    "image": "http://books.google.com/books/content?id=rIqOaeTx074C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "__v": 0
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
