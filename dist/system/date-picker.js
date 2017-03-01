'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'moment', '@fengyuanchen/datepicker'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, inject, $, moment, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, DatePickerWidget;

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
    }, function (_fengyuanchenDatepicker) {}],
    execute: function () {
      _export('DatePickerWidget', DatePickerWidget = (_dec = customElement('date-picker'), _dec2 = bindable('label'), _dec3 = bindable({
        name: 'dateValue',
        attribute: 'date-value',
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
        function DatePickerWidget(element) {
          _classCallCheck(this, DatePickerWidget);

          this.element = element;
        }

        DatePickerWidget.prototype.attached = function attached() {
          this.inputElement = this.element.querySelector('input');

          var self = this;

          $(this.inputElement).datepicker({
            format: 'dd/mm/yyyy',
            autoHide: true
          }).on('pick.datepicker', function (e) {
            self.dateValue = moment(e.date).format('DD/MM/YYYY');
          });

          if (this.dateValue === '' || this.dateValue == null || this.dateValue == undefined) {
            self.dateValue = moment().format('DD/MM/YYYY');
          }
        };

        return DatePickerWidget;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('DatePickerWidget', DatePickerWidget);
    }
  };
});