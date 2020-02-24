var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import 'eonasdan-bootstrap-datetimepicker';

export let DateTimePickerWidget = (_dec = customElement('datetime-picker'), _dec2 = bindable('label'), _dec3 = bindable('onenterpressed'), _dec4 = bindable('onblur'), _dec5 = bindable({
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
}), _dec10 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = class DateTimePickerWidget {

  constructor(element) {
    this.element = element;
    this.dt = '';
  }

  attached() {
    this.inputElement = this.element.querySelector('input');

    var self = this;

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
      self.dateTimeValue = moment().format();
      self.dt = moment(self.dateTimeValue).format('DD/MM/YYYY HH:mm');
    } else {
        self.dt = moment(self.dateTimeValue).format('DD/MM/YYYY HH:mm');
      }
  }

  keyUpListener(event) {
    if (event.which === 13) {
      if (this.onenterpressed) {
        this.onenterpressed();
        event.preventDefault();
      }
    }
  }

  blurListener() {

    if (this.onblur) {
      this.onblur();
    }
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);