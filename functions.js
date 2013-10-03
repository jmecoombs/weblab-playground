document.write('<h4>WordCount Example</h4>');
document.write('<h4>Reverse Order Function</h4>');

//1. Write a function that reverses the order of a string (for instance passing 'hello' returns 'olleh')

var reverseString = function(text) {
    var result = "";
    for (var i = text.length - 1; i >= 0; i--) {
        result += text[i];
}
    return result;
}
document.write('<p>hello-> ' + reverseString('hello') + '</p>');

//2. Write a function that takes an array of text fragments and a length, and returns a list of all fragments that are longer than the length.

document.write('<h4>Filter Text Array by Length</h4>');

var filterWordLength = function(list, length) {
    var result = [];
    for(var i = 0; i < list.length; index++) {
        var element = list[index];
        if(typeof element === 'string') && (element.length > lenght)) {
            result.push(element);
        }
}
    return result;
}
var testWords = [
    'short',
    'longer',
    'maybe even longer',
    'a really long sentance'];

document.write('<p>7 -> ' + filterWordLength(testWords, 7) + '</p>');

//3. Write a function that returns 'Good morning' if it is the morning, 'Good afternoon' if it is the afternoon, and 'Good evening' if it is the evening.

document.write('<h4>Date Greeting</h4>');

var dateGreeting = function(date) {
    var hours = date.getHours();
    if(hours < 12) {
        return 'Good Morning';
    }
    else if(hours < 17) {
        return 'Good Afternoon';
    }
    else {
        return 'Good Evening';
    }
}

var morning = new Date (2013, 8, 30, 2, 34);
document.write('<p>' + morning.toString() + '->' + dateGreeting(morning) + '</p>');
var afternoon = new Date (2013, 8, 30, 2, 34);
document.write('<p>' + afternoon.toString() + '->' + dateGreeting(afternoon) + '</p>');
var evening = new Date (2013, 8, 30, 2, 34);
document.write('<p>' + evening.toString() + '->' + dateGreeting(evening) + '</p>');

//4. Write a function that given a dollar amount returns a object of the number of bills and coins needed to return change.

document.write('<h4>Make Change$$</h4>');

var makeChange = function(amount) {
 var change = {};
    
// covert to pennies to make the math easier    
 amount *= 100;
 while(amount > 0) {
    //calculate hundreds
    if(amount >= 10000) {
        change.hundreds = parseInt(amount / 10000);
        amount -= change.hundreds * 10000;
    }
     else if (amount >= 5000) {
        change.fifties = parseInt(amount / 5000);
    }
      else if (amount >= 1000) {
        change.tens = parseInt(amount / 1000);
    }
    return change;;
}

//5. Given the following comma separated data from the IMDb top rated movies: Create a function that splits the values into the title, year, and number of votes and returns a list of movie objects sorted by year.,1994,1043071',

var movies = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];
     
var movieSort = function(movies) {
     var result = [];
     for(var index = 0; index < movies.length; index++) {
     var tokens = movies[index].split(',');
     var movie = {
        title: tokens[0];
        year: parseInt(token[1]);
        votes: parseInt(tokens[2]; 
     };
     result.push(movie);
    }
    var sort = function(lhs, rhs) {
        if(lhs)
    }
    return result;
}
     

