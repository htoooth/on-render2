# on-render2

Emit events when express start render and finish render.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install on-render2 -S
```

## API


```js
var onRender = require('on-render2')
```

### onHeaders()

This will add the event `render` to fire when template are rendered. And a
event `beforeRender` add to template is ready to render.

## Examples

```js
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var express = require('express')
var onRender = require('on-render2')

// example of using this top-level; note the use of haltOnTimedout
// after every middleware; it will stop the request flow on a timeout
var app = express()
app.use(onRender())
app.use(bodyParser())
app.use(cookieParser())

app.get('/path', function(req, res) {
  res.on('render', function() {
    console.log('after render and before send')
  });

  res.on('beforeRender', function() {
    console.log('before render');
  });

  res.render('foo.html');
})

app.listen(3000)
```

## License

[MIT](LICENSE)