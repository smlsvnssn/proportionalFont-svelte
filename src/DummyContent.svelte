<script>
	import Box from './parts/Box.svelte';
	import löremIpsum from 'loerem';
	import { times } from './ö';
</script>

<section>
	<span class="debug">
		<h1 contenteditable="true" spellcheck="false">Exakt</h1>
	</span>
	<span class="debug">
		<h2 contenteditable="true" spellcheck="false">Max en lax</h2>
	</span>
	<span class="debug">
		<h3 contenteditable="true" spellcheck="false">Xerxes baxar xylitol</h3>
	</span>
	<span class="debug">
		<h4 contenteditable="true" spellcheck="false">Xylofonisten vaxar saxofonistens sax</h4>
	</span>
	<span class="debug">
		<h5 contenteditable="true" spellcheck="false">Extra! Examen i exotisk exorcism exemplifierar extremistisk exkommunikation</h5>
	</span>

	{@html löremIpsum({
		numberOfParagraphs: 3,
		sentencesPerParagraph: 6,
		maxSentenceLength: 8,
		useLörem: false,
		isHeadline: false,
		paragraphStartWrap: '<span class="debug"><p>',
		paragraphEndWrap: '</p></span>',
	})}

	<div class="boxwrapper">
		{#each times(6) as box}
			<Box />
		{/each}
	</div>
</section>
