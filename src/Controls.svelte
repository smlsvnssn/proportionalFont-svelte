<script>
	import Slider from "./parts/Slider.svelte";
	import Switch from "./parts/Switch.svelte";
	import { params } from "./params.js";
	import { onMount } from 'svelte';
	import Awesomplete from 'awesomplete-es6';

	const 
		load = async url => { 
			try {
				const response = await fetch(url); 
				return await response.json();
			} catch (e) { console.error(e) }
		}, 

		loadFont = (font, url) => {
			const f = new FontFace(font, `url(${url.replace("http:", "https:")})`);
			document.fonts.add(f);
			f.load();
		},
		
		onSelect = e => $params.font = e.selectedText;

	let fontField, fonts, fontNames;

	$: if (fontNames?.includes($params.font)) {
		const font = fonts.items.find((f) => f.family === $params.font);			
		loadFont(font.family, font.files.regular);
	}

	onMount(async () => {
		fonts = await load('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAaL4S4UU9z6Spn0ENzGnD99OAyL2vI3Qc');
		fontNames = fonts.items?.map(f => f.family);
		new Awesomplete(
			fontField, { 
				list: fontNames, 
				maxItems: 100, 
			}
		)
	});
</script>

<form>
	<div>
		<legend>Font</legend>
		<input type="text" bind:value={$params.font} bind:this={fontField} on:awesomplete-selectcomplete={onSelect}>
	</div>
	<div id="sliders" class="fieldset">
		<Slider title='Adjust x-height or cap-height' bind:value={$params.topToXheightRatio} min=0 max=1/>
		<Slider title='Adjust baseline' bind:value={$params.lineheightMinusXheightRatio} min=0 max=1/>
		<Slider title='Adjust left edge' bind:value={$params.leftShiftRatio} min=0 max=.5/>
		<Slider title='Letter spacing' bind:value={$params.letterSpacingRatio} min=-.5 max=.5/>
	</div>

	<div id="switchar" class="fieldset">
		<Switch title='Show guides' id='debug' bind:value={$params.debug}/>
		<Switch title='With padding' id='padding' bind:value={$params.padding}/>
		<Switch title='Dark mode' id='invert' bind:value={$params.invert}/>
	</div>
</form>
