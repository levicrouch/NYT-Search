$(document).ready(function () {


    ///////////////////////////////////////////
    //  Functions
    ///////////////////////////////////////////

    ///////////////////////////////////////////////////////
    // objects and variables
    ///////////////////////////////////////////////////////
    // giphy API key
    var buttonClass = "";
    var imageClass = "";
    var maxNumberOfArticles = 10;
    var searchInputID = "#search";
    var inputData = "";
    var startYearInputID = "#start-yr";
    var endYearInputID = "#end-yr";
    var numRecordsInputID = "#number";
    var result = "#result";
    // TODO: get api key
    // 4 input boxes
    // search term input box

    // $(document).on("click", searchInputID);




    // This function handles search query 
    $("#clear-btn").on("click", function(event) {
        event.preventDefault();
        $("#search").val("");
        $("#number").val("");
        $("#start-yr").val("");
        $("#end-yr").val("");
        $("#result").empty();
    })
    
    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        getparams();
        // after clicking the search button a query is sent to the NYT api
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "a6c799e6452943eb8a413f86ed188a18",
            '?q': searchKeyword,
            '?begin_date': startYear,
            '?end_date': endYear,
            '?page': numberRecordsToRetrieve,
            

        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (data) {
            console.log(data);
            for (i = 0; i < data.response.docs.length; i++){
            var headline = data.response.docs[i].headline.main;
            console.log(headline);
            // target results div and write article headings
            
            var newDiv = $("<div>");
            newDiv.addClass("output");
            
            $(newDiv).append(headline);
            $(result).append(newDiv);
            // $(headline).append(newDiv);
            }
        }).fail(function (err) {
            throw err;
        });

    });

    function getparams() {
        //   jquery to grab search terms
        searchKeyword = $(searchInputID).val().trim();
        numberRecordsToRetrieve = $(numRecordsInputID).val().trim();
        startYear = $(startYearInputID).val().trim();
        endYear = $(endYearInputID).val().trim();
    }

    function writeHTML(){

    }

});