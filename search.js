//line3 3 get ElementByID, 3 needs to be updated to the ID to display bookList

var bodyElement = "searchList";

for(var j = 0; j < 12; j++) {
    fill(j, bodyElement);
}
//listener for search button 
function searchClicked() {
    var searchData = document.getElementById('searchBox').value.toLowerCase();
    if(searchData === "" || searchData === null) {
        displayError(); //ask user to enter something to search for
    } 
    else {
        var found = 0;
        for(var i = 0; i < books.length; i++) {
            if(books[i].title.toLowerCase().search(searchData) > 0 || books[i].author.toLowerCase().search(searchData) > 0 || books[i].year.search(searchData) > 0 || books[i].series.toLowerCase().search(searchData) > 0 || books[i].about.toLowerCase().search(searchData) > 0 ) {
                fill(i, bodyElement);   
                found += 1;
            } 
        }
        if(found === 0) {
            var val = '<div class="article">' +
            '<h2>' + "No related book found in the Database" + '</h2>' +
            '</div>';
            document.getElementById(bodyElement).innerHTML = val;
        }
    }
}

function displayError() {
    var val = '<div class="article">' +
    '<h2>' + "Please enter some information to search in the box. Please search again." + '</h2>' + '<br>'
     '</div>';
    document.getElementById(bodyElement).innerHTML = val; 
}