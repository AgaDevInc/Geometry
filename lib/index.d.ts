import { Color } from '@agadev/colors';
import type { figure } from './types.d.ts';
import { makeQuadrate, makeQuadrateFilled } from './quadrate.js';
import { makeCircle, makeCircleFilled } from './circle.js';

export function toString(
	figure: figure,
	char:string,
	foreground: Color,
	background:Color,
  ...othersColors: Color[]
): string

export const quadrate: {
	make: typeof makeQuadrate;
	makeFilled: typeof makeQuadrateFilled;
};

export const circle: {
	make: typeof makeCircle;
	makeFilled: typeof makeCircleFilled;
};