// const thisYear = new Date().getFullYear();
// const nextYear = thisYear + 1;

// export const load = async () => {
// 	const res = await fetch(
// 		`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=${thisYear}0908-${nextYear}0108&limit=1000`,
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
// 			},
// 			mode: 'cors',
// 			method: 'GET'
// 		}
// 	);
// 	const res2 = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/9/', {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
// 		},
// 		mode: 'cors',
// 		method: 'GET'
// 	});
// 	const res3 = await fetch(
// 		'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/9/roster',
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
// 			},
// 			mode: 'cors',
// 			method: 'GET'
// 		}
// 	);
// 	const res4 = await fetch(
// 		'https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?team=9',
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
// 			},
// 			mode: 'cors',
// 			method: 'GET'
// 		}
// 	);
// 	const res5 = await fetch('http://now.core.api.espn.com/v1/sports/news/35186336', {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
// 		},
// 		mode: 'cors',
// 		method: 'GET'
// 	});

// 	const res6 = await fetch('https://cdn.espn.com/core/nfl/standings?xhr=1', {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
// 		},
// 		mode: 'cors',
// 		method: 'GET'
// 	});

// 	const nflData = await res.json();
// 	const packerData = await res2.json();
// 	const playerData = await res3.json();
// 	const newsData = await res4.json();
// 	const articleData = await res5.json();
// 	const standingsData = await res6.json();

// 	return { nflData, packerData, playerData, newsData, articleData, standingsData };
// };
export const load = async () => {
	const thisYear = new Date().getFullYear();
	const nextYear = thisYear + 1;

	const urls = [
		`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=${thisYear}0908-${nextYear}0108&limit=1000`,
		'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/9/',
		'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/9/roster',
		'https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?team=9',
		'http://now.core.api.espn.com/v1/sports/news/35186336',
		'https://cdn.espn.com/core/nfl/standings?xhr=1'
	];

	try {
		const responses = await Promise.all(
			urls.map((url) =>
				fetch(url, {
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'https://site.api.espn.com/'
					},
					mode: 'cors',
					method: 'GET'
				})
			)
		);

		const data = await Promise.all(responses.map((response) => response.json()));

		const [nflData, packerData, playerData, newsData, articleData, standingsData] = data;

		return { nflData, packerData, playerData, newsData, articleData, standingsData };
	} catch (error) {
		console.error('Error fetching data:', error);
		// Handle error appropriately
		throw error;
	}
};
