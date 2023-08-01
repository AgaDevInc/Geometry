import { Color } from '@agadev/colors';
import type { figure } from './types.d.ts';

export function toString(
	figure: figure,
	char:string,
	foreground: Color,
	background:Color,
  ...othersColors: Color[]
): string