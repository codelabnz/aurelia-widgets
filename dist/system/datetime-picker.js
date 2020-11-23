'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'moment', 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css', 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, inject, $, moment, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, DateTimePickerWidget;

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
    }, function (_eonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerMinCss) {}, function (_eonasdanBootstrapDatetimepickerBuildJsBootstrapDatetimepickerMinJs) {}],
    execute: function () {
      _export('DateTimePickerWidget', DateTimePickerWidget = (_dec = customElement('datetime-picker'), _dec2 = bindable('label'), _dec3 = bindable('onenterpressed'), _dec4 = bindable('onblur'), _dec5 = bindable({
        name: 'dateTimeValue',
        attribute: 'datetime-value',
        defaultBindingMode: bindingMode.twoWay
      }), _dec6 = bindable({
        name: 'textCol',
        attributeName: 'text-col',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneTime
      }), _dec7 = bindable({
        name: 'labelCol',
        attributeName: 'label-col',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = bindable({
        name: 'noform',
        attribute: 'no-form',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: false
      }), _dec9 = bindable({
        name: 'disabled',
        attribute: 'disabled',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec10 = bindable({
        name: 'defaultToToday',
        attribute: 'defaultoday',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec11 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = function () {
        function DateTimePickerWidget(element) {
          _classCallCheck(this, DateTimePickerWidget);

          this.element = element;
          this.dt = '';
        }

        DateTimePickerWidget.prototype.attached = function attached() {
          this.inputElement = this.element.querySelector('input');

          var self = this;

          window.jqueryAurelia = jQuery;
          $(this.inputElement).datetimepicker({
            format: 'DD/MM/YYYY HH:mm',
            stepping: 30
          }).on('dp.change', function (e) {
            if (e.date == '' || e.date == null || e.date == undefined) {
              self.dateTimeValue = '';
              self.dt = '';
            } else {
              self.dateTimeValue = moment(e.date).format();
              self.dt = moment(e.date).format('DD/MM/YYYY HH:mm');
            }
          });

          if (this.dateTimeValue === '' || this.dateTimeValue == null || this.dateTimeValue == undefined) {
            if (this.defaultToToday) {
              self.dateTimeValue = moment().format();
              self.dt = moment(self.dateTimeValue).format('DD/MM/YYYY HH:mm');
            }
          } else {
              self.dt = moment(self.dateTimeValue).format('DD/MM/YYYY HH:mm');
            }
        };

        DateTimePickerWidget.prototype.keyUpListener = function keyUpListener(event) {
          if (event.which === 13) {
            if (this.onenterpressed) {
              this.onenterpressed();
              event.preventDefault();
            }
          }
        };

        DateTimePickerWidget.prototype.blurListener = function blurListener() {

          if (this.onblur) {
            this.onblur();
          }
        };

        return DateTimePickerWidget;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('DateTimePickerWidget', DateTimePickerWidget);
    }
  };
});