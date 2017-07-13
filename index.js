
module.exports = onRender;

function _wrapperRender(preRender) {
  return function render() {
    this.emit('beforeRender');
    preRender.apply(this, arguments);
  }
}

function _wrapperSend(preSend) {
  return function send() {
    this.emit('render');
    preSend.apply(this, arguments);
  }
}

function _onRender(res) {
  if (!res) {
    throw new TypeError('argument res is required')
  }

  res.render = _wrapperRender(res.render);
  res.send = _wrapperSend(res.send);
}

function onRender() {
  return function(req, res, next) {
    _onRender(res);
    next();
  }
}