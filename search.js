//line3 3 get ElementByID, 3 needs to be updated to the ID to display bookList

var bodyElement = "searchResult";

/*for(var j = 0; j < 12; j++) {
    fill(j, bodyElement);
}*/

fillCarouselByTable("For You", "for-you");


//listener for search button 
function searchClicked() {
    var searchData = document.getElementById('searchBox').value.toLowerCase();
    
    document.getElementById(bodyElement).innerHTML = '';
    showSearchBox();

    if(searchData === "" || searchData === null) {
        displayError(); //ask user to enter something to search for
    } 
    else {
        var found = 0;
        for(var i = 0; i < books.length; i++) {
            if(books[i].title.toLowerCase().includes(searchData) || books[i].author.toLowerCase().includes(searchData) || books[i].series.toLowerCase().includes(searchData) || books[i].year === searchData) {                 
                fillList(i,bodyElement);
                found += 1;
            }
        }
        if(found === 0) {
            var val = '<div class="searchBar">' +
                '<h3>' + "No related book found in the database. " + '</h3>' +
                '</div>';
            document.getElementById(bodyElement).innerHTML += val;
        }
    }
}

function displayError() {
    var val = '<div class="gridContainer">' +
    '<h3>' + "Please enter some information to search in the box. Please search again." + '</h3>' + '<br>'
     '</div>';
     document.getElementById(bodyElement).innerHTML += val; 
}

function showSearchBox() {
    var val = '<div class = "searchBar">' +
                        '<input type = "text" id = "searchBox" placeholder = "Search for author, title, series, or year..." style=" font-size: large;"> <br>' +
                        '<button span class="button-icon" onclick = "searchClicked()" style="font-size:2vw;"><i class=\'bx bx-search-alt-2\'></i></span> Search</a> </button>' +                  
                '</div>';
    document.getElementById(bodyElement).innerHTML = val;
}
