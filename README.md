## Just a mess around repos testing options

### No sudo npm setup

1. [https://gist.github.com/f2f74549296e12a2f303](https://gist.github.com/f2f74549296e12a2f303)

### Project setup

1. Install global dependencies: `npm install -g browserify gulp bower`
1. Install local npm dependencies: `npm install`
1. Install local bower dependencies: `gulp bowerInstall`

### Gulp tasks

1. gulp (default runs watch)
2. gulp watch (builds, starts local server, opens browser)
3. gulp build (compiles all the shiz)
4. gulp browserify (browserify's the shizznizzle)
