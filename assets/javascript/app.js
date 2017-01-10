$(document).ready(function() {
    console.log("loaded")
    $("#searchBtn").click(function() {
        var searchTerm = $("#searchTerm").val();
        var numberOfRecords = $("#numberOfRecords").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();
        console.log("Test Button");
        console.log(searchTerm);
        console.log(numberOfRecords);
        console.log(startYear);
        console.log(endYear);

        var searchTerm = $("#searchTerm").val();
        var numberOfRecords = $("#numberOfRecords").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "48d7cb53a56e4059afa856977b1af61a",
            'q': searchTerm,
            'begin_date': startYear,
            'end_date': endYear,
            'page': numberOfRecords
        });
        // run functon on button click
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });

    });

});