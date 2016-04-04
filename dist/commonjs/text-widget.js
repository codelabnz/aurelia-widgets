'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextWidget = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var elasticEvents = ['keyup', 'cut', 'paste', 'change'];

var TextWidget = exports.TextWidget = (_dec = (0, _aureliaTemplating.customElement)('text-widget'), _dec2 = (0, _aureliaTemplating.bindable)({
  name: 'textValue',
  attribute: 'text-value',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec4 = (0, _aureliaTemplating.bindable)('placeholder'), _dec5 = (0, _aureliaTemplating.bindable)('label'), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec7 = (0, _aureliaTemplating.bindable)({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec8 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
  function TextWidget(element) {
    _classCallCheck(this, TextWidget);

    this.element = element;
    this.boundResize = this.resize.bind(this);
  }

  TextWidget.prototype.attached = function attached() {
    var _this = this;

    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
      elasticEvents.forEach(function (event) {
        _this.input.addEventListener(event, _this.boundResize);
      });
      document.addEventListener('resize', this.boundResize);
      this.minSize = this.input.scrollHeight;
    } else {
      this.input = this.element.querySelector('input');
    }
  };

  TextWidget.prototype.detached = function detached() {
    var _this2 = this;

    if (this.multiline) {
      elasticEvents.forEach(function (event) {
        _this2.input.removeEventListener(event, _this2.boundResize);
      });
      document.removeEventListener('resize', this.boundResize);
    }
  };

  TextWidget.prototype.resize = function resize() {
    this.input.style.overflow = 'hidden';
    this.input.style.height = 'auto';
    var newSize = this.input.scrollHeight;
    if (newSize > this.minSize) {
      newSize += 20;
    }
    this.input.style.height = newSize + 'px';
  };

  return TextWidget;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);