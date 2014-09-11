# Sass Icon Font Generator

This is a proof of concept for a Sass mixin-powered icon font set. It works by
creating an icon font using the [grunt-webfont](https://github.com/sapegin/grunt-webfont) package, and generating an 
importable Sass file using a custom template to create a variable for 
each glyph.

These variables can then be passed into a mixin to replace the existing text and
put the icon into a pseudo before / after element.

To see it in action, do an initial compile by running `grunt` and open the 
`demo/index.html` file.

## Dependencies

- [Node](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com)

## Installation

1. Clone the repo
2. Install the required node packages by running `npm install`
3. Perform an initial compile by running `grunt`

## Usage

#### HTML:

```
<span class="icon">
    <span class="icon-filename"></span>
    <span class="screen-reader-text">Text to be replaced</span>
</span>
```

#### Sass:

```
.icon-filename
    @include icon($icon-filename)
```

## Dev

- To recompile the icon font and Sass: `grunt`
- To recompile the font only: `grunt webfont`
- To recompile the Sass only: `grunt sass`

## Notes

SVGs from the [Cinema icon pack](http://www.flaticon.com/packs/cinema).