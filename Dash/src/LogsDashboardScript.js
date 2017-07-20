//Declarations
var AutoCompleteArray = [];

//Init function calls
PopulateAutocompleteArray();
$(document).ready(function (){
    populateStatsInfo();
});

function populateStatsInfo()
{
    $.get('Hits.json', function (data) {

        $("#TotalHits").append(data.length);
        var success = 0;

        $.each(data, function (i, hit) {
            var hitStatus = hit.Status;
            if (hitStatus == 200) 
                success += 1;
        });
        
        $("#SuccessfulHits").append(success);
        $("#FailedHits").append(data.length-success);
        
    });
    $.get('CustomerDataResponse.json', function (data) {
        $("#TotalCustomers").append(data.length);
    });
}

function PopulateAutocompleteArray() {
    $.get(
        'CustomerDataResponse.json', function (data) {
            $.each(data, function (i, customer) {
                AutoCompleteArray.push(customer.Name);
            });
        });
}

function SearchCustomer() {
    
    var name = $("#tb_NameSearch").val();

    var radios = document.getElementsByClassName("Radios");
    
    for (var c = 0; c < radios.length; c++)
    {
        if (radios[c].type === 'radio' && radios[c].checked)
            var OutputGranularity = radios[c].value;
    }
    var RedirectURL = 'VisualizeDetails.html?Name=' + name + '&Gran=' + OutputGranularity;

    window.location.href = RedirectURL;
}
