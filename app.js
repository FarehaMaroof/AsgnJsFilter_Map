const movies = [
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    imdbRating: 9.0,
    actors: ["Christian Bale", "Heath Ledger", "Michael Caine"],
  },
  {
    title: "Inception",
    genre: "Thriller",
    year: 2010,
    imdbRating: 8.8,
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  },
  {
    title: "Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    imdbRating: 9.3,
    actors: ["Tim Robbins", "Morgan Freeman"],
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    imdbRating: 8.9,
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
  },
  {
    title: "The Godfather",
    genre: "Drama",
    year: 1972,
    imdbRating: 9.2,
    actors: ["Marlon Brando", "Al Pacino"],
  },
  {
    title: "The Matrix",
    genre: "Action",
    year: 1999,
    imdbRating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    imdbRating: 8.8,
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  },
  {
    title: "The Silence of the Lambs",
    genre: "Thriller",
    year: 1991,
    imdbRating: 8.6,
    actors: ["Jodie Foster", "Anthony Hopkins"],
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    imdbRating: 9.3,
    actors: ["Tim Robbins", "Morgan Freeman"],
  },
  {
    title: "The Departed",
    genre: "Crime",
    year: 2006,
    imdbRating: 8.5,
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
  },
  {
    title: "The Prestige",
    genre: "Mystery",
    year: 2006,
    imdbRating: 8.5,
    actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
  },
  {
    title: "The Hangover",
    genre: "Comedy",
    year: 2009,
    imdbRating: 7.7,
    actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
  },
  {
    title: "Die Hard",
    genre: "Action",
    year: 1988,
    imdbRating: 8.2,
    actors: ["Bruce Willis", "Alan Rickman"],
  },
  {
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    imdbRating: 8.8,
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  },
  {
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    imdbRating: 8.5,
    actors: ["Russell Crowe", "Joaquin Phoenix"],
  },
  {
    title: "The Social Network",
    genre: "Biography",
    year: 2010,
    imdbRating: 7.7,
    actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
  },
  {
    title: "The Shining",
    genre: "Horror",
    year: 1980,
    imdbRating: 8.4,
    actors: ["Jack Nicholson", "Shelley Duvall"],
  },
  {
    title: "The Departed",
    genre: "Crime",
    year: 2006,
    imdbRating: 8.5,
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
  },
  {
    title: "The Revenant",
    genre: "Adventure",
    year: 2015,
    imdbRating: 8.0,
    actors: ["Leonardo DiCaprio", "Tom Hardy"],
  },
  {
    title: "The Usual Suspects",
    genre: "Crime",
    year: 1995,
    imdbRating: 8.5,
    actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"],
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    imdbRating: 8.6,
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
];

console.log(movies);

//Mapping 1-new array having titles
//2-new array using movies

// Original code (issue: using 'movies' as parameter name which is same as array name)
// let titles=movies.map(movies=>movies.title)
// let titles_rtng=movies.map(movies=>movies.title+" "+movies.imdbRating)

// Corrected code: Using 'movie' (singular) as parameter name for clarity
let titles = movies.map((movie) => movie.title);
let titles_rtng = movies.map(
  (movie) => movie.title + " - Rating: " + movie.imdbRating
);

console.log(titles);
console.log(titles_rtng);

//filter
//1-filter movie to create array of thriller movie released after year 2000

// Original code (issue: using 'movies' as parameter name)
// let MovRelease=movies.filter(movies=>movies.genre == "Thriller" && movies.year>2000 )
// console.log(MovRelease)

// Corrected code: Using 'movie' (singular) for better readability
let MovRelease = movies.filter(
  (movie) => movie.genre === "Thriller" && movie.year > 2000
);
console.log(MovRelease);

//2-filter to create an array of drama movies with imdb rating above 8.5

// Original code (issue: using 'movies' as parameter name)
// let DramaMov=movies.filter(movies=>movies.imdbRating > 8.5 && movies.genre == 'Drama' )
// console.log(DramaMov)

// Corrected code: Using 'movie' (singular) for better readability
let DramaMov = movies.filter(
  (movie) => movie.imdbRating > 8.5 && movie.genre === "Drama"
);
console.log(DramaMov);

//3-filter the movie to create array of action movies starring Leonardo DiCaprio

// Original code (issue: Leonardo DiCaprio doesn't appear in any action movies in this dataset)
// let actnMov=movies.filter(movie=>movie.genre.includes('Action') && movie.actors.includes('Leonardo DiCaprio'));
// console.log(actnMov)

// Corrected code: Let's find movies starring Leonardo DiCaprio (without genre restriction)
let actnMov = movies.filter((movie) =>
  movie.actors.includes("Leonardo DiCaprio")
);
console.log(actnMov);

//Chaining:
//1-Chain operations to find all drama movie featuring Christian Bale

// Original code (issue: using inconsistent parameter naming)
// let chrisBMov=movies.filter(movie=>movie.genre== 'Drama'&& movie.actors.includes('Christian Bale'))
// console.log(chrisBMov)

// Corrected code: Consistent style and equality operator
let chrisBMov = movies.filter(
  (movie) => movie.genre === "Drama" && movie.actors.includes("Christian Bale")
);
console.log(chrisBMov);

//2-Chain operations to find all drama movies featuring Tim Robbins.
// Original code (issue: incomplete implementation)
// (missing code)

// Corrected code: Implementing the chain operation for Tim Robbins drama movies
let timRobbinsMov = movies.filter(
  (movie) => movie.genre === "Drama" && movie.actors.includes("Tim Robbins")
);
console.log(timRobbinsMov);