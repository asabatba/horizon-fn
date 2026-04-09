# horizon-fn

Generate a CSS sky gradient from a `Date` and geographic coordinates.

## Install

```bash
pnpm add horizon-fn
```

For a GitHub dependency, use a commit or tag that includes the built `dist/` files.

## Usage

```ts
import { horizonGradient } from "horizon-fn";

const sky = horizonGradient(new Date(), 41.3874, 2.1686);

console.log(sky.gradient);
// linear-gradient(...)

console.log(sky.top);
console.log(sky.bottom);
// [r, g, b]
```

## API

```ts
horizonGradient(date: Date, lat: number, lon: number)
```

Returns:

- `gradient`: CSS `linear-gradient(...)` string
- `top`: top sky color as `[r, g, b]`
- `bottom`: horizon color as `[r, g, b]`
