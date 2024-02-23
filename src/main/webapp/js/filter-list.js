const searchDelay = 200;
var searchTimer = null;

function liveFilterItems(term){
    var searchTerm = term.toLowerCase();
    jQuery3("div#livesearchablelist table#projectstatus tbody tr").each( function(){
        var row = this
        var text = this.innerText.toLowerCase()

        //console.log("Checking '"+text+"' for string '"+searchTerm"'")
        if (text.indexOf(searchTerm) > -1){
            $(row).show()
        }else {
            $(row).hide()
        }
    })
}

setTimeout(function (){
    jQuery3("#quickFilterField").on( "keyup", function() {
        var value = this.value;
        if (searchTimer){
            clearTimeout(searchTimer)
        }
        searchTimer = setTimeout(function(){
            liveFilterItems(value)
        }, searchDelay);
    } );
}, 1000);
