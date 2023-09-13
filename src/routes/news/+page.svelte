<script lang="ts">
	import GlassCard from '$lib/components/cards/GlassCard.svelte';
	import NewsCard from '$lib/components/news/NewsCard.svelte';

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

{#each data.newsData.articles as news}
	<NewsCard
		headline={news.headline}
		description={news.description}
		image={news.images[0].url}
		link={news.links.web.href}
		published={news.published}
		byline={news.byline}
	/>
{/each}
