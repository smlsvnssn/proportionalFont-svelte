<script>
	import Controls from "./Controls.svelte";
	import Details from "./Details.svelte";	
	import FontSpecs from "./FontSpecs.svelte";	
	import DummyContent from "./DummyContent.svelte";	
	import { params } from "./params.js";
</script>

<main style='
	--font: {$params.font};
	--topToXheightRatio: {$params.topToXheightRatio};
	--lineheightMinusXheightRatio: {$params.lineheightMinusXheightRatio};
	--leftShiftRatio: {$params.leftShiftRatio};
	--letterSpacingRatio: {$params.letterSpacingRatio}em;
	--debug: {$params.debug ? '1px' : 0};
	--padding: {$params.padding ? 1 : 0};
	--bg:  {$params.invert ? '#333' : '#fff'};
	--clr: {$params.invert ? '#fff' : '#333'};
'>
	<nav class="settings">
		<Details/>
		<Controls/>
		<FontSpecs/>
	</nav>
	<DummyContent/>
</main>