import { FOREGROUND, BACKGROUND, Color, FONTS, joinColors, colorize } from 'https://agacdn.onrender.com/AgaDev:colors@1.0.0';
import { figure } from './types.d.ts';
import { makeQuadrate, makeQuadrateFilled } from './quadrate.ts';
import { makeCircle, makeCircleFilled } from './circle.ts';

export const quadrate = {
  make: makeQuadrate,
  makeFilled: makeQuadrateFilled
};

export const circle = {
  make: makeCircle,
  makeFilled: makeCircleFilled
}

export function toString(
	figure: figure,
	char = '#',
	foreground = joinColors(FOREGROUND.WHITE, BACKGROUND.WHITE),
	background = FONTS.RESET,
  ...othersColors: Color[]
): string {
	const str: number[][] = [];
  let i = 0;
  while(i < figure.length) {
    const [x, y, color] = figure[i];
    if (str.length <= y) {
      str.push([]);
      continue
    }
    if(str[y].length <= x) {
      str[y].push(0);
      continue
    }
    str[y][x] = color ?? 1;
    i++;
  }
	const pixels = [colorize(char, background), colorize(char, foreground), ...othersColors.map(color => colorize(char, color))];
	return str.map(row => row.map(v => pixels[v]).join('')).join('\n');
}
