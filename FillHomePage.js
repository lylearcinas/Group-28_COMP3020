//import { books } from "./bookData"; 

for(var j = 0; j < 12; j++) {
    fill(j, "list");
}

function fill(i, elementID) {
    var value ='';    
        value = 
        '<div class = "article">' +
            '<img src=\'' + books[i].img + '\'>' + 
            '<div class="main">' +
                '<h2>' + books[i].title + '</h2>' +

                '<div class="metadata">' +
                    '<div class="author">' + "by" + books[i].author + '</div>' +

                    '<div class="series">' + books[i].series + '</div>' +

                    '<div class="year">' + books[i].year + '</div>' +

                    '<div class="rating">' + books[i].rating + " stars" + '</div>' +

                    '<div class="numRating">' + books[i].numRating + "M ratings" + '</div>' +

                    '<div class="reviews">' + books[i].reviews + "k reviews" + '</div>' +
                '</div>' +

                '<p>' + books[i].about + '</p>' +
                '<button>' + '<span class="button-icon" style="font-size:2vw;"><i class=\'bx bxs-book-add\'></i></span> Add to Library</a>' + '</button>' 
            '</div>' 
        '</div>'        
        document.getElementById(elementID).innerHTML += value;
}

