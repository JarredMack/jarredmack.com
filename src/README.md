# The `src` Directory

## Overview

The `src/` directory contains all code used in the application along with all
tests of such code.

```
src/
  |- app/
  |  |- controllers/
  |  |- directives/
  |  |- factories/
  |  |- filters/
  |  |- forms/
  |  |- services/
  |  |- tests/
  |  |- views/
  |  |- app.js
  |- common/
  |- config/
  |  |- [env].config.js
  |- images/
  |  |- icons/
  |  |- logos/
  |- less/
  |  |- form/
  |  |- _[partial].less
  |  |- main.less
  |  |- variables.less
  |- partials/
  |  |- form/
  |  |- _[partial].tpl.html
  |- .htaccess
  |- index.html
```

- `src/app/` - all application logic lives here. Controllers, directives, services,
  views, etc should all be under this directory. [Read more &raquo;](app/README.md)
- `src/assets/` - static files like fonts and compiled css.
  [Read more &raquo;](assets/README.md)
- `src/common/` - third-party libraries or components likely to be reused in
  another application. [Read more &raquo;](common/README.md)
- `src/config/` - environment specific config files. [Read more &raquo;](config/README.md)
- `src/images/` - any icons/logos specific to the site
- `src/less/` - LESS CSS files. [Read more &raquo;](less/README.md)
- `src/partials/` - Partial template files that are ng-included from within the app -
  useful for reusable templates, and for view logic separation
- `src/.htaccess` - Routing rules for Apache to allow for direct routing in the application
- `src/index.html` - this is the HTML document of the single-page application.
  See below.

See each directory for a detailed explanation.

## `index.html`

The `index.html` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as
the header and footer. It declares with `ngApp` that this is the `jarredmack` app,
specifies the main `AppCtrl` controller, and contains the `ngView` directive
into which route templates are placed.

Unlike any other HTML document (e.g. the templates), `index.html` is compiled as
a Grunt template, so variables from `Gruntfile.js` and `package.json` can be
referenced from within it. Changing `name` in `package.json` from
"jarredmack.com" will rename the resultant CSS and JavaScript placed in `build/`,
so this HTML references them by variable for convenience.
