'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'moment', 'eonasdan-bootstrap-datetimepicker'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, inject, $, moment, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, DateTimePickerWidget;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_moment) {
      moment = _moment.default;
    }, function (_eonasdanBootstrapDatetimepicker) {}],
    execute: function () {
      _export('DateTimePickerWidget', DateTimePickerWidget = (_dec = customElement('datetime-picker'), _dec2 = bindable('label'), _dec3 = bindable({
        name: 'dateTimeValue',
        attribute: 'datetime-value',
        defaultBindingMode: bindingMode.twoWay
      }), _dec4 = bindable({
        name: 'textCol',
        attributeName: 'text-col',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneTime
      }), _dec5 = bindable({
        name: 'labelCol',
        attributeName: 'label-col',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneTime
      }), _dec6 = bindable({
        name: 'noform',
        attribute: 'no-form',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: false
      }), _dec7 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = function () {
        function DateTimePickerWidget(element) {
          _classCallCheck(this, DateTimePickerWidget);

          this.element = element;
        }

        DateTimePickerWidget.prototype.attached = function attached() {
          this.inputElement = this.element.querySelector('input');

          var self = this;

          $(this.inputElement).datetimepicker({
            format: 'DD/MM/YYYY HH:ss'
          }).on('dp.change', function (e) {
            self.dateTimeValue = moment(e.date).format("DD/MM/YYYY HH:ss");
          });

          if (this.dateTimeValue === '' || this.dateTimeValue == null || this.dateTimeValue == undefined) {
            self.dateTimeValue = moment().format('DD/MM/YYYY HH:ss');
          }
        };

        return DateTimePickerWidget;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('DateTimePickerWidget', DateTimePickerWidget);
    }
  };
});