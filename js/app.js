function MyViewModel() 
{
	var self = this;
	self.movies = ko.observableArray(); 
	self.searchTerm = ko.observable();

	self.searchForMovie = function() {
		$.getJSON("http://omdbapi.com/?s=" + self.searchTerm(),function(data) {
			ko.mapping.fromJS(data.Search, {}, self.movies);
		});
		
	};


};
ko.applyBindings(new MyViewModel());