import { writable } from 'svelte/store';

export const params = writable({
	font: 'DM Sans',
	topToXheightRatio: .345,
	lineheightMinusXheightRatio: .505,
	leftShiftRatio: .07,
	letterSpacingRatio: -.04,
	debug: true,
	padding: false,
	invert: false,
});