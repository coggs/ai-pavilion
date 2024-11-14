// Regex to match movie title followed by the year in parentheses
const regex1 = /(.*?) \((\d{4})\)/g;
const regex2 = /\*\*(.*)$/; 
var movieobj = [];
var match;
var matchb;

function extractMovieTitlesAndYears(text) {
    movieobj = [];
    while ((match = regex1.exec(text)) !== null) {

        var title = match[1].trim();
        var year = match[2];

        matchb = title.match(regex2);

        if (matchb) { title = matchb[1].trim();  }

        const movie = title.concat(" (", year, ")");

        movieobj.push({ movie });
    }

    let myObject = { movies:  movieobj }; // create an object
    return JSON.stringify(myObject);
}


extractMovieTitlesAndYears(this.fullContent) // Response from Assistant
