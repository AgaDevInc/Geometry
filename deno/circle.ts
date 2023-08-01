import { List } from "https://agacdn.onrender.com/AgaDev:utils@1.0.0/util";
import type { FigureItem, figure } from "./types.d.ts";

function exists(first: FigureItem, second: FigureItem) {
	return first[0] === second[0] && first[1] === second[1];
}
function complete(list: figure) {
	const list2_8 = list.map(([x, y]) => [y, x]) as figure;
	List.concat(list, exists, list2_8)

	const list4_8 = list.map(([x, y]) => [-x, y]) as figure;
	List.concat(list, exists, list4_8)

	const list8_8 = list.map(([x, y]) => [x, -y]) as figure;
	List.concat(list, exists, list8_8)
}
export function makeCircle(r: number) {
	if(r === 0) return [[0,0]] as figure;
	const list = [] as figure;
	
	for (let x = 0; x <= r; x++) {
		const angle = Math.atan(r/x)
		const px = r * Math.cos(angle);
		const py = r * Math.sin(angle);
		
		const cx = Math.round(px);
		const cy = Math.round(py);
		
		List.push(list, exists, [cx, cy]);
	}
	complete(list);

	return list.map(([x, y]) => [y + r, x + r]) as figure;
}
export function makeCircleFilled(r:number) {
	if(r === 0) return [[0,0]] as figure;
	const list = [] as figure;

	for (let x = 0; x <= r; x++)
	for (let R = 0; R <= r; R++) {
		const angle = Math.atan(R/x)
		const px = R * Math.cos(angle);
		const py = R * Math.sin(angle);
		
		const cx = Math.round(px);
		const cy = Math.round(py);
		
		List.push(list, exists, [cx, cy]);
	}
	complete(list);
	return list.map(([x, y]) => [y + r, x + r]) as figure;
}