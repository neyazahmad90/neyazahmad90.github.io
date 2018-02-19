app.service('PlacesApi', function ($q) {

    this.init = function () {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            disableDefaultUI: true
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }

    this.search = function (pid) {
        var d = $q.defer();
        var request = {
            placeId: pid
        };
        var placeDetail = {};
        console.log('pid:', pid);
        this.places.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                angular.forEach(place, function (value, key) {
                   // console.log(key);
                    placeDetail[key] = value;
                });
                d.resolve(place);
                return place;
            }
            else {
                // invalid response
                return d.reject(place);
            }
        }

        return d.promise;
    }
});