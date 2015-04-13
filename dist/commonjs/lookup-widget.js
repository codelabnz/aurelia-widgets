'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$bindable$customElement$TWO_WAY = require('aurelia-framework');

var _$ = require('jquery');

var _$2 = _interopRequireWildcard(_$);

var _select2 = require('select2');

var _select22 = _interopRequireWildcard(_select2);

var LookupWidget = (function () {
  var _instanceInitializers = {};

  function LookupWidget(element) {
    _classCallCheck(this, _LookupWidget);

    this.title = _instanceInitializers.title.call(this);
    this.placeholder = _instanceInitializers.placeholder.call(this);

    this.element = element;
  }

  var _LookupWidget = LookupWidget;

  _createDecoratedClass(_LookupWidget, [{
    key: 'title',
    decorators: [_inject$bindable$customElement$TWO_WAY.bindable],
    initializer: function () {},
    enumerable: true
  }, {
    key: 'placeholder',
    decorators: [_inject$bindable$customElement$TWO_WAY.bindable],
    initializer: function () {},
    enumerable: true
  }, {
    key: 'bind',
    value: function bind() {
      this.apply();
    }
  }, {
    key: 'apply',
    value: function apply() {
      var _this = this;

      setTimeout(function () {
        var self = _this;
        _$2['default'](_this.element).find('input').select2({
          initSelection: function initSelection(element, callback) {
            callback(self['interface'].setDefaultSelection());
          },
          placeholder: _this.placeholder,
          formatSelection: self['interface'].formatSelection,
          formatResult: self['interface'].formatItem,
          query: (function (_query) {
            function query(_x) {
              return _query.apply(this, arguments);
            }

            query.toString = function () {
              return _query.toString();
            };

            return query;
          })(function (query) {
            self['interface'].search(query.term).then(function (result) {
              query.callback({ results: result });
            });
          }),
          width: '100%'
        });

        _$2['default'](_this.element).find('input').select2('val', _this.value);
        _$2['default'](_this.element).find('input').on('change', function () {
          _this.value = _$2['default'](_this.element).find('input').select2('val');
        });
      }, 100);
    }
  }], null, _instanceInitializers);

  LookupWidget = _inject$bindable$customElement$TWO_WAY.bindable({
    name: 'value',
    attribute: 'value',
    defaultBindingMode: _inject$bindable$customElement$TWO_WAY.TWO_WAY
  })(LookupWidget) || LookupWidget;
  return LookupWidget;
})();

exports.LookupWidget = LookupWidget;