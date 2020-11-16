'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY_A = 65;
var KEY_Z = 90;

var CurrencyInput = exports.CurrencyInput = (_dec = (0, _aureliaTemplating.customElement)('currency-input'), _dec2 = (0, _aureliaTemplating.bindable)({
  name: 'value',
  attribute: 'value',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay,
  changeHandler: 'valueChanged'
}), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'setNullToDefaultValue',
  attribute: 'set-null-to-default-value',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'onlyAllowPositiveNumbers',
  attribute: 'only-allow-positive-numbers',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec7 = (0, _aureliaTemplating.bindable)({
  name: 'extendedView',
  attribute: 'extended-view',
  defaultValue: true,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec8 = (0, _aureliaTemplating.bindable)({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec9 = (0, _aureliaTemplating.bindable)({
  name: 'placeholder',
  defaultValue: '0.00',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec10 = (0, _aureliaTemplating.bindable)('label'), _dec11 = (0, _aureliaTemplating.bindable)({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec12 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = _dec12(_class = function () {
  function CurrencyInput(element) {
    _classCallCheck(this, CurrencyInput);

    this.element = element;
    this.displayValue = '';

    this._boundOnBlur = this.onBlur.bind(this);
  }

  _createClass(CurrencyInput, [{
    key: 'attached',
    value: function attached() {
      this.input = this.element.querySelector('input');
      this.input.addEventListener('blur', this._boundOnBlur, true);
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.input.removeEventListener('blur', this._boundOnBlur, true);
    }
  }, {
    key: 'valueChanged',
    value: function valueChanged(newValue, oldValue) {
      this._updateDisplay(newValue ? newValue.toString() : '', oldValue ? oldValue.toString() : '');
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      this._updateDisplay(this.displayValue, this.value);
    }
  }, {
    key: '_updateDisplay',
    value: function _updateDisplay(update, oldValue) {
      this.displayValue = update.trim();
      if (this.displayValue) {
        this.value = this._castValueToFloat(this.displayValue.replace(/,|$/g, ""));
        if (isNaN(this.value)) {
          this._clearValue(oldValue);
        } else {
          this._setDisplayValue(this.value, oldValue);
        }
      } else {
        if (this.setNullToDefaultValue !== '') {
          var newValue = this._castValueToFloat(this.setNullToDefaultValue);
          this.value = newValue;
          this.displayValue = (0, _numeral2.default)(newValue).format('0,0.00');
        } else {
          this.value = null;
        }
      }
    }
  }, {
    key: '_castValueToFloat',
    value: function _castValueToFloat(value) {
      return Number(parseFloat(value).toFixed(2));
    }
  }, {
    key: '_setDisplayValue',
    value: function _setDisplayValue(newValue, oldValue) {
      if (this.onlyAllowPositiveNumbers && newValue < 0) {
        this._clearValue(oldValue);
      } else {
        this.displayValue = (0, _numeral2.default)(newValue).format('0,0.00');
      }
    }
  }, {
    key: '_clearValue',
    value: function _clearValue(oldValue) {
      this.displayValue = oldValue;
      this.value = oldValue;
    }
  }]);

  return CurrencyInput;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);