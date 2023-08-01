import {
	FOREGROUND,
	BACKGROUND,
	FONTS,
	joinColors,
	colorize,
} from '@agadev/colors';
import { makeQuadrate, makeQuadrateFilled } from './quadrate.js';
import { makeCircle, makeCircleFilled } from './circle.js';

export const quadrate = {
  make: makeQuadrate,
  makeFilled: makeQuadrateFilled
};

export const circle = {
  make: makeCircle,
  makeFilled: makeCircleFilled
}

export function toString(
	figure,
	char = '#',
	foreground = joinColors(FOREGROUND.WHITE, BACKGROUND.WHITE),
	background = FONTS.RESET,
	...othersColors
) {
	const str = [];
	let i = 0;
	while (i < figure.length) {
		const [x, y, color] = figure[i];
		if (str.length <= y) {
			str.push([]);
			continue;
		}
		if (str[y].length <= x) {
			str[y].push(0);
			continue;
		}
		str[y][x] = color ?? 1;
		i++;
	}
	const pixels = [
		colorize(char, background),
		colorize(char, foreground),
		...othersColors.map(color => colorize(char, color)),
	];
	return str.map(row => row.map(v => pixels[v]).join('')).join('\n');
}
