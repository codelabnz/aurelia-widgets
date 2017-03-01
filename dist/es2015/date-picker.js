var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import '@fengyuanchen/datepicker';

export let DatePickerWidget = (_dec = customElement('date-picker'), _dec2 = bindable('label'), _dec3 = bindable({
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
}), _dec7 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class DatePickerWidget {

  constructor(element) {
    this.element = element;
  }

  attached() {
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
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);