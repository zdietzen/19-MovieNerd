function MyViewModel() 
{
	var self = this;
	self.movies = ko.observableArray(); 
	self.searchTitle = ko.observable();

	self.searchForMovies = function()
	{
		$.getJSON( "http://omdbapi.com/?s=" + self.searchTitle(),function( data )
			{
				ko.mapping.fromJS(data.search, {}, self.movies);
			});
	};
	
};
ko.applyBindings(new MyViewModel());