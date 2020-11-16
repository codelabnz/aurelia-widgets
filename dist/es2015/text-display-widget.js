'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextDisplayWidget = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextDisplayWidget = exports.TextDisplayWidget = (_dec = (0, _aureliaTemplating.customElement)('text-display-widget'), _dec2 = (0, _aureliaTemplating.bindable)('text'), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'placeholder',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec4 = (0, _aureliaTemplating.bindable)('toolTipText'), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'placement',
  defaultValue: 'auto top',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec6 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = function () {
  function TextDisplayWidget(element) {
    _classCallCheck(this, TextDisplayWidget);

    this.element = element;
  }

  _createClass(TextDisplayWidget, [{
    key: 'bind',
    value: function bind() {
      this.toolTipElement = (0, _jquery2.default)(this.element.querySelector('.text-display-widget-label'));
      this.toolTipElement.attr('title', '');
      this.toolTipElement.tooltip({
        container: 'body',
        placement: this.placement,
        html: true,
        title: this.toolTipText || this.text
      });
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.toolTipElement.tooltip('destroy');
    }
  }, {
    key: 'textChanged',
    value: function textChanged(newValue) {
      if (!this.toolTipText) {
        this._updateToolTip(newValue);
      }
    }
  }, {
    key: 'toolTipTextChanged',
    value: function toolTipTextChanged(newValue) {
      this._updateToolTip(newValue);
    }
  }, {
    key: '_updateToolTip',
    value: function _updateToolTip(newValue) {
      this.toolTipElement.attr('data-original-title', newValue);
    }
  }]);

  return TextDisplayWidget;
}()) || _class) || _class) || _class) || _class) || _class) || _class);