# mat-icon-button-sizes

[![npm](https://img.shields.io/npm/v/mat-icon-button-sizes.svg)](https://www.npmjs.com/package/mat-icon-button-sizes)
[![npm](https://img.shields.io/npm/dm/mat-icon-button-sizes.svg)](https://www.npmjs.com/package/mat-icon-button-sizes)
[![npm](https://img.shields.io/librariesio/release/npm/mat-icon-button-sizes)](https://www.npmjs.com/package/mat-icon-button-sizes)

### Sizes for the Angular Material 15+ icon button!

```sh
# Install the Angular component
npm i -S mat-icon-button-sizes
```

### <a href="https://btxtiger.github.io/mat-icon-button-sizes/" target="_blank">⇨ DEMO</a>

## Compatibility
✅ Angular Material 15+ (MDC)<br>
❌ Angular Material 2+

## Usage
```scss
// global.scss
// @import your Angular Material theme before!
@import "mat-icon-button-sizes/style.css";
```
```ts
// Import the module into your module or standalone component.
import { MatIconButtonSizesModule } from 'mat-icon-button-sizes';

imports: [
   MatIconButtonSizesModule,
]
```
```html
<button mat-icon-button mat-large-icon-button>
   <mat-icon>delete</mat-icon>
</button>

<button mat-icon-button mat-medium-icon-button>
   <mat-icon>delete</mat-icon>
</button>

<button mat-icon-button mat-small-icon-button>
   <mat-icon>delete</mat-icon>
</button>

<button mat-icon-button mat-tiny-icon-button>
   <mat-icon>delete</mat-icon>
</button>
```

## Customize
The directive just sets the CSS class name, so you can either override the sizes (large, medium, small, tiny),
or define your own classes, and just pass them as class name.

```scss
@import "mat-icon-button-sizes/styles/mat-icon-button-size.mixin";

// The default factor between button and icon size is *= 0.6
@include MatIconButtonSize('super-duper', 128px, 79px);
```
```html
<button mat-icon-button class="mat-super-duper-icon-button">
   <mat-icon>delete</mat-icon>
</button>
```
