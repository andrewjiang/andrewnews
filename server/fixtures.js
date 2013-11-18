if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'What its like to fail',
		author: 'Some guy',
		url: 'http://priceonomics.com/what-its-like-to-fail/'
	});

	Posts.insert({
		title: 'Aereo could trigger the end of free TV game broadcasts',
		author: 'Ted Johnson',
		url: 'http://variety.com/2013/tv/news/nfl-major-league-baseball-warn-supreme-court-that-aereo-could-trigger-end-to-games-on-free-tv-1200847089/'
	});

	Posts.insert({
		title: 'Pentagon guilty of billion-dollar accounting fraud, reveals Reuters investigation',
		author: 'Russell Brandom',
		url: 'http://theverge.com/2013/11/18/5117816/pentagon-guilty-of-billion-dollar-accounting-fraud-reveals-reuters'
	});
}