# [JarredMack.com](http://JarredMack.github.com/jarredmack.com)
### Site based on [ngBoilerplate](http://joshdmiller.github.com/ng-boilerplate) [![Build Status](https://api.travis-ci.org/ngbp/ngbp.png?branch=v0.3.2-release)](https://travis-ci.org/ngbp/ngbp)

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git@github.com:JarredMack/jarredmack.com.git
$ cd jarredmack.com
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Finally, open `file:///path/to/jarredmack.com/build/index.html` in your browser.

## Production Builds

This site has configurable environments that are built through Grunt tasks. Add your file
to /src/config/[env].config.js - the default build environment is "dev". To build:

```sh
$ grunt build:[env]
```

And copy your files as required!

## Fork Me!

Have a suggestion? Think I could be doing something better? Go ahead and give me a fork, I'm always open to feedback! Alternatively, you can [shoot me an email](mailto:contact@jarredmack.com)!