# Nought Sass Mixins

A collection of useful mixins! When Aleph bootstraps a new website project, we
like to leverage CSS Modules and Sass. While every project is different, our
workflow around layout grids, breakpoints and other global stuff is pretty
much the same. Thus, we have this library!

## Use It

```
yarn add -D @aleph/nought-sass-mixins
```
or
```
npm i -D @aleph/nought-sass-mixins
```

Depending on how your framework standardizes Sass imports, you can import the
whole library directly, or use the different modules individually:

```scss
/// Everything, not using a namespace
@use "@aleph/nought-sass-mixins" as *;

/// Just the grids, not using a namespace
@use "@aleph/nought-sass-mixins/sass/grid" as *;

/// Just the utilities, with the default "utils" namespace
@use "@aleph/nought-sass-mixins/sass/utils";

/// Then, to reset a button
button {
    @include utils.buttonReset;
}
```

## Including and Customizing for Your Project
All these mixins come with sensible defaults that can usually be overwritten
by variables when `@use` or `@forward` them in your project. Details on specific 
variables you can set are below, but here's a somewhat standard setup that might be
useful as a simple example. 

Assuming you are including this library as a complement to your own project-specific
mixins, you might want a single `scss` file with all mixins in it that you can `@use`
anywhere. If you wanted to keep all the defaults you'd just put this up top in your
`_mixins.scss` file:

```scss
@forward "@aleph/nought-sass-mixins";
```

If you wanted to instead override just the default global container width and padding, 
you'd do this:
```scss
@forward "@aleph/nought-sass-mixins" with (
  $container-width: 1180px
  $container-padding: 36px
);
```

From there, you can write a bunch of mixins in this file and then `@use` it in your
project wherever you like. 


## What's Inside
There are a few different modules available for use, and within them mixins
that may be useful to you. 

### Breakpoints
Convenience mixins for media queries along a set system of breakpoints. This is directly
lifted from Bootstrap 5's media query mixins. These default variable values can be
overridden:
```scss
/// You can have as many breakpoints as you like, and call them whatever you like.
/// Currently, this entire map needs to be overwritten to override defaults.
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);
```

Detailed usage docs [are available here](https://getbootstrap.com/docs/5.2/layout/breakpoints/), 
but here's the basic list of all mixins, assuming using default breakpoints:
```scss
@include media-breakpoint-up(md) { ... } // min width 768px
@include media-breakpoint-down(md) { ... } // max-width: 767.98px
@include media-breakpoint-only(md) { ... } // min 768 and max 991.98px
@include media-breakpoint-between(md, xl) { ... } // min 768 and max 1199.98px
```

### Grid
The layout grid module is a set of convenience features utilizing CSS Grids to manage
containers and grids / columns inside them. Here are the default variables you can 
override:

```scss
/// default settings for the "grid()" mixin
$grid-column-count: 12;
$grid-column-gap: 24px;
$grid-row-gap: 24;

/// NB! You can set this up however you want but the key names must
/// match responsive breakpoint keys(from above) to work properly!
$grid-responsive-column-counts: (
  md: 8, /// e.g. by default, make the grid 8 columns at the "md" breakpoint
  sm: 4,
);

/// NB! You can set this up however you want but the key names must
/// match responsive breakpoint keys(from above) to work properly!
$grid-responsive-column-gap: (
  md: $grid-column-gap,
  sm: $grid-column-gap,
) !default; /// at the "md" and sm" breakpoints

/// Defaults for container() mixin
$container-width: 1200px;
$container-padding: 48px;
$container-padding-sm: 12px; /// Deprecation warning: Use $container-responsive-padding instead
/// NB! You can set this up however you want but the key names must
/// match responsive breakpoint keys(from above) to work properly!
/// $container-responsive-padding will override legacy $container-padding-sm
$container-responsive-padding: (
  md: $container-padding,
  sm: 12px,
) !default; /// at the "md" and sm" breakpoints
```

Here's all the mixins with default args:
```scss
@include grid( // create a grid container
    $columns: $grid-column-count, 
    $responsive-columns: true, /// if false, the grid won't automatically flex change column numbers at any width
) { ... } 

@include grid; // 12 column grid, goes to 8 and 4 at md and sm breakpoints
@include grid(5, false) // 5 column grid at all widths

@include columns(
  $startColumn, // container starts at the left edge of this column
  $endColumn, // container ends at the left edge of this column's left gutter
  $fullWidthBreakpoint: sm // container goes to full width at this breakpoint
) { ... }

@include columns(1, 7) // takes up the left 6 columns, goes to full-width at sm breakpoint
@include columns(2, 4, false) // spans columns 2-3, doesn't go to full-width automatically


@include spanColumns( // creates columns based on a span count
  $spanColumns, // number of columns container spans
  $startColumn: false, // start column for span, if left out it just starts at the next available column
  $fullWidthBreakpoint: sm // container goes to full width at this breakpoint
) { ... }

@include spanColumns(2) // spans two columns, starting at next available space in a row.
@include spanColumns(4, 1) // spans four columns starting all the way to the left.
@include spanColumns(5, $fullWidthBreakpoint: md) // spans 5 columns, goes full-width at md breakpoint
@include spanColumns(3, $fullWidthBreakpoint: false) // 3 columns, doesn't go to full width ever

@include container() // a container div restricted to a max-width defined in $container-width
@include fullBleed() // breaks out of a container to full bleed. Doesn't work inside a grid!
@include containerGrid() // helper that sets up a default grid inside a container
```

### Utility Mixins
Here's a little group of helpers that we use on most projects:

```scss
@include srOnly; // Hides from everything but Screen Readers
@include buttonReset; // Kills off default button styles
@include listReset; // Resets all styles on lists
```

## Testing and Contributing
This repo includes our stylelint standards you can run to make sure you're keeping everything
clean. After cloning the repo and running `yarn` you can lint your work at any time with
`yarn test` (Autofix with `yarn test --fix`).

If you run `yarn dev` you'll get a test page with the default styles compiled. You can 
play with the features in the `test/index.html` to see how stuff's working.