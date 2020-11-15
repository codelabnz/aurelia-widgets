'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('bootstrap');

require('bootstrap-toggle');

require('bootstrap-toggle/css/bootstrap-toggle.css!');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToggleButton = exports.ToggleButton = (_dec = (0, _aureliaTemplating.bindable)({
  name: 'onText',
  attribute: 'on-text',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: 'On'
}), _dec2 = (0, _aureliaTemplating.bindable)({
  name: 'offText',
  attribute: 'off-text',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: 'Off'
}), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'width',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: null
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'label',
  attribute: 'label',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: ''
}), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'checked',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'disabled',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec8 = (0, _aureliaTemplating.customElement)('toggle-button'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
  function ToggleButton(element) {
    _classCallCheck(this, ToggleButton);

    this.element = element;
  }

  _createClass(ToggleButton, [{
    key: 'bind',
    value: function bind() {
      var _this = this;

      this.toggleElement = (0, _jquery2.default)(this.element.querySelector('[data-toggle="toggle"]'));
      this.toggleElement.bootstrapToggle({
        on: this.onText,
        off: this.offText,
        width: this.width
      });
      this.toggleElement.change(function () {
        _this.checked = _this.toggleElement.prop('checked');
      });
      this.checkedChanged(this.checked);
      this.disabledChanged(this.disabled);
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.toggleElement.bootstrapToggle('destroy');
    }
  }, {
    key: 'checkedChanged',
    value: function checkedChanged(newValue) {
      if (newValue) {
        this.toggleElement.bootstrapToggle('on');
      } else {
        this.toggleElement.bootstrapToggle('off');
      }
    }
  }, {
    key: 'disabledChanged',
    value: function disabledChanged(newValue) {
      if (newValue) {
        this.toggleElement.bootstrapToggle('disable');
      } else {
        this.toggleElement.bootstrapToggle('enable');
      }
    }
  }]);

  return ToggleButton;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);