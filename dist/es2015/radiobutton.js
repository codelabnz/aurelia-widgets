'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _radiobuttonselectedevent = require('./radiobuttonselectedevent');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadioButton = exports.RadioButton = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaTemplating.customElement)('radio-button'), _dec3 = (0, _aureliaTemplating.bindable)('label'), _dec4 = (0, _aureliaTemplating.bindable)('selected'), _dec5 = (0, _aureliaTemplating.bindable)('disabled'), _dec6 = (0, _aureliaTemplating.bindable)('onselecting'), _dec7 = (0, _aureliaTemplating.bindable)({
  attribute: 'group-name',
  name: 'groupName'
}), _dec8 = (0, _aureliaTemplating.bindable)({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec9 = (0, _aureliaTemplating.bindable)({
  name: 'iconFamilyClass',
  attribute: 'icon-family-class',
  defaultValue: 'fa'
}), _dec10 = (0, _aureliaTemplating.bindable)({
  name: 'selectedIconClass',
  attribute: 'selected-icon-class',
  defaultValue: 'fa-circle'
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = function () {
  function RadioButton(eventAggregator) {
    _classCallCheck(this, RadioButton);

    this.eventAggregator = eventAggregator;
    this.onselecting = function () {
      return true;
    };
  }

  _createClass(RadioButton, [{
    key: 'bind',
    value: function bind() {
      this.selectedEventSubscription = this.eventAggregator.subscribe(_radiobuttonselectedevent.RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.selectedEventSubscription.dispose();
    }
  }, {
    key: 'clicked',
    value: function clicked() {
      if (this.disabled !== true) {
        if (this.onselecting()) {
          this.selected = !this.selected;
          this.eventAggregator.publish(new _radiobuttonselectedevent.RadioButtonSelectedEvent(this.groupName, this.label));
        }
      }
    }
  }, {
    key: '_handleButtonSelected',
    value: function _handleButtonSelected(event) {
      if (event.groupName === this.groupName) {
        this.selected = this.label === event.buttonLabel;
      }
    }
  }]);

  return RadioButton;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);