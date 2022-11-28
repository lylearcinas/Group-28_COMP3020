//import { books } from "./bookData"; 

fillDesc(0, "featured1");
fillDesc(1, "featured2");
fillCarouselByTable("Popular", "popular");
fillCarouselByTable("For You", "for-you");
fillCarouselByGenre("Classic", "classic");


/*
for(var j = 0; j < 12; j++) {
    fill(j, "list");
}
*/

function fillDesc(i, elementID) {
    var value = '<img src=\'' + books[i].img + '\'>' + 
            '<div class="main">' +
                '<h2><a href="#">' + books[i].title + '</a></h2>' +
                '<div class="metadata">' +
                    '<div class="author">' + 
                        'by ' + 
                            '<a href="#" class="author">' +
                                books[i].author + 
                            '</a>'  +
                        ', first published '  +
                            '<a href="#" class="year">' + books[i].year + '</a>' + ' - ' + 
                            '<a href="#" class="genre">' + books[i].genres[0] + '</a>' + ' - ' +
                            '<a href="#" class="genre">' + books[i].genres[1] + '</a>' + ' - ' +
                            '<a href="#" class="genre">' + books[i].genres[2] + '</a>' +
                    '</div>' +
                '</div>' +
                '<div class = "description-container">' +
                    '<p>' + books[i].about + '</p>' +
                '</div>' + 
                '<div class = "main-interact">' +
                    '<div class="button-row">' +
                        '<button>' +
                            '<span class="button-icon"><i class=\'bx bxs-book-add\'></i></span> Add to Library' +
                        '</button>' +

                        '<button class="star">' +
                            books[i].rating + 
                            '<span class="button-icon"><i class=\'bx bxs-star\'></i></span>' +
                            '<span class="button-icon"><i class=\'bx bxs-star\'></i></span>' +
                            '<span class="button-icon"><i class=\'bx bxs-star\'></i></span>' +
                            '<span class="button-icon"><i class=\'bx bxs-star\'></i></span>' +
                            '<span class="button-icon"><i class=\'bx bxs-star-half\' ></i></span>' +
                        '</button>' +
                    '</div>' +
                    '<span class="bottom-text">' +
                        '<a href="#">' +
                            books[i].numRatings + ' ratings' +
                        '</a>' +
                    '</span>' +
                    '<span class="bottom-text">' +
                        '<a href="#">' +
                            books[i].numReviews + ' reviews' +
                        '</a>' +
                    '</span>' +
                '</div>' +
            '</div>';
        //'</div>';        
        document.getElementById(elementID).innerHTML += value;
}

function addPicture(i, elementID) {
    var value = '<img src =\"' + books[i].img + '\"/>';
    document.getElementById(elementID).innerHTML += value;
    console.log(elementID);
}

function fillCarouselByTable(table, elementID) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].tables.includes(table)) {
            addPicture(i, elementID);
        }
    }
}

function fillCarouselByGenre(genre, elementID) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].genres.includes(genre)) {
            addPicture(i, elementID);
        }
    }
}