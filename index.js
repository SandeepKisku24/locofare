//     var map = new Microsoft.Maps.Map("#myMap",{
//         zoom:15,
//         mapTypeId: Microsoft.Maps.MapTypeId.aerial
//     });
//     var locs = [ 35.027222, 11.02];
// var rect = Microsoft.Maps.LocationRect.fromLocations(locs);

// map.setView({ bounds: rect, padding: 80 });
var map;
var loc1; 
var loc2;
    function getMap() {
        map = new Microsoft.Maps.Map('#myMap', {
            zoom: 15
        });

        Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
            var manager = new Microsoft.Maps.AutosuggestManager({ map: map });
            manager.attachAutosuggest('.searchBox', '#searchBoxContainer', selectedSuggestion);
            var manager1 = new Microsoft.Maps.AutosuggestManager({ map: map });
            manager1.attachAutosuggest('.searchBox1', '#searchBoxContainer', selectedSuggestion);
            console.log(manager.getOptions());
        });

    }

    function selectedSuggestion(result) {
        //Remove previously selected suggestions from the map.
        // map.entities.clear();

        //Show the suggestion as a pushpin and center map over it.
        var pin = new Microsoft.Maps.Pushpin(result.location);
        map.entities.push(pin);
        map.setView({ bounds: result.bestView });
        document.getElementById('addressLineTbx').value = result.address.addressLine || '';
        document.getElementById('cityTbx').value = result.address.locality || '';
        document.getElementById('countyTbx').value = result.address.district || '';
        document.getElementById('stateTbx').value = result.address.adminDistrict || '';
        document.getElementById('postalCodeTbx').value = result.address.postalCode || '';
        document.getElementById('countryTbx').value = result.address.countryRegion || '';
    }