# skatedate (until we find a better name)

### getting started

    npm install
    npm start

then hit localhost:3000.

### tips
 - when using `npm install <some_module>`, use instead `npm install <some_module> --save` so that the module information gets saved in the package.json. Any other developer who wants to get all the dependencies just has to run `npm install`.

 - if you are seeing `npm ERR! Error: shasum check failed for ...` when trying to install a npm module then instead, run `npm info <module_name> version` and from this, insert the module name and version into the dependencies section of `package.json`. You can then run `npm install` and it should work.
