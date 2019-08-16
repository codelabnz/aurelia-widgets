var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import 'eonasdan-bootstrap-datetimepicker';

export let DateTimePickerWidget = (_dec = customElement('datetime-picker'), _dec2 = bindable('label'), _dec3 = bindable({
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
}), _dec7 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class DateTimePickerWidget {

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.inputElement = this.element.querySelector('input');

    var self = this;

    $(this.inputElement).datetimepicker({
      format: 'DD/MM/YYYY HH:ss'
    }).on('dp.change', function (e) {
      self.dateTimeValue = moment(e.date).format();
    });

    if (this.dateTimeValue === '' || this.dateTimeValue == null || this.dateTimeValue == undefined) {
      self.dateTimeValue = moment().format();
    }
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);