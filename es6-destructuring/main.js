const book1 = {
  title: 'Goodnighit Punpun',
  author: 'Inio Asano',
  libraryID: 3353
}

const {title, author, libraryID } = book1;
console.log(`The book ${title}, written by ${author}, has a libraryID of ${libraryID}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
}

const { title: title1, author: author1, libraryID: libraryID1} = book2;
console.log(`The book ${title1}, written by ${author1}, has a libraryID of ${libraryID1}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

const [, , , book6] = library;
console.log('book6:', book6);
