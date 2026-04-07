import suncalc from "suncalc";
import renderGradient from "./gradient.js";

export type { Vec3 } from "./utils.js";

export interface HorizonGradient {
	gradient: string;
	top: [number, number, number];
	bottom: [number, number, number];
}

export function horizonGradient(
	date: Date,
	lat: number,
	lon: number,
): HorizonGradient {
	const { altitude } = suncalc.getPosition(date, lat, lon);
	const [gradient, top, bottom] = renderGradient(altitude);
	return { gradient, top, bottom };
}
