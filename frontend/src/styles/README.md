# Sonar2 cookbook

## Basics
- Set your layout with html attributes :
   ```html
  <div data-layout="--block">...</div>

- Link properties with others by using "`--`" :
  ```html
  <div data-layout="--flex--space-between">...</div>

- Enable a property for only specific screen size by adding its key before the property :
  ```html
  <div data-layout="--block--sgrid">...</div>

- Extend any property in sass by using its placeholder :
  ```scss
  .element{
    @extend %layout---grid
  }

## HTML Attributes

### [data-layout]
- `--none`
- `--block`
- `--flex`
- `--grid`
- `--auto` : contained element will be organized automatically (flex:1 1 auto or grid-auto-flow:column)
- `--justify-space-between`
- `--justify-stretch`
- `--justify-center`
- `--justify-start`
- `--justify-end`
- `--items-stretch`
- `--items-center`
- `--items-start`
- `--items-end`
- `--self-stretch`
- `--self-center`
- `--self-start`
- `--self-end`

### [data-flex]
- `--wrap`
- `--nowrap`
- `--row` : flex-direction:row
- `--column` : flex-direction:column
- `--none`
- `--auto`

### [data-cols]
- Set a [layout="--grid"] element columns number.
  ```html
  <div data-layout="--grid" data-cols="--3--l6"></div>

### [data-col]
- Set a column span for a specific grid cell.
  ```html
  <div data-layout="--grid" data-cols="--3--l6">
    <div data-col="--2--l4">...</div>
  </div>

### [data-gap], [data-vgap], [data-hgap]
- Set gaps between rows and columns in a grid or flex context.
- `gap` set horizontal & vertical gap
- `hgap` set horizontal gap (between columns)
- `vgap` set vertical gap (between rows)
  ```html
  <div data-layout="--flex" gap="--2"></div>
  <div data-layout="--flex" vgap="--1--s2"></div>
  <div data-layout="--flex" gap="--2" hgap="--l4"></div>
  ```


## Default values
```scss
$breakpoints: (
  xxs: 0px,
  xs: 375px,
  s: 575px,
  m: 767px,
  l: 991px,
  xl: 1199px,
) !default;

$gaps: (
  1: 4px,
  2: 8px,
  3: 16px,
  4: 24px,
  5: 32px,
  6: 64px,
  7: 94px,
) !default;
```