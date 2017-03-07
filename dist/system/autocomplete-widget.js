'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'devbridge-autocomplete'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, computedFrom, inject, $, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _desc, _value, _class2, _descriptor, AutoCompleteWidget;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
      computedFrom = _aureliaBinding.computedFrom;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_devbridgeAutocomplete) {}],
    execute: function () {
      _export('AutoCompleteWidget', AutoCompleteWidget = (_dec = inject(Element), _dec2 = customElement('autocomplete-widget'), _dec3 = bindable({
        name: 'size',
        attribute: 'size',
        defaultValue: 'medium',
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        name: 'disabled',
        attribute: 'disabled',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec5 = bindable({
        name: 'controller',
        attribute: 'controller',
        defaultBindingMode: bindingMode.twoWay
      }), _dec6 = bindable({
        name: 'selectedItem',
        attribute: 'selected-item',
        defaultBindingMode: bindingMode.twoWay
      }), _dec7 = bindable({
        name: 'placeholder',
        attribute: 'placeholder',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = bindable({
        name: 'customCSS',
        attribute: 'custom-css',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: ''
      }), _dec9 = bindable({
        name: 'inputCustomCSS',
        attribute: 'input-custom-css',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: ''
      }), _dec10 = bindable('title'), _dec11 = bindable('onenterpressed'), _dec12 = bindable('onblur'), _dec13 = bindable({
        name: 'autoSelectFirstResult',
        attribute: 'auto-select-first',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: true
      }), _dec14 = bindable({
        name: 'grabFocus',
        attribute: 'grab-focus',
        defaultValue: false
      }), _dec15 = bindable({
        name: 'labelCol',
        attribute: 'label-col',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: ''
      }), _dec16 = bindable({
        name: 'noform',
        attribute: 'no-form',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: false
      }), _dec17 = bindable({
        name: 'allowFreeText',
        attribute: 'allow-freetext',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: false
      }), _dec18 = bindable({
        name: 'textCol',
        attribute: 'text-col',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: ''
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = _dec12(_class = _dec13(_class = _dec14(_class = _dec15(_class = _dec16(_class = _dec17(_class = _dec18(_class = (_class2 = function () {
        function AutoCompleteWidget(element) {
          _classCallCheck(this, AutoCompleteWidget);

          _initDefineProp(this, 'onchange', _descriptor, this);

          this.element = element;
          this.showingSuggestions = false;
        }

        AutoCompleteWidget.prototype.attached = function attached() {
          this.input = this.element.querySelector('input');
          this.apply();
        };

        AutoCompleteWidget.prototype.unbind = function unbind() {
          $(this.input).autocomplete('dispose');
        };

        AutoCompleteWidget.prototype.apply = function apply() {
          this.input.value = this._formatSelectionValue(this.selectedItem);

          $(this.input).autocomplete({
            lookup: this.lookup.bind(this),
            onSelect: this.onSelect.bind(this),
            onInvalidateSelection: this.onInvalidateSelection.bind(this),
            beforeRender: this.suggestionsShown.bind(this),
            onHide: this.suggestionsHidden.bind(this),
            deferRequestBy: 200,
            autoSelectFirst: this.autoSelectFirstResult,
            forceFixPosition: true,
            width: "flex",
            formatResult: this.formatResult.bind(this)
          });
          $(this.input).data('autocomplete').selection = this.selectedItem;
        };

        AutoCompleteWidget.prototype.selectedItemChanged = function selectedItemChanged(newValue) {
          if (!this.input) return;

          var currentControlSelection = $(this.input).data('autocomplete').selection;

          if (currentControlSelection == null && newValue == null || currentControlSelection != null && currentControlSelection.hasOwnProperty('data') && currentControlSelection.data === newValue) {
            return;
          }

          if (newValue == null) {
            if (!this.allowFreeText) this.input.value = '';
            $(this.input).data('autocomplete').selection = null;
          } else {
            $(this.input).data('autocomplete').suggestions = [this.controller.createSuggestion(newValue)];
            $(this.input).data('autocomplete').onSelect(0);
          }
        };

        AutoCompleteWidget.prototype.formatResult = function formatResult(suggestion, currentValue) {
          if (this.controller.formatResult) return this.controller.formatResult(suggestion.data);else return this.controller.formatItem(suggestion.data);
        };

        AutoCompleteWidget.prototype.lookup = function lookup(query, done) {
          if (query == this._formatSelectionValue(this.selectedItem)) {
            done({
              suggestions: [this.controller.createSuggestion(this.selectedItem)]
            });
          } else {
            this.controller.search(query).then(function (results) {
              done(results);
            });
          }
        };

        AutoCompleteWidget.prototype.onSelect = function onSelect(suggestion) {
          this._setSelectedItem(suggestion.data);
        };

        AutoCompleteWidget.prototype.onInvalidateSelection = function onInvalidateSelection(param) {
          this._setSelectedItem(null);
        };

        AutoCompleteWidget.prototype.suggestionsShown = function suggestionsShown(container) {
          var _$$0$classList;

          this.showingSuggestions = true;

          if (this.customCSS !== '') (_$$0$classList = $(container)[0].classList).add.apply(_$$0$classList, this.customCSS.split(','));
        };

        AutoCompleteWidget.prototype.suggestionsHidden = function suggestionsHidden(container) {
          var _this = this;

          setTimeout(function () {
            _this.showingSuggestions = false;
          }, 250);
        };

        AutoCompleteWidget.prototype.keyUpListener = function keyUpListener(event) {
          if (event.which === 13 && !this.showingSuggestions) {
            if (this.onenterpressed) {
              this.onenterpressed();
              event.preventDefault();
            }
          }
        };

        AutoCompleteWidget.prototype.selectAll = function selectAll() {
          this.input.select();
        };

        AutoCompleteWidget.prototype.blurListener = function blurListener() {
          if (this.selectedItem == null && !this.allowFreeText) {
            this.input.value = '';
          } else if (this.selectedItem == null && this.allowFreeText && this.input.value != null && !this.showingSuggestions) {
            this._setSelectedItem(this.controller.createItemFromFreeText(this.input.value));
          }

          if (this.onblur && !this.showingSuggestions) {
            this.onblur();
          }
        };

        AutoCompleteWidget.prototype._formatSelectionValue = function _formatSelectionValue(selection) {
          var selectionValue = '';
          if (selection) {
            selectionValue = this.controller.formatItem(selection);
          }
          return selectionValue;
        };

        AutoCompleteWidget.prototype._setSelectedItem = function _setSelectedItem(data) {
          if (this.selectedItem === data) {
            return;
          }

          this.selectedItem = data;
          if (this.onchange) {
            this.onchange({ selected: this.selectedItem });
          }
        };

        return AutoCompleteWidget;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onchange', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('AutoCompleteWidget', AutoCompleteWidget);
    }
  };
});