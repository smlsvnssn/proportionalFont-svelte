<script>
	import löremIpsum from "./löremIpsum.js";
	
	const hsla = (h, s = 70, l = 50, a = 1) => `hsla(${ (h % 360) }, ${ s }%, ${ l }%, ${ a })`;
</script>

<section>		
	<span class="debug">
		<h1 contenteditable="true">Exakt</h1>
	</span>
	<span class="debug">
		<h2 contenteditable="true">Max en lax</h2>
	</span>
	<span class="debug">
		<h3 contenteditable="true">Xerxes baxar xylitol</h3>
	</span>
	<span class="debug">
		<h4 contenteditable="true">Xylofonisten vaxar saxofonistens sax</h4>
	</span>
	<span class="debug">
		<h5 contenteditable="true">Extra! Examen i exotisk exorcism exemplifierar extremistisk exkommunikation</h5>
	</span>
	{@html löremIpsum(3, 6, 8, { 
			useLörem: false, 
			isHeadline: false, 
			paragraphStartWrap: '<span class="debug"><p>', 
			paragraphEndWrap: '</p></span>', 
		}) }
		
	<div class="boxwrapper">
		{@html [...Array(6).keys()].map(() => 
			`<div class="box">
				<h4>${löremIpsum(1, 1, 4, { useLörem: false, isHeadline: true })}</h4>
				<div class="caption" style="color:${ hsla(Math.random()*360, 100, 40) }">
					${löremIpsum(1, 1, 4, { useLörem: false, isHeadline: false })}
				</div>
				${löremIpsum(2, 3, 4, { useLörem: false, isHeadline: false })}
			</div>`
		).join('') }
	</div>
</section>