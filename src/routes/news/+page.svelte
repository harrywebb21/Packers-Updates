<script lang="ts">
	export let data;

	const packerNews = data.newsData.articles.filter((category: any) => {
		for (let i = 0; i < category.categories.length; i++) {
			if (category.categories[i].description === 'Green Bay Packers') {
				return category;
			}
		}
	});
	// console.log('PACKER NEWS:', packerNews);
	// console.log('News: ', data.newsData);
</script>

<div class="">
	{#each data.newsData.articles as news}
		<p>{news.headline}</p>
		<p>{news.description}</p>
		<p>{news.published}</p>
		<p>{news.byline}</p>
		<img src={news.images[0].url} alt="" />
		<a href={news.links.web.href}>read more</a>
	{/each}
</div>
