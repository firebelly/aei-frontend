# AEI - Front end only
Front-end static build

### Getting Started
We're using [Jekyll](http://jekyllrb.com/) & [Gulp](http://gulpjs.com/) to build the front end of the COH site. 

1. Install Jekyll: `gem install jekyll`
2. Clone This Repo
3. CD to the site directory and run `bundle`
4. Install node modules: `npm install`
5. Run `gulp watch` to start jekyll build and fire up browsersync
6. 😎

### File Structure

```
|- /_build              // The static site gets compiled and packaged into this folder
|- /_data               // Misc yaml and other data files referenced in the site via site.data.filename
|- /_includes           // Layout partials
|- /_layouts            // Page/template layouts
|- /_plugins            // Jekyll plugins
|- /assets              // Front-end assets, everything here gets generated into the /_build folder
    |- /css             // Compiled stylesheets (main.css)
    |- /images          // Images
    |- /js              // JavaScript dependencies
        |- /build       // Where the JS is compiled to (site.js/site.min.js)
        |- /libs        // JS libraries to be concatenated into the site.js
        |- /no-build    // JS libraries that shouldn't be concatenated
        |- main.js      // The main application JS
    |- /scss            // Sass folder
        |- /components  // Components and pieces
        |- /helpers     // Things that assist and generally don't output CSS
        |- /pages       // Individual page/view styles
        |- /vendor      // Vendor styles for libraries etc.
        |- main.scss    // Import manifest — no actual styles declared
    |- /svgs            // SVGs go here
        |- build        // Where the SVGs are concatenated
            |- svgs-defs.svg    // The compiled SVG spritesheet
|- config.yml           // Jekyll config settings
|- gulpfile.js          // The gulpfile is in the root and handles the /assets directory
|- package.js           // The gulp dependency manifest
|- index.md             // The landing page
|- /page-name           // Pages are organized in directories in the root by their page-name
    |- index.md         // They each get an index.md to handle the page content
    |- /child-page-name // Child pages follow the same convention  
|- component-library.html   // A running file to style and add reusable components. Use this as a reference whene needed, and add components as they are established.
```

### Component Library

We put together a simple component library to help display and explain the various visual compnents, how they're used, and where in the files their code is located. It's not at 100%, but hopefully it's helpful — view it at `/component-library`

### Grid System

I've put together a small grid system so that if components need to be dropped in at various rations then it should be pretty easy. The grid system is located in `assets/scss/helpers/_grid.scss`.

Whenever you want to include elements as items in a grid then establish the container as a grid by giving it a class of `grid`:

```
<div class="grid">
  <!-- grid items here -->
</div>
```

The columns are class-based, and the convention is `col-` followed by a ratio, which is written as (for example) `1-2` for 1/2. 1/3 = `col-1-3`, 2/3 = `col-2-3`, etc.

```
<div class="grid">
  <div class="col-1-2"></div>
  <div class="col-1-2"></div>
</div>
```

This will get you your columns floating right up against each other. If you need them to be spaced out you can add a `spaced` class to the `.grid` container. This will add padding to each column item, which means if you need your columns to be spaced out but they also have solid backgrounds you'll need to add an internal container (use the non-specific `-inner` class if nothing else makes sense) to handle the background color and content padding:

```
<div class="grid spaced">
  <div class="col-1-3">
    <div class="-inner"></div>
  </div>
  <div class="col-2-3">
    <div class="-inner"></div>
  </div>
</div>
```