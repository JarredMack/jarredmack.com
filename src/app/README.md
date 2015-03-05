# The `src/app` Directory

## Overview

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
```

# The `src/app` Directory

The `src/app/` directory is where most of the application logic resides. Unlike
`ng-boilerplate`, which this site was built from, the app directory functions
similarly to PHP MVC frameworks - it contains all of your `Model`, `View`, and
`Controller` logic in one place. This means that your code will be less modularised,
but it has improved readability from a developer's perspective.

The grunt build task will do a deep scan through these directories during the build
process, so they can have as many subdirectories as required.

## `controllers/`

All of the application controllers live in here. These controllers contain
their relevant routing information, and each one essentially equates to a page
(or series of pages) within the site. As the controllers are all children of
the main app (`jarredmack`), they inherit any included services from `app.js`.

## `directives/`

This is the only directory where templates, styles, and controllers are all in
the same location. The reason for this is because directives should be modular -
you should be able to pull them out and use them in another project without needing
to hunt down the other files.

Directives should have their own folder, and contain all relevant files:

```
directives/
|- [directive]/
|  |- [directive].js
|  |- [directive].spec.js
|  |- [directive].less
|  |- [directive].tpl.html
```

## `factories/`

Self explanatory, factories should go in here.

## `filters/`

Any filters required for the application go in here. Much like directives, filters
should be modular, and as such they are nested within their own folders for
readability.

## `forms/`

If any forms require specific controller logic, they should be stored in here. This
is where things such as validation and submit methods should be handled. Note,
however, that there is also a `forms/` directory under `src/partials/` - this
is not required for the form controllers, but helps keep templates clean by having
forms included from an external template.

## `services/`

Self explanatory, services should go in here.

## `tests/`

All unit tests for the site (aside from those for directives) go in here. The
folder structure mimics the structure of `src/app/`, in order to maintain
readability in the folder structure.

## `views/`

View templates corresponding to their respective controllers go in here.

## `app.js`

The root controller for the application. This file is where all of the directives,
services, and controllers that are used site-wide are instantiated, the default
routes are configured, and any global methods are implemented.