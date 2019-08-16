'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerWidget = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('eonasdan-bootstrap-datetimepicker');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTimePickerWidget = exports.DateTimePickerWidget = (_dec = (0, _aureliaTemplating.customElement)('datetime-picker'), _dec2 = (0, _aureliaTemplating.bindable)('label'), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'dateTimeValue',
  attribute: 'datetime-value',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'textCol',
  attributeName: 'text-col',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'labelCol',
  attributeName: 'label-col',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'noform',
  attribute: 'no-form',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: false
}), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = function () {
  function DateTimePickerWidget(element) {
    _classCallCheck(this, DateTimePickerWidget);

    this.element = element;
  }

  DateTimePickerWidget.prototype.attached = function attached() {
    this.inputElement = this.element.querySelector('input');

    var self = this;

    (0, _jquery2.default)(this.inputElement).datetimepicker({
      format: 'DD/MM/YYYY HH:ss'
    }).on('dp.change', function (e) {
      self.dateTimeValue = (0, _moment2.default)(e.date).format("DD/MM/YYYY HH:ss");
    });

    if (this.dateTimeValue === '' || this.dateTimeValue == null || this.dateTimeValue == undefined) {
      self.dateTimeValue = (0, _moment2.default)().format('DD/MM/YYYY HH:ss');
    }
  };

  return DateTimePickerWidget;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class);