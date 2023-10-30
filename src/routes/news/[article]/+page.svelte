<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	let storyParagraphs = {};

	const articleSearch = data.newsData.articles.filter((article: any) => {
		if (article.headline === $page.params.article) {
			return article;
		}
	});
	let articleData: any;

	const articleLink = articleSearch[0].links.api.news.href;

	const getArticleData = async () => {
		try {
			const res = await fetch(new URL(articleLink), {
				method: 'GET'
			});
			articleData = await res.json();
		} catch (err) {
			console.log(err);
		}
	};

	onMount(async () => {
		try {
			await getArticleData();
			articleData.headlines[0].story.split('\n').forEach((paragraph: any) => {
				if (paragraph === '') {
					return;
				}
				storyParagraphs[paragraph] = paragraph;
			});
			console.log('articleData:', articleData);
		} catch (error) {
			console.error('Error:', error);
		}
		console.log('paragraphs:', storyParagraphs);
	});
</script>

<div class="">
	{#if articleData}
		<p>{articleData.headlines[0].title}</p>
		<p>{articleData.headlines[0].description}</p>
		<p>{articleData.headlines[0].published}</p>
		<p>{articleData.headlines[0].byline}</p>
		{#each Object.keys(storyParagraphs) as paragraph}
			{#if paragraph === '<p><video1></p>'}
				<iframe src={articleData.headlines[0].video[0].links.source.HD.href} frameborder="0" />
			{:else if paragraph === '<p><photo1></p>'}
				<img src={articleData.headlines[0].images[0].url} alt="" />
			{:else if paragraph === '<p><photo2></p>'}
				<img src={articleData.headlines[0].images[1].url} alt="" />
			{:else if paragraph === '<p><photo3></p>'}
				<img src={articleData.headlines[0].images[2].url} alt="" />
			{:else if paragraph === '<p><photo4></p>'}
				<img src={articleData.headlines[0].images[3].url} alt="" />
			{:else if paragraph === '<p><photo5></p>'}
				<img src={articleData.headlines[0].images[4].url} alt="" />
			{:else}
				<p>{paragraph}</p>
			{/if}
		{/each}
	{:else}
		<p>Loading article...</p>
	{/if}
</div>
