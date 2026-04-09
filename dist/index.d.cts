type Vec3 = [number, number, number];

interface HorizonGradient {
    gradient: string;
    top: [number, number, number];
    bottom: [number, number, number];
}
declare function horizonGradient(date: Date, lat: number, lon: number): HorizonGradient;

export { type HorizonGradient, type Vec3, horizonGradient };
