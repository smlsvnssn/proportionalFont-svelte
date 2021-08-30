<script>
	import { params } from "./params.js";

	const toCamelCase = s => s.replace(/([-_\s])([a-zA-Z0-9])/g, (m, _, c, o) => o ? c.toUpperCase(): c);

	$: camelCasedFont = toCamelCase($params.font);
</script>

<div id="fontSpecs" contentEditable="true" spellcheck="false" onclick="document.execCommand('selectAll',false,null)">
	${camelCasedFont}: ( <br />
	&emsp;'font': '{$params.font}', <br />
	&emsp;'topToXheightRatio': {$params.topToXheightRatio}, <br />
	&emsp;'lineheightMinusXheightRatio': {$params.lineheightMinusXheightRatio}, <br />
	&emsp;'leftShiftRatio': {$params.leftShiftRatio}, <br />
	&emsp;'letterSpacingRatio': {$params.letterSpacingRatio} <br />
);
</div>
