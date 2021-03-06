var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').on("click", searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {

    if  (resp.length > 0) {
        countriesList.empty();
        resp.forEach(function(item) {
            resp.forEach(function(item){
                $('<li>').text(item.name).appendTo(countriesList);
            });
        });
    }
    else {
        return "error";      
    }
}