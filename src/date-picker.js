import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import '@fengyuanchen/datepicker';

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
@inject(Element)
export class DatePickerWidget {
  
  constructor(element) {
    this.element = element;
  }

  bind() {
    this.inputElement = this.element.querySelector('input');
  }

  attached() {
    
    $(this.inputElement).datepicker({
      format: 'dd/mm/yyyy',
      autoHide: true
    }).on('pick.datepicker', function(e) {
       this.dateValue = moment(e.date).format('DD/MM/YYYY');
    });
  }

  unbind() {
   
  }
  
}