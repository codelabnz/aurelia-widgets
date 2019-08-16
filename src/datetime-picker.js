import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';
import moment from 'moment';
import 'eonasdan-bootstrap-datetimepicker';

@customElement('datetime-picker')
@bindable('label')
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
@inject(Element)
export class DateTimePickerWidget {

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.inputElement = this.element.querySelector('input');

    var self = this;

    $(this.inputElement).datetimepicker({
      format: 'DD/MM/YYYY HH:ss'
    }).on('dp.change', function(e) {
      self.dateTimeValue = moment(e.date).format("DD/MM/YYYY HH:ss");
    });

    if (this.dateTimeValue === '' || this.dateTimeValue == null || this.dateTimeValue == undefined) {
      self.dateTimeValue = moment().format('DD/MM/YYYY HH:ss');
    }
  }

}