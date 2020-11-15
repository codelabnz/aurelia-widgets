import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import '@codelabnz/datepicker/dist/datepicker.js';
import '@codelabnz/datepicker/dist/datepicker.css';

@customElement('date-picker')
@bindable('label')
@bindable({
  name:'dateValue',
  attribute:'date-value',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'textCol',
  attributeName: 'text-col',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'labelCol',
  attributeName: 'label-col',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'noform',
  attribute: 'no-form',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: false
})
@inject(Element)
export class DatePickerWidget {
  
  constructor(element) {
    this.element = element;
  }

  attached() {
    this.inputElement = this.element.querySelector('input');

    var self = this;

    $(this.inputElement).datepicker({
      format: 'dd/mm/yyyy',
      autoHide: true
    }).on('pick.datepicker', function(e) {
       self.dateValue = moment(e.date).format('DD/MM/YYYY');
    });

    if (this.dateValue === '' || this.dateValue == null || this.dateValue == undefined) {
      self.dateValue = "";
    }
  }
 
}