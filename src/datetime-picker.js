import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@customElement('datetime-picker')
@bindable('label')
@bindable('onenterpressed')
@bindable('onblur')
@bindable({
  name:'dateTimeValue',
  attribute:'datetime-value',
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
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'defaultToToday',
  attribute: 'defaultoday',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@inject(Element)
export class DateTimePickerWidget {

  constructor(element) {
    this.element = element;
    this.dt = '';
  }

  attached() {
    this.inputElement = this.element.querySelector('input');

    var self = this;

    window.jqueryAurelia = jQuery;
    $(this.inputElement).datetimepicker({
      format: 'DD/MM/YYYY HH:mm',
      stepping: 30
    }).on('dp.change', function(e) {
      if (e.date == '' || e.date == null || e.date == undefined) {
        self.dateTimeValue = '';
        self.dt = '';
      }
      else {
        self.dateTimeValue = moment(e.date).format();
        self.dt = moment(e.date).format('DD/MM/YYYY HH:mm');
      }
    });

    //default today's date if there is no binding value
    if (this.dateTimeValue === '' || this.dateTimeValue == null || this.dateTimeValue == undefined) {
      if (this.defaultToToday) {
        self.dateTimeValue = moment().format();
        self.dt = moment(self.dateTimeValue).format('DD/MM/YYYY HH:mm');
      }
    }
    //otherwise there is a value, bind to the
    else {
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

}