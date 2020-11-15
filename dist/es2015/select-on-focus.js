'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOnFocus = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectOnFocus = exports.SelectOnFocus = (_dec = (0, _aureliaTemplating.customAttribute)('selectonfocus'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
  function SelectOnFocus(element) {
    _classCallCheck(this, SelectOnFocus);

    this.element = element;
    this.blockMouseUp = false;

    this._boundOnFocus = this.onFocus.bind(this);
    this._boundOnMouseDown = this.onMouseDown.bind(this);
    this._boundOnMouseUp = this.onMouseUp.bind(this);
  }

  _createClass(SelectOnFocus, [{
    key: 'attached',
    value: function attached() {
      this.element.addEventListener('focus', this._boundOnFocus);
      this.element.addEventListener('mousedown', this._boundOnMouseDown);
      this.element.addEventListener('mouseup', this._boundOnMouseUp);
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.element.removeEventListener('focus', this._boundOnFocus);
      this.element.removeEventListener('mousedown', this._boundOnMouseDown);
      this.element.removeEventListener('mouseup', this._boundOnMouseUp);
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.element.select();
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown() {
      this.blockMouseUp = this.element !== document.activeElement;
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      if (this.blockMouseUp) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }]);

  return SelectOnFocus;
}()) || _class) || _class);