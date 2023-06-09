$(document).ready(function() {
           
    $(".ramaButton").click(function() {
        $(".menu").toggle();
        if ($(".menu").is(":visible")) {
            $(this).text("Close Menu");
        } else {
            $(this).text("Open Menu");
        }
    });

   
    $("#searchButton").click(function() {
        var searchTerm = $("#searchInput").val().trim();
        $("#searchResultsText").text("تم البحث عن: " + searchTerm);
        $("#searchResults").css("display", "block");
    });

    
    $(".close").click(function() {
        $("#searchResults").css("display", "none");
    });
});

$("#searchInput").keypress(function(event) {
    
    if (event.keyCode === 13) {
        event.preventDefault(); 

        var searchTerm = $(this).val().trim();
        $("#searchResultsText").text("تم البحث عن: " + searchTerm);
        $("#searchResults").css("display", "block");
    }
});
