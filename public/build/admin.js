(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _alerts_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alerts/notify */ "./assets/js/alerts/notify.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










/**
 * --------------------------------------------------------------------------
 * admin.js - similar to Shopify theme.js
 *
 * Dependencies: lodash.js (Lodash Core)
 * --------------------------------------------------------------------------
 */
;

window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = []; // $(document)
  //     .on('stulipan:section:load', this._onSectionLoad.bind(this))
  //     .on('stulipan:section:unload', this._onSectionUnload.bind(this))
  //     .on('stulipan:section:select', this._onSelect.bind(this))
  //     .on('stulipan:section:deselect', this._onDeselect.bind(this))
  //     .on('stulipan:block:select', this._onBlockSelect.bind(this))
  //     .on('stulipan:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function _createInstance(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');
    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      // E.g.: new AddToCart(container), because constructor here received this value: theme.CartSection
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },
  // _onSectionLoad: function(evt) {
  //   var container = $('[data-section-id]', evt.target)[0];
  //   if (container) {
  //     this._createInstance(container);
  //   }
  // },
  //
  // _onSectionUnload: function(evt) {
  //   this.instances = _.filter(this.instances, function(instance) {
  //     var isEventInstance = instance.id === evt.detail.sectionId;
  //
  //     if (isEventInstance) {
  //       if (_.isFunction(instance.onUnload)) {
  //         instance.onUnload(evt);
  //       }
  //     }
  //
  //     return !isEventInstance;
  //   });
  // },
  //
  // _onSelect: function(evt) {
  //   // eslint-disable-next-line no-shadow
  //   var instance = _.find(this.instances, function(instance) {
  //     return instance.id === evt.detail.sectionId;
  //   });
  //
  //   if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
  //     instance.onSelect(evt);
  //   }
  // },
  //
  // _onDeselect: function(evt) {
  //   // eslint-disable-next-line no-shadow
  //   var instance = _.find(this.instances, function(instance) {
  //     return instance.id === evt.detail.sectionId;
  //   });
  //
  //   if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
  //     instance.onDeselect(evt);
  //   }
  // },
  //
  // _onBlockSelect: function(evt) {
  //   // eslint-disable-next-line no-shadow
  //   var instance = _.find(this.instances, function(instance) {
  //     return instance.id === evt.detail.sectionId;
  //   });
  //
  //   if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
  //     instance.onBlockSelect(evt);
  //   }
  // },
  //
  // _onBlockDeselect: function(evt) {
  //   // eslint-disable-next-line no-shadow
  //   var instance = _.find(this.instances, function(instance) {
  //     return instance.id === evt.detail.sectionId;
  //   });
  //
  //   if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
  //     instance.onBlockDeselect(evt);
  //   }
  // },
  register: function register(type, constructor) {
    // 'constructor' is a function
    this.constructors[type] = constructor;
    $('[data-section-type=' + type + ']').each(function (index, element) {
      this._createInstance(element, constructor);
    }.bind(this));
  }
});
theme.proceed = false;

theme.LoadingOverlay = function () {
  function show(el, eventText) {
    el.addClass('loading-spinner-show');
    theme.proceed = true;
    el.trigger(eventText);
  }

  function hide(el) {
    el.removeClass('loading-spinner-show');
    theme.proceed = false;
  }

  return {
    show: show,
    hide: hide
  };
}();

var FormValidation = /*#__PURE__*/function () {
  function FormValidation(formWrapper, constraints) {
    _classCallCheck(this, FormValidation);

    this.formWrapper = formWrapper;
    this.constraints = constraints;
    this.isWithError = false;
    this.formElements = 'input:not([type=hidden]), textarea, select'; // Listen for the event.

    document.addEventListener('initFormValidation', function (e) {
      this.initFormValidation();
    }.bind(this), false);
    this.initFormValidation();
  }

  _createClass(FormValidation, [{
    key: "initFormValidation",
    value: function initFormValidation() {
      var form = document.querySelector(this.formWrapper);
      var inputs = form.querySelectorAll(this.formElements);

      for (var i = 0; i < inputs.length; ++i) {
        inputs.item(i).addEventListener('change', function (e) {
          var errors = validate(form, this.constraints, {
            fullMessages: false
          }) || {};
          this.showErrorsForInput(e.currentTarget, errors[e.currentTarget.name]);
          !Object.keys(errors).length && (this.isWithError = false);
        }.bind(this));
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var form = document.querySelector(this.formWrapper);
      var inputs = form.querySelectorAll(this.formElements);

      for (var i = 0; i < inputs.length; ++i) {
        var errors = validate(form, this.constraints, {
          fullMessages: false
        }) || {};
        this.showErrorsForInput(inputs.item(i), errors[inputs.item(i).name]);
        !Object.keys(errors).length && (this.isWithError = false);
      }
    }
  }, {
    key: "showErrorsForInput",
    value: function showErrorsForInput(input, errors) {
      var messages = this.closestParent(input, 'form-group').querySelector('.invalid-feedback'); // Find where the error messages will be insert into

      this.resetInput(input); // First we remove any old messages and resets the classes

      if (errors) {
        input.classList.add("is-invalid"); // we first mark the input has having errors

        errors.forEach(function (error) {
          // then we append all the errors
          this.addError(messages, error);
        }.bind(this));
      } else {
        input.classList.add("is-valid"); // otherwise we simply mark it as success
      }
    } // Recursively finds the closest parent that has the specified class

  }, {
    key: "closestParent",
    value: function closestParent(child, className) {
      if (!child || child == document) {
        return null;
      }

      if (child.classList.contains(className)) {
        return child;
      } else {
        return this.closestParent(child.parentNode, className);
      }
    }
  }, {
    key: "resetInput",
    value: function resetInput(input) {
      // Remove the success and error classes
      input.classList.remove("is-invalid");
      input.classList.remove("is-valid"); // and remove any old messages

      this.closestParent(input, 'form-group').querySelectorAll(".invalid-feedback").forEach(function (el) {
        el.innerHTML = '';
      });
    }
  }, {
    key: "addError",
    value: function addError(messages, error) {
      var block = document.createElement("p");
      block.classList.add("help-block");
      block.classList.add("error");
      block.innerText = error;
      messages.appendChild(block);
      this.isWithError || (this.isWithError = true); /////////////////////
    }
  }, {
    key: "hasError",
    value: function hasError() {
      return this.isWithError;
    }
  }]);

  return FormValidation;
}();

theme.Order = function () {
  var selectors = {
    BODY: 'body',
    ALERT: '.JS--Wrapper-alert',
    ORDER_WRAPPER: '.JS--Wrapper-orderDetail',
    RECIPIENT_WRAPPER: '.JS--Wrapper-recipient',
    RECIPIENT_BODY: '.JS--Wrapper-recipientBody',
    RECIPIENT_FORM: '.JS--Wrapper-recipientForm',
    RECIPIENT_SUBMIT_BUTTON: '.JS--Button-submitRecipient',
    SENDER_WRAPPER: '.JS--Wrapper-sender',
    SENDER_BODY: '.JS--Wrapper-senderBody',
    SENDER_FORM: '.JS--Wrapper-senderForm',
    SENDER_SUBMIT_BUTTON: '.JS--Button-submitSender',
    ORDER_CONFIRMATION_SEND_BUTTON: '.JS--Button-sendOrderConfirmation',
    ORDER_CONFIRMATION_BODY: '.JS--Wrapper-orderConfirmationBody',
    SHIPPING_CONFIRMATION_SEND_BUTTON: '.JS--Button-sendShippingConfirmation',
    SHIPPING_CONFIRMATION_BODY: '.JS--Wrapper-shippingConfirmationBody',
    MARK_AS_FULFILLED_BUTTON: '.JS--Button-markAsFulfilled',
    ORDER_STATUS_WRAPPER: '.JS--Wrapper-orderStatus',
    ORDER_STATUS_BODY: '.JS--Wrapper-orderStatusBody',
    MARK_AS_PAID_BUTTON: '.JS--Button-markAsPaid',
    PAYMENT_STATUS_WRAPPER: '.JS--Wrapper-paymentStatus',
    PAYMENT_STATUS_BODY: '.JS--Wrapper-paymentStatusBody',
    // PAYMENT_STATUS_FORM: '.JS--Wrapper-paymentStatusForm',
    // PAYMENT_STATUS_SUBMIT_BUTTON: '.JS--Button-submitPaymentStatus',
    CANCEL_ORDER_BUTTON: '.JS--Button-cancelOrder',
    CANCEL_ORDER_WRAPPER: '.JS--Wrapper-cancelOrder',
    CANCEL_ORDER_BODY: '.JS--Wrapper-cancelOrderBody',
    COMMENT_WRAPPER: '.JS--Wrapper-comment',
    COMMENT_BODY: '.JS--Wrapper-commentBody',
    COMMENT_FORM: '.JS--Wrapper-commentForm',
    COMMENT_SUBMIT_BUTTON: '.JS--Button-submitComment'
  };
  var scrollUp = {
    block: 'start',
    behavior: 'smooth'
  };
  var errors = {
    recipient: false,
    sender: false,
    comment: false,
    paymentStatus: false
  };
  var ajaxLoading = false;

  function Order(container) {
    this.$container = $(container);
    this.$container.on('click', selectors.RECIPIENT_SUBMIT_BUTTON, this.submitRecipientForm.bind(this)).on('click', selectors.SENDER_SUBMIT_BUTTON, this.submitSenderForm.bind(this)).on('click', selectors.COMMENT_SUBMIT_BUTTON, this.submitCommentForm.bind(this)).on('click', selectors.ORDER_CONFIRMATION_SEND_BUTTON, this.sendOrderConfirmation.bind(this)).on('click', selectors.SHIPPING_CONFIRMATION_SEND_BUTTON, this.sendShippingConfirmation.bind(this)).on('click', selectors.MARK_AS_FULFILLED_BUTTON, this.markAsFulfilled.bind(this)).on('click', selectors.MARK_AS_PAID_BUTTON, this.markAsPaid.bind(this)).on('click', selectors.CANCEL_ORDER_BUTTON, this.cancelOrder.bind(this)).on('click change', selectors.ORDER_WRAPPER, this.preventInteraction.bind(this));
    $(document).ajaxStart(function () {
      ajaxLoading = true;
      document.dispatchEvent(new Event('disposeTooltip'));
    });
    $(document).ajaxStop(function () {
      ajaxLoading = false;
      document.dispatchEvent(new Event('initFloatingInput'));
      document.dispatchEvent(new Event('initFormValidation'));
      document.dispatchEvent(new Event('initTooltip'));
    });

    if ($(selectors.RECIPIENT_FORM).length) {
      this.recipientValidator = new FormValidation(selectors.RECIPIENT_FORM, recipientConstraints);
    }

    if ($(selectors.SENDER_FORM).length) {
      this.senderValidator = new FormValidation(selectors.SENDER_FORM, senderConstraints);
    }

    if ($(selectors.COMMENT_FORM).length) {
      this.commentValidator = new FormValidation(selectors.COMMENT_FORM, commentConstraints);
    } // if ($(selectors.SHIPPING_FORM).length) {
    //   this.shippingValidator = new FormValidation(selectors.SHIPPING_FORM, shippingConstraints);
    // }
    // if ($(selectors.DELIVERY_DATE_FORM).length) {
    //   this.deliveryDateValidator = new FormValidation(selectors.DELIVERY_DATE_FORM, deliveryDateConstraints);
    // }
    // if ($(selectors.PAYMENT_FORM).length) {
    //   this.paymentValidator = new FormValidation(selectors.PAYMENT_FORM, paymentConstraints);
    // }
    // if ($(selectors.ACCEPT_TERMS_FORM).length) {
    //   this.acceptTermsValidator = new FormValidation(selectors.ACCEPT_TERMS_FORM, acceptTermsConstraints);
    // }

  } // Order.prototype = _.assignIn({}, Order.prototype, {


  $.extend(Order.prototype, {
    _disableFormElements: function _disableFormElements() {
      // console.log('disable');
      $(selectors.BODY).find("input, select, form").prop('readOnly', true);
    },
    preventInteraction: function preventInteraction(e) {
      if (ajaxLoading) {
        e.preventDefault();
      }
    },
    submitRecipientForm: function submitRecipientForm(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (typeof this.recipientValidator !== 'undefined') {
        this.recipientValidator.validateForm();
        errors.recipient = this.recipientValidator.hasError();
      }

      if (errors.recipient) {
        // $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
        return;
      }

      if (!errors.recipient) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $recipientForm = $(selectors.RECIPIENT_FORM);
        var $recipientBody = $(selectors.RECIPIENT_BODY);
        var recipientForm = null;
        var a1 = $.ajax({
          url: $recipientForm.attr('action'),
          method: 'POST',
          data: $recipientForm.serialize(),
          context: this
        });
        a1.done(function (data) {// $recipientForm.replaceWith(data);
        }).fail(function (jqXHR) {
          recipientForm = jqXHR.responseText;
          errors.recipient = true;
          $recipientForm.replaceWith(recipientForm);
        }).always(function () {
          document.dispatchEvent(new Event('initFloatingInput'));
          document.dispatchEvent(new Event('initFormValidation'));
          document.dispatchEvent(new Event('initTooltip'));
        }.bind(this));
        $.when(a1).fail(function () {
          theme.LoadingOverlay.hide($el);
          setTimeout(function () {
            if (errors.recipient) {// $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
            }
          }, 500);
        }.bind(this));
        $.when(a1).done(function () {
          $recipientBody.closest('.modal').modal('hide');
          window.location.reload(true);
        }.bind(this));
      }
    },
    submitSenderForm: function submitSenderForm(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (typeof this.senderValidator !== 'undefined') {
        this.senderValidator.validateForm();
        errors.sender = this.senderValidator.hasError();
      }

      if (errors.sender) {
        // $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
        return;
      }

      if (!errors.sender) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $senderForm = $(selectors.SENDER_FORM);
        var $senderBody = $(selectors.SENDER_BODY);
        var senderForm = null;
        var a1 = $.ajax({
          url: $senderForm.attr('action'),
          method: 'POST',
          data: $senderForm.serialize(),
          context: this
        });
        a1.done(function (data) {// $recipientForm.replaceWith(data);
        }).fail(function (jqXHR) {
          senderForm = jqXHR.responseText;
          errors.sender = true;
          $senderForm.replaceWith(senderForm);
        }).always(function () {
          document.dispatchEvent(new Event('initFloatingInput'));
          document.dispatchEvent(new Event('initFormValidation'));
          document.dispatchEvent(new Event('initTooltip'));
        }.bind(this));
        $.when(a1).fail(function () {
          theme.LoadingOverlay.hide($el);
          setTimeout(function () {
            if (errors.sender) {// $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
            }
          }, 500);
        }.bind(this));
        $.when(a1).done(function () {
          $senderBody.closest('.modal').modal('hide');
          window.location.reload(true);
        }.bind(this));
      }
    },
    sendOrderConfirmation: function sendOrderConfirmation(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (true) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var url = $el.data('url');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $orderConfirmationBody = $(selectors.ORDER_CONFIRMATION_BODY);
        $.ajax({
          url: url,
          method: 'POST',
          context: this
        }).done(function (data) {
          $orderConfirmationBody.closest('.modal').modal('hide');
          window.location.reload(); // Notify.success('Email sikeresen elküldve!');
        }).fail(function (jqXHR) {
          var data = JSON.parse(jqXHR.responseText);
          _alerts_notify__WEBPACK_IMPORTED_MODULE_8__.default.error(data.error);
        }).always(function () {
          if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            theme.LoadingOverlay.hide($el);
          }
        });
      }
    },
    sendShippingConfirmation: function sendShippingConfirmation(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (true) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var url = $el.data('url');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $shippingConfirmationBody = $(selectors.SHIPPING_CONFIRMATION_BODY);
        $.ajax({
          url: url,
          method: 'POST',
          context: this
        }).done(function (data) {
          $shippingConfirmationBody.closest('.modal').modal('hide');
          window.location.reload();
        }).fail(function (jqXHR) {
          var data = JSON.parse(jqXHR.responseText);
          _alerts_notify__WEBPACK_IMPORTED_MODULE_8__.default.error(data.error);
        }).always(function () {
          if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            theme.LoadingOverlay.hide($el);
          }
        });
      }
    },
    markAsFulfilled: function markAsFulfilled(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (true) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var url = $el.data('url');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $orderStatusBody = $(selectors.ORDER_STATUS_BODY);
        var isSendEmail = $orderStatusBody.find('#sendShippingConfirmation').prop('checked');

        if (!isSendEmail) {
          url += '?' + $.param({
            noShippingConfirmation: 1
          });
        }

        $.ajax({
          url: url,
          method: 'POST',
          context: this
        }).done(function (data) {
          $orderStatusBody.closest('.modal').modal('hide');
          window.location.reload();
        }).fail(function (jqXHR) {
          var data = JSON.parse(jqXHR.responseText);
          _alerts_notify__WEBPACK_IMPORTED_MODULE_8__.default.error(data.error);
        }).always(function () {
          if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            theme.LoadingOverlay.hide($el);
          } // theme.LoadingOverlay.hide($el);

        });
      }
    },
    markAsPaid: function markAsPaid(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (true) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var url = $el.data('url');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $paymentStatusBody = $(selectors.PAYMENT_STATUS_BODY);
        $.ajax({
          url: url,
          method: 'POST',
          context: this
        }).done(function (data) {
          $paymentStatusBody.closest('.modal').modal('hide');
          window.location.reload();
        }).fail(function (jqXHR) {
          var data = JSON.parse(jqXHR.responseText);
          _alerts_notify__WEBPACK_IMPORTED_MODULE_8__.default.error(data.error);
        }).always(function () {
          if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            theme.LoadingOverlay.hide($el);
          } // theme.LoadingOverlay.hide($el);

        });
      }
    },
    cancelOrder: function cancelOrder(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (true) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var url = $el.data('url');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $cancelOrderBody = $(selectors.CANCEL_ORDER_BODY);
        $.ajax({
          url: url,
          method: 'POST',
          context: this
        }).done(function (data) {
          $cancelOrderBody.closest('.modal').modal('hide');
          window.location.reload();
        }).fail(function (jqXHR) {
          var data = JSON.parse(jqXHR.responseText);
          _alerts_notify__WEBPACK_IMPORTED_MODULE_8__.default.error(data.error);
        }).always(function () {
          if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            theme.LoadingOverlay.hide($el);
            $cancelOrderBody.closest('.modal').modal('hide');
          }
        });
      }
    },
    submitCommentForm: function submitCommentForm(e) {
      e.preventDefault();
      if (ajaxLoading) return;

      if (typeof this.commentValidator !== 'undefined') {
        this.commentValidator.validateForm();
        errors.comment = this.commentValidator.hasError();
      }

      if (errors.comment) {
        // $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
        return;
      }

      if (!errors.comment) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $commentForm = $(selectors.COMMENT_FORM);
        var $commentBody = $(selectors.COMMENT_BODY);
        var commentForm = null;
        var a1 = $.ajax({
          url: $commentForm.attr('action'),
          method: 'POST',
          data: $commentForm.serialize(),
          context: this
        });
        a1.done(function (data) {// $recipientForm.replaceWith(data);
        }).fail(function (jqXHR) {
          commentForm = jqXHR.responseText;
          errors.comment = true;
          $commentForm.replaceWith(commentForm);
        }).always(function () {
          document.dispatchEvent(new Event('initFloatingInput'));
          document.dispatchEvent(new Event('initFormValidation'));
          document.dispatchEvent(new Event('initTooltip'));
        }.bind(this));
        $.when(a1).fail(function () {
          theme.LoadingOverlay.hide($el);
          setTimeout(function () {
            if (errors.comment) {// $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
            }
          }, 500);
        }.bind(this));
        $.when(a1).done(function () {
          window.location.reload(true);
        }.bind(this));
      }
    },
    submitPaymentStatusForm: function submitPaymentStatusForm(e) {
      e.preventDefault();
      if (ajaxLoading) return; // if (typeof this.senderValidator !== 'undefined') {
      //   this.senderValidator.validateForm();
      //   errors.sender = this.senderValidator.hasError();
      // }

      if (errors.paymentStatus) {
        // $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
        return;
      }

      if (!errors.paymentStatus) {
        this._disableFormElements();

        var $el = $(e.currentTarget);

        if (theme.proceed) {
          theme.proceed = false;
          return;
        }

        theme.LoadingOverlay.show($el, 'click');
        var url = $el.data('url');
        var $wrapper = $(selectors.ORDER_WRAPPER);
        var $paymentStatusForm = $(selectors.PAYMENT_STATUS_FORM);
        var $paymentStatusBody = $(selectors.PAYMENT_STATUS_BODY);
        var paymentStatusForm = null;
        var a1 = $.ajax({
          url: $paymentStatusForm.attr('action'),
          method: 'POST',
          data: $paymentStatusForm.serialize(),
          context: this
        });
        a1.done(function (data) {// $recipientForm.replaceWith(data);
        }).fail(function (jqXHR) {
          paymentStatusForm = jqXHR.responseText;
          errors.paymentStatus = true;
          $paymentStatusForm.replaceWith(paymentStatusForm);
        }).always(function () {
          document.dispatchEvent(new Event('initFloatingInput'));
          document.dispatchEvent(new Event('initFormValidation'));
          document.dispatchEvent(new Event('initTooltip'));
        }.bind(this));
        $.when(a1).fail(function () {
          theme.LoadingOverlay.hide($el);
          setTimeout(function () {
            if (errors.paymentStatus) {// $(selectors.ORDER_WRAPPER).find('.invalid-feedback:not(:empty)').closest('form')[0].scrollIntoView(scrollUp);
            }
          }, 500);
        }.bind(this));
        $.when(a1).done(function () {
          $paymentStatusBody.closest('.modal').modal('hide');
          window.location.reload(true);
        }.bind(this));
      }
    }
  });
  return Order;
}();

theme.Analytics = function () {
  var selectors = {
    BODY: 'body',
    ALERT: '.JS--Wrapper-alert',
    ANALYTICS_WRAPPER: '.JS--Wrapper-analytics',
    EXPORT_REPORT_DOWNLOAD_BUTTON: '.JS--Button-downloadExportReport',
    EXPORT_REPORT_BODY: '.JS--Wrapper-exportReportBody'
  };
  var scrollUp = {
    block: 'start',
    behavior: 'smooth'
  };
  var ajaxLoading = false;

  function Analytics(container) {
    this.$container = $(container);
    this.$container.on('click', selectors.EXPORT_REPORT_DOWNLOAD_BUTTON, this.downloadReport.bind(this)).on('click change', selectors.ANALYTICS_WRAPPER, this.preventInteraction.bind(this));
    $(document).ajaxStart(function () {
      ajaxLoading = true;
      document.dispatchEvent(new Event('disposeTooltip'));
    });
    $(document).ajaxStop(function () {
      ajaxLoading = false; // document.dispatchEvent(new Event('initFloatingInput'));
      // document.dispatchEvent(new Event('initFormValidation'));

      document.dispatchEvent(new Event('initTooltip'));
    });
  } // Analytics.prototype = _.assignIn({}, Analytics.prototype, {


  $.extend(Analytics.prototype, {
    _disableFormElements: function _disableFormElements() {
      $(selectors.BODY).find("input, select, form").prop('readOnly', true);
    },
    preventInteraction: function preventInteraction(e) {
      if (ajaxLoading) {
        e.preventDefault();
      }
    },
    downloadReport: function downloadReport(e) {
      e.preventDefault();
      if (ajaxLoading) return;
      var $el = $(e.currentTarget);
      var url = $el.data('url');
      var $exportReportBody = $(selectors.EXPORT_REPORT_BODY);
      window.location.href = url;
      $exportReportBody.closest('.modal').modal('hide');
    }
  });
  return Analytics;
}();

$(document).ready(function () {
  var sections = new theme.Sections();
  sections.register('orderDetail-page', theme.Order);
  sections.register('sales-over-time', theme.Analytics);
});

theme.init = function () {
  document.addEventListener('initTooltip', function () {
    $('[data-toggle="tooltip"]').tooltip();
  }, false);
  document.addEventListener('disposeTooltip', function () {
    $('[data-toggle="tooltip"]').tooltip('dispose');
  }, false);
  document.dispatchEvent(new Event('initTooltip'));
};

$(theme.init);

/***/ }),

/***/ "./assets/js/alerts/notify.js":
/*!************************************!*\
  !*** ./assets/js/alerts/notify.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2_src_sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/src/sweetalert2 */ "./node_modules/sweetalert2/src/sweetalert2.js");


var Notify = function () {
  var swal = sweetalert2_src_sweetalert2__WEBPACK_IMPORTED_MODULE_0__.default.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: false,
    // padding: '1rem',
    showCloseButton: true,
    buttonsStyling: false
  });

  function success(message) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var alert = swal.mixin({
      customClass: {
        popup: '--alert-success',
        content: '--alert-content'
      }
    });
    alert.fire({
      icon: icon ? 'success' : '',
      title: message
    });
  }

  function error(message) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var alert = swal.mixin({
      customClass: {
        popup: '--alert-danger',
        content: '--alert-content'
      }
    });
    alert.fire({
      icon: icon ? 'error' : '',
      title: message
    });
  }

  function warning(message) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var alert = swal.mixin({
      customClass: {
        popup: '--alert-warning',
        content: '--alert-content'
      }
    });
    alert.fire({
      icon: icon ? 'warning' : '',
      title: message
    });
  }

  function info(message) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var alert = swal.mixin({
      customClass: {
        popup: '--alert-info',
        content: '--alert-content'
      }
    });
    alert.fire({
      icon: icon ? 'info' : '',
      title: message
    });
  }

  return {
    success: success,
    error: error,
    warning: warning,
    info: info
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notify);

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/SweetAlert.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/SweetAlert.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _staticMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods.js */ "./node_modules/sweetalert2/src/staticMethods.js");
/* harmony import */ var _instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods.js */ "./node_modules/sweetalert2/src/instanceMethods.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");






let currentInstance

class SweetAlert {
  constructor (...args) {
    // Prevent run in Node env
    if (typeof window === 'undefined') {
      return
    }

    // Check for the existence of Promise
    if (typeof Promise === 'undefined') {
      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.error)('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)')
    }

    currentInstance = this

    const outerParams = Object.freeze(this.constructor.argsToParams(args))

    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    })

    const promise = this._main(this.params)
    _privateProps_js__WEBPACK_IMPORTED_MODULE_4__.default.promise.set(this, promise)
  }

  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  then (onFulfilled) {
    const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__.default.promise.get(this)
    return promise.then(onFulfilled)
  }

  finally (onFinally) {
    const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__.default.promise.get(this)
    return promise.finally(onFinally)
  }
}

// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, _instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__)

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, _staticMethods_js__WEBPACK_IMPORTED_MODULE_2__)

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(_instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args)
    }
  }
})

SweetAlert.DismissReason = _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason

SweetAlert.version = '10.15.7'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SweetAlert);


/***/ }),

/***/ "./node_modules/sweetalert2/src/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/sweetalert2/src/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESTORE_FOCUS_TIMEOUT": () => (/* binding */ RESTORE_FOCUS_TIMEOUT)
/* harmony export */ });
const RESTORE_FOCUS_TIMEOUT = 100


/***/ }),

/***/ "./node_modules/sweetalert2/src/globalState.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/globalState.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "restoreActiveElement": () => (/* binding */ restoreActiveElement)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/sweetalert2/src/constants.js");


const globalState = {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalState);

const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus()
    globalState.previousActiveElement = null
  } else if (document.body) {
    document.body.focus()
  }
}

// Restore previous active (focused) element
const restoreActiveElement = () => {
  return new Promise(resolve => {
    const x = window.scrollX
    const y = window.scrollY
    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement()
      resolve()
    }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.RESTORE_FOCUS_TIMEOUT) // issues/900
    /* istanbul ignore if */
    if (typeof x !== 'undefined' && typeof y !== 'undefined') { // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableLoading": () => (/* reexport safe */ _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__.disableLoading),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__.hideLoading),
/* harmony export */   "getInput": () => (/* reexport safe */ _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__.getInput),
/* harmony export */   "close": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.close),
/* harmony export */   "closeModal": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closeModal),
/* harmony export */   "closePopup": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closePopup),
/* harmony export */   "closeToast": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closeToast),
/* harmony export */   "disableButtons": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.disableButtons),
/* harmony export */   "disableInput": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.disableInput),
/* harmony export */   "enableButtons": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.enableButtons),
/* harmony export */   "enableInput": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.enableInput),
/* harmony export */   "resetValidationMessage": () => (/* reexport safe */ _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__.resetValidationMessage),
/* harmony export */   "showValidationMessage": () => (/* reexport safe */ _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__.showValidationMessage),
/* harmony export */   "getProgressSteps": () => (/* reexport safe */ _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__.getProgressSteps),
/* harmony export */   "_main": () => (/* reexport safe */ _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__._main),
/* harmony export */   "update": () => (/* reexport safe */ _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__.update),
/* harmony export */   "_destroy": () => (/* reexport safe */ _instanceMethods_destroy_js__WEBPACK_IMPORTED_MODULE_8__._destroy)
/* harmony export */ });
/* harmony import */ var _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceMethods/hideLoading.js */ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js");
/* harmony import */ var _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceMethods/getInput.js */ "./node_modules/sweetalert2/src/instanceMethods/getInput.js");
/* harmony import */ var _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods/close.js */ "./node_modules/sweetalert2/src/instanceMethods/close.js");
/* harmony import */ var _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods/enable-disable-elements.js */ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js");
/* harmony import */ var _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceMethods/validation-message.js */ "./node_modules/sweetalert2/src/instanceMethods/validation-message.js");
/* harmony import */ var _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instanceMethods/progress-steps.js */ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js");
/* harmony import */ var _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instanceMethods/_main.js */ "./node_modules/sweetalert2/src/instanceMethods/_main.js");
/* harmony import */ var _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceMethods/update.js */ "./node_modules/sweetalert2/src/instanceMethods/update.js");
/* harmony import */ var _instanceMethods_destroy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instanceMethods/_destroy.js */ "./node_modules/sweetalert2/src/instanceMethods/_destroy.js");











/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_destroy.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_destroy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_destroy": () => (/* binding */ _destroy)
/* harmony export */ });
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");




function _destroy () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__.default.domCache.get(this)
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__.default.innerParams.get(this)

  if (!innerParams) {
    return // This instance has already been destroyed
  }

  // Check if there is another Swal closing
  if (domCache.popup && _globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.swalCloseEventFinishedCallback) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.swalCloseEventFinishedCallback()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.swalCloseEventFinishedCallback
  }

  // Check if there is a swal disposal defer timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.deferDisposalTimer) {
    clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.deferDisposalTimer)
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.deferDisposalTimer
  }

  runDidDestroy(innerParams)

  disposeSwal(this)
}

const runDidDestroy = (innerParams) => {
  if (typeof innerParams.didDestroy === 'function') {
    innerParams.didDestroy()
  } else if (typeof innerParams.onDestroy === 'function') {
    innerParams.onDestroy() // @deprecated
  }
}

const disposeSwal = (instance) => {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params
  // Unset globalState props so GC will dispose globalState (#1569)
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.keydownHandler
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__.default.keydownTarget
  // Unset WeakMaps so GC will be able to dispose them (#1569)
  unsetWeakMaps(_privateProps_js__WEBPACK_IMPORTED_MODULE_1__.default)
  unsetWeakMaps(_privateMethods_js__WEBPACK_IMPORTED_MODULE_2__.default)
}

const unsetWeakMaps = (obj) => {
  for (const i in obj) {
    obj[i] = new WeakMap()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_main.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_main.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_main": () => (/* binding */ _main)
/* harmony export */ });
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Timer.js */ "./node_modules/sweetalert2/src/utils/Timer.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_setParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setParameters.js */ "./node_modules/sweetalert2/src/utils/setParameters.js");
/* harmony import */ var _utils_getTemplateParams_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getTemplateParams.js */ "./node_modules/sweetalert2/src/utils/getTemplateParams.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _utils_openPopup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/openPopup.js */ "./node_modules/sweetalert2/src/utils/openPopup.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _buttons_handlers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buttons-handlers.js */ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js");
/* harmony import */ var _keydown_handler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./keydown-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js");
/* harmony import */ var _popup_click_handler_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popup-click-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");

















function _main (userParams, mixinParams = {}) {
  (0,_utils_params_js__WEBPACK_IMPORTED_MODULE_0__.showWarningsForParams)(Object.assign({}, mixinParams, userParams))

  if (_globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.currentInstance) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.currentInstance._destroy()
  }
  _globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.currentInstance = this

  const innerParams = prepareParams(userParams, mixinParams)
  ;(0,_utils_setParameters_js__WEBPACK_IMPORTED_MODULE_5__.default)(innerParams)
  Object.freeze(innerParams)

  // clear the previous timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.timeout) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.timeout.stop()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.timeout
  }

  // clear the restore focus timeout
  clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_7__.default.restoreFocusTimeout)

  const domCache = populateDomCache(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.render(this, innerParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_9__.default.innerParams.set(this, innerParams)

  return swalPromise(this, domCache, innerParams)
}

const prepareParams = (userParams, mixinParams) => {
  const templateParams = (0,_utils_getTemplateParams_js__WEBPACK_IMPORTED_MODULE_6__.getTemplateParams)(userParams)
  const showClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__.default.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass)
  const hideClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__.default.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass)
  const params = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__.default, mixinParams, templateParams, userParams) // precedence is described in #2131
  params.showClass = showClass
  params.hideClass = hideClass
  // @deprecated
  if (userParams.animation === false) {
    params.showClass = {
      popup: 'swal2-noanimation',
      backdrop: 'swal2-noanimation'
    }
    params.hideClass = {}
  }
  return params
}

const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve) => {
    // functions to handle all closings/dismissals
    const dismissWith = (dismiss) => {
      instance.closePopup({ isDismissed: true, dismiss })
    }

    _privateMethods_js__WEBPACK_IMPORTED_MODULE_10__.default.swalPromiseResolve.set(instance, resolve)

    domCache.confirmButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_12__.handleConfirmButtonClick)(instance, innerParams)
    domCache.denyButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_12__.handleDenyButtonClick)(instance, innerParams)
    domCache.cancelButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_12__.handleCancelButtonClick)(instance, dismissWith)

    domCache.closeButton.onclick = () => dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_15__.DismissReason.close)

    ;(0,_popup_click_handler_js__WEBPACK_IMPORTED_MODULE_14__.handlePopupClick)(instance, domCache, dismissWith)

    ;(0,_keydown_handler_js__WEBPACK_IMPORTED_MODULE_13__.addKeydownHandler)(instance, _globalState_js__WEBPACK_IMPORTED_MODULE_7__.default, innerParams, dismissWith)

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__.swalClasses["toast-column"])
    } else {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.removeClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__.swalClasses["toast-column"])
    }

    (0,_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_11__.handleInputOptionsAndValue)(instance, innerParams)

    ;(0,_utils_openPopup_js__WEBPACK_IMPORTED_MODULE_8__.openPopup)(innerParams)

    setupTimer(_globalState_js__WEBPACK_IMPORTED_MODULE_7__.default, innerParams, dismissWith)

    initFocus(domCache, innerParams)

    // Scroll container to top on open (#1247, #1946)
    setTimeout(() => {
      domCache.container.scrollTop = 0
    })
  })
}

const populateDomCache = (instance) => {
  const domCache = {
    popup: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getPopup(),
    container: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContainer(),
    content: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContent(),
    actions: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getActions(),
    confirmButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton(),
    denyButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton(),
    cancelButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton(),
    loader: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader(),
    closeButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCloseButton(),
    validationMessage: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage(),
    progressSteps: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getProgressSteps()
  }
  _privateProps_js__WEBPACK_IMPORTED_MODULE_9__.default.domCache.set(instance, domCache)

  return domCache
}

const setupTimer = (globalState, innerParams, dismissWith) => {
  const timerProgressBar = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getTimerProgressBar()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(timerProgressBar)
  if (innerParams.timer) {
    globalState.timeout = new _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__.default(() => {
      dismissWith('timer')
      delete globalState.timeout
    }, innerParams.timer)
    if (innerParams.timerProgressBar) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(timerProgressBar)
      setTimeout(() => {
        if (globalState.timeout && globalState.timeout.running) { // timer can be already stopped or unset at this point
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.animateTimerProgressBar(innerParams.timer)
        }
      })
    }
  }
}

const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return
  }

  if (!(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.callIfFunction)(innerParams.allowEnterKey)) {
    return blurActiveElement()
  }

  if (!focusButton(domCache, innerParams)) {
    (0,_keydown_handler_js__WEBPACK_IMPORTED_MODULE_13__.setFocus)(innerParams, -1, 1)
  }
}

const focusButton = (domCache, innerParams) => {
  if (innerParams.focusDeny && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.denyButton)) {
    domCache.denyButton.focus()
    return true
  }

  if (innerParams.focusCancel && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.cancelButton)) {
    domCache.cancelButton.focus()
    return true
  }

  if (innerParams.focusConfirm && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.confirmButton)) {
    domCache.confirmButton.focus()
    return true
  }

  return false
}

const blurActiveElement = () => {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleConfirmButtonClick": () => (/* binding */ handleConfirmButtonClick),
/* harmony export */   "handleDenyButtonClick": () => (/* binding */ handleDenyButtonClick),
/* harmony export */   "handleCancelButtonClick": () => (/* binding */ handleCancelButtonClick)
/* harmony export */ });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");







const handleConfirmButtonClick = (instance, innerParams) => {
  instance.disableButtons()
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, innerParams, 'confirm')
  } else {
    confirm(instance, innerParams, true)
  }
}

const handleDenyButtonClick = (instance, innerParams) => {
  instance.disableButtons()
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, innerParams, 'deny')
  } else {
    deny(instance, innerParams, false)
  }
}

const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons()
  dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_5__.DismissReason.cancel)
}

const handleConfirmOrDenyWithInput = (instance, innerParams, type /* type is either 'confirm' or 'deny' */) => {
  const inputValue = (0,_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__.getInputValue)(instance, innerParams)
  if (innerParams.inputValidator) {
    handleInputValidator(instance, innerParams, inputValue)
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons()
    instance.showValidationMessage(innerParams.validationMessage)
  } else if (type === 'deny') {
    deny(instance, innerParams, inputValue)
  } else {
    confirm(instance, innerParams, inputValue)
  }
}

const handleInputValidator = (instance, innerParams, inputValue) => {
  instance.disableInput()
  const validationPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
    innerParams.inputValidator(inputValue, innerParams.validationMessage))
  )
  validationPromise.then(
    (validationMessage) => {
      instance.enableButtons()
      instance.enableInput()
      if (validationMessage) {
        instance.showValidationMessage(validationMessage)
      } else {
        confirm(instance, innerParams, inputValue)
      }
    }
  )
}

const deny = (instance, innerParams, value) => {
  if (innerParams.showLoaderOnDeny) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)((0,_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__.getDenyButton)())
  }

  if (innerParams.preDeny) {
    const preDenyPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
      innerParams.preDeny(value, innerParams.validationMessage))
    )
    preDenyPromise.then(
      (preDenyValue) => {
        if (preDenyValue === false) {
          instance.hideLoading()
        } else {
          instance.closePopup({ isDenied: true, value: typeof preDenyValue === 'undefined' ? value : preDenyValue })
        }
      }
    )
  } else {
    instance.closePopup({ isDenied: true, value })
  }
}

const succeedWith = (instance, value) => {
  instance.closePopup({ isConfirmed: true, value })
}

const confirm = (instance, innerParams, value) => {
  if (innerParams.showLoaderOnConfirm) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)() // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage()
    const preConfirmPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
      innerParams.preConfirm(value, innerParams.validationMessage))
    )
    preConfirmPromise.then(
      (preConfirmValue) => {
        if ((0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isVisible)((0,_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__.getValidationMessage)()) || preConfirmValue === false) {
          instance.hideLoading()
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue)
        }
      }
    )
  } else {
    succeedWith(instance, value)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/close.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/close.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "closePopup": () => (/* binding */ close),
/* harmony export */   "closeModal": () => (/* binding */ close),
/* harmony export */   "closeToast": () => (/* binding */ close)
/* harmony export */ });
/* harmony import */ var _utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _utils_ieFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ieFix.js */ "./node_modules/sweetalert2/src/utils/ieFix.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");










/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState (instance, container, isToast, didClose) {
  if (isToast) {
    triggerDidCloseAndDispose(instance, didClose)
  } else {
    (0,_globalState_js__WEBPACK_IMPORTED_MODULE_6__.restoreActiveElement)().then(() => triggerDidCloseAndDispose(instance, didClose))
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.keydownTarget.removeEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.keydownListenerCapture })
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.keydownHandlerAdded = false
  }

  if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
    container.parentNode.removeChild(container)
  }

  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.isModal()) {
    (0,_utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__.undoScrollbar)()
    ;(0,_utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__.undoIOSfix)()
    ;(0,_utils_ieFix_js__WEBPACK_IMPORTED_MODULE_2__.undoIEfix)()
    ;(0,_utils_aria_js__WEBPACK_IMPORTED_MODULE_3__.unsetAriaHidden)()
  }

  removeBodyClasses()
}

function removeBodyClasses () {
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.removeClass(
    [document.documentElement, document.body],
    [
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__.swalClasses.shown,
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__.swalClasses["height-auto"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__.swalClasses["no-backdrop"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__.swalClasses["toast-shown"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__.swalClasses["toast-column"]
    ]
  )
}

function close (resolveValue) {
  const popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.getPopup()

  if (!popup) {
    return
  }

  resolveValue = prepareResolveValue(resolveValue)

  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_7__.default.innerParams.get(this)
  if (!innerParams || _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.hasClass(popup, innerParams.hideClass.popup)) {
    return
  }
  const swalPromiseResolve = _privateMethods_js__WEBPACK_IMPORTED_MODULE_8__.default.swalPromiseResolve.get(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.removeClass(popup, innerParams.showClass.popup)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.addClass(popup, innerParams.hideClass.popup)

  const backdrop = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.getContainer()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.removeClass(backdrop, innerParams.showClass.backdrop)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.addClass(backdrop, innerParams.hideClass.backdrop)

  handlePopupAnimation(this, popup, innerParams)

  // Resolve Swal promise
  swalPromiseResolve(resolveValue)
}

const prepareResolveValue = (resolveValue) => {
  // When user calls Swal.close()
  if (typeof resolveValue === 'undefined') {
    return {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true,
    }
  }

  return Object.assign({
    isConfirmed: false,
    isDenied: false,
    isDismissed: false,
  }, resolveValue)
}

const handlePopupAnimation = (instance, popup, innerParams) => {
  const container = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.getContainer()
  // If animation is supported, animate
  const animationIsSupported = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.animationEndEvent && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.hasCssAnimation(popup)

  const {
    onClose, onAfterClose, // @deprecated
    willClose, didClose
  } = innerParams

  runDidClose(popup, willClose, onClose)

  if (animationIsSupported) {
    animatePopup(instance, popup, container, didClose || onAfterClose)
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.isToast(), didClose || onAfterClose)
  }
}

const runDidClose = (popup, willClose, onClose) => {
  if (willClose !== null && typeof willClose === 'function') {
    willClose(popup)
  } else if (onClose !== null && typeof onClose === 'function') {
    onClose(popup) // @deprecated
  }
}

const animatePopup = (instance, popup, container, didClose) => {
  _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.isToast(), didClose)
  popup.addEventListener(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__.animationEndEvent, function (e) {
    if (e.target === popup) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.swalCloseEventFinishedCallback()
      delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.swalCloseEventFinishedCallback
    }
  })
}

const triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    if (typeof didClose === 'function') {
      didClose()
    }
    instance._destroy()
  })
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableButtons": () => (/* binding */ enableButtons),
/* harmony export */   "disableButtons": () => (/* binding */ disableButtons),
/* harmony export */   "enableInput": () => (/* binding */ enableInput),
/* harmony export */   "disableInput": () => (/* binding */ disableInput)
/* harmony export */ });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function setButtonsDisabled (instance, buttons, disabled) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__.default.domCache.get(instance)
  buttons.forEach(button => {
    domCache[button].disabled = disabled
  })
}

function setInputDisabled (input, disabled) {
  if (!input) {
    return false
  }
  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled
    }
  } else {
    input.disabled = disabled
  }
}

function enableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false)
}

function disableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true)
}

function enableInput () {
  return setInputDisabled(this.getInput(), false)
}

function disableInput () {
  return setInputDisabled(this.getInput(), true)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/getInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/getInput.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");



// Get input element by specified type or, if type isn't specified, by params.input
function getInput (instance) {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__.default.innerParams.get(instance || this)
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__.default.domCache.get(instance || this)
  if (!domCache) {
    return null
  }
  return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getInput(domCache.content, innerParams.input)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/hideLoading.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading),
/* harmony export */   "disableLoading": () => (/* binding */ hideLoading)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 */
function hideLoading () {
  // do nothing if popup is closed
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.innerParams.get(this)
  if (!innerParams) {
    return
  }
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.domCache.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.loader)
  const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'))
  if (buttonToReplace.length) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(buttonToReplace[0], 'inline-block')
  } else if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.allButtonsAreHidden()) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.actions)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass([domCache.popup, domCache.actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.loading)
  domCache.popup.removeAttribute('aria-busy')
  domCache.popup.removeAttribute('data-loading')
  domCache.confirmButton.disabled = false
  domCache.denyButton.disabled = false
  domCache.cancelButton.disabled = false
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKeydownHandler": () => (/* binding */ addKeydownHandler),
/* harmony export */   "setFocus": () => (/* binding */ setFocus)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");






const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = false
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = (e) => keydownHandler(instance, e, dismissWith)
    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = true
  }
}

// Focus handling
const setFocus = (innerParams, index, increment) => {
  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements()
  // search for visible elements and select the next possible match
  if (focusableElements.length) {
    index = index + increment

    // rollover to first item
    if (index === focusableElements.length) {
      index = 0

      // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1
    }

    return focusableElements[index].focus()
  }
  // no visible focusable elements, focus the popup
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup().focus()
}

const arrowKeysNextButton = [
  'ArrowRight', 'ArrowDown',
  'Right', 'Down' // IE11
]

const arrowKeysPreviousButton = [
  'ArrowLeft', 'ArrowUp',
  'Left', 'Up' // IE11
]

const escKeys = [
  'Escape',
  'Esc' // IE11
]

const keydownHandler = (instance, e, dismissWith) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__.default.innerParams.get(instance)

  if (!innerParams) {
    return // This instance has already been destroyed
  }

  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation()
  }

  // ENTER
  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams)

  // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams)

  // ARROWS - switch focus between buttons
  } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
    handleArrows(e.key)

  // ESC
  } else if (escKeys.includes(e.key)) {
    handleEsc(e, innerParams, dismissWith)
  }
}

const handleEnter = (instance, e, innerParams) => {
  // #720 #721
  if (e.isComposing) {
    return
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].includes(innerParams.input)) {
      return // do not submit
    }

    (0,_staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__.clickConfirm)()
    e.preventDefault()
  }
}

const handleTab = (e, innerParams) => {
  const targetElement = e.target

  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements()
  let btnIndex = -1
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i
      break
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1)
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1)
  }
  e.stopPropagation()
  e.preventDefault()
}

const handleArrows = (key) => {
  const confirmButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton()
  const denyButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton()
  const cancelButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton()
  if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
    return
  }
  const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling'
  const buttonToFocus = document.activeElement[sibling]
  if (buttonToFocus) {
    buttonToFocus.focus()
  }
}

const handleEsc = (e, innerParams, dismissWith) => {
  if ((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.callIfFunction)(innerParams.allowEscapeKey)) {
    e.preventDefault()
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.esc)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePopupClick": () => (/* binding */ handlePopupClick)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




const handlePopupClick = (instance, domCache, dismissWith) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.innerParams.get(instance)
  if (innerParams.toast) {
    handleToastClick(instance, domCache, dismissWith)
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache)

    // Ignore click events that had mousedown on the container but mouseup on the popup
    handleContainerMousedown(domCache)

    handleModalClick(instance, domCache, dismissWith)
  }
}

const handleToastClick = (instance, domCache, dismissWith) => {
  // Closing toast by internal click
  domCache.popup.onclick = () => {
    const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.innerParams.get(instance)
    if (
      innerParams.showConfirmButton ||
      innerParams.showDenyButton ||
      innerParams.showCancelButton ||
      innerParams.showCloseButton ||
      innerParams.timer ||
      innerParams.input
    ) {
      return
    }
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.close)
  }
}

let ignoreOutsideClick = false

const handleModalMousedown = (domCache) => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined
      // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup
      if (e.target === domCache.container) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleContainerMousedown = (domCache) => {
  domCache.container.onmousedown = () => {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined
      // We also need to check if the mouseup target is a child of the popup
      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleModalClick = (instance, domCache, dismissWith) => {
  domCache.container.onclick = (e) => {
    const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.innerParams.get(instance)
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false
      return
    }
    if (e.target === domCache.container && (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.callIfFunction)(innerParams.allowOutsideClick)) {
      dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.backdrop)
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/progress-steps.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProgressSteps": () => (/* binding */ getProgressSteps)
/* harmony export */ });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function getProgressSteps () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__.default.domCache.get(this)
  return domCache.progressSteps
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/update.js":
/*!****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/update.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





/**
 * Updates popup parameters.
 */
function update (params) {
  const popup = _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__.default.innerParams.get(this)

  if (!popup || _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(popup, innerParams.hideClass.popup)) {
    return (0,_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`)
  }

  const validUpdatableParams = {}

  // assign valid params from `params` to `defaults`
  Object.keys(params).forEach(param => {
    if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__.default.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param]
    } else {
      (0,_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)
    }
  })

  const updatedParams = Object.assign({}, innerParams, validUpdatableParams)

  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.render(this, updatedParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_3__.default.innerParams.set(this, updatedParams)
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/validation-message.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/validation-message.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showValidationMessage": () => (/* binding */ showValidationMessage),
/* harmony export */   "resetValidationMessage": () => (/* binding */ resetValidationMessage)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




// Show block with validation message
function showValidationMessage (error) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.domCache.get(this)
  const params = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.innerParams.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(domCache.validationMessage, error)
  domCache.validationMessage.className = _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["validation-message"]
  if (params.customClass && params.customClass.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(domCache.validationMessage, params.customClass.validationMessage)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(domCache.validationMessage)

  const input = this.getInput()
  if (input) {
    input.setAttribute('aria-invalid', true)
    input.setAttribute('aria-describedBy', _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["validation-message"])
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.focusInput(input)
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.inputerror)
  }
}

// Hide block with validation message
function resetValidationMessage () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__.default.domCache.get(this)
  if (domCache.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.validationMessage)
  }

  const input = this.getInput()
  if (input) {
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedBy')
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.inputerror)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateMethods.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateMethods.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  swalPromiseResolve: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateProps.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateProps.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsToParams": () => (/* reexport safe */ _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__.argsToParams),
/* harmony export */   "clickCancel": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickCancel),
/* harmony export */   "clickConfirm": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickConfirm),
/* harmony export */   "clickDeny": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickDeny),
/* harmony export */   "getActions": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getActions),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getCloseButton),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton),
/* harmony export */   "getContainer": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getContainer),
/* harmony export */   "getContent": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getContent),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements),
/* harmony export */   "getFooter": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getFooter),
/* harmony export */   "getHeader": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getHeader),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getHtmlContainer),
/* harmony export */   "getIcon": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getIcon),
/* harmony export */   "getImage": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getImage),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getInputLabel),
/* harmony export */   "getLoader": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getLoader),
/* harmony export */   "getPopup": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getPopup),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getTimerProgressBar),
/* harmony export */   "getTitle": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getTitle),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.isLoading),
/* harmony export */   "isVisible": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.isVisible),
/* harmony export */   "fire": () => (/* reexport safe */ _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__.fire),
/* harmony export */   "mixin": () => (/* reexport safe */ _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__.mixin),
/* harmony export */   "deleteQueueStep": () => (/* reexport safe */ _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__.deleteQueueStep),
/* harmony export */   "getQueueStep": () => (/* reexport safe */ _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__.getQueueStep),
/* harmony export */   "insertQueueStep": () => (/* reexport safe */ _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__.insertQueueStep),
/* harmony export */   "queue": () => (/* reexport safe */ _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__.queue),
/* harmony export */   "enableLoading": () => (/* reexport safe */ _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__.enableLoading),
/* harmony export */   "showLoading": () => (/* reexport safe */ _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__.showLoading),
/* harmony export */   "getTimerLeft": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__.getTimerLeft),
/* harmony export */   "increaseTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__.increaseTimer),
/* harmony export */   "isTimerRunning": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__.isTimerRunning),
/* harmony export */   "resumeTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__.resumeTimer),
/* harmony export */   "stopTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__.stopTimer),
/* harmony export */   "toggleTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__.toggleTimer),
/* harmony export */   "bindClickHandler": () => (/* reexport safe */ _staticMethods_bindClickHandler_js__WEBPACK_IMPORTED_MODULE_7__.bindClickHandler),
/* harmony export */   "isValidParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_8__.isValidParameter),
/* harmony export */   "isUpdatableParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_8__.isUpdatableParameter),
/* harmony export */   "isDeprecatedParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_8__.isDeprecatedParameter)
/* harmony export */ });
/* harmony import */ var _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticMethods/argsToParams.js */ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony import */ var _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods/fire.js */ "./node_modules/sweetalert2/src/staticMethods/fire.js");
/* harmony import */ var _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticMethods/mixin.js */ "./node_modules/sweetalert2/src/staticMethods/mixin.js");
/* harmony import */ var _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticMethods/queue.js */ "./node_modules/sweetalert2/src/staticMethods/queue.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staticMethods/timer.js */ "./node_modules/sweetalert2/src/staticMethods/timer.js");
/* harmony import */ var _staticMethods_bindClickHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staticMethods/bindClickHandler.js */ "./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js");
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");











/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/argsToParams.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsToParams": () => (/* binding */ argsToParams)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const isJqueryElement = (elem) => typeof elem === 'object' && elem.jquery
const isElement = (elem) => elem instanceof Element || isJqueryElement(elem)

const argsToParams = (args) => {
  const params = {}
  if (typeof args[0] === 'object' && !isElement(args[0])) {
    Object.assign(params, args[0])
  } else {
    ['title', 'html', 'icon'].forEach((name, index) => {
      const arg = args[index]
      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg
      } else if (arg !== undefined) {
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.error)(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`)
      }
    })
  }
  return params
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindClickHandler": () => (/* binding */ bindClickHandler)
/* harmony export */ });
let bodyClickListenerAdded = false
const clickHandlers = {}

function bindClickHandler (attr = 'data-swal-template') {
  clickHandlers[attr] = this

  if (!bodyClickListenerAdded) {
    document.body.addEventListener('click', bodyClickListener)
    bodyClickListenerAdded = true
  }
}

const bodyClickListener = (event) => {
  // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
  // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
  for (let el = event.target; el && el !== document; el = el.parentNode) {
    for (const attr in clickHandlers) {
      const template = el.getAttribute(attr)
      if (template) {
        clickHandlers[attr].fire({ template })
        return
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/dom.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContainer": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer),
/* harmony export */   "getPopup": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup),
/* harmony export */   "getTitle": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTitle),
/* harmony export */   "getContent": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContent),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer),
/* harmony export */   "getImage": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getImage),
/* harmony export */   "getIcon": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getInputLabel),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCloseButton),
/* harmony export */   "getActions": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getActions),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton),
/* harmony export */   "getLoader": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader),
/* harmony export */   "getHeader": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHeader),
/* harmony export */   "getFooter": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFooter),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isLoading),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "clickConfirm": () => (/* binding */ clickConfirm),
/* harmony export */   "clickDeny": () => (/* binding */ clickDeny),
/* harmony export */   "clickCancel": () => (/* binding */ clickCancel)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");





/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup())
}

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton().click()

/*
 * Global function to click 'Deny' button
 */
const clickDeny = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton().click()

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton().click()


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/fire.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/fire.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fire": () => (/* binding */ fire)
/* harmony export */ });
function fire (...args) {
  const Swal = this
  return new Swal(...args)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/mixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/mixin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixin": () => (/* binding */ mixin)
/* harmony export */ });
/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin (mixinParams) {
  class MixinSwal extends this {
    _main (params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams))
    }
  }

  return MixinSwal
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/queue.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queue": () => (/* binding */ queue),
/* harmony export */   "getQueueStep": () => (/* binding */ getQueueStep),
/* harmony export */   "insertQueueStep": () => (/* binding */ insertQueueStep),
/* harmony export */   "deleteQueueStep": () => (/* binding */ deleteQueueStep)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


// private global state for the queue feature
let currentSteps = []

/*
 * Global function for chaining sweetAlert popups
 */
const queue = function (steps) {
  const Swal = this
  currentSteps = steps

  const resetAndResolve = (resolve, value) => {
    currentSteps = []
    resolve(value)
  }

  const queueResult = []
  return new Promise((resolve) => {
    (function step (i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i)
        Swal.fire(currentSteps[i]).then((result) => {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value)
            step(i + 1, callback)
          } else {
            resetAndResolve(resolve, { dismiss: result.dismiss })
          }
        })
      } else {
        resetAndResolve(resolve, { value: queueResult })
      }
    })(0)
  })
}

/*
 * Global function for getting the index of current popup in queue
 */
const getQueueStep = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer().getAttribute('data-queue-step')

/*
 * Global function for inserting a popup to the queue
 */
const insertQueueStep = (step, index) => {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step)
  }
  return currentSteps.push(step)
}

/*
 * Global function for deleting a popup from the queue
 */
const deleteQueueStep = (index) => {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/showLoading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/showLoading.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "enableLoading": () => (/* binding */ showLoading)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");




/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 */
const showLoading = (buttonToReplace) => {
  let popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  if (!popup) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__.default.fire()
  }
  popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const actions = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getActions()
  const loader = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader()

  if (!buttonToReplace && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isVisible(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())) {
    buttonToReplace = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton()
  }

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(actions)
  if (buttonToReplace) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(buttonToReplace)
    loader.setAttribute('data-button-to-replace', buttonToReplace.className)
  }
  loader.parentNode.insertBefore(loader, buttonToReplace)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([popup, actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__.swalClasses.loading)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(loader)

  popup.setAttribute('data-loading', true)
  popup.setAttribute('aria-busy', true)
  popup.focus()
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/timer.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/timer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimerLeft": () => (/* binding */ getTimerLeft),
/* harmony export */   "stopTimer": () => (/* binding */ stopTimer),
/* harmony export */   "resumeTimer": () => (/* binding */ resumeTimer),
/* harmony export */   "toggleTimer": () => (/* binding */ toggleTimer),
/* harmony export */   "increaseTimer": () => (/* binding */ increaseTimer),
/* harmony export */   "isTimerRunning": () => (/* binding */ isTimerRunning)
/* harmony export */ });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");



/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
const getTimerLeft = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout.getTimerLeft()
}

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const stopTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout) {
    (0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.stopTimerProgressBar)()
    return _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout.stop()
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const resumeTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout.start()
    ;(0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar)(remaining)
    return remaining
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const toggleTimer = () => {
  const timer = _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout
  return timer && (timer.running ? stopTimer() : resumeTimer())
}

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */
const increaseTimer = (n) => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout.increase(n)
    ;(0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar)(remaining, true)
    return remaining
  }
}

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */
const isTimerRunning = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__.default.timeout.isRunning()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.js */ "./node_modules/sweetalert2/src/SweetAlert.js");


const Swal = _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__.default
Swal.default = Swal

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swal);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/DismissReason.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/DismissReason.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DismissReason": () => (/* binding */ DismissReason)
/* harmony export */ });
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
})


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/Timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/Timer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
class Timer {
  constructor (callback, delay) {
    this.callback = callback
    this.remaining = delay
    this.running = false

    this.start()
  }

  start () {
    if (!this.running) {
      this.running = true
      this.started = new Date()
      this.id = setTimeout(this.callback, this.remaining)
    }
    return this.remaining
  }

  stop () {
    if (this.running) {
      this.running = false
      clearTimeout(this.id)
      this.remaining -= new Date() - this.started
    }
    return this.remaining
  }

  increase (n) {
    const running = this.running
    if (running) {
      this.stop()
    }
    this.remaining += n
    if (running) {
      this.start()
    }
    return this.remaining
  }

  getTimerLeft () {
    if (this.running) {
      this.stop()
      this.start()
    }
    return this.remaining
  }

  isRunning () {
    return this.running
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/aria.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/aria.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAriaHidden": () => (/* binding */ setAriaHidden),
/* harmony export */   "unsetAriaHidden": () => (/* binding */ unsetAriaHidden)
/* harmony export */ });
/* harmony import */ var _dom_getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const bodyChildren = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(document.body.children)
  bodyChildren.forEach(el => {
    if (el === (0,_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)() || (0,_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.contains)(el, (0,_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)())) {
      return
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'))
    }
    el.setAttribute('aria-hidden', 'true')
  })
}

const unsetAriaHidden = () => {
  const bodyChildren = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(document.body.children)
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'))
      el.removeAttribute('data-previous-aria-hidden')
    } else {
      el.removeAttribute('aria-hidden')
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/classes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swalPrefix": () => (/* binding */ swalPrefix),
/* harmony export */   "prefix": () => (/* binding */ prefix),
/* harmony export */   "swalClasses": () => (/* binding */ swalClasses),
/* harmony export */   "iconTypes": () => (/* binding */ iconTypes)
/* harmony export */ });
const swalPrefix = 'swal2-'

const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}

const swalClasses = prefix([
  'container',
  'shown',
  'height-auto',
  'iosfix',
  'popup',
  'modal',
  'no-backdrop',
  'no-transition',
  'toast',
  'toast-shown',
  'toast-column',
  'show',
  'hide',
  'close',
  'title',
  'header',
  'content',
  'html-container',
  'actions',
  'confirm',
  'deny',
  'cancel',
  'footer',
  'icon',
  'icon-content',
  'image',
  'input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'label',
  'textarea',
  'inputerror',
  'input-label',
  'validation-message',
  'progress-steps',
  'active-progress-step',
  'progress-step',
  'progress-step-line',
  'loader',
  'loading',
  'styled',
  'top',
  'top-start',
  'top-end',
  'top-left',
  'top-right',
  'center',
  'center-start',
  'center-end',
  'center-left',
  'center-right',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-left',
  'bottom-right',
  'grow-row',
  'grow-column',
  'grow-fullscreen',
  'rtl',
  'timer-progress-bar',
  'timer-progress-bar-container',
  'scrollbar-measure',
  'icon-success',
  'icon-warning',
  'icon-info',
  'icon-question',
  'icon-error',
])

const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/defaultInputValidators.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid email address')
  },
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid URL')
  }
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationEndEvent": () => (/* binding */ animationEndEvent)
/* harmony export */ });
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");


const animationEndEvent = (() => {
  // Prevent run in Node env
  /* istanbul ignore if */
  if ((0,_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__.isNodeEnv)()) {
    return false
  }

  const testEl = document.createElement('div')
  const transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  }
  for (const i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i]
    }
  }

  return false
})()


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/domUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/domUtils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": () => (/* binding */ states),
/* harmony export */   "setInnerHtml": () => (/* binding */ setInnerHtml),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "applyCustomClass": () => (/* binding */ applyCustomClass),
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "focusInput": () => (/* binding */ focusInput),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "getChildByClass": () => (/* binding */ getChildByClass),
/* harmony export */   "applyNumericalStyle": () => (/* binding */ applyNumericalStyle),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "setStyle": () => (/* binding */ setStyle),
/* harmony export */   "toggle": () => (/* binding */ toggle),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "allButtonsAreHidden": () => (/* binding */ allButtonsAreHidden),
/* harmony export */   "isScrollable": () => (/* binding */ isScrollable),
/* harmony export */   "hasCssAnimation": () => (/* binding */ hasCssAnimation),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "animateTimerProgressBar": () => (/* binding */ animateTimerProgressBar),
/* harmony export */   "stopTimerProgressBar": () => (/* binding */ stopTimerProgressBar)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
}

const setInnerHtml = (elem, html) => { // #1926
  elem.textContent = ''
  if (html) {
    const parser = new DOMParser()
    const parsed = parser.parseFromString(html, `text/html`)
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(parsed.querySelector('head').childNodes).forEach((child) => {
      elem.appendChild(child)
    })
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(parsed.querySelector('body').childNodes).forEach((child) => {
      elem.appendChild(child)
    })
  }
}

const hasClass = (elem, className) => {
  if (!className) {
    return false
  }
  const classList = className.split(/\s+/)
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false
    }
  }
  return true
}

const removeCustomClasses = (elem, params) => {
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(elem.classList).forEach(className => {
    if (
      !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.objectValues)(_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses).includes(className) &&
      !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.objectValues)(_classes_js__WEBPACK_IMPORTED_MODULE_1__.iconTypes).includes(className) &&
      !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.objectValues)(params.showClass).includes(className)
    ) {
      elem.classList.remove(className)
    }
  })
}

const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params)

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`)
    }

    addClass(elem, params.customClass[className])
  }
}

function getInput (content, inputType) {
  if (!inputType) {
    return null
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses[inputType])
    case 'checkbox':
      return content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.checkbox} input`)
    case 'radio':
      return content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio} input:checked`) ||
        content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio} input:first-child`)
    case 'range':
      return content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.range} input`)
    default:
      return getChildByClass(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.input)
  }
}

const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value
    input.value = ''
    input.value = val
  }
}

const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean)
  }
  classList.forEach((className) => {
    if (target.forEach) {
      target.forEach((elem) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className)
      })
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className)
    }
  })
}

const addClass = (target, classList) => {
  toggleClass(target, classList, true)
}

const removeClass = (target, classList) => {
  toggleClass(target, classList, false)
}

const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}

const applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(value)}`) {
    value = parseInt(value)
  }
  if (value || parseInt(value) === 0) {
    elem.style[property] = (typeof value === 'number') ? `${value}px` : value
  } else {
    elem.style.removeProperty(property)
  }
}

const show = (elem, display = 'flex') => {
  elem.style.display = display
}

const hide = (elem) => {
  elem.style.display = 'none'
}

const setStyle = (parent, selector, property, value) => {
  const el = parent.querySelector(selector)
  if (el) {
    el.style[property] = value
  }
}

const toggle = (elem, condition, display) => {
  condition ? show(elem, display) : hide(elem)
}

// borrowed from jquery $(elem).is(':visible') implementation
const isVisible = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length))

const allButtonsAreHidden = () => !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton)()) && !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton)()) && !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton)())

const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight)

// borrowed from https://stackoverflow.com/a/46352119
const hasCssAnimation = (elem) => {
  const style = window.getComputedStyle(elem)

  const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0')
  const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0')

  return animDuration > 0 || transDuration > 0
}

const contains = (haystack, needle) => {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle)
  }
}

const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar)()
  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none'
      timerProgressBar.style.width = '100%'
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1000}s linear`
      timerProgressBar.style.width = '0%'
    }, 10)
  }
}

const stopTimerProgressBar = () => {
  const timerProgressBar = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar)()
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = '100%'
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = `${timerProgressBarPercent}%`
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/getters.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/getters.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContainer": () => (/* binding */ getContainer),
/* harmony export */   "elementBySelector": () => (/* binding */ elementBySelector),
/* harmony export */   "getPopup": () => (/* binding */ getPopup),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "getTitle": () => (/* binding */ getTitle),
/* harmony export */   "getContent": () => (/* binding */ getContent),
/* harmony export */   "getHtmlContainer": () => (/* binding */ getHtmlContainer),
/* harmony export */   "getImage": () => (/* binding */ getImage),
/* harmony export */   "getProgressSteps": () => (/* binding */ getProgressSteps),
/* harmony export */   "getValidationMessage": () => (/* binding */ getValidationMessage),
/* harmony export */   "getConfirmButton": () => (/* binding */ getConfirmButton),
/* harmony export */   "getDenyButton": () => (/* binding */ getDenyButton),
/* harmony export */   "getInputLabel": () => (/* binding */ getInputLabel),
/* harmony export */   "getLoader": () => (/* binding */ getLoader),
/* harmony export */   "getCancelButton": () => (/* binding */ getCancelButton),
/* harmony export */   "getActions": () => (/* binding */ getActions),
/* harmony export */   "getHeader": () => (/* binding */ getHeader),
/* harmony export */   "getFooter": () => (/* binding */ getFooter),
/* harmony export */   "getTimerProgressBar": () => (/* binding */ getTimerProgressBar),
/* harmony export */   "getCloseButton": () => (/* binding */ getCloseButton),
/* harmony export */   "getFocusableElements": () => (/* binding */ getFocusableElements),
/* harmony export */   "isModal": () => (/* binding */ isModal),
/* harmony export */   "isToast": () => (/* binding */ isToast),
/* harmony export */   "isLoading": () => (/* binding */ isLoading)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");




const getContainer = () => document.body.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.container}`)

const elementBySelector = (selectorString) => {
  const container = getContainer()
  return container ? container.querySelector(selectorString) : null
}

const elementByClass = (className) => {
  return elementBySelector(`.${className}`)
}

const getPopup = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup)

const getIcon = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.icon)

const getTitle = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title)

const getContent = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.content)

const getHtmlContainer = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"])

const getImage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image)

const getProgressSteps = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-steps"])

const getValidationMessage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"])

const getConfirmButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.confirm}`)

const getDenyButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.deny}`)

const getInputLabel = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["input-label"])

const getLoader = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.loader}`)

const getCancelButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.cancel}`)

const getActions = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions)

const getHeader = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.header)

const getFooter = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.footer)

const getTimerProgressBar = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar"])

const getCloseButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.close)

// https://github.com/jkup/focusable/blob/master/index.js
const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`

const getFocusableElements = () => {
  const focusableElementsWithTabindex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'))
      b = parseInt(b.getAttribute('tabindex'))
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })

  const otherFocusableElements = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(
    getPopup().querySelectorAll(focusable)
  ).filter(el => el.getAttribute('tabindex') !== '-1')

  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.uniqueArray)(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.isVisible)(el))
}

const isModal = () => {
  return !isToast() && !document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"])
}

const isToast = () => {
  return document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"])
}

const isLoading = () => {
  return getPopup().hasAttribute('data-loading')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.addClass),
/* harmony export */   "allButtonsAreHidden": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.allButtonsAreHidden),
/* harmony export */   "animateTimerProgressBar": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar),
/* harmony export */   "applyCustomClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass),
/* harmony export */   "applyNumericalStyle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.applyNumericalStyle),
/* harmony export */   "contains": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.contains),
/* harmony export */   "focusInput": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.focusInput),
/* harmony export */   "getChildByClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.getChildByClass),
/* harmony export */   "getInput": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.getInput),
/* harmony export */   "hasClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasClass),
/* harmony export */   "hasCssAnimation": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasCssAnimation),
/* harmony export */   "hide": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hide),
/* harmony export */   "isScrollable": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable),
/* harmony export */   "isVisible": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isVisible),
/* harmony export */   "removeClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeClass),
/* harmony export */   "setInnerHtml": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml),
/* harmony export */   "setStyle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setStyle),
/* harmony export */   "show": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.show),
/* harmony export */   "states": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.states),
/* harmony export */   "stopTimerProgressBar": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.stopTimerProgressBar),
/* harmony export */   "toggle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggle),
/* harmony export */   "toggleClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass),
/* harmony export */   "init": () => (/* reexport safe */ _init_js__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   "elementBySelector": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.elementBySelector),
/* harmony export */   "getActions": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getActions),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getCancelButton),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getCloseButton),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getConfirmButton),
/* harmony export */   "getContainer": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getContainer),
/* harmony export */   "getContent": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getContent),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getDenyButton),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getFocusableElements),
/* harmony export */   "getFooter": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getFooter),
/* harmony export */   "getHeader": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getHeader),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getHtmlContainer),
/* harmony export */   "getIcon": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getIcon),
/* harmony export */   "getImage": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getImage),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getInputLabel),
/* harmony export */   "getLoader": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getLoader),
/* harmony export */   "getPopup": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getPopup),
/* harmony export */   "getProgressSteps": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getProgressSteps),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getTimerProgressBar),
/* harmony export */   "getTitle": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getTitle),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isLoading),
/* harmony export */   "isModal": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isModal),
/* harmony export */   "isToast": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isToast),
/* harmony export */   "parseHtmlToContainer": () => (/* reexport safe */ _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__.parseHtmlToContainer),
/* harmony export */   "animationEndEvent": () => (/* reexport safe */ _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__.animationEndEvent),
/* harmony export */   "measureScrollbar": () => (/* reexport safe */ _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__.measureScrollbar),
/* harmony export */   "render": () => (/* reexport safe */ _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__.render)
/* harmony export */ });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/sweetalert2/src/utils/dom/init.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHtmlToContainer.js */ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js");
/* harmony import */ var _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationEndEvent.js */ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js");
/* harmony import */ var _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measureScrollbar.js */ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js");
/* harmony import */ var _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/render.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js");









/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/init.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/init.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");







const sweetHTML = `
 <div aria-labelledby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}" aria-describedby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.content}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup}" tabindex="-1">
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.header}">
     <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-steps"]}"></ul>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.icon}"></div>
     <img class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image}" />
     <h2 class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}"></h2>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.close}"></button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.content}">
     <div id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.content}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}"></div>
     <input class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input}" />
     <input type="file" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.file}" />
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range}">
       <input type="range" />
       <output></output>
     </div>
     <select class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.select}"></select>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.radio}"></div>
     <label for="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox}">
       <input type="checkbox" />
       <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.label}"></span>
     </label>
     <textarea class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.textarea}"></textarea>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"]}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"]}"></div>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions}">
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.loader}"></div>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.confirm}"></button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.deny}"></button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.cancel}"></button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.footer}"></div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar-container"]}">
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '')

const resetOldContainer = () => {
  const oldContainer = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)()
  if (!oldContainer) {
    return false
  }

  oldContainer.parentNode.removeChild(oldContainer)
  ;(0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
    [document.documentElement, document.body],
    [
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["has-column"]
    ]
  )

  return true
}

let oldInputVal // IE11 workaround, see #1109 for details
const resetValidationMessage = (e) => {
  if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__.default.isVisible() && oldInputVal !== e.target.value) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__.default.resetValidationMessage()
  }
  oldInputVal = e.target.value
}

const addInputChangeListeners = () => {
  const content = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContent)()

  const input = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input)
  const file = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.file)
  const range = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range} input`)
  const rangeOutput = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range} output`)
  const select = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.select)
  const checkbox = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox} input`)
  const textarea = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.textarea)

  input.oninput = resetValidationMessage
  file.onchange = resetValidationMessage
  select.onchange = resetValidationMessage
  checkbox.onchange = resetValidationMessage
  textarea.oninput = resetValidationMessage

  range.oninput = (e) => {
    resetValidationMessage(e)
    rangeOutput.value = range.value
  }

  range.onchange = (e) => {
    resetValidationMessage(e)
    range.nextSibling.value = range.value
  }
}

const getTarget = (target) => typeof target === 'string' ? document.querySelector(target) : target

const setupAccessibility = (params) => {
  const popup = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getPopup)()

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog')
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive')
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true')
  }
}

const setupRTL = (targetElement) => {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.addClass)((0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)(), _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.rtl)
  }
}

/*
 * Add modal + backdrop to DOM
 */
const init = (params) => {
  // Clean up the old popup container if it exists
  const oldContainerExisted = resetOldContainer()

  /* istanbul ignore if */
  if ((0,_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__.isNodeEnv)()) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.error)('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.container
  if (oldContainerExisted) {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-transition"])
  }
  (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml)(container, sweetHTML)

  const targetElement = getTarget(params.target)
  targetElement.appendChild(container)

  setupAccessibility(params)
  setupRTL(targetElement)
  addInputChangeListeners()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/inputUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleInputOptionsAndValue": () => (/* binding */ handleInputOptionsAndValue),
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");






const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params)
  } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) &&
    ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hasToPromiseFn)(params.inputValue) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPromise)(params.inputValue))) {
    handleInputValue(instance, params)
  }
}

const getInputValue = (instance, innerParams) => {
  const input = instance.getInput()
  if (!input) {
    return null
  }
  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input)
    case 'radio':
      return getRadioValue(input)
    case 'file':
      return getFileValue(input)
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value
  }
}

const getCheckboxValue = (input) => input.checked ? 1 : 0

const getRadioValue = (input) => input.checked ? input.value : null

const getFileValue = (input) => input.files.length ? (input.getAttribute('multiple') !== null ? input.files : input.files[0]) : null

const handleInputOptions = (instance, params) => {
  const content = _index_js__WEBPACK_IMPORTED_MODULE_0__.getContent()
  const processInputOptions = (inputOptions) => populateInputOptions[params.input](content, formatInputOptions(inputOptions), params)
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hasToPromiseFn)(params.inputOptions) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPromise)(params.inputOptions)) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)(_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(params.inputOptions).then((inputOptions) => {
      instance.hideLoading()
      processInputOptions(inputOptions)
    })
  } else if (typeof params.inputOptions === 'object') {
    processInputOptions(params.inputOptions)
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.error)(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`)
  }
}

const handleInputValue = (instance, params) => {
  const input = instance.getInput()
  _index_js__WEBPACK_IMPORTED_MODULE_0__.hide(input)
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(params.inputValue).then((inputValue) => {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : `${inputValue}`
    _index_js__WEBPACK_IMPORTED_MODULE_0__.show(input)
    input.focus()
    instance.hideLoading()
  })
    .catch((err) => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.error)(`Error in inputValue promise: ${err}`)
      input.value = ''
      _index_js__WEBPACK_IMPORTED_MODULE_0__.show(input)
      input.focus()
      instance.hideLoading()
    })
}

const populateInputOptions = {
  select: (content, inputOptions, params) => {
    const select = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.select)
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option')
      option.value = optionValue
      _index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(option, optionLabel)
      option.selected = isSelected(optionValue, params.inputValue)
      parent.appendChild(option)
    }
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0]
      const optionLabel = inputOption[1]
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) { // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup')
        optgroup.label = optionValue
        optgroup.disabled = false // not configurable for now
        select.appendChild(optgroup)
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]))
      } else { // case of <option>
        renderOption(select, optionLabel, optionValue)
      }
    })
    select.focus()
  },

  radio: (content, inputOptions, params) => {
    const radio = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio)
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0]
      const radioLabel = inputOption[1]
      const radioInput = document.createElement('input')
      const radioLabelElement = document.createElement('label')
      radioInput.type = 'radio'
      radioInput.name = _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio
      radioInput.value = radioValue
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true
      }
      const label = document.createElement('span')
      _index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(label, radioLabel)
      label.className = _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.label
      radioLabelElement.appendChild(radioInput)
      radioLabelElement.appendChild(label)
      radio.appendChild(radioLabelElement)
    })
    const radios = radio.querySelectorAll('input')
    if (radios.length) {
      radios[0].focus()
    }
  }
}

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
const formatInputOptions = (inputOptions) => {
  const result = []
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value
      if (typeof valueFormatted === 'object') { // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted)
      }
      result.push([key, valueFormatted])
    })
  } else {
    Object.keys(inputOptions).forEach(key => {
      let valueFormatted = inputOptions[key]
      if (typeof valueFormatted === 'object') { // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted)
      }
      result.push([key, valueFormatted])
    })
  }
  return result
}

const isSelected = (optionValue, inputValue) => {
  return inputValue && inputValue.toString() === optionValue.toString()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "measureScrollbar": () => (/* binding */ measureScrollbar)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");


// Measure scrollbar width for padding body during modal show/hide
// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
const measureScrollbar = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["scrollbar-measure"]
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHtmlToContainer": () => (/* binding */ parseHtmlToContainer)
/* harmony export */ });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");


const parseHtmlToContainer = (param, target) => {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param)

  // Object
  } else if (typeof param === 'object') {
    handleObject(param, target)

  // Plain string
  } else if (param) {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml)(target, param)
  }
}

const handleObject = (param, target) => {
  // JQuery element(s)
  if (param.jquery) {
    handleJqueryElem(target, param)

  // For other objects use their string representation
  } else {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml)(target, param.toString())
  }
}

const handleJqueryElem = (target, elem) => {
  target.textContent = ''
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true))
    }
  } else {
    target.appendChild(elem.cloneNode(true))
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/render.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _renderActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderActions.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js");
/* harmony import */ var _renderContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContainer.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js");
/* harmony import */ var _renderContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderContent.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js");
/* harmony import */ var _renderFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderFooter.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js");
/* harmony import */ var _renderHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderHeader.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderHeader.js");
/* harmony import */ var _renderPopup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderPopup.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js");








const render = (instance, params) => {
  (0,_renderPopup_js__WEBPACK_IMPORTED_MODULE_6__.renderPopup)(instance, params)
  ;(0,_renderContainer_js__WEBPACK_IMPORTED_MODULE_2__.renderContainer)(instance, params)

  ;(0,_renderHeader_js__WEBPACK_IMPORTED_MODULE_5__.renderHeader)(instance, params)
  ;(0,_renderContent_js__WEBPACK_IMPORTED_MODULE_3__.renderContent)(instance, params)
  ;(0,_renderActions_js__WEBPACK_IMPORTED_MODULE_1__.renderActions)(instance, params)
  ;(0,_renderFooter_js__WEBPACK_IMPORTED_MODULE_4__.renderFooter)(instance, params)

  if (typeof params.didRender === 'function') {
    params.didRender((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getPopup)())
  } else if (typeof params.onRender === 'function') {
    params.onRender((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getPopup)()) // @deprecated
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderActions": () => (/* binding */ renderActions)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




const renderActions = (instance, params) => {
  const actions = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getActions()
  const loader = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader()
  const confirmButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton()
  const denyButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton()
  const cancelButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton()

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(actions)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(actions, params, 'actions')

  // Render buttons
  renderButton(confirmButton, 'confirm', params)
  renderButton(denyButton, 'deny', params)
  renderButton(cancelButton, 'cancel', params)
  handleButtonsStyling(confirmButton, denyButton, cancelButton, params)

  if (params.reverseButtons) {
    actions.insertBefore(cancelButton, loader)
    actions.insertBefore(denyButton, loader)
    actions.insertBefore(confirmButton, loader)
  }

  // Loader
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.setInnerHtml(loader, params.loaderHtml)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(loader, params, 'loader')
}

function handleButtonsStyling (confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.removeClass([confirmButton, denyButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.styled)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass([confirmButton, denyButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.styled)

  // Buttons background colors
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor
  }
  if (params.denyButtonColor) {
    denyButton.style.backgroundColor = params.denyButtonColor
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor
  }
}

function renderButton (button, buttonType, params) {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.toggle(button, params[`show${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(buttonType)}Button`], 'inline-block')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.setInnerHtml(button, params[`${buttonType}ButtonText`]) // Set caption text
  button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]) // ARIA label

  // Add buttons custom classes
  button.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[buttonType]
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(button, params, `${buttonType}Button`)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(button, params[`${buttonType}ButtonClass`])
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCloseButton": () => (/* binding */ renderCloseButton)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderCloseButton = (instance, params) => {
  const closeButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCloseButton()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(closeButton, params.closeButtonHtml)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(closeButton, params, 'closeButton')

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(closeButton, params.showCloseButton)
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContainer": () => (/* binding */ renderContainer)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");




function handleBackdropParam (container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop
  } else if (!backdrop) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"])
  }
}

function handlePositionParam (container, position) {
  if (position in _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[position])
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)('The "position" parameter is not valid, defaulting to "center"')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.center)
  }
}

function handleGrowParam (container, grow) {
  if (grow && typeof grow === 'string') {
    const growClass = `grow-${grow}`
    if (growClass in _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[growClass])
    }
  }
}

const renderContainer = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContainer()

  if (!container) {
    return
  }

  handleBackdropParam(container, params.backdrop)

  if (!params.backdrop && params.allowOutsideClick) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`')
  }

  handlePositionParam(container, params.position)
  handleGrowParam(container, params.grow)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.applyCustomClass(container, params, 'container')

  // Set queue step attribute for getQueueStep() method
  const queueStep = document.body.getAttribute('data-swal2-queue-step')
  if (queueStep) {
    container.setAttribute('data-queue-step', queueStep)
    document.body.removeAttribute('data-swal2-queue-step')
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContent": () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _renderInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderInput.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js");



const renderContent = (instance, params) => {
  const htmlContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(htmlContainer, params, 'htmlContainer')

  // Content as HTML
  if (params.html) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.html, htmlContainer)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(htmlContainer, 'block')

  // Content as plain text
  } else if (params.text) {
    htmlContainer.textContent = params.text
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(htmlContainer, 'block')

  // No content
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(htmlContainer)
  }

  (0,_renderInput_js__WEBPACK_IMPORTED_MODULE_1__.renderInput)(instance, params)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContent(), params, 'content')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderFooter = (instance, params) => {
  const footer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFooter()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(footer, params.footer)

  if (params.footer) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.footer, footer)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(footer, params, 'footer')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderHeader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderHeader.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _renderCloseButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCloseButton.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js");
/* harmony import */ var _renderIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderIcon.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js");
/* harmony import */ var _renderImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderImage.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js");
/* harmony import */ var _renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProgressSteps.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js");
/* harmony import */ var _renderTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderTitle.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js");







const renderHeader = (instance, params) => {
  const header = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHeader()

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(header, params, 'header')

  // Progress steps
  ;(0,_renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_4__.renderProgressSteps)(instance, params)

  // Icon
  ;(0,_renderIcon_js__WEBPACK_IMPORTED_MODULE_2__.renderIcon)(instance, params)

  // Image
  ;(0,_renderImage_js__WEBPACK_IMPORTED_MODULE_3__.renderImage)(instance, params)

  // Title
  ;(0,_renderTitle_js__WEBPACK_IMPORTED_MODULE_5__.renderTitle)(instance, params)

  // Close button
  ;(0,_renderCloseButton_js__WEBPACK_IMPORTED_MODULE_1__.renderCloseButton)(instance, params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderIcon": () => (/* binding */ renderIcon)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const renderIcon = (instance, params) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__.default.innerParams.get(instance)
  const icon = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getIcon()

  // if the given icon already rendered, apply the styling without re-rendering the icon
  if (innerParams && params.icon === innerParams.icon) {
    // Custom or default content
    setContent(icon, params)

    applyStyles(icon, params)
    return
  }

  if (!params.icon && !params.iconHtml) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(icon)
  }

  if (params.icon && Object.keys(_classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes).indexOf(params.icon) === -1) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.error)(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`)
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(icon)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(icon)

  // Custom or default content
  setContent(icon, params)

  applyStyles(icon, params)

  // Animate icon
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(icon, params.showClass.icon)
}

const applyStyles = (icon, params) => {
  for (const iconType in _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes) {
    if (params.icon !== iconType) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.removeClass(icon, _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes[iconType])
    }
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(icon, _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes[params.icon])

  // Icon color
  setColor(icon, params)

  // Success icon background color
  adjustSuccessIconBackgoundColor()

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.applyCustomClass(icon, params, 'icon')
}

// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgoundColor = () => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color')
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor
  }
}

const setContent = (icon, params) => {
  icon.textContent = ''

  if (params.iconHtml) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, iconContent(params.iconHtml))
  } else if (params.icon === 'success') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, `
      <div class="swal2-success-circular-line-left"></div>
      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
      <div class="swal2-success-circular-line-right"></div>
    `)
  } else if (params.icon === 'error') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, `
      <span class="swal2-x-mark">
        <span class="swal2-x-mark-line-left"></span>
        <span class="swal2-x-mark-line-right"></span>
      </span>
    `)
  } else {
    const defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    }
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]))
  }
}

const setColor = (icon, params) => {
  if (!params.iconColor) {
    return
  }
  icon.style.color = params.iconColor
  icon.style.borderColor = params.iconColor
  for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setStyle(icon, sel, 'backgroundColor', params.iconColor)
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor)
}

const iconContent = (content) => `<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["icon-content"]}">${content}</div>`


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderImage": () => (/* binding */ renderImage)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderImage = (instance, params) => {
  const image = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getImage()

  if (!params.imageUrl) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(image)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(image, '')

  // Src, alt
  image.setAttribute('src', params.imageUrl)
  image.setAttribute('alt', params.imageAlt)

  // Width, height
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(image, 'width', params.imageWidth)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(image, 'height', params.imageHeight)

  // Class
  image.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(image, params, 'image')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInput": () => (/* binding */ renderInput)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']

const renderInput = (instance, params) => {
  const content = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContent()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__.default.innerParams.get(instance)
  const rerender = !innerParams || params.input !== innerParams.input

  inputTypes.forEach((inputType) => {
    const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType]
    const inputContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass(content, inputClass)

    // set attributes
    setAttributes(inputType, params.inputAttributes)

    // set class
    inputContainer.className = inputClass

    if (rerender) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(inputContainer)
    }
  })

  if (params.input) {
    if (rerender) {
      showInput(params)
    }
    // set custom class
    setCustomClass(params)
  }
}

const showInput = (params) => {
  if (!renderInputType[params.input]) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.error)(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`)
  }

  const inputContainer = getInputContainer(params.input)
  const input = renderInputType[params.input](inputContainer, params)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(input)

  // input autofocus
  setTimeout(() => {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.focusInput(input)
  })
}

const removeAttributes = (input) => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name
    if (!['type', 'value', 'style'].includes(attrName)) {
      input.removeAttribute(attrName)
    }
  }
}

const setAttributes = (inputType, inputAttributes) => {
  const input = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getInput(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContent(), inputType)
  if (!input) {
    return
  }

  removeAttributes(input)

  for (const attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue
    }

    input.setAttribute(attr, inputAttributes[attr])
  }
}

const setCustomClass = (params) => {
  const inputContainer = getInputContainer(params.input)
  if (params.customClass) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(inputContainer, params.customClass.input)
  }
}

const setInputPlaceholder = (input, params) => {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder
  }
}

const setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    input.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input
    const label = document.createElement('label')
    const labelClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["input-label"]
    label.setAttribute('for', input.id)
    label.className = labelClass
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(label, params.customClass.inputLabel)
    label.innerText = params.inputLabel
    prependTo.insertAdjacentElement('beforebegin', label)
  }
}

const getInputContainer = (inputType) => {
  const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType] ? _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType] : _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input
  return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContent(), inputClass)
}

const renderInputType = {}

renderInputType.text =
renderInputType.email =
renderInputType.password =
renderInputType.number =
renderInputType.tel =
renderInputType.url = (input, params) => {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue
  } else if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPromise)(params.inputValue)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`)
  }
  setInputLabel(input, input, params)
  setInputPlaceholder(input, params)
  input.type = params.input
  return input
}

renderInputType.file = (input, params) => {
  setInputLabel(input, input, params)
  setInputPlaceholder(input, params)
  return input
}

renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector('input')
  const rangeOutput = range.querySelector('output')
  rangeInput.value = params.inputValue
  rangeInput.type = params.input
  rangeOutput.value = params.inputValue
  setInputLabel(rangeInput, range, params)
  return range
}

renderInputType.select = (select, params) => {
  select.textContent = ''
  if (params.inputPlaceholder) {
    const placeholder = document.createElement('option')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(placeholder, params.inputPlaceholder)
    placeholder.value = ''
    placeholder.disabled = true
    placeholder.selected = true
    select.appendChild(placeholder)
  }
  setInputLabel(select, select, params)
  return select
}

renderInputType.radio = (radio) => {
  radio.textContent = ''
  return radio
}

renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getInput(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContent(), 'checkbox')
  checkbox.value = 1
  checkbox.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox
  checkbox.checked = Boolean(params.inputValue)
  const label = checkboxContainer.querySelector('span')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(label, params.inputPlaceholder)
  return checkboxContainer
}

renderInputType.textarea = (textarea, params) => {
  textarea.value = params.inputValue
  setInputPlaceholder(textarea, params)
  setInputLabel(textarea, textarea, params)

  const getPadding = (el) => parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight)

  if ('MutationObserver' in window) { // #1699
    const initialPopupWidth = parseInt(window.getComputedStyle(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()).width)
    const outputsize = () => {
      const contentWidth = textarea.offsetWidth + getPadding(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()) + getPadding(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContent())
      if (contentWidth > initialPopupWidth) {
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup().style.width = `${contentWidth}px`
      } else {
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup().style.width = null
      }
    }
    new MutationObserver(outputsize).observe(textarea, {
      attributes: true, attributeFilter: ['style']
    })
  }

  return textarea
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPopup": () => (/* binding */ renderPopup)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderPopup = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getPopup()

  // Width
  if (params.toast) { // #2170
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(container, 'width', params.width)
    popup.style.width = '100%'
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(popup, 'width', params.width)
  }

  // Padding
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(popup, 'padding', params.padding)

  // Background
  if (params.background) {
    popup.style.background = params.background
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage())

  // Classes
  addClasses(popup, params)
}

const addClasses = (popup, params) => {
  // Default Class + showClass when updating Swal.update({})
  popup.className = `${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup} ${_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(popup) ? params.showClass.popup : ''}`

  if (params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"])
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.toast)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.modal)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(popup, params, 'popup')
  if (typeof params.customClass === 'string') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, params.customClass)
  }

  // Icon class (#1842)
  if (params.icon) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[`icon-${params.icon}`])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProgressSteps": () => (/* binding */ renderProgressSteps)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../staticMethods/queue.js */ "./node_modules/sweetalert2/src/staticMethods/queue.js");





const createStepElement = (step) => {
  const stepEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-step"])
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(stepEl, step)
  return stepEl
}

const createLineElement = (params) => {
  const lineEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(lineEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-step-line"])
  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance
  }
  return lineEl
}

const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getProgressSteps()
  if (!params.progressSteps || params.progressSteps.length === 0) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(progressStepsContainer)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(progressStepsContainer)
  progressStepsContainer.textContent = ''
  const currentProgressStep = parseInt(params.currentProgressStep === undefined ? (0,_staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_3__.getQueueStep)() : params.currentProgressStep)
  if (currentProgressStep >= params.progressSteps.length) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(
      'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
      '(currentProgressStep like JS arrays starts from 0)'
    )
  }

  params.progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step)
    progressStepsContainer.appendChild(stepEl)
    if (index === currentProgressStep) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["active-progress-step"])
    }

    if (index !== params.progressSteps.length - 1) {
      const lineEl = createLineElement(params)
      progressStepsContainer.appendChild(lineEl)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTitle": () => (/* binding */ renderTitle)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderTitle = (instance, params) => {
  const title = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTitle()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(title, params.title || params.titleText)

  if (params.title) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.title, title)
  }

  if (params.titleText) {
    title.innerText = params.titleText
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(title, params, 'title')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/getTemplateParams.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/getTemplateParams.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplateParams": () => (/* binding */ getTemplateParams)
/* harmony export */ });
/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");



const swalStringParams = ['swal-title', 'swal-html', 'swal-footer']

const getTemplateParams = (params) => {
  const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template
  if (!template) {
    return {}
  }
  const templateContent = template.content || template // IE11

  showWarningsForElements(templateContent)

  const result = Object.assign(
    getSwalParams(templateContent),
    getSwalButtons(templateContent),
    getSwalImage(templateContent),
    getSwalIcon(templateContent),
    getSwalInput(templateContent),
    getSwalStringParams(templateContent, swalStringParams),
  )
  return result
}

const getSwalParams = (templateContent) => {
  const result = {}
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(templateContent.querySelectorAll('swal-param')).forEach((param) => {
    showWarningsForAttributes(param, ['name', 'value'])
    const paramName = param.getAttribute('name')
    let value = param.getAttribute('value')
    if (typeof _params_js__WEBPACK_IMPORTED_MODULE_0__.default[paramName] === 'boolean' && value === 'false') {
      value = false
    }
    if (typeof _params_js__WEBPACK_IMPORTED_MODULE_0__.default[paramName] === 'object') {
      value = JSON.parse(value)
    }
    result[paramName] = value
  })
  return result
}

const getSwalButtons = (templateContent) => {
  const result = {}
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(templateContent.querySelectorAll('swal-button')).forEach((button) => {
    showWarningsForAttributes(button, ['type', 'color', 'aria-label'])
    const type = button.getAttribute('type')
    result[`${type}ButtonText`] = button.innerHTML
    result[`show${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(type)}Button`] = true
    if (button.hasAttribute('color')) {
      result[`${type}ButtonColor`] = button.getAttribute('color')
    }
    if (button.hasAttribute('aria-label')) {
      result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label')
    }
  })
  return result
}

const getSwalImage = (templateContent) => {
  const result = {}
  const image = templateContent.querySelector('swal-image')
  if (image) {
    showWarningsForAttributes(image, ['src', 'width', 'height', 'alt'])
    if (image.hasAttribute('src')) {
      result.imageUrl = image.getAttribute('src')
    }
    if (image.hasAttribute('width')) {
      result.imageWidth = image.getAttribute('width')
    }
    if (image.hasAttribute('height')) {
      result.imageHeight = image.getAttribute('height')
    }
    if (image.hasAttribute('alt')) {
      result.imageAlt = image.getAttribute('alt')
    }
  }
  return result
}

const getSwalIcon = (templateContent) => {
  const result = {}
  const icon = templateContent.querySelector('swal-icon')
  if (icon) {
    showWarningsForAttributes(icon, ['type', 'color'])
    if (icon.hasAttribute('type')) {
      result.icon = icon.getAttribute('type')
    }
    if (icon.hasAttribute('color')) {
      result.iconColor = icon.getAttribute('color')
    }
    result.iconHtml = icon.innerHTML
  }
  return result
}

const getSwalInput = (templateContent) => {
  const result = {}
  const input = templateContent.querySelector('swal-input')
  if (input) {
    showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value'])
    result.input = input.getAttribute('type') || 'text'
    if (input.hasAttribute('label')) {
      result.inputLabel = input.getAttribute('label')
    }
    if (input.hasAttribute('placeholder')) {
      result.inputPlaceholder = input.getAttribute('placeholder')
    }
    if (input.hasAttribute('value')) {
      result.inputValue = input.getAttribute('value')
    }
  }
  const inputOptions = templateContent.querySelectorAll('swal-input-option')
  if (inputOptions.length) {
    result.inputOptions = {}
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(inputOptions).forEach((option) => {
      showWarningsForAttributes(option, ['value'])
      const optionValue = option.getAttribute('value')
      const optionName = option.innerHTML
      result.inputOptions[optionValue] = optionName
    })
  }
  return result
}

const getSwalStringParams = (templateContent, paramNames) => {
  const result = {}
  for (const i in paramNames) {
    const paramName = paramNames[i]
    const tag = templateContent.querySelector(paramName)
    if (tag) {
      showWarningsForAttributes(tag, [])
      result[paramName.replace(/^swal-/, '')] = tag.innerHTML
    }
  }
  return result
}

const showWarningsForElements = (template) => {
  const allowedElements = swalStringParams.concat([
    'swal-param',
    'swal-button',
    'swal-image',
    'swal-icon',
    'swal-input',
    'swal-input-option',
  ])
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(template.querySelectorAll('*')).forEach((el) => {
    if (el.parentNode !== template) { // can't use template.children because of IE11
      return
    }
    const tagName = el.tagName.toLowerCase()
    if (allowedElements.indexOf(tagName) === -1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Unrecognized element <${tagName}>`)
    }
  })
}

const showWarningsForAttributes = (el, allowedAttributes) => {
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(el.attributes).forEach((attribute) => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)([
        `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
        `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`
      ])
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/ieFix.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/ieFix.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IEfix": () => (/* binding */ IEfix),
/* harmony export */   "undoIEfix": () => (/* binding */ undoIEfix)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* istanbul ignore file */


// https://stackoverflow.com/a/21825207
const isIE11 = () => !!window.MSInputMethodContext && !!document.documentMode

// Fix IE11 centering sweetalert2/issues/933
const fixVerticalPositionIE = () => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()

  container.style.removeProperty('align-items')
  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start'
  }
}

const IEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE()
    window.addEventListener('resize', fixVerticalPositionIE)
  }
}

const undoIEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/iosFix.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/iosFix.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iOSfix": () => (/* binding */ iOSfix),
/* harmony export */   "undoIOSfix": () => (/* binding */ undoIOSfix)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* istanbul ignore file */



// Fix iOS scrolling http://stackoverflow.com/q/39626302

const iOSfix = () => {
  const iOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (iOS && !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = `${offset * -1}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)
    lockBodyScroll()
    addBottomPaddingForTallPopups() // #1948
  }
}

const addBottomPaddingForTallPopups = () => {
  const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)
  if (safari) {
    const bottomPanelHeight = 44
    if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer().style.paddingBottom = `${bottomPanelHeight}px`
    }
  }
}

const lockBodyScroll = () => { // #1246
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  let preventTouchMove
  container.ontouchstart = (e) => {
    preventTouchMove = shouldPreventTouchMove(e)
  }
  container.ontouchmove = (e) => {
    if (preventTouchMove) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
}

const shouldPreventTouchMove = (event) => {
  const target = event.target
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  if (isStylys(event) || isZoom(event)) {
    return false
  }
  if (target === container) {
    return true
  }
  if (
    !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable(container) &&
    target.tagName !== 'INPUT' && // #1603
    !(
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContent()) && // #1944
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContent().contains(target)
    )
  ) {
    return true
  }
  return false
}

const isStylys = (event) => { // #1786
  return event.touches && event.touches.length && event.touches[0].touchType === 'stylus'
}

const isZoom = (event) => { // #1891
  return event.touches && event.touches.length > 1
}

const undoIOSfix = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/isNodeEnv.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/isNodeEnv.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeEnv": () => (/* binding */ isNodeEnv)
/* harmony export */ });
// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined'


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/openPopup.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/openPopup.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHOW_CLASS_TIMEOUT": () => (/* binding */ SHOW_CLASS_TIMEOUT),
/* harmony export */   "openPopup": () => (/* binding */ openPopup)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _iosFix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _ieFix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ieFix.js */ "./node_modules/sweetalert2/src/utils/ieFix.js");
/* harmony import */ var _aria_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");








const SHOW_CLASS_TIMEOUT = 10

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param params
 */
const openPopup = (params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()

  if (typeof params.willOpen === 'function') {
    params.willOpen(popup)
  } else if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup) // @deprecated
  }

  const bodyStyles = window.getComputedStyle(document.body)
  const initialBodyOverflow = bodyStyles.overflowY
  addClasses(container, popup, params)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  setTimeout(() => {
    setScrollingVisibility(container, popup)
  }, SHOW_CLASS_TIMEOUT)

  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isModal()) {
    fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow)
    ;(0,_aria_js__WEBPACK_IMPORTED_MODULE_5__.setAriaHidden)()
  }

  if (!_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast() && !_globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.previousActiveElement) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__.default.previousActiveElement = document.activeElement
  }

  runDidOpen(popup, params)

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["no-transition"])
}

const runDidOpen = (popup, params) => {
  if (typeof params.didOpen === 'function') {
    setTimeout(() => params.didOpen(popup))
  } else if (typeof params.onOpen === 'function') {
    setTimeout(() => params.onOpen(popup)) // @deprecated
  }
}

const swalOpenAnimationFinished = (event) => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  if (event.target !== popup) {
    return
  }
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  popup.removeEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent, swalOpenAnimationFinished)
  container.style.overflowY = 'auto'
}

const setScrollingVisibility = (container, popup) => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent && _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden'
    popup.addEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent, swalOpenAnimationFinished)
  } else {
    container.style.overflowY = 'auto'
  }
}

const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  ;(0,_iosFix_js__WEBPACK_IMPORTED_MODULE_3__.iOSfix)()
  ;(0,_ieFix_js__WEBPACK_IMPORTED_MODULE_4__.IEfix)()

  if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
    (0,_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__.fixScrollbar)()
  }

  // sweetalert2/issues/1247
  setTimeout(() => {
    container.scrollTop = 0
  })
}

const addClasses = (container, popup, params) => {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(container, params.showClass.backdrop)
  // the workaround with setting/unsetting opacity is needed for #2019 and 2059
  popup.style.setProperty('opacity', '0', 'important')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(popup)
  setTimeout(() => {
    // Animate popup right after showing it
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(popup, params.showClass.popup)
    // and remove the opacity workaround
    popup.style.removeProperty('opacity')
  }, SHOW_CLASS_TIMEOUT) // 10ms in order to fix #2062

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.shown)
  if (params.heightAuto && params.backdrop && !params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["height-auto"])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/params.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/params.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultParams": () => (/* binding */ defaultParams),
/* harmony export */   "updatableParams": () => (/* binding */ updatableParams),
/* harmony export */   "deprecatedParams": () => (/* binding */ deprecatedParams),
/* harmony export */   "isValidParameter": () => (/* binding */ isValidParameter),
/* harmony export */   "isUpdatableParameter": () => (/* binding */ isUpdatableParameter),
/* harmony export */   "isDeprecatedParameter": () => (/* binding */ isDeprecatedParameter),
/* harmony export */   "showWarningsForParams": () => (/* binding */ showWarningsForParams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconColor: undefined,
  iconHtml: undefined,
  template: undefined,
  toast: false,
  animation: true,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show',
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide',
  },
  customClass: {},
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showDenyButton: false,
  showCancelButton: false,
  preConfirm: undefined,
  preDeny: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  denyButtonText: 'No',
  denyButtonAriaLabel: '',
  denyButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  loaderHtml: '',
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputLabel: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  returnInputValueOnDeny: false,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  onBeforeOpen: undefined,
  onOpen: undefined,
  willOpen: undefined,
  didOpen: undefined,
  onRender: undefined,
  didRender: undefined,
  onClose: undefined,
  onAfterClose: undefined,
  willClose: undefined,
  didClose: undefined,
  onDestroy: undefined,
  didDestroy: undefined,
  scrollbarPadding: true
}

const updatableParams = [
  'allowEscapeKey',
  'allowOutsideClick',
  'background',
  'buttonsStyling',
  'cancelButtonAriaLabel',
  'cancelButtonColor',
  'cancelButtonText',
  'closeButtonAriaLabel',
  'closeButtonHtml',
  'confirmButtonAriaLabel',
  'confirmButtonColor',
  'confirmButtonText',
  'currentProgressStep',
  'customClass',
  'denyButtonAriaLabel',
  'denyButtonColor',
  'denyButtonText',
  'didClose',
  'didDestroy',
  'footer',
  'hideClass',
  'html',
  'icon',
  'iconColor',
  'iconHtml',
  'imageAlt',
  'imageHeight',
  'imageUrl',
  'imageWidth',
  'onAfterClose',
  'onClose',
  'onDestroy',
  'progressSteps',
  'reverseButtons',
  'showCancelButton',
  'showCloseButton',
  'showConfirmButton',
  'showDenyButton',
  'text',
  'title',
  'titleText',
  'willClose',
]

const deprecatedParams = {
  animation: 'showClass" and "hideClass',
  onBeforeOpen: 'willOpen',
  onOpen: 'didOpen',
  onRender: 'didRender',
  onClose: 'willClose',
  onAfterClose: 'didClose',
  onDestroy: 'didDestroy',
}

const toastIncompatibleParams = [
  'allowOutsideClick',
  'allowEnterKey',
  'backdrop',
  'focusConfirm',
  'focusDeny',
  'focusCancel',
  'heightAuto',
  'keydownListenerCapture'
]

/**
 * Is valid parameter
 * @param {String} paramName
 */
const isValidParameter = (paramName) => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName)
}

/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */
const isUpdatableParameter = (paramName) => {
  return updatableParams.indexOf(paramName) !== -1
}

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams[paramName]
}

const checkIfParamIsValid = (param) => {
  if (!isValidParameter(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(`Unknown parameter "${param}"`)
  }
}

const checkIfToastParamIsValid = (param) => {
  if (toastIncompatibleParams.includes(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(`The parameter "${param}" is incompatible with toasts`)
  }
}

const checkIfParamIsDeprecated = (param) => {
  if (isDeprecatedParameter(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warnAboutDeprecation)(param, isDeprecatedParameter(param))
  }
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
const showWarningsForParams = (params) => {
  for (const param in params) {
    checkIfParamIsValid(param)

    if (params.toast) {
      checkIfToastParamIsValid(param)
    }

    checkIfParamIsDeprecated(param)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultParams);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/scrollbarFix.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/scrollbarFix.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixScrollbar": () => (/* binding */ fixScrollbar),
/* harmony export */   "undoScrollbar": () => (/* binding */ undoScrollbar)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding + _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.measureScrollbar()}px`
  }
}

const undoScrollbar = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding !== null) {
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding = null
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/setParameters.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/setParameters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setParameters)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultInputValidators.js */ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js");




function setDefaultInputValidators (params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(_defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__.default).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__.default[key]
      }
    })
  }
}

function validateCustomTargetElement (params) {
  // Determine if the custom target element is valid
  if (
    !params.target ||
    (typeof params.target === 'string' && !document.querySelector(params.target)) ||
    (typeof params.target !== 'string' && !params.target.appendChild)
  ) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }
}

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters (params) {
  setDefaultInputValidators(params)

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://sweetalert2.github.io/#ajax-request'
    )
  }

  // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function
  params.animation = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.callIfFunction)(params.animation)

  validateCustomTargetElement(params)

  // Replace newlines with <br> in title
  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />')
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.init(params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consolePrefix": () => (/* binding */ consolePrefix),
/* harmony export */   "uniqueArray": () => (/* binding */ uniqueArray),
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "objectValues": () => (/* binding */ objectValues),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "warnAboutDeprecation": () => (/* binding */ warnAboutDeprecation),
/* harmony export */   "callIfFunction": () => (/* binding */ callIfFunction),
/* harmony export */   "hasToPromiseFn": () => (/* binding */ hasToPromiseFn),
/* harmony export */   "asPromise": () => (/* binding */ asPromise),
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
const consolePrefix = 'SweetAlert2:'

/**
 * Filter the unique values into a new array
 * @param arr
 */
const uniqueArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * Capitalize the first letter of a string
 * @param str
 */
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Returns the array of object values (Object.values isn't supported in IE11)
 * @param obj
 */
const objectValues = (obj) => Object.keys(obj).map(key => obj[key])

/**
 * Convert NodeList to Array
 * @param nodeList
 */
const toArray = (nodeList) => Array.prototype.slice.call(nodeList)

/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`)
}

/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
const previousWarnOnceMessages = []

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message)
    warn(message)
  }
}

/**
 * Show a one-time console warning about deprecated params/methods
 */
const warnAboutDeprecation = (deprecatedParam, useInstead) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`)
}

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg

const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === 'function'

const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg)

const isPromise = (arg) => arg && Promise.resolve(arg) === arg


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/admin.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FsZXJ0cy9ub3RpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvU3dlZXRBbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL19kZXN0cm95LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL19tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL2J1dHRvbnMtaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvY2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvZW5hYmxlLWRpc2FibGUtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvZ2V0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvaGlkZUxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMva2V5ZG93bi1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL3BvcHVwLWNsaWNrLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvcHJvZ3Jlc3Mtc3RlcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL3ZhbGlkYXRpb24tbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3ByaXZhdGVNZXRob2RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvcHJpdmF0ZVByb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvYXJnc1RvUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy9iaW5kQ2xpY2tIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL2ZpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL21peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvc2hvd0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9EaXNtaXNzUmVhc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9hcmlhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RlZmF1bHRJbnB1dFZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vYW5pbWF0aW9uRW5kRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vZG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vZ2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9pbml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL2lucHV0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vbWVhc3VyZVNjcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9wYXJzZUh0bWxUb0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJDbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlckhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVySWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVySW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlcklucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyUHJvZ3Jlc3NTdGVwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9nZXRUZW1wbGF0ZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2llRml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvaW9zRml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvaXNOb2RlRW52LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvb3BlblBvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvcGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvc2Nyb2xsYmFyRml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvc2V0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInRoZW1lIiwiU2VjdGlvbnMiLCJjb25zdHJ1Y3RvcnMiLCJpbnN0YW5jZXMiLCJwcm90b3R5cGUiLCJfIiwiYXNzaWduSW4iLCJfY3JlYXRlSW5zdGFuY2UiLCJjb250YWluZXIiLCJjb25zdHJ1Y3RvciIsIiRjb250YWluZXIiLCIkIiwiaWQiLCJhdHRyIiwidHlwZSIsImlzVW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJwdXNoIiwicmVnaXN0ZXIiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiYmluZCIsInByb2NlZWQiLCJMb2FkaW5nT3ZlcmxheSIsInNob3ciLCJlbCIsImV2ZW50VGV4dCIsImFkZENsYXNzIiwidHJpZ2dlciIsImhpZGUiLCJyZW1vdmVDbGFzcyIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVdyYXBwZXIiLCJjb25zdHJhaW50cyIsImlzV2l0aEVycm9yIiwiZm9ybUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImluaXRGb3JtVmFsaWRhdGlvbiIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpdGVtIiwiZXJyb3JzIiwidmFsaWRhdGUiLCJmdWxsTWVzc2FnZXMiLCJzaG93RXJyb3JzRm9ySW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJpbnB1dCIsIm1lc3NhZ2VzIiwiY2xvc2VzdFBhcmVudCIsInJlc2V0SW5wdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JFYWNoIiwiZXJyb3IiLCJhZGRFcnJvciIsImNoaWxkIiwiY2xhc3NOYW1lIiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiYmxvY2siLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJPcmRlciIsInNlbGVjdG9ycyIsIkJPRFkiLCJBTEVSVCIsIk9SREVSX1dSQVBQRVIiLCJSRUNJUElFTlRfV1JBUFBFUiIsIlJFQ0lQSUVOVF9CT0RZIiwiUkVDSVBJRU5UX0ZPUk0iLCJSRUNJUElFTlRfU1VCTUlUX0JVVFRPTiIsIlNFTkRFUl9XUkFQUEVSIiwiU0VOREVSX0JPRFkiLCJTRU5ERVJfRk9STSIsIlNFTkRFUl9TVUJNSVRfQlVUVE9OIiwiT1JERVJfQ09ORklSTUFUSU9OX1NFTkRfQlVUVE9OIiwiT1JERVJfQ09ORklSTUFUSU9OX0JPRFkiLCJTSElQUElOR19DT05GSVJNQVRJT05fU0VORF9CVVRUT04iLCJTSElQUElOR19DT05GSVJNQVRJT05fQk9EWSIsIk1BUktfQVNfRlVMRklMTEVEX0JVVFRPTiIsIk9SREVSX1NUQVRVU19XUkFQUEVSIiwiT1JERVJfU1RBVFVTX0JPRFkiLCJNQVJLX0FTX1BBSURfQlVUVE9OIiwiUEFZTUVOVF9TVEFUVVNfV1JBUFBFUiIsIlBBWU1FTlRfU1RBVFVTX0JPRFkiLCJDQU5DRUxfT1JERVJfQlVUVE9OIiwiQ0FOQ0VMX09SREVSX1dSQVBQRVIiLCJDQU5DRUxfT1JERVJfQk9EWSIsIkNPTU1FTlRfV1JBUFBFUiIsIkNPTU1FTlRfQk9EWSIsIkNPTU1FTlRfRk9STSIsIkNPTU1FTlRfU1VCTUlUX0JVVFRPTiIsInNjcm9sbFVwIiwiYmVoYXZpb3IiLCJyZWNpcGllbnQiLCJzZW5kZXIiLCJjb21tZW50IiwicGF5bWVudFN0YXR1cyIsImFqYXhMb2FkaW5nIiwib24iLCJzdWJtaXRSZWNpcGllbnRGb3JtIiwic3VibWl0U2VuZGVyRm9ybSIsInN1Ym1pdENvbW1lbnRGb3JtIiwic2VuZE9yZGVyQ29uZmlybWF0aW9uIiwic2VuZFNoaXBwaW5nQ29uZmlybWF0aW9uIiwibWFya0FzRnVsZmlsbGVkIiwibWFya0FzUGFpZCIsImNhbmNlbE9yZGVyIiwicHJldmVudEludGVyYWN0aW9uIiwiYWpheFN0YXJ0IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiYWpheFN0b3AiLCJyZWNpcGllbnRWYWxpZGF0b3IiLCJyZWNpcGllbnRDb25zdHJhaW50cyIsInNlbmRlclZhbGlkYXRvciIsInNlbmRlckNvbnN0cmFpbnRzIiwiY29tbWVudFZhbGlkYXRvciIsImNvbW1lbnRDb25zdHJhaW50cyIsImV4dGVuZCIsIl9kaXNhYmxlRm9ybUVsZW1lbnRzIiwiZmluZCIsInByb3AiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlRm9ybSIsImhhc0Vycm9yIiwiJGVsIiwiJHdyYXBwZXIiLCIkcmVjaXBpZW50Rm9ybSIsIiRyZWNpcGllbnRCb2R5IiwicmVjaXBpZW50Rm9ybSIsImExIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzZXJpYWxpemUiLCJjb250ZXh0IiwiZG9uZSIsImZhaWwiLCJqcVhIUiIsInJlc3BvbnNlVGV4dCIsInJlcGxhY2VXaXRoIiwiYWx3YXlzIiwid2hlbiIsInNldFRpbWVvdXQiLCJjbG9zZXN0IiwibW9kYWwiLCJsb2NhdGlvbiIsInJlbG9hZCIsIiRzZW5kZXJGb3JtIiwiJHNlbmRlckJvZHkiLCJzZW5kZXJGb3JtIiwiJG9yZGVyQ29uZmlybWF0aW9uQm9keSIsIkpTT04iLCJwYXJzZSIsIk5vdGlmeSIsInBlcmZvcm1hbmNlIiwibmF2aWdhdGlvbiIsIlRZUEVfUkVMT0FEIiwiJHNoaXBwaW5nQ29uZmlybWF0aW9uQm9keSIsIiRvcmRlclN0YXR1c0JvZHkiLCJpc1NlbmRFbWFpbCIsInBhcmFtIiwibm9TaGlwcGluZ0NvbmZpcm1hdGlvbiIsIiRwYXltZW50U3RhdHVzQm9keSIsIiRjYW5jZWxPcmRlckJvZHkiLCIkY29tbWVudEZvcm0iLCIkY29tbWVudEJvZHkiLCJjb21tZW50Rm9ybSIsInN1Ym1pdFBheW1lbnRTdGF0dXNGb3JtIiwiJHBheW1lbnRTdGF0dXNGb3JtIiwiUEFZTUVOVF9TVEFUVVNfRk9STSIsInBheW1lbnRTdGF0dXNGb3JtIiwiQW5hbHl0aWNzIiwiQU5BTFlUSUNTX1dSQVBQRVIiLCJFWFBPUlRfUkVQT1JUX0RPV05MT0FEX0JVVFRPTiIsIkVYUE9SVF9SRVBPUlRfQk9EWSIsImRvd25sb2FkUmVwb3J0IiwiJGV4cG9ydFJlcG9ydEJvZHkiLCJocmVmIiwicmVhZHkiLCJzZWN0aW9ucyIsImluaXQiLCJ0b29sdGlwIiwic3dhbCIsIlN3YWwiLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJzaG93Q2xvc2VCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiaWNvbiIsImFsZXJ0IiwibWl4aW4iLCJjdXN0b21DbGFzcyIsInBvcHVwIiwiY29udGVudCIsImZpcmUiLCJ0aXRsZSIsIndhcm5pbmciLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWVELE1BQU0sQ0FBQ0MsS0FBUCxJQUFnQixFQUEvQjs7QUFFQUEsS0FBSyxDQUFDQyxRQUFOLEdBQWlCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbkMsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakIsQ0FGbUMsQ0FJbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQVhEOztBQWFBSCxLQUFLLENBQUNDLFFBQU4sQ0FBZUcsU0FBZixHQUEyQkMsQ0FBQyxDQUFDQyxRQUFGLENBQVcsRUFBWCxFQUFlTixLQUFLLENBQUNDLFFBQU4sQ0FBZUcsU0FBOUIsRUFBeUM7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZUFBZSxnQkFBZ0IsNkVBQTZFLFdBQVc7QUFDdkg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRtaW4uanMgLSBzaW1pbGFyIHRvIFNob3BpZnkgdGhlbWUuanNcbiAqXG4gKiBEZXBlbmRlbmNpZXM6IGxvZGFzaC5qcyAoTG9kYXNoIENvcmUpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG47XG5pbXBvcnQgTm90aWZ5IGZyb20gJy4vYWxlcnRzL25vdGlmeSdcblxud2luZG93LnRoZW1lID0gd2luZG93LnRoZW1lIHx8IHt9O1xuXG50aGVtZS5TZWN0aW9ucyA9IGZ1bmN0aW9uIFNlY3Rpb25zKCkge1xuICB0aGlzLmNvbnN0cnVjdG9ycyA9IHt9O1xuICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuXG4gIC8vICQoZG9jdW1lbnQpXG4gIC8vICAgICAub24oJ3N0dWxpcGFuOnNlY3Rpb246bG9hZCcsIHRoaXMuX29uU2VjdGlvbkxvYWQuYmluZCh0aGlzKSlcbiAgLy8gICAgIC5vbignc3R1bGlwYW46c2VjdGlvbjp1bmxvYWQnLCB0aGlzLl9vblNlY3Rpb25VbmxvYWQuYmluZCh0aGlzKSlcbiAgLy8gICAgIC5vbignc3R1bGlwYW46c2VjdGlvbjpzZWxlY3QnLCB0aGlzLl9vblNlbGVjdC5iaW5kKHRoaXMpKVxuICAvLyAgICAgLm9uKCdzdHVsaXBhbjpzZWN0aW9uOmRlc2VsZWN0JywgdGhpcy5fb25EZXNlbGVjdC5iaW5kKHRoaXMpKVxuICAvLyAgICAgLm9uKCdzdHVsaXBhbjpibG9jazpzZWxlY3QnLCB0aGlzLl9vbkJsb2NrU2VsZWN0LmJpbmQodGhpcykpXG4gIC8vICAgICAub24oJ3N0dWxpcGFuOmJsb2NrOmRlc2VsZWN0JywgdGhpcy5fb25CbG9ja0Rlc2VsZWN0LmJpbmQodGhpcykpO1xufTtcblxudGhlbWUuU2VjdGlvbnMucHJvdG90eXBlID0gXy5hc3NpZ25Jbih7fSwgdGhlbWUuU2VjdGlvbnMucHJvdG90eXBlLCB7XG4gIF9jcmVhdGVJbnN0YW5jZTogZnVuY3Rpb24oY29udGFpbmVyLCBjb25zdHJ1Y3Rvcikge1xuICAgIHZhciAkY29udGFpbmVyID0gJChjb250YWluZXIpO1xuICAgIHZhciBpZCA9ICRjb250YWluZXIuYXR0cignZGF0YS1zZWN0aW9uLWlkJyk7XG4gICAgdmFyIHR5cGUgPSAkY29udGFpbmVyLmF0dHIoJ2RhdGEtc2VjdGlvbi10eXBlJyk7XG5cbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yIHx8IHRoaXMuY29uc3RydWN0b3JzW3R5cGVdO1xuXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoY29uc3RydWN0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluc3RhbmNlID0gXy5hc3NpZ25JbihuZXcgY29uc3RydWN0b3IoY29udGFpbmVyKSwgeyAgIC8vIEUuZy46IG5ldyBBZGRUb0NhcnQoY29udGFpbmVyKSwgYmVjYXVzZSBjb25zdHJ1Y3RvciBoZXJlIHJlY2VpdmVkIHRoaXMgdmFsdWU6IHRoZW1lLkNhcnRTZWN0aW9uXG4gICAgICBpZDogaWQsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgICB9KTtcblxuICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICB9LFxuXG4gIC8vIF9vblNlY3Rpb25Mb2FkOiBmdW5jdGlvbihldnQpIHtcbiAgLy8gICB2YXIgY29udGFpbmVyID0gJCgnW2RhdGEtc2VjdGlvbi1pZF0nLCBldnQudGFyZ2V0KVswXTtcbiAgLy8gICBpZiAoY29udGFpbmVyKSB7XG4gIC8vICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZShjb250YWluZXIpO1xuICAvLyAgIH1cbiAgLy8gfSxcbiAgLy9cbiAgLy8gX29uU2VjdGlvblVubG9hZDogZnVuY3Rpb24oZXZ0KSB7XG4gIC8vICAgdGhpcy5pbnN0YW5jZXMgPSBfLmZpbHRlcih0aGlzLmluc3RhbmNlcywgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgLy8gICAgIHZhciBpc0V2ZW50SW5zdGFuY2UgPSBpbnN0YW5jZS5pZCA9PT0gZXZ0LmRldGFpbC5zZWN0aW9uSWQ7XG4gIC8vXG4gIC8vICAgICBpZiAoaXNFdmVudEluc3RhbmNlKSB7XG4gIC8vICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaW5zdGFuY2Uub25VbmxvYWQpKSB7XG4gIC8vICAgICAgICAgaW5zdGFuY2Uub25VbmxvYWQoZXZ0KTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgcmV0dXJuICFpc0V2ZW50SW5zdGFuY2U7XG4gIC8vICAgfSk7XG4gIC8vIH0sXG4gIC8vXG4gIC8vIF9vblNlbGVjdDogZnVuY3Rpb24oZXZ0KSB7XG4gIC8vICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAvLyAgIHZhciBpbnN0YW5jZSA9IF8uZmluZCh0aGlzLmluc3RhbmNlcywgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgLy8gICAgIHJldHVybiBpbnN0YW5jZS5pZCA9PT0gZXZ0LmRldGFpbC5zZWN0aW9uSWQ7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgaWYgKCFfLmlzVW5kZWZpbmVkKGluc3RhbmNlKSAmJiBfLmlzRnVuY3Rpb24oaW5zdGFuY2Uub25TZWxlY3QpKSB7XG4gIC8vICAgICBpbnN0YW5jZS5vblNlbGVjdChldnQpO1xuICAvLyAgIH1cbiAgLy8gfSxcbiAgLy9cbiAgLy8gX29uRGVzZWxlY3Q6IGZ1bmN0aW9uKGV2dCkge1xuICAvLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgLy8gICB2YXIgaW5zdGFuY2UgPSBfLmZpbmQodGhpcy5pbnN0YW5jZXMsIGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIC8vICAgICByZXR1cm4gaW5zdGFuY2UuaWQgPT09IGV2dC5kZXRhaWwuc2VjdGlvbklkO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmICghXy5pc1VuZGVmaW5lZChpbnN0YW5jZSkgJiYgXy5pc0Z1bmN0aW9uKGluc3RhbmNlLm9uRGVzZWxlY3QpKSB7XG4gIC8vICAgICBpbnN0YW5jZS5vbkRlc2VsZWN0KGV2dCk7XG4gIC8vICAgfVxuICAvLyB9LFxuICAvL1xuICAvLyBfb25CbG9ja1NlbGVjdDogZnVuY3Rpb24oZXZ0KSB7XG4gIC8vICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAvLyAgIHZhciBpbnN0YW5jZSA9IF8uZmluZCh0aGlzLmluc3RhbmNlcywgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgLy8gICAgIHJldHVybiBpbnN0YW5jZS5pZCA9PT0gZXZ0LmRldGFpbC5zZWN0aW9uSWQ7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgaWYgKCFfLmlzVW5kZWZpbmVkKGluc3RhbmNlKSAmJiBfLmlzRnVuY3Rpb24oaW5zdGFuY2Uub25CbG9ja1NlbGVjdCkpIHtcbiAgLy8gICAgIGluc3RhbmNlLm9uQmxvY2tTZWxlY3QoZXZ0KTtcbiAgLy8gICB9XG4gIC8vIH0sXG4gIC8vXG4gIC8vIF9vbkJsb2NrRGVzZWxlY3Q6IGZ1bmN0aW9uKGV2dCkge1xuICAvLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgLy8gICB2YXIgaW5zdGFuY2UgPSBfLmZpbmQodGhpcy5pbnN0YW5jZXMsIGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIC8vICAgICByZXR1cm4gaW5zdGFuY2UuaWQgPT09IGV2dC5kZXRhaWwuc2VjdGlvbklkO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmICghXy5pc1VuZGVmaW5lZChpbnN0YW5jZSkgJiYgXy5pc0Z1bmN0aW9uKGluc3RhbmNlLm9uQmxvY2tEZXNlbGVjdCkpIHtcbiAgLy8gICAgIGluc3RhbmNlLm9uQmxvY2tEZXNlbGVjdChldnQpO1xuICAvLyAgIH1cbiAgLy8gfSxcblxuICByZWdpc3RlcjogZnVuY3Rpb24odHlwZSwgY29uc3RydWN0b3IpIHsgICAvLyAnY29uc3RydWN0b3InIGlzIGEgZnVuY3Rpb25cbiAgICB0aGlzLmNvbnN0cnVjdG9yc1t0eXBlXSA9IGNvbnN0cnVjdG9yO1xuXG4gICAgJCgnW2RhdGEtc2VjdGlvbi10eXBlPScgKyB0eXBlICsgJ10nKS5lYWNoKFxuICAgICAgICBmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxufSk7XG5cbnRoZW1lLnByb2NlZWQgPSBmYWxzZTtcblxudGhlbWUuTG9hZGluZ092ZXJsYXkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNob3coZWwsIGV2ZW50VGV4dCkge1xuICAgIGVsLmFkZENsYXNzKCdsb2FkaW5nLXNwaW5uZXItc2hvdycpO1xuICAgIHRoZW1lLnByb2NlZWQgPSB0cnVlO1xuICAgIGVsLnRyaWdnZXIoZXZlbnRUZXh0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoZWwpIHtcbiAgICBlbC5yZW1vdmVDbGFzcygnbG9hZGluZy1zcGlubmVyLXNob3cnKTtcbiAgICB0aGVtZS5wcm9jZWVkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNob3c6IHNob3csXG4gICAgaGlkZTogaGlkZVxuICB9O1xufSkoKTtcblxuY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihmb3JtV3JhcHBlciwgY29uc3RyYWludHMpIHtcbiAgICB0aGlzLmZvcm1XcmFwcGVyID0gZm9ybVdyYXBwZXI7XG4gICAgdGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgIHRoaXMuaXNXaXRoRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1FbGVtZW50cyA9ICdpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIHRleHRhcmVhLCBzZWxlY3QnO1xuXG4gICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5pdEZvcm1WYWxpZGF0aW9uJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvcm1XcmFwcGVyKTtcbiAgICBsZXQgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9ybUVsZW1lbnRzKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpbnB1dHMuaXRlbShpKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBlcnJvcnMgPSB2YWxpZGF0ZShmb3JtLCB0aGlzLmNvbnN0cmFpbnRzLCB7ZnVsbE1lc3NhZ2VzOiBmYWxzZX0pIHx8IHt9O1xuICAgICAgICB0aGlzLnNob3dFcnJvcnNGb3JJbnB1dChlLmN1cnJlbnRUYXJnZXQsIGVycm9yc1tlLmN1cnJlbnRUYXJnZXQubmFtZV0pXG4gICAgICAgICFPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCAmJiAodGhpcy5pc1dpdGhFcnJvciA9IGZhbHNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvcm1XcmFwcGVyKTtcbiAgICBsZXQgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9ybUVsZW1lbnRzKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgZXJyb3JzID0gdmFsaWRhdGUoZm9ybSwgdGhpcy5jb25zdHJhaW50cywge2Z1bGxNZXNzYWdlczogZmFsc2V9KSB8fCB7fTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yc0ZvcklucHV0KGlucHV0cy5pdGVtKGkpLCBlcnJvcnNbaW5wdXRzLml0ZW0oaSkubmFtZV0pXG4gICAgICAhT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggJiYgKHRoaXMuaXNXaXRoRXJyb3IgPSBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0Vycm9yc0ZvcklucHV0KGlucHV0LCBlcnJvcnMpIHtcbiAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLmNsb3Nlc3RQYXJlbnQoaW5wdXQsICdmb3JtLWdyb3VwJykucXVlcnlTZWxlY3RvcignLmludmFsaWQtZmVlZGJhY2snKTsgLy8gRmluZCB3aGVyZSB0aGUgZXJyb3IgbWVzc2FnZXMgd2lsbCBiZSBpbnNlcnQgaW50b1xuICAgIHRoaXMucmVzZXRJbnB1dChpbnB1dCk7IC8vIEZpcnN0IHdlIHJlbW92ZSBhbnkgb2xkIG1lc3NhZ2VzIGFuZCByZXNldHMgdGhlIGNsYXNzZXNcbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTsgLy8gd2UgZmlyc3QgbWFyayB0aGUgaW5wdXQgaGFzIGhhdmluZyBlcnJvcnNcbiAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7IC8vIHRoZW4gd2UgYXBwZW5kIGFsbCB0aGUgZXJyb3JzXG4gICAgICAgIHRoaXMuYWRkRXJyb3IobWVzc2FnZXMsIGVycm9yKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpcy12YWxpZFwiKTsgLy8gb3RoZXJ3aXNlIHdlIHNpbXBseSBtYXJrIGl0IGFzIHN1Y2Nlc3NcbiAgICB9XG4gIH1cblxuICAvLyBSZWN1cnNpdmVseSBmaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBoYXMgdGhlIHNwZWNpZmllZCBjbGFzc1xuICBjbG9zZXN0UGFyZW50KGNoaWxkLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoIWNoaWxkIHx8IGNoaWxkID09IGRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNsb3Nlc3RQYXJlbnQoY2hpbGQucGFyZW50Tm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXNldElucHV0KGlucHV0KSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzdWNjZXNzIGFuZCBlcnJvciBjbGFzc2VzXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXZhbGlkXCIpO1xuICAgIC8vIGFuZCByZW1vdmUgYW55IG9sZCBtZXNzYWdlc1xuICAgIHRoaXMuY2xvc2VzdFBhcmVudChpbnB1dCwgJ2Zvcm0tZ3JvdXAnKS5xdWVyeVNlbGVjdG9yQWxsKFwiLmludmFsaWQtZmVlZGJhY2tcIikuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICBhZGRFcnJvcihtZXNzYWdlcywgZXJyb3IpIHtcbiAgICB2YXIgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwiaGVscC1ibG9ja1wiKTtcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgYmxvY2suaW5uZXJUZXh0ID0gZXJyb3I7XG4gICAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgIHRoaXMuaXNXaXRoRXJyb3IgfHwgKHRoaXMuaXNXaXRoRXJyb3IgPSB0cnVlKTsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIH1cblxuICBoYXNFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1dpdGhFcnJvcjtcbiAgfVxufVxuXG50aGVtZS5PcmRlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3RvcnMgPSB7XG4gICAgQk9EWTogJ2JvZHknLFxuICAgIEFMRVJUOiAnLkpTLS1XcmFwcGVyLWFsZXJ0JyxcbiAgICBPUkRFUl9XUkFQUEVSOiAnLkpTLS1XcmFwcGVyLW9yZGVyRGV0YWlsJyxcblxuICAgIFJFQ0lQSUVOVF9XUkFQUEVSOiAnLkpTLS1XcmFwcGVyLXJlY2lwaWVudCcsXG4gICAgUkVDSVBJRU5UX0JPRFk6ICcuSlMtLVdyYXBwZXItcmVjaXBpZW50Qm9keScsXG4gICAgUkVDSVBJRU5UX0ZPUk06ICcuSlMtLVdyYXBwZXItcmVjaXBpZW50Rm9ybScsXG4gICAgUkVDSVBJRU5UX1NVQk1JVF9CVVRUT046ICcuSlMtLUJ1dHRvbi1zdWJtaXRSZWNpcGllbnQnLFxuXG4gICAgU0VOREVSX1dSQVBQRVI6ICcuSlMtLVdyYXBwZXItc2VuZGVyJyxcbiAgICBTRU5ERVJfQk9EWTogJy5KUy0tV3JhcHBlci1zZW5kZXJCb2R5JyxcbiAgICBTRU5ERVJfRk9STTogJy5KUy0tV3JhcHBlci1zZW5kZXJGb3JtJyxcbiAgICBTRU5ERVJfU1VCTUlUX0JVVFRPTjogJy5KUy0tQnV0dG9uLXN1Ym1pdFNlbmRlcicsXG5cbiAgICBPUkRFUl9DT05GSVJNQVRJT05fU0VORF9CVVRUT046ICcuSlMtLUJ1dHRvbi1zZW5kT3JkZXJDb25maXJtYXRpb24nLFxuICAgIE9SREVSX0NPTkZJUk1BVElPTl9CT0RZOiAnLkpTLS1XcmFwcGVyLW9yZGVyQ29uZmlybWF0aW9uQm9keScsXG5cbiAgICBTSElQUElOR19DT05GSVJNQVRJT05fU0VORF9CVVRUT046ICcuSlMtLUJ1dHRvbi1zZW5kU2hpcHBpbmdDb25maXJtYXRpb24nLFxuICAgIFNISVBQSU5HX0NPTkZJUk1BVElPTl9CT0RZOiAnLkpTLS1XcmFwcGVyLXNoaXBwaW5nQ29uZmlybWF0aW9uQm9keScsXG5cbiAgICBNQVJLX0FTX0ZVTEZJTExFRF9CVVRUT046ICcuSlMtLUJ1dHRvbi1tYXJrQXNGdWxmaWxsZWQnLFxuICAgIE9SREVSX1NUQVRVU19XUkFQUEVSOiAnLkpTLS1XcmFwcGVyLW9yZGVyU3RhdHVzJyxcbiAgICBPUkRFUl9TVEFUVVNfQk9EWTogJy5KUy0tV3JhcHBlci1vcmRlclN0YXR1c0JvZHknLFxuXG4gICAgTUFSS19BU19QQUlEX0JVVFRPTjogJy5KUy0tQnV0dG9uLW1hcmtBc1BhaWQnLFxuICAgIFBBWU1FTlRfU1RBVFVTX1dSQVBQRVI6ICcuSlMtLVdyYXBwZXItcGF5bWVudFN0YXR1cycsXG4gICAgUEFZTUVOVF9TVEFUVVNfQk9EWTogJy5KUy0tV3JhcHBlci1wYXltZW50U3RhdHVzQm9keScsXG4gICAgLy8gUEFZTUVOVF9TVEFUVVNfRk9STTogJy5KUy0tV3JhcHBlci1wYXltZW50U3RhdHVzRm9ybScsXG4gICAgLy8gUEFZTUVOVF9TVEFUVVNfU1VCTUlUX0JVVFRPTjogJy5KUy0tQnV0dG9uLXN1Ym1pdFBheW1lbnRTdGF0dXMnLFxuXG4gICAgQ0FOQ0VMX09SREVSX0JVVFRPTjogJy5KUy0tQnV0dG9uLWNhbmNlbE9yZGVyJyxcbiAgICBDQU5DRUxfT1JERVJfV1JBUFBFUjogJy5KUy0tV3JhcHBlci1jYW5jZWxPcmRlcicsXG4gICAgQ0FOQ0VMX09SREVSX0JPRFk6ICcuSlMtLVdyYXBwZXItY2FuY2VsT3JkZXJCb2R5JyxcblxuICAgIENPTU1FTlRfV1JBUFBFUjogJy5KUy0tV3JhcHBlci1jb21tZW50JyxcbiAgICBDT01NRU5UX0JPRFk6ICcuSlMtLVdyYXBwZXItY29tbWVudEJvZHknLFxuICAgIENPTU1FTlRfRk9STTogJy5KUy0tV3JhcHBlci1jb21tZW50Rm9ybScsXG4gICAgQ09NTUVOVF9TVUJNSVRfQlVUVE9OOiAnLkpTLS1CdXR0b24tc3VibWl0Q29tbWVudCcsXG4gIH07XG4gIGNvbnN0IHNjcm9sbFVwID0geyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6ICdzbW9vdGgnfTtcbiAgdmFyIGVycm9ycyA9IHtcbiAgICByZWNpcGllbnQ6IGZhbHNlLFxuICAgIHNlbmRlcjogZmFsc2UsXG4gICAgY29tbWVudDogZmFsc2UsXG4gICAgcGF5bWVudFN0YXR1czogZmFsc2UsXG4gIH07XG4gIHZhciBhamF4TG9hZGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIE9yZGVyKGNvbnRhaW5lcikge1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lclxuICAgICAgICAub24oJ2NsaWNrJywgc2VsZWN0b3JzLlJFQ0lQSUVOVF9TVUJNSVRfQlVUVE9OLCB0aGlzLnN1Ym1pdFJlY2lwaWVudEZvcm0uYmluZCh0aGlzKSlcbiAgICAgICAgLm9uKCdjbGljaycsIHNlbGVjdG9ycy5TRU5ERVJfU1VCTUlUX0JVVFRPTiwgdGhpcy5zdWJtaXRTZW5kZXJGb3JtLmJpbmQodGhpcykpXG4gICAgICAgIC5vbignY2xpY2snLCBzZWxlY3RvcnMuQ09NTUVOVF9TVUJNSVRfQlVUVE9OLCB0aGlzLnN1Ym1pdENvbW1lbnRGb3JtLmJpbmQodGhpcykpXG5cbiAgICAgICAgLm9uKCdjbGljaycsIHNlbGVjdG9ycy5PUkRFUl9DT05GSVJNQVRJT05fU0VORF9CVVRUT04sIHRoaXMuc2VuZE9yZGVyQ29uZmlybWF0aW9uLmJpbmQodGhpcykpXG4gICAgICAgIC5vbignY2xpY2snLCBzZWxlY3RvcnMuU0hJUFBJTkdfQ09ORklSTUFUSU9OX1NFTkRfQlVUVE9OLCB0aGlzLnNlbmRTaGlwcGluZ0NvbmZpcm1hdGlvbi5iaW5kKHRoaXMpKVxuICAgICAgICAub24oJ2NsaWNrJywgc2VsZWN0b3JzLk1BUktfQVNfRlVMRklMTEVEX0JVVFRPTiwgdGhpcy5tYXJrQXNGdWxmaWxsZWQuYmluZCh0aGlzKSlcbiAgICAgICAgLm9uKCdjbGljaycsIHNlbGVjdG9ycy5NQVJLX0FTX1BBSURfQlVUVE9OLCB0aGlzLm1hcmtBc1BhaWQuYmluZCh0aGlzKSlcbiAgICAgICAgLm9uKCdjbGljaycsIHNlbGVjdG9ycy5DQU5DRUxfT1JERVJfQlVUVE9OLCB0aGlzLmNhbmNlbE9yZGVyLmJpbmQodGhpcykpXG5cbiAgICAgICAgLm9uKCdjbGljayBjaGFuZ2UnLCBzZWxlY3RvcnMuT1JERVJfV1JBUFBFUiwgdGhpcy5wcmV2ZW50SW50ZXJhY3Rpb24uYmluZCh0aGlzKSlcbiAgICA7XG5cbiAgICAkKGRvY3VtZW50KS5hamF4U3RhcnQoZnVuY3Rpb24oKSB7XG4gICAgICBhamF4TG9hZGluZyA9IHRydWU7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZGlzcG9zZVRvb2x0aXAnKSk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkuYWpheFN0b3AoZnVuY3Rpb24oKSB7XG4gICAgICBhamF4TG9hZGluZyA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2luaXRGbG9hdGluZ0lucHV0JykpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2luaXRGb3JtVmFsaWRhdGlvbicpKTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0VG9vbHRpcCcpKTtcbiAgICB9KTtcblxuICAgIGlmICgkKHNlbGVjdG9ycy5SRUNJUElFTlRfRk9STSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlY2lwaWVudFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdGlvbihzZWxlY3RvcnMuUkVDSVBJRU5UX0ZPUk0sIHJlY2lwaWVudENvbnN0cmFpbnRzKTtcbiAgICB9XG4gICAgaWYgKCQoc2VsZWN0b3JzLlNFTkRFUl9GT1JNKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VuZGVyVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0aW9uKHNlbGVjdG9ycy5TRU5ERVJfRk9STSwgc2VuZGVyQ29uc3RyYWludHMpO1xuICAgIH1cbiAgICBpZiAoJChzZWxlY3RvcnMuQ09NTUVOVF9GT1JNKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29tbWVudFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdGlvbihzZWxlY3RvcnMuQ09NTUVOVF9GT1JNLCBjb21tZW50Q29uc3RyYWludHMpO1xuICAgIH1cbiAgICAvLyBpZiAoJChzZWxlY3RvcnMuU0hJUFBJTkdfRk9STSkubGVuZ3RoKSB7XG4gICAgLy8gICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0aW9uKHNlbGVjdG9ycy5TSElQUElOR19GT1JNLCBzaGlwcGluZ0NvbnN0cmFpbnRzKTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKCQoc2VsZWN0b3JzLkRFTElWRVJZX0RBVEVfRk9STSkubGVuZ3RoKSB7XG4gICAgLy8gICB0aGlzLmRlbGl2ZXJ5RGF0ZVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdGlvbihzZWxlY3RvcnMuREVMSVZFUllfREFURV9GT1JNLCBkZWxpdmVyeURhdGVDb25zdHJhaW50cyk7XG4gICAgLy8gfVxuICAgIC8vIGlmICgkKHNlbGVjdG9ycy5QQVlNRU5UX0ZPUk0pLmxlbmd0aCkge1xuICAgIC8vICAgdGhpcy5wYXltZW50VmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0aW9uKHNlbGVjdG9ycy5QQVlNRU5UX0ZPUk0sIHBheW1lbnRDb25zdHJhaW50cyk7XG4gICAgLy8gfVxuICAgIC8vIGlmICgkKHNlbGVjdG9ycy5BQ0NFUFRfVEVSTVNfRk9STSkubGVuZ3RoKSB7XG4gICAgLy8gICB0aGlzLmFjY2VwdFRlcm1zVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0aW9uKHNlbGVjdG9ycy5BQ0NFUFRfVEVSTVNfRk9STSwgYWNjZXB0VGVybXNDb25zdHJhaW50cyk7XG4gICAgLy8gfVxuICB9XG5cbiAgLy8gT3JkZXIucHJvdG90eXBlID0gXy5hc3NpZ25Jbih7fSwgT3JkZXIucHJvdG90eXBlLCB7XG4gICQuZXh0ZW5kKE9yZGVyLnByb3RvdHlwZSwge1xuXG4gICAgX2Rpc2FibGVGb3JtRWxlbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXNhYmxlJyk7XG4gICAgICAkKHNlbGVjdG9ycy5CT0RZKS5maW5kKFwiaW5wdXQsIHNlbGVjdCwgZm9ybVwiKS5wcm9wKCdyZWFkT25seScsIHRydWUpO1xuICAgIH0sXG5cbiAgICBwcmV2ZW50SW50ZXJhY3Rpb24oZSkge1xuICAgICAgaWYgKGFqYXhMb2FkaW5nKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3VibWl0UmVjaXBpZW50Rm9ybTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhamF4TG9hZGluZykgcmV0dXJuO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVjaXBpZW50VmFsaWRhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnJlY2lwaWVudFZhbGlkYXRvci52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgZXJyb3JzLnJlY2lwaWVudCA9IHRoaXMucmVjaXBpZW50VmFsaWRhdG9yLmhhc0Vycm9yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcnMucmVjaXBpZW50KSB7XG4gICAgICAgIC8vICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrOm5vdCg6ZW1wdHkpJykuY2xvc2VzdCgnZm9ybScpWzBdLnNjcm9sbEludG9WaWV3KHNjcm9sbFVwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVycm9ycy5yZWNpcGllbnQpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUZvcm1FbGVtZW50cygpO1xuXG4gICAgICAgIGxldCAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGlmICh0aGVtZS5wcm9jZWVkKSB7IHRoZW1lLnByb2NlZWQgPSBmYWxzZTsgcmV0dXJuOyB9XG4gICAgICAgIHRoZW1lLkxvYWRpbmdPdmVybGF5LnNob3coJGVsLCAnY2xpY2snKTtcblxuICAgICAgICBsZXQgJHdyYXBwZXIgPSAkKHNlbGVjdG9ycy5PUkRFUl9XUkFQUEVSKTtcbiAgICAgICAgbGV0ICRyZWNpcGllbnRGb3JtID0gJChzZWxlY3RvcnMuUkVDSVBJRU5UX0ZPUk0pO1xuICAgICAgICBsZXQgJHJlY2lwaWVudEJvZHkgPSAkKHNlbGVjdG9ycy5SRUNJUElFTlRfQk9EWSk7XG5cbiAgICAgICAgbGV0IHJlY2lwaWVudEZvcm0gPSBudWxsO1xuXG4gICAgICAgIGxldCBhMSA9ICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAkcmVjaXBpZW50Rm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiAkcmVjaXBpZW50Rm9ybS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBjb250ZXh0OiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGExLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIC8vICRyZWNpcGllbnRGb3JtLnJlcGxhY2VXaXRoKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSKSB7XG4gICAgICAgICAgICAgIHJlY2lwaWVudEZvcm0gPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgIGVycm9ycy5yZWNpcGllbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAkcmVjaXBpZW50Rm9ybS5yZXBsYWNlV2l0aChyZWNpcGllbnRGb3JtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdEZsb2F0aW5nSW5wdXQnKSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0Rm9ybVZhbGlkYXRpb24nKSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0VG9vbHRpcCcpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgJC53aGVuKGExKS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5oaWRlKCRlbCk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgaWYgKGVycm9ycy5yZWNpcGllbnQpIHtcbiAgICAgICAgICAgICAgLy8gJChzZWxlY3RvcnMuT1JERVJfV1JBUFBFUikuZmluZCgnLmludmFsaWQtZmVlZGJhY2s6bm90KDplbXB0eSknKS5jbG9zZXN0KCdmb3JtJylbMF0uc2Nyb2xsSW50b1ZpZXcoc2Nyb2xsVXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAkLndoZW4oYTEpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRyZWNpcGllbnRCb2R5LmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1Ym1pdFNlbmRlckZvcm06IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoYWpheExvYWRpbmcpIHJldHVybjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbmRlclZhbGlkYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZW5kZXJWYWxpZGF0b3IudmFsaWRhdGVGb3JtKCk7XG4gICAgICAgIGVycm9ycy5zZW5kZXIgPSB0aGlzLnNlbmRlclZhbGlkYXRvci5oYXNFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JzLnNlbmRlcikge1xuICAgICAgICAvLyAkKHNlbGVjdG9ycy5PUkRFUl9XUkFQUEVSKS5maW5kKCcuaW52YWxpZC1mZWVkYmFjazpub3QoOmVtcHR5KScpLmNsb3Nlc3QoJ2Zvcm0nKVswXS5zY3JvbGxJbnRvVmlldyhzY3JvbGxVcCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlcnJvcnMuc2VuZGVyKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVGb3JtRWxlbWVudHMoKTtcblxuICAgICAgICBsZXQgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBpZiAodGhlbWUucHJvY2VlZCkgeyB0aGVtZS5wcm9jZWVkID0gZmFsc2U7IHJldHVybjsgfVxuICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5zaG93KCRlbCwgJ2NsaWNrJyk7XG5cbiAgICAgICAgbGV0ICR3cmFwcGVyID0gJChzZWxlY3RvcnMuT1JERVJfV1JBUFBFUik7XG4gICAgICAgIGxldCAkc2VuZGVyRm9ybSA9ICQoc2VsZWN0b3JzLlNFTkRFUl9GT1JNKTtcbiAgICAgICAgbGV0ICRzZW5kZXJCb2R5ID0gJChzZWxlY3RvcnMuU0VOREVSX0JPRFkpO1xuXG4gICAgICAgIGxldCBzZW5kZXJGb3JtID0gbnVsbDtcblxuICAgICAgICBsZXQgYTEgPSAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJHNlbmRlckZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YTogJHNlbmRlckZvcm0uc2VyaWFsaXplKCksXG4gICAgICAgICAgY29udGV4dDogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICBhMS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAvLyAkcmVjaXBpZW50Rm9ybS5yZXBsYWNlV2l0aChkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUikge1xuICAgICAgICAgICAgICBzZW5kZXJGb3JtID0ganFYSFIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICBlcnJvcnMuc2VuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgJHNlbmRlckZvcm0ucmVwbGFjZVdpdGgoc2VuZGVyRm9ybSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2luaXRGbG9hdGluZ0lucHV0JykpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdEZvcm1WYWxpZGF0aW9uJykpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdFRvb2x0aXAnKSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICQud2hlbihhMSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhlbWUuTG9hZGluZ092ZXJsYXkuaGlkZSgkZWwpO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIGlmIChlcnJvcnMuc2VuZGVyKSB7XG4gICAgICAgICAgICAgIC8vICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrOm5vdCg6ZW1wdHkpJykuY2xvc2VzdCgnZm9ybScpWzBdLnNjcm9sbEludG9WaWV3KHNjcm9sbFVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgJC53aGVuKGExKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkc2VuZGVyQm9keS5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZW5kT3JkZXJDb25maXJtYXRpb246IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoYWpheExvYWRpbmcpIHJldHVybjtcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUZvcm1FbGVtZW50cygpO1xuXG4gICAgICAgIGxldCAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGlmICh0aGVtZS5wcm9jZWVkKSB7IHRoZW1lLnByb2NlZWQgPSBmYWxzZTsgcmV0dXJuOyB9XG4gICAgICAgIHRoZW1lLkxvYWRpbmdPdmVybGF5LnNob3coJGVsLCAnY2xpY2snKTtcblxuICAgICAgICBsZXQgdXJsID0gJGVsLmRhdGEoJ3VybCcpO1xuICAgICAgICBsZXQgJHdyYXBwZXIgPSAkKHNlbGVjdG9ycy5PUkRFUl9XUkFQUEVSKTtcbiAgICAgICAgbGV0ICRvcmRlckNvbmZpcm1hdGlvbkJvZHkgPSAkKHNlbGVjdG9ycy5PUkRFUl9DT05GSVJNQVRJT05fQk9EWSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBjb250ZXh0OiB0aGlzXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRvcmRlckNvbmZpcm1hdGlvbkJvZHkuY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgLy8gTm90aWZ5LnN1Y2Nlc3MoJ0VtYWlsIHNpa2VyZXNlbiBlbGvDvGxkdmUhJyk7XG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24oanFYSFIpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoanFYSFIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICBOb3RpZnkuZXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAocGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlID09IHBlcmZvcm1hbmNlLm5hdmlnYXRpb24uVFlQRV9SRUxPQUQpIHtcbiAgICAgICAgICAgIHRoZW1lLkxvYWRpbmdPdmVybGF5LmhpZGUoJGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VuZFNoaXBwaW5nQ29uZmlybWF0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGFqYXhMb2FkaW5nKSByZXR1cm47XG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVGb3JtRWxlbWVudHMoKTtcblxuICAgICAgICBsZXQgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBpZiAodGhlbWUucHJvY2VlZCkgeyB0aGVtZS5wcm9jZWVkID0gZmFsc2U7IHJldHVybjsgfVxuICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5zaG93KCRlbCwgJ2NsaWNrJyk7XG5cbiAgICAgICAgbGV0IHVybCA9ICRlbC5kYXRhKCd1cmwnKTtcbiAgICAgICAgbGV0ICR3cmFwcGVyID0gJChzZWxlY3RvcnMuT1JERVJfV1JBUFBFUik7XG4gICAgICAgIGxldCAkc2hpcHBpbmdDb25maXJtYXRpb25Cb2R5ID0gJChzZWxlY3RvcnMuU0hJUFBJTkdfQ09ORklSTUFUSU9OX0JPRFkpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgY29udGV4dDogdGhpc1xuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkc2hpcHBpbmdDb25maXJtYXRpb25Cb2R5LmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uKGpxWEhSKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpxWEhSLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgTm90aWZ5LmVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5hdmlnYXRpb24udHlwZSA9PSBwZXJmb3JtYW5jZS5uYXZpZ2F0aW9uLlRZUEVfUkVMT0FEKSB7XG4gICAgICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5oaWRlKCRlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1hcmtBc0Z1bGZpbGxlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhamF4TG9hZGluZykgcmV0dXJuO1xuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlRm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgbGV0ICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoZW1lLnByb2NlZWQpIHsgdGhlbWUucHJvY2VlZCA9IGZhbHNlOyByZXR1cm47IH1cbiAgICAgICAgdGhlbWUuTG9hZGluZ092ZXJsYXkuc2hvdygkZWwsICdjbGljaycpO1xuXG4gICAgICAgIGxldCB1cmwgPSAkZWwuZGF0YSgndXJsJyk7XG4gICAgICAgIGxldCAkd3JhcHBlciA9ICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpO1xuICAgICAgICBsZXQgJG9yZGVyU3RhdHVzQm9keSA9ICQoc2VsZWN0b3JzLk9SREVSX1NUQVRVU19CT0RZKTtcbiAgICAgICAgbGV0IGlzU2VuZEVtYWlsID0gJG9yZGVyU3RhdHVzQm9keS5maW5kKCcjc2VuZFNoaXBwaW5nQ29uZmlybWF0aW9uJykucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgICBpZiAoIWlzU2VuZEVtYWlsKSB7XG4gICAgICAgICAgdXJsICs9ICc/JyskLnBhcmFtKHsgbm9TaGlwcGluZ0NvbmZpcm1hdGlvbjogMSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgY29udGV4dDogdGhpcyxcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJG9yZGVyU3RhdHVzQm9keS5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbihqcVhIUikge1xuICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShqcVhIUi5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIE5vdGlmeS5lcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfSkuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChwZXJmb3JtYW5jZS5uYXZpZ2F0aW9uLnR5cGUgPT0gcGVyZm9ybWFuY2UubmF2aWdhdGlvbi5UWVBFX1JFTE9BRCkge1xuICAgICAgICAgICAgdGhlbWUuTG9hZGluZ092ZXJsYXkuaGlkZSgkZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5oaWRlKCRlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWFya0FzUGFpZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhamF4TG9hZGluZykgcmV0dXJuO1xuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlRm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgbGV0ICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoZW1lLnByb2NlZWQpIHsgdGhlbWUucHJvY2VlZCA9IGZhbHNlOyByZXR1cm47IH1cbiAgICAgICAgdGhlbWUuTG9hZGluZ092ZXJsYXkuc2hvdygkZWwsICdjbGljaycpO1xuXG4gICAgICAgIGxldCB1cmwgPSAkZWwuZGF0YSgndXJsJyk7XG4gICAgICAgIGxldCAkd3JhcHBlciA9ICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpO1xuICAgICAgICBsZXQgJHBheW1lbnRTdGF0dXNCb2R5ID0gJChzZWxlY3RvcnMuUEFZTUVOVF9TVEFUVVNfQk9EWSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBjb250ZXh0OiB0aGlzXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRwYXltZW50U3RhdHVzQm9keS5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbihqcVhIUikge1xuICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShqcVhIUi5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIE5vdGlmeS5lcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfSkuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChwZXJmb3JtYW5jZS5uYXZpZ2F0aW9uLnR5cGUgPT0gcGVyZm9ybWFuY2UubmF2aWdhdGlvbi5UWVBFX1JFTE9BRCkge1xuICAgICAgICAgICAgdGhlbWUuTG9hZGluZ092ZXJsYXkuaGlkZSgkZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5oaWRlKCRlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsT3JkZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoYWpheExvYWRpbmcpIHJldHVybjtcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUZvcm1FbGVtZW50cygpO1xuXG4gICAgICAgIGxldCAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGlmICh0aGVtZS5wcm9jZWVkKSB7IHRoZW1lLnByb2NlZWQgPSBmYWxzZTsgcmV0dXJuOyB9XG4gICAgICAgIHRoZW1lLkxvYWRpbmdPdmVybGF5LnNob3coJGVsLCAnY2xpY2snKTtcblxuICAgICAgICBsZXQgdXJsID0gJGVsLmRhdGEoJ3VybCcpO1xuICAgICAgICBsZXQgJHdyYXBwZXIgPSAkKHNlbGVjdG9ycy5PUkRFUl9XUkFQUEVSKTtcbiAgICAgICAgbGV0ICRjYW5jZWxPcmRlckJvZHkgPSAkKHNlbGVjdG9ycy5DQU5DRUxfT1JERVJfQk9EWSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBjb250ZXh0OiB0aGlzXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRjYW5jZWxPcmRlckJvZHkuY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24oanFYSFIpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoanFYSFIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICBOb3RpZnkuZXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAocGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlID09IHBlcmZvcm1hbmNlLm5hdmlnYXRpb24uVFlQRV9SRUxPQUQpIHtcbiAgICAgICAgICAgIHRoZW1lLkxvYWRpbmdPdmVybGF5LmhpZGUoJGVsKTtcbiAgICAgICAgICAgICRjYW5jZWxPcmRlckJvZHkuY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3VibWl0Q29tbWVudEZvcm06IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoYWpheExvYWRpbmcpIHJldHVybjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbW1lbnRWYWxpZGF0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY29tbWVudFZhbGlkYXRvci52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgZXJyb3JzLmNvbW1lbnQgPSB0aGlzLmNvbW1lbnRWYWxpZGF0b3IuaGFzRXJyb3IoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycy5jb21tZW50KSB7XG4gICAgICAgIC8vICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrOm5vdCg6ZW1wdHkpJykuY2xvc2VzdCgnZm9ybScpWzBdLnNjcm9sbEludG9WaWV3KHNjcm9sbFVwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVycm9ycy5jb21tZW50KSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVGb3JtRWxlbWVudHMoKTtcblxuICAgICAgICBsZXQgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBpZiAodGhlbWUucHJvY2VlZCkgeyB0aGVtZS5wcm9jZWVkID0gZmFsc2U7IHJldHVybjsgfVxuICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5zaG93KCRlbCwgJ2NsaWNrJyk7XG5cbiAgICAgICAgbGV0ICR3cmFwcGVyID0gJChzZWxlY3RvcnMuT1JERVJfV1JBUFBFUik7XG4gICAgICAgIGxldCAkY29tbWVudEZvcm0gPSAkKHNlbGVjdG9ycy5DT01NRU5UX0ZPUk0pO1xuICAgICAgICBsZXQgJGNvbW1lbnRCb2R5ID0gJChzZWxlY3RvcnMuQ09NTUVOVF9CT0RZKTtcblxuICAgICAgICBsZXQgY29tbWVudEZvcm0gPSBudWxsO1xuXG4gICAgICAgIGxldCBhMSA9ICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAkY29tbWVudEZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YTogJGNvbW1lbnRGb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGNvbnRleHQ6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYTEuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgLy8gJHJlY2lwaWVudEZvcm0ucmVwbGFjZVdpdGgoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIpIHtcbiAgICAgICAgICAgICAgY29tbWVudEZvcm0gPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgIGVycm9ycy5jb21tZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgJGNvbW1lbnRGb3JtLnJlcGxhY2VXaXRoKGNvbW1lbnRGb3JtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdEZsb2F0aW5nSW5wdXQnKSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0Rm9ybVZhbGlkYXRpb24nKSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0VG9vbHRpcCcpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgJC53aGVuKGExKS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5oaWRlKCRlbCk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgaWYgKGVycm9ycy5jb21tZW50KSB7XG4gICAgICAgICAgICAgIC8vICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrOm5vdCg6ZW1wdHkpJykuY2xvc2VzdCgnZm9ybScpWzBdLnNjcm9sbEludG9WaWV3KHNjcm9sbFVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgJC53aGVuKGExKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdWJtaXRQYXltZW50U3RhdHVzRm9ybTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhamF4TG9hZGluZykgcmV0dXJuO1xuXG4gICAgICAvLyBpZiAodHlwZW9mIHRoaXMuc2VuZGVyVmFsaWRhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gICB0aGlzLnNlbmRlclZhbGlkYXRvci52YWxpZGF0ZUZvcm0oKTtcbiAgICAgIC8vICAgZXJyb3JzLnNlbmRlciA9IHRoaXMuc2VuZGVyVmFsaWRhdG9yLmhhc0Vycm9yKCk7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChlcnJvcnMucGF5bWVudFN0YXR1cykge1xuICAgICAgICAvLyAkKHNlbGVjdG9ycy5PUkRFUl9XUkFQUEVSKS5maW5kKCcuaW52YWxpZC1mZWVkYmFjazpub3QoOmVtcHR5KScpLmNsb3Nlc3QoJ2Zvcm0nKVswXS5zY3JvbGxJbnRvVmlldyhzY3JvbGxVcCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlcnJvcnMucGF5bWVudFN0YXR1cykge1xuICAgICAgICB0aGlzLl9kaXNhYmxlRm9ybUVsZW1lbnRzKCk7XG5cbiAgICAgICAgbGV0ICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoZW1lLnByb2NlZWQpIHsgdGhlbWUucHJvY2VlZCA9IGZhbHNlOyByZXR1cm47IH1cbiAgICAgICAgdGhlbWUuTG9hZGluZ092ZXJsYXkuc2hvdygkZWwsICdjbGljaycpO1xuXG4gICAgICAgIGxldCB1cmwgPSAkZWwuZGF0YSgndXJsJyk7XG4gICAgICAgIGxldCAkd3JhcHBlciA9ICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpO1xuICAgICAgICBsZXQgJHBheW1lbnRTdGF0dXNGb3JtID0gJChzZWxlY3RvcnMuUEFZTUVOVF9TVEFUVVNfRk9STSk7XG4gICAgICAgIGxldCAkcGF5bWVudFN0YXR1c0JvZHkgPSAkKHNlbGVjdG9ycy5QQVlNRU5UX1NUQVRVU19CT0RZKTtcblxuICAgICAgICBsZXQgcGF5bWVudFN0YXR1c0Zvcm0gPSBudWxsO1xuXG4gICAgICAgIGxldCBhMSA9ICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAkcGF5bWVudFN0YXR1c0Zvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YTogJHBheW1lbnRTdGF0dXNGb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGNvbnRleHQ6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYTEuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgLy8gJHJlY2lwaWVudEZvcm0ucmVwbGFjZVdpdGgoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIpIHtcbiAgICAgICAgICAgICAgcGF5bWVudFN0YXR1c0Zvcm0gPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXltZW50U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgJHBheW1lbnRTdGF0dXNGb3JtLnJlcGxhY2VXaXRoKHBheW1lbnRTdGF0dXNGb3JtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdEZsb2F0aW5nSW5wdXQnKSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0Rm9ybVZhbGlkYXRpb24nKSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0VG9vbHRpcCcpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgJC53aGVuKGExKS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGVtZS5Mb2FkaW5nT3ZlcmxheS5oaWRlKCRlbCk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgaWYgKGVycm9ycy5wYXltZW50U3RhdHVzKSB7XG4gICAgICAgICAgICAgIC8vICQoc2VsZWN0b3JzLk9SREVSX1dSQVBQRVIpLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrOm5vdCg6ZW1wdHkpJykuY2xvc2VzdCgnZm9ybScpWzBdLnNjcm9sbEludG9WaWV3KHNjcm9sbFVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgJC53aGVuKGExKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkcGF5bWVudFN0YXR1c0JvZHkuY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBPcmRlcjtcblxufSkoKTtcbnRoZW1lLkFuYWx5dGljcyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3RvcnMgPSB7XG4gICAgQk9EWTogJ2JvZHknLFxuICAgIEFMRVJUOiAnLkpTLS1XcmFwcGVyLWFsZXJ0JyxcbiAgICBBTkFMWVRJQ1NfV1JBUFBFUjogJy5KUy0tV3JhcHBlci1hbmFseXRpY3MnLFxuXG4gICAgRVhQT1JUX1JFUE9SVF9ET1dOTE9BRF9CVVRUT046ICcuSlMtLUJ1dHRvbi1kb3dubG9hZEV4cG9ydFJlcG9ydCcsXG4gICAgRVhQT1JUX1JFUE9SVF9CT0RZOiAnLkpTLS1XcmFwcGVyLWV4cG9ydFJlcG9ydEJvZHknLFxuICB9O1xuICBjb25zdCBzY3JvbGxVcCA9IHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJ307XG4gIHZhciBhamF4TG9hZGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIEFuYWx5dGljcyhjb250YWluZXIpIHtcbiAgICB0aGlzLiRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLiRjb250YWluZXJcbiAgICAgICAgLm9uKCdjbGljaycsIHNlbGVjdG9ycy5FWFBPUlRfUkVQT1JUX0RPV05MT0FEX0JVVFRPTiwgdGhpcy5kb3dubG9hZFJlcG9ydC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC5vbignY2xpY2sgY2hhbmdlJywgc2VsZWN0b3JzLkFOQUxZVElDU19XUkFQUEVSLCB0aGlzLnByZXZlbnRJbnRlcmFjdGlvbi5iaW5kKHRoaXMpKVxuICAgIDtcblxuICAgICQoZG9jdW1lbnQpLmFqYXhTdGFydChmdW5jdGlvbigpIHtcbiAgICAgIGFqYXhMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdkaXNwb3NlVG9vbHRpcCcpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5hamF4U3RvcChmdW5jdGlvbigpIHtcbiAgICAgIGFqYXhMb2FkaW5nID0gZmFsc2U7XG4gICAgICAvLyBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdEZsb2F0aW5nSW5wdXQnKSk7XG4gICAgICAvLyBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5pdEZvcm1WYWxpZGF0aW9uJykpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2luaXRUb29sdGlwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQW5hbHl0aWNzLnByb3RvdHlwZSA9IF8uYXNzaWduSW4oe30sIEFuYWx5dGljcy5wcm90b3R5cGUsIHtcbiAgJC5leHRlbmQoQW5hbHl0aWNzLnByb3RvdHlwZSwge1xuXG4gICAgX2Rpc2FibGVGb3JtRWxlbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoc2VsZWN0b3JzLkJPRFkpLmZpbmQoXCJpbnB1dCwgc2VsZWN0LCBmb3JtXCIpLnByb3AoJ3JlYWRPbmx5JywgdHJ1ZSk7XG4gICAgfSxcblxuICAgIHByZXZlbnRJbnRlcmFjdGlvbihlKSB7XG4gICAgICBpZiAoYWpheExvYWRpbmcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkb3dubG9hZFJlcG9ydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhamF4TG9hZGluZykgcmV0dXJuO1xuXG4gICAgICBsZXQgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgbGV0IHVybCA9ICRlbC5kYXRhKCd1cmwnKTtcbiAgICAgIGxldCAkZXhwb3J0UmVwb3J0Qm9keSA9ICQoc2VsZWN0b3JzLkVYUE9SVF9SRVBPUlRfQk9EWSk7XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgJGV4cG9ydFJlcG9ydEJvZHkuY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICB9LFxuXG4gIH0pO1xuXG4gIHJldHVybiBBbmFseXRpY3M7XG5cbn0pKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICB2YXIgc2VjdGlvbnMgPSBuZXcgdGhlbWUuU2VjdGlvbnMoKTtcbiAgc2VjdGlvbnMucmVnaXN0ZXIoJ29yZGVyRGV0YWlsLXBhZ2UnLCB0aGVtZS5PcmRlcik7XG4gIHNlY3Rpb25zLnJlZ2lzdGVyKCdzYWxlcy1vdmVyLXRpbWUnLCB0aGVtZS5BbmFseXRpY3MpO1xufSk7XG5cbnRoZW1lLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFRvb2x0aXAnLCBmdW5jdGlvbigpIHsgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTsgfSwgZmFsc2UpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkaXNwb3NlVG9vbHRpcCcsIGZ1bmN0aW9uKCkgeyAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgnZGlzcG9zZScpOyB9LCBmYWxzZSk7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbml0VG9vbHRpcCcpKTtcbn07XG5cbiQodGhlbWUuaW5pdCk7IiwiaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDIvc3JjL3N3ZWV0YWxlcnQyJ1xuXG5jb25zdCBOb3RpZnkgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3dhbCA9IFN3YWwubWl4aW4oe1xuICAgICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiA0MDAwLFxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgLy8gcGFkZGluZzogJzFyZW0nLFxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MobWVzc2FnZSwgaWNvbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIHBvcHVwOiAnLS1hbGVydC1zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnLS1hbGVydC1jb250ZW50JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFsZXJ0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogaWNvbiA/ICdzdWNjZXNzJyA6ICcnLFxuICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSwgaWNvbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIHBvcHVwOiAnLS1hbGVydC1kYW5nZXInLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICctLWFsZXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiBpY29uID8gJ2Vycm9yJyA6ICcnLFxuICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlLCBpY29uID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgYWxlcnQgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgcG9wdXA6ICctLWFsZXJ0LXdhcm5pbmcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICctLWFsZXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiBpY29uID8gJ3dhcm5pbmcnIDogJycsXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UsIGljb24gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBhbGVydCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBwb3B1cDogJy0tYWxlcnQtaW5mbycsXG4gICAgICAgICAgICAgICAgY29udGVudDogJy0tYWxlcnQtY29udGVudCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhbGVydC5maXJlKHtcbiAgICAgICAgICAgIGljb246IGljb24gPyAnaW5mbycgOiAnJyxcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgd2FybmluZzogd2FybmluZyxcbiAgICAgICAgaW5mbzogaW5mbyxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZ5OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyT3V0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIElTX0ZJTFRFUl9PVVQgPSBUWVBFID09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfT1VUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJPdXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlck91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJPdXQ6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcbiAgaWYgKCEoYXJnc0xlbmd0aCBpbiBmYWN0b3JpZXMpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSB3ZSBoYXZlIG5vIHByb3BlciBhbHRlcm5hdGl2ZXMsIElFOC0gb25seVxuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBsaXN0LmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1thcmdzTGVuZ3RoXShDLCBhcmdzKTtcbn07XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8qIGdsb2JhbCBnbG9iYWxUaGlzIC0tIHNhZmUgKi9cbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGAzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xuICByZXR1cm4gIVN5bWJvbC5zaGFtICYmXG4gICAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgIChJU19OT0RFID8gVjhfVkVSU0lPTiA9PT0gMzggOiBWOF9WRVJTSU9OID4gMzcgJiYgVjhfVkVSU0lPTiA8IDQxKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSAqL1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IGRvY3VtZW50LmRvbWFpbiAmJiBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gYWN0aXZlWERvY3VtZW50ID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIHZhciBzdGF0ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgfVxuICAgIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICAgIGlmICghc3RhdGUuc291cmNlKSB7XG4gICAgICBzdGF0ZS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gICAgfVxuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjkuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCJ2YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAvKiBnbG9iYWwgU3ltYm9sIC0tIHNhZmUgKi9cbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkgfHwgIShOQVRJVkVfU1lNQk9MIHx8IHR5cGVvZiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPT0gJ3N0cmluZycpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICAgIH1cbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGJpbmQ6IGJpbmRcbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMgfSwge1xuICBrZXlzOiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXModG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gc3BlYyByZXF1aXJlbWVudFxuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgRGlzbWlzc1JlYXNvbiB9IGZyb20gJy4vdXRpbHMvRGlzbWlzc1JlYXNvbi5qcydcbmltcG9ydCAqIGFzIHN0YXRpY01ldGhvZHMgZnJvbSAnLi9zdGF0aWNNZXRob2RzLmpzJ1xuaW1wb3J0ICogYXMgaW5zdGFuY2VNZXRob2RzIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuL3ByaXZhdGVQcm9wcy5qcydcblxubGV0IGN1cnJlbnRJbnN0YW5jZVxuXG5jbGFzcyBTd2VldEFsZXJ0IHtcbiAgY29uc3RydWN0b3IgKC4uLmFyZ3MpIHtcbiAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgUHJvbWlzZVxuICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpXG4gICAgfVxuXG4gICAgY3VycmVudEluc3RhbmNlID0gdGhpc1xuXG4gICAgY29uc3Qgb3V0ZXJQYXJhbXMgPSBPYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGFyZ3MpKVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHZhbHVlOiBvdXRlclBhcmFtcyxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpXG4gICAgcHJpdmF0ZVByb3BzLnByb21pc2Uuc2V0KHRoaXMsIHByb21pc2UpXG4gIH1cblxuICAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcbiAgdGhlbiAob25GdWxmaWxsZWQpIHtcbiAgICBjb25zdCBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZClcbiAgfVxuXG4gIGZpbmFsbHkgKG9uRmluYWxseSkge1xuICAgIGNvbnN0IHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcylcbiAgICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSlcbiAgfVxufVxuXG4vLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcbk9iamVjdC5hc3NpZ24oU3dlZXRBbGVydC5wcm90b3R5cGUsIGluc3RhbmNlTWV0aG9kcylcblxuLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuT2JqZWN0LmFzc2lnbihTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKVxuXG4vLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbk9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChrZXkgPT4ge1xuICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGlmIChjdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBjdXJyZW50SW5zdGFuY2Vba2V5XSguLi5hcmdzKVxuICAgIH1cbiAgfVxufSlcblxuU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvblxuXG5Td2VldEFsZXJ0LnZlcnNpb24gPSAnMTAuMTUuNydcblxuZXhwb3J0IGRlZmF1bHQgU3dlZXRBbGVydFxuIiwiZXhwb3J0IGNvbnN0IFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMFxuIiwiaW1wb3J0IHsgUkVTVE9SRV9GT0NVU19USU1FT1VUIH0gZnJvbSAnLi9jb25zdGFudHMuanMnXG5cbmNvbnN0IGdsb2JhbFN0YXRlID0ge31cblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU3RhdGVcblxuY29uc3QgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKClcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICB9XG59XG5cbi8vIFJlc3RvcmUgcHJldmlvdXMgYWN0aXZlIChmb2N1c2VkKSBlbGVtZW50XG5leHBvcnQgY29uc3QgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCB4ID0gd2luZG93LnNjcm9sbFhcbiAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFlcbiAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpXG4gICAgICByZXNvbHZlKClcbiAgICB9LCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQpIC8vIGlzc3Vlcy85MDBcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHggIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJykgeyAvLyBJRSBkb2Vzbid0IGhhdmUgc2Nyb2xsWC9zY3JvbGxZIHN1cHBvcnRcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KVxuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL2hpZGVMb2FkaW5nLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvZ2V0SW5wdXQuanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9jbG9zZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL2VuYWJsZS1kaXNhYmxlLWVsZW1lbnRzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvdmFsaWRhdGlvbi1tZXNzYWdlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvcHJvZ3Jlc3Mtc3RlcHMuanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9fbWFpbi5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL3VwZGF0ZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL19kZXN0cm95LmpzJ1xuIiwiaW1wb3J0IGdsb2JhbFN0YXRlIGZyb20gJy4uL2dsb2JhbFN0YXRlLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5pbXBvcnQgcHJpdmF0ZU1ldGhvZHMgZnJvbSAnLi4vcHJpdmF0ZU1ldGhvZHMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfZGVzdHJveSAoKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKVxuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcylcblxuICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFub3RoZXIgU3dhbCBjbG9zaW5nXG4gIGlmIChkb21DYWNoZS5wb3B1cCAmJiBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKVxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2tcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc3dhbCBkaXNwb3NhbCBkZWZlciB0aW1lclxuICBpZiAoZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcilcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyXG4gIH1cblxuICBydW5EaWREZXN0cm95KGlubmVyUGFyYW1zKVxuXG4gIGRpc3Bvc2VTd2FsKHRoaXMpXG59XG5cbmNvbnN0IHJ1bkRpZERlc3Ryb3kgPSAoaW5uZXJQYXJhbXMpID0+IHtcbiAgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy5kaWREZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSgpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGlubmVyUGFyYW1zLm9uRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlubmVyUGFyYW1zLm9uRGVzdHJveSgpIC8vIEBkZXByZWNhdGVkXG4gIH1cbn1cblxuY29uc3QgZGlzcG9zZVN3YWwgPSAoaW5zdGFuY2UpID0+IHtcbiAgLy8gVW5zZXQgdGhpcy5wYXJhbXMgc28gR0Mgd2lsbCBkaXNwb3NlIGl0ICgjMTU2OSlcbiAgZGVsZXRlIGluc3RhbmNlLnBhcmFtc1xuICAvLyBVbnNldCBnbG9iYWxTdGF0ZSBwcm9wcyBzbyBHQyB3aWxsIGRpc3Bvc2UgZ2xvYmFsU3RhdGUgKCMxNTY5KVxuICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJcbiAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXRcbiAgLy8gVW5zZXQgV2Vha01hcHMgc28gR0Mgd2lsbCBiZSBhYmxlIHRvIGRpc3Bvc2UgdGhlbSAoIzE1NjkpXG4gIHVuc2V0V2Vha01hcHMocHJpdmF0ZVByb3BzKVxuICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzKVxufVxuXG5jb25zdCB1bnNldFdlYWtNYXBzID0gKG9iaikgPT4ge1xuICBmb3IgKGNvbnN0IGkgaW4gb2JqKSB7XG4gICAgb2JqW2ldID0gbmV3IFdlYWtNYXAoKVxuICB9XG59XG4iLCJpbXBvcnQgZGVmYXVsdFBhcmFtcywgeyBzaG93V2FybmluZ3NGb3JQYXJhbXMgfSBmcm9tICcuLi91dGlscy9wYXJhbXMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi91dGlscy9jbGFzc2VzLmpzJ1xuaW1wb3J0IFRpbWVyIGZyb20gJy4uL3V0aWxzL1RpbWVyLmpzJ1xuaW1wb3J0IHsgY2FsbElmRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcbmltcG9ydCBzZXRQYXJhbWV0ZXJzIGZyb20gJy4uL3V0aWxzL3NldFBhcmFtZXRlcnMuanMnXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL2dldFRlbXBsYXRlUGFyYW1zLmpzJ1xuaW1wb3J0IGdsb2JhbFN0YXRlIGZyb20gJy4uL2dsb2JhbFN0YXRlLmpzJ1xuaW1wb3J0IHsgb3BlblBvcHVwIH0gZnJvbSAnLi4vdXRpbHMvb3BlblBvcHVwLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5pbXBvcnQgcHJpdmF0ZU1ldGhvZHMgZnJvbSAnLi4vcHJpdmF0ZU1ldGhvZHMuanMnXG5pbXBvcnQgeyBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZSB9IGZyb20gJy4uL3V0aWxzL2RvbS9pbnB1dFV0aWxzLmpzJ1xuaW1wb3J0IHsgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrLCBoYW5kbGVEZW55QnV0dG9uQ2xpY2ssIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrIH0gZnJvbSAnLi9idXR0b25zLWhhbmRsZXJzLmpzJ1xuaW1wb3J0IHsgYWRkS2V5ZG93bkhhbmRsZXIsIHNldEZvY3VzIH0gZnJvbSAnLi9rZXlkb3duLWhhbmRsZXIuanMnXG5pbXBvcnQgeyBoYW5kbGVQb3B1cENsaWNrIH0gZnJvbSAnLi9wb3B1cC1jbGljay1oYW5kbGVyLmpzJ1xuaW1wb3J0IHsgRGlzbWlzc1JlYXNvbiB9IGZyb20gJy4uL3V0aWxzL0Rpc21pc3NSZWFzb24uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfbWFpbiAodXNlclBhcmFtcywgbWl4aW5QYXJhbXMgPSB7fSkge1xuICBzaG93V2FybmluZ3NGb3JQYXJhbXMoT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHVzZXJQYXJhbXMpKVxuXG4gIGlmIChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpIHtcbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKVxuICB9XG4gIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSA9IHRoaXNcblxuICBjb25zdCBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcywgbWl4aW5QYXJhbXMpXG4gIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpXG4gIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpXG5cbiAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHRpbWVyXG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKClcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dFxuICB9XG5cbiAgLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dClcblxuICBjb25zdCBkb21DYWNoZSA9IHBvcHVsYXRlRG9tQ2FjaGUodGhpcylcblxuICBkb20ucmVuZGVyKHRoaXMsIGlubmVyUGFyYW1zKVxuXG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpXG5cbiAgcmV0dXJuIHN3YWxQcm9taXNlKHRoaXMsIGRvbUNhY2hlLCBpbm5lclBhcmFtcylcbn1cblxuY29uc3QgcHJlcGFyZVBhcmFtcyA9ICh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcykgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZVBhcmFtcyA9IGdldFRlbXBsYXRlUGFyYW1zKHVzZXJQYXJhbXMpXG4gIGNvbnN0IHNob3dDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuc2hvd0NsYXNzLCBtaXhpblBhcmFtcy5zaG93Q2xhc3MsIHRlbXBsYXRlUGFyYW1zLnNob3dDbGFzcywgdXNlclBhcmFtcy5zaG93Q2xhc3MpXG4gIGNvbnN0IGhpZGVDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuaGlkZUNsYXNzLCBtaXhpblBhcmFtcy5oaWRlQ2xhc3MsIHRlbXBsYXRlUGFyYW1zLmhpZGVDbGFzcywgdXNlclBhcmFtcy5oaWRlQ2xhc3MpXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMsIG1peGluUGFyYW1zLCB0ZW1wbGF0ZVBhcmFtcywgdXNlclBhcmFtcykgLy8gcHJlY2VkZW5jZSBpcyBkZXNjcmliZWQgaW4gIzIxMzFcbiAgcGFyYW1zLnNob3dDbGFzcyA9IHNob3dDbGFzc1xuICBwYXJhbXMuaGlkZUNsYXNzID0gaGlkZUNsYXNzXG4gIC8vIEBkZXByZWNhdGVkXG4gIGlmICh1c2VyUGFyYW1zLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICBwYXJhbXMuc2hvd0NsYXNzID0ge1xuICAgICAgcG9wdXA6ICdzd2FsMi1ub2FuaW1hdGlvbicsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLW5vYW5pbWF0aW9uJ1xuICAgIH1cbiAgICBwYXJhbXMuaGlkZUNsYXNzID0ge31cbiAgfVxuICByZXR1cm4gcGFyYW1zXG59XG5cbmNvbnN0IHN3YWxQcm9taXNlID0gKGluc3RhbmNlLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgIGNvbnN0IGRpc21pc3NXaXRoID0gKGRpc21pc3MpID0+IHtcbiAgICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoeyBpc0Rpc21pc3NlZDogdHJ1ZSwgZGlzbWlzcyB9KVxuICAgIH1cblxuICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoaW5zdGFuY2UsIHJlc29sdmUpXG5cbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGlubmVyUGFyYW1zKVxuICAgIGRvbUNhY2hlLmRlbnlCdXR0b24ub25jbGljayA9ICgpID0+IGhhbmRsZURlbnlCdXR0b25DbGljayhpbnN0YW5jZSwgaW5uZXJQYXJhbXMpXG4gICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpXG5cbiAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSlcblxuICAgIGhhbmRsZVBvcHVwQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aClcblxuICAgIGFkZEtleWRvd25IYW5kbGVyKGluc3RhbmNlLCBnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0ICYmIChpbm5lclBhcmFtcy5pbnB1dCB8fCBpbm5lclBhcmFtcy5mb290ZXIgfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSkge1xuICAgICAgZG9tLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSlcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpXG5cbiAgICBvcGVuUG9wdXAoaW5uZXJQYXJhbXMpXG5cbiAgICBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpXG5cbiAgICBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKVxuXG4gICAgLy8gU2Nyb2xsIGNvbnRhaW5lciB0byB0b3Agb24gb3BlbiAoIzEyNDcsICMxOTQ2KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDBcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBwb3B1bGF0ZURvbUNhY2hlID0gKGluc3RhbmNlKSA9PiB7XG4gIGNvbnN0IGRvbUNhY2hlID0ge1xuICAgIHBvcHVwOiBkb20uZ2V0UG9wdXAoKSxcbiAgICBjb250YWluZXI6IGRvbS5nZXRDb250YWluZXIoKSxcbiAgICBjb250ZW50OiBkb20uZ2V0Q29udGVudCgpLFxuICAgIGFjdGlvbnM6IGRvbS5nZXRBY3Rpb25zKCksXG4gICAgY29uZmlybUJ1dHRvbjogZG9tLmdldENvbmZpcm1CdXR0b24oKSxcbiAgICBkZW55QnV0dG9uOiBkb20uZ2V0RGVueUJ1dHRvbigpLFxuICAgIGNhbmNlbEJ1dHRvbjogZG9tLmdldENhbmNlbEJ1dHRvbigpLFxuICAgIGxvYWRlcjogZG9tLmdldExvYWRlcigpLFxuICAgIGNsb3NlQnV0dG9uOiBkb20uZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogZG9tLmdldFZhbGlkYXRpb25NZXNzYWdlKCksXG4gICAgcHJvZ3Jlc3NTdGVwczogZG9tLmdldFByb2dyZXNzU3RlcHMoKVxuICB9XG4gIHByaXZhdGVQcm9wcy5kb21DYWNoZS5zZXQoaW5zdGFuY2UsIGRvbUNhY2hlKVxuXG4gIHJldHVybiBkb21DYWNoZVxufVxuXG5jb25zdCBzZXR1cFRpbWVyID0gKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpID0+IHtcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGRvbS5nZXRUaW1lclByb2dyZXNzQmFyKClcbiAgZG9tLmhpZGUodGltZXJQcm9ncmVzc0JhcilcbiAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICBkaXNtaXNzV2l0aCgndGltZXInKVxuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXRcbiAgICB9LCBpbm5lclBhcmFtcy50aW1lcilcbiAgICBpZiAoaW5uZXJQYXJhbXMudGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgZG9tLnNob3codGltZXJQcm9ncmVzc0JhcilcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LnJ1bm5pbmcpIHsgLy8gdGltZXIgY2FuIGJlIGFscmVhZHkgc3RvcHBlZCBvciB1bnNldCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgZG9tLmFuaW1hdGVUaW1lclByb2dyZXNzQmFyKGlubmVyUGFyYW1zLnRpbWVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpbml0Rm9jdXMgPSAoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgIHJldHVybiBibHVyQWN0aXZlRWxlbWVudCgpXG4gIH1cblxuICBpZiAoIWZvY3VzQnV0dG9uKGRvbUNhY2hlLCBpbm5lclBhcmFtcykpIHtcbiAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgLTEsIDEpXG4gIH1cbn1cblxuY29uc3QgZm9jdXNCdXR0b24gPSAoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGlmIChpbm5lclBhcmFtcy5mb2N1c0RlbnkgJiYgZG9tLmlzVmlzaWJsZShkb21DYWNoZS5kZW55QnV0dG9uKSkge1xuICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZm9jdXMoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwgJiYgZG9tLmlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ29uZmlybSAmJiBkb20uaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBibHVyQWN0aXZlRWxlbWVudCA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gIH1cbn1cbiIsImltcG9ydCB7IGlzVmlzaWJsZSB9IGZyb20gJy4uL3V0aWxzL2RvbS9kb21VdGlscy5qcydcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tICcuLi91dGlscy9kb20vaW5wdXRVdGlscy5qcydcbmltcG9ydCB7IGdldERlbnlCdXR0b24sIGdldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2dldHRlcnMuanMnXG5pbXBvcnQgeyBhc1Byb21pc2UgfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcbmltcG9ydCB7IHNob3dMb2FkaW5nIH0gZnJvbSAnLi4vc3RhdGljTWV0aG9kcy9zaG93TG9hZGluZy5qcydcbmltcG9ydCB7IERpc21pc3NSZWFzb24gfSBmcm9tICcuLi91dGlscy9EaXNtaXNzUmVhc29uLmpzJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrID0gKGluc3RhbmNlLCBpbm5lclBhcmFtcykgPT4ge1xuICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpXG4gIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCAnY29uZmlybScpXG4gIH0gZWxzZSB7XG4gICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbnlCdXR0b25DbGljayA9IChpbnN0YW5jZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKVxuICBpZiAoaW5uZXJQYXJhbXMucmV0dXJuSW5wdXRWYWx1ZU9uRGVueSkge1xuICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCAnZGVueScpXG4gIH0gZWxzZSB7XG4gICAgZGVueShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGZhbHNlKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDYW5jZWxCdXR0b25DbGljayA9IChpbnN0YW5jZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKVxuICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNhbmNlbClcbn1cblxuY29uc3QgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dCA9IChpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHR5cGUgLyogdHlwZSBpcyBlaXRoZXIgJ2NvbmZpcm0nIG9yICdkZW55JyAqLykgPT4ge1xuICBjb25zdCBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpXG4gIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSlcbiAgfSBlbHNlIGlmICghaW5zdGFuY2UuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKClcbiAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlbnknKSB7XG4gICAgZGVueShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSAoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBpbnB1dFZhbHVlKSA9PiB7XG4gIGluc3RhbmNlLmRpc2FibGVJbnB1dCgpXG4gIGNvbnN0IHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoXG4gICAgaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKVxuICApXG4gIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oXG4gICAgKHZhbGlkYXRpb25NZXNzYWdlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKClcbiAgICAgIGluc3RhbmNlLmVuYWJsZUlucHV0KClcbiAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuY29uc3QgZGVueSA9IChpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHZhbHVlKSA9PiB7XG4gIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25EZW55KSB7XG4gICAgc2hvd0xvYWRpbmcoZ2V0RGVueUJ1dHRvbigpKVxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnByZURlbnkpIHtcbiAgICBjb25zdCBwcmVEZW55UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKFxuICAgICAgaW5uZXJQYXJhbXMucHJlRGVueSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKVxuICAgIClcbiAgICBwcmVEZW55UHJvbWlzZS50aGVuKFxuICAgICAgKHByZURlbnlWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAocHJlRGVueVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHsgaXNEZW5pZWQ6IHRydWUsIHZhbHVlOiB0eXBlb2YgcHJlRGVueVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlRGVueVZhbHVlIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7IGlzRGVuaWVkOiB0cnVlLCB2YWx1ZSB9KVxuICB9XG59XG5cbmNvbnN0IHN1Y2NlZWRXaXRoID0gKGluc3RhbmNlLCB2YWx1ZSkgPT4ge1xuICBpbnN0YW5jZS5jbG9zZVBvcHVwKHsgaXNDb25maXJtZWQ6IHRydWUsIHZhbHVlIH0pXG59XG5cbmNvbnN0IGNvbmZpcm0gPSAoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCB2YWx1ZSkgPT4ge1xuICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgIHNob3dMb2FkaW5nKCkgLy8gVE9ETzogbWFrZSBzaG93TG9hZGluZyBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICBpbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKClcbiAgICBjb25zdCBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKFxuICAgICAgaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKVxuICAgIClcbiAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKFxuICAgICAgKHByZUNvbmZpcm1WYWx1ZSkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKGdldFZhbGlkYXRpb25NZXNzYWdlKCkpIHx8IHByZUNvbmZpcm1WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyB1bmRvU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMvc2Nyb2xsYmFyRml4LmpzJ1xuaW1wb3J0IHsgdW5kb0lPU2ZpeCB9IGZyb20gJy4uL3V0aWxzL2lvc0ZpeC5qcydcbmltcG9ydCB7IHVuZG9JRWZpeCB9IGZyb20gJy4uL3V0aWxzL2llRml4LmpzJ1xuaW1wb3J0IHsgdW5zZXRBcmlhSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvYXJpYS5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL3V0aWxzL2NsYXNzZXMuanMnXG5pbXBvcnQgZ2xvYmFsU3RhdGUsIHsgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9nbG9iYWxTdGF0ZS5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuaW1wb3J0IHByaXZhdGVNZXRob2RzIGZyb20gJy4uL3ByaXZhdGVNZXRob2RzLmpzJ1xuXG4vKlxuICogSW5zdGFuY2UgbWV0aG9kIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUgKGluc3RhbmNlLCBjb250YWluZXIsIGlzVG9hc3QsIGRpZENsb3NlKSB7XG4gIGlmIChpc1RvYXN0KSB7XG4gICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpXG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKS50aGVuKCgpID0+IHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKSlcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwgeyBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlIH0pXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlXG4gIH1cblxuICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgIWRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKSkge1xuICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcbiAgfVxuXG4gIGlmIChkb20uaXNNb2RhbCgpKSB7XG4gICAgdW5kb1Njcm9sbGJhcigpXG4gICAgdW5kb0lPU2ZpeCgpXG4gICAgdW5kb0lFZml4KClcbiAgICB1bnNldEFyaWFIaWRkZW4oKVxuICB9XG5cbiAgcmVtb3ZlQm9keUNsYXNzZXMoKVxufVxuXG5mdW5jdGlvbiByZW1vdmVCb2R5Q2xhc3NlcyAoKSB7XG4gIGRvbS5yZW1vdmVDbGFzcyhcbiAgICBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSxcbiAgICBbXG4gICAgICBzd2FsQ2xhc3Nlcy5zaG93bixcbiAgICAgIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLFxuICAgICAgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sXG4gICAgICBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSxcbiAgICAgIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXVxuICAgIF1cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2UgKHJlc29sdmVWYWx1ZSkge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG5cbiAgaWYgKCFwb3B1cCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVzb2x2ZVZhbHVlID0gcHJlcGFyZVJlc29sdmVWYWx1ZShyZXNvbHZlVmFsdWUpXG5cbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG4gIGlmICghaW5uZXJQYXJhbXMgfHwgZG9tLmhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKVxuXG4gIGRvbS5yZW1vdmVDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLnBvcHVwKVxuICBkb20uYWRkQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5wb3B1cClcblxuICBjb25zdCBiYWNrZHJvcCA9IGRvbS5nZXRDb250YWluZXIoKVxuICBkb20ucmVtb3ZlQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcClcbiAgZG9tLmFkZENsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MuYmFja2Ryb3ApXG5cbiAgaGFuZGxlUG9wdXBBbmltYXRpb24odGhpcywgcG9wdXAsIGlubmVyUGFyYW1zKVxuXG4gIC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG4gIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUpXG59XG5cbmNvbnN0IHByZXBhcmVSZXNvbHZlVmFsdWUgPSAocmVzb2x2ZVZhbHVlKSA9PiB7XG4gIC8vIFdoZW4gdXNlciBjYWxscyBTd2FsLmNsb3NlKClcbiAgaWYgKHR5cGVvZiByZXNvbHZlVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgIGlzRGVuaWVkOiBmYWxzZSxcbiAgICAgIGlzRGlzbWlzc2VkOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgIGlzRGlzbWlzc2VkOiBmYWxzZSxcbiAgfSwgcmVzb2x2ZVZhbHVlKVxufVxuXG5jb25zdCBoYW5kbGVQb3B1cEFuaW1hdGlvbiA9IChpbnN0YW5jZSwgcG9wdXAsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuICAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG4gIGNvbnN0IGFuaW1hdGlvbklzU3VwcG9ydGVkID0gZG9tLmFuaW1hdGlvbkVuZEV2ZW50ICYmIGRvbS5oYXNDc3NBbmltYXRpb24ocG9wdXApXG5cbiAgY29uc3Qge1xuICAgIG9uQ2xvc2UsIG9uQWZ0ZXJDbG9zZSwgLy8gQGRlcHJlY2F0ZWRcbiAgICB3aWxsQ2xvc2UsIGRpZENsb3NlXG4gIH0gPSBpbm5lclBhcmFtc1xuXG4gIHJ1bkRpZENsb3NlKHBvcHVwLCB3aWxsQ2xvc2UsIG9uQ2xvc2UpXG5cbiAgaWYgKGFuaW1hdGlvbklzU3VwcG9ydGVkKSB7XG4gICAgYW5pbWF0ZVBvcHVwKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCBkaWRDbG9zZSB8fCBvbkFmdGVyQ2xvc2UpXG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgZG9tLmlzVG9hc3QoKSwgZGlkQ2xvc2UgfHwgb25BZnRlckNsb3NlKVxuICB9XG59XG5cbmNvbnN0IHJ1bkRpZENsb3NlID0gKHBvcHVwLCB3aWxsQ2xvc2UsIG9uQ2xvc2UpID0+IHtcbiAgaWYgKHdpbGxDbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2lsbENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2lsbENsb3NlKHBvcHVwKVxuICB9IGVsc2UgaWYgKG9uQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvbkNsb3NlKHBvcHVwKSAvLyBAZGVwcmVjYXRlZFxuICB9XG59XG5cbmNvbnN0IGFuaW1hdGVQb3B1cCA9IChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgZGlkQ2xvc2UpID0+IHtcbiAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrID0gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlLmJpbmQobnVsbCwgaW5zdGFuY2UsIGNvbnRhaW5lciwgZG9tLmlzVG9hc3QoKSwgZGlkQ2xvc2UpXG4gIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoZG9tLmFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXApIHtcbiAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpXG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlID0gKGluc3RhbmNlLCBkaWRDbG9zZSkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRpZENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkaWRDbG9zZSgpXG4gICAgfVxuICAgIGluc3RhbmNlLl9kZXN0cm95KClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgY2xvc2UgYXMgY2xvc2VQb3B1cCxcbiAgY2xvc2UgYXMgY2xvc2VNb2RhbCxcbiAgY2xvc2UgYXMgY2xvc2VUb2FzdFxufVxuIiwiaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbmZ1bmN0aW9uIHNldEJ1dHRvbnNEaXNhYmxlZCAoaW5zdGFuY2UsIGJ1dHRvbnMsIGRpc2FibGVkKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSlcbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgZG9tQ2FjaGVbYnV0dG9uXS5kaXNhYmxlZCA9IGRpc2FibGVkXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNldElucHV0RGlzYWJsZWQgKGlucHV0LCBkaXNhYmxlZCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICBjb25zdCByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICBjb25zdCByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBkaXNhYmxlZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMgKCkge1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIGZhbHNlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMgKCkge1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIHRydWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVJbnB1dCAoKSB7XG4gIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgZmFsc2UpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlSW5wdXQgKCkge1xuICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbi8vIEdldCBpbnB1dCBlbGVtZW50IGJ5IHNwZWNpZmllZCB0eXBlIG9yLCBpZiB0eXBlIGlzbid0IHNwZWNpZmllZCwgYnkgcGFyYW1zLmlucHV0XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXQgKGluc3RhbmNlKSB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB0aGlzKVxuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UgfHwgdGhpcylcbiAgaWYgKCFkb21DYWNoZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRvbS5nZXRJbnB1dChkb21DYWNoZS5jb250ZW50LCBpbm5lclBhcmFtcy5pbnB1dClcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL3V0aWxzL2NsYXNzZXMuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuLyoqXG4gKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gKi9cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nICgpIHtcbiAgLy8gZG8gbm90aGluZyBpZiBwb3B1cCBpcyBjbG9zZWRcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG4gIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcylcbiAgZG9tLmhpZGUoZG9tQ2FjaGUubG9hZGVyKVxuICBjb25zdCBidXR0b25Ub1JlcGxhY2UgPSBkb21DYWNoZS5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRvbUNhY2hlLmxvYWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnKSlcbiAgaWYgKGJ1dHRvblRvUmVwbGFjZS5sZW5ndGgpIHtcbiAgICBkb20uc2hvdyhidXR0b25Ub1JlcGxhY2VbMF0sICdpbmxpbmUtYmxvY2snKVxuICB9IGVsc2UgaWYgKGRvbS5hbGxCdXR0b25zQXJlSGlkZGVuKCkpIHtcbiAgICBkb20uaGlkZShkb21DYWNoZS5hY3Rpb25zKVxuICB9XG4gIGRvbS5yZW1vdmVDbGFzcyhbZG9tQ2FjaGUucG9wdXAsIGRvbUNhY2hlLmFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKVxuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpXG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJylcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gIGRvbUNhY2hlLmRlbnlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxufVxuXG5leHBvcnQge1xuICBoaWRlTG9hZGluZyxcbiAgaGlkZUxvYWRpbmcgYXMgZGlzYWJsZUxvYWRpbmdcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBEaXNtaXNzUmVhc29uIH0gZnJvbSAnLi4vdXRpbHMvRGlzbWlzc1JlYXNvbi5qcydcbmltcG9ydCB7IGNhbGxJZkZ1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnXG5pbXBvcnQgeyBjbGlja0NvbmZpcm0gfSBmcm9tICcuLi9zdGF0aWNNZXRob2RzL2RvbS5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG5leHBvcnQgY29uc3QgYWRkS2V5ZG93bkhhbmRsZXIgPSAoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpID0+IHtcbiAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7IGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgfSlcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2VcbiAgfVxuXG4gIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IChlKSA9PiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBkb20uZ2V0UG9wdXAoKVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHsgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSB9KVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlXG4gIH1cbn1cblxuLy8gRm9jdXMgaGFuZGxpbmdcbmV4cG9ydCBjb25zdCBzZXRGb2N1cyA9IChpbm5lclBhcmFtcywgaW5kZXgsIGluY3JlbWVudCkgPT4ge1xuICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGRvbS5nZXRGb2N1c2FibGVFbGVtZW50cygpXG4gIC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG4gIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50XG5cbiAgICAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG4gICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMFxuXG4gICAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXG4gICAgfVxuXG4gICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpXG4gIH1cbiAgLy8gbm8gdmlzaWJsZSBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBwb3B1cFxuICBkb20uZ2V0UG9wdXAoKS5mb2N1cygpXG59XG5cbmNvbnN0IGFycm93S2V5c05leHRCdXR0b24gPSBbXG4gICdBcnJvd1JpZ2h0JywgJ0Fycm93RG93bicsXG4gICdSaWdodCcsICdEb3duJyAvLyBJRTExXG5dXG5cbmNvbnN0IGFycm93S2V5c1ByZXZpb3VzQnV0dG9uID0gW1xuICAnQXJyb3dMZWZ0JywgJ0Fycm93VXAnLFxuICAnTGVmdCcsICdVcCcgLy8gSUUxMVxuXVxuXG5jb25zdCBlc2NLZXlzID0gW1xuICAnRXNjYXBlJyxcbiAgJ0VzYycgLy8gSUUxMVxuXVxuXG5jb25zdCBrZXlkb3duSGFuZGxlciA9IChpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuXG4gIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm4gLy8gVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICAvLyBFTlRFUlxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpXG5cbiAgLy8gVEFCXG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKVxuXG4gIC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgfSBlbHNlIGlmIChbLi4uYXJyb3dLZXlzTmV4dEJ1dHRvbiwgLi4uYXJyb3dLZXlzUHJldmlvdXNCdXR0b25dLmluY2x1ZGVzKGUua2V5KSkge1xuICAgIGhhbmRsZUFycm93cyhlLmtleSlcblxuICAvLyBFU0NcbiAgfSBlbHNlIGlmIChlc2NLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xuICAgIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRW50ZXIgPSAoaW5zdGFuY2UsIGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gIC8vICM3MjAgIzcyMVxuICBpZiAoZS5pc0NvbXBvc2luZykge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGUudGFyZ2V0ICYmIGluc3RhbmNlLmdldElucHV0KCkgJiYgZS50YXJnZXQub3V0ZXJIVE1MID09PSBpbnN0YW5jZS5nZXRJbnB1dCgpLm91dGVySFRNTCkge1xuICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmNsdWRlcyhpbm5lclBhcmFtcy5pbnB1dCkpIHtcbiAgICAgIHJldHVybiAvLyBkbyBub3Qgc3VibWl0XG4gICAgfVxuXG4gICAgY2xpY2tDb25maXJtKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVUYWIgPSAoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0XG5cbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBkb20uZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKVxuICBsZXQgYnRuSW5kZXggPSAtMVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICBidG5JbmRleCA9IGlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGJ0bkluZGV4LCAxKVxuICB9IGVsc2Uge1xuICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgLTEpXG4gIH1cbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBlLnByZXZlbnREZWZhdWx0KClcbn1cblxuY29uc3QgaGFuZGxlQXJyb3dzID0gKGtleSkgPT4ge1xuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9tLmdldENvbmZpcm1CdXR0b24oKVxuICBjb25zdCBkZW55QnV0dG9uID0gZG9tLmdldERlbnlCdXR0b24oKVxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb20uZ2V0Q2FuY2VsQnV0dG9uKClcbiAgaWYgKCFbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXS5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHNpYmxpbmcgPSBhcnJvd0tleXNOZXh0QnV0dG9uLmluY2x1ZGVzKGtleSkgPyAnbmV4dEVsZW1lbnRTaWJsaW5nJyA6ICdwcmV2aW91c0VsZW1lbnRTaWJsaW5nJ1xuICBjb25zdCBidXR0b25Ub0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFtzaWJsaW5nXVxuICBpZiAoYnV0dG9uVG9Gb2N1cykge1xuICAgIGJ1dHRvblRvRm9jdXMuZm9jdXMoKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUVzYyA9IChlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpID0+IHtcbiAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uZXNjKVxuICB9XG59XG4iLCJpbXBvcnQgeyBjYWxsSWZGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgRGlzbWlzc1JlYXNvbiB9IGZyb20gJy4uL3V0aWxzL0Rpc21pc3NSZWFzb24uanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgIGhhbmRsZVRvYXN0Q2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aClcbiAgfSBlbHNlIHtcbiAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgc2xpZGVyXG4gICAgaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpXG5cbiAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuICAgIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSlcblxuICAgIGhhbmRsZU1vZGFsQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVUb2FzdENsaWNrID0gKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgLy8gQ2xvc2luZyB0b2FzdCBieSBpbnRlcm5hbCBjbGlja1xuICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSlcbiAgICBpZiAoXG4gICAgICBpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiB8fFxuICAgICAgaW5uZXJQYXJhbXMuc2hvd0RlbnlCdXR0b24gfHxcbiAgICAgIGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHxcbiAgICAgIGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbiB8fFxuICAgICAgaW5uZXJQYXJhbXMudGltZXIgfHxcbiAgICAgIGlubmVyUGFyYW1zLmlucHV0XG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSlcbiAgfVxufVxuXG5sZXQgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2VcblxuY29uc3QgaGFuZGxlTW9kYWxNb3VzZWRvd24gPSAoZG9tQ2FjaGUpID0+IHtcbiAgZG9tQ2FjaGUucG9wdXAub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gdW5kZWZpbmVkXG4gICAgICAvLyBXZSBvbmx5IGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGJlY2F1c2UgdXN1YWxseSBpdCBkb2Vzbid0XG4gICAgICAvLyBoYXZlIGFueSBvdGhlciBkaXJlY3QgY2hpbGRyZW4gYXNpZGUgb2YgdGhlIHBvcHVwXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUNvbnRhaW5lck1vdXNlZG93biA9IChkb21DYWNoZSkgPT4ge1xuICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZFxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVNb2RhbENsaWNrID0gKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSlcbiAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcyAoKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKVxuICByZXR1cm4gZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwc1xufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL3NyYy91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnLi4vc3dlZXRhbGVydDIuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuLyoqXG4gKiBVcGRhdGVzIHBvcHVwIHBhcmFtZXRlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUgKHBhcmFtcykge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKVxuXG4gIGlmICghcG9wdXAgfHwgZG9tLmhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgcmV0dXJuIHdhcm4oYFlvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLmApXG4gIH1cblxuICBjb25zdCB2YWxpZFVwZGF0YWJsZVBhcmFtcyA9IHt9XG5cbiAgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICBpZiAoc3dlZXRBbGVydC5pc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHZhbGlkVXBkYXRhYmxlUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV1cbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihgSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiBcIiR7cGFyYW19XCIuIFVwZGF0YWJsZSBwYXJhbXMgYXJlIGxpc3RlZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BhcmFtcy5qc1xcblxcbklmIHlvdSB0aGluayB0aGlzIHBhcmFtZXRlciBzaG91bGQgYmUgdXBkYXRhYmxlLCByZXF1ZXN0IGl0IGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvbmV3P3RlbXBsYXRlPTAyX2ZlYXR1cmVfcmVxdWVzdC5tZGApXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHVwZGF0ZWRQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpXG5cbiAgZG9tLnJlbmRlcih0aGlzLCB1cGRhdGVkUGFyYW1zKVxuXG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgdXBkYXRlZFBhcmFtcylcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHBhcmFtczoge1xuICAgICAgdmFsdWU6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyYW1zLCBwYXJhbXMpLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSlcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL3V0aWxzL2NsYXNzZXMuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuLy8gU2hvdyBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dWYWxpZGF0aW9uTWVzc2FnZSAoZXJyb3IpIHtcbiAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpXG4gIGNvbnN0IHBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcylcbiAgZG9tLnNldElubmVySHRtbChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgZXJyb3IpXG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXVxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIGRvbS5hZGRDbGFzcyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKVxuICB9XG4gIGRvbS5zaG93KGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKVxuXG4gIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpXG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pXG4gICAgZG9tLmZvY3VzSW5wdXQoaW5wdXQpXG4gICAgZG9tLmFkZENsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKVxuICB9XG59XG5cbi8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbmV4cG9ydCBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlICgpIHtcbiAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpXG4gIGlmIChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIGRvbS5oaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKVxuICB9XG5cbiAgY29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KClcbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKVxuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpXG4gICAgZG9tLnJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKVxuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKClcbn1cbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb21pc2U6IG5ldyBXZWFrTWFwKCksXG4gIGlubmVyUGFyYW1zOiBuZXcgV2Vha01hcCgpLFxuICBkb21DYWNoZTogbmV3IFdlYWtNYXAoKVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL2FyZ3NUb1BhcmFtcy5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9kb20uanMnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvZmlyZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9taXhpbi5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9xdWV1ZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9zaG93TG9hZGluZy5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy90aW1lci5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9iaW5kQ2xpY2tIYW5kbGVyLmpzJ1xuZXhwb3J0IHtcbiAgaXNWYWxpZFBhcmFtZXRlcixcbiAgaXNVcGRhdGFibGVQYXJhbWV0ZXIsXG4gIGlzRGVwcmVjYXRlZFBhcmFtZXRlclxufSBmcm9tICcuL3V0aWxzL3BhcmFtcy5qcydcbiIsImltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnXG5cbmNvbnN0IGlzSnF1ZXJ5RWxlbWVudCA9IChlbGVtKSA9PiB0eXBlb2YgZWxlbSA9PT0gJ29iamVjdCcgJiYgZWxlbS5qcXVlcnlcbmNvbnN0IGlzRWxlbWVudCA9IChlbGVtKSA9PiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudCB8fCBpc0pxdWVyeUVsZW1lbnQoZWxlbSlcblxuZXhwb3J0IGNvbnN0IGFyZ3NUb1BhcmFtcyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHt9XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChhcmdzWzBdKSkge1xuICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCBhcmdzWzBdKVxuICB9IGVsc2Uge1xuICAgIFsndGl0bGUnLCAnaHRtbCcsICdpY29uJ10uZm9yRWFjaCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaW5kZXhdXG4gICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgaXNFbGVtZW50KGFyZykpIHtcbiAgICAgICAgcGFyYW1zW25hbWVdID0gYXJnXG4gICAgICB9IGVsc2UgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVycm9yKGBVbmV4cGVjdGVkIHR5cGUgb2YgJHtuYW1lfSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIkVsZW1lbnRcIiwgZ290ICR7dHlwZW9mIGFyZ31gKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHBhcmFtc1xufVxuIiwibGV0IGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSBmYWxzZVxuY29uc3QgY2xpY2tIYW5kbGVycyA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQ2xpY2tIYW5kbGVyIChhdHRyID0gJ2RhdGEtc3dhbC10ZW1wbGF0ZScpIHtcbiAgY2xpY2tIYW5kbGVyc1thdHRyXSA9IHRoaXNcblxuICBpZiAoIWJvZHlDbGlja0xpc3RlbmVyQWRkZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9keUNsaWNrTGlzdGVuZXIpXG4gICAgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IHRydWVcbiAgfVxufVxuXG5jb25zdCBib2R5Q2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAvLyAxLiB1c2luZyAucGFyZW50Tm9kZSBpbnN0ZWFkIG9mIGV2ZW50LnBhdGggYmVjYXVzZSBvZiBiZXR0ZXIgc3VwcG9ydCBieSBvbGQgYnJvd3NlcnMgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5MjQ1NjM4XG4gIC8vIDIuIHVzaW5nIC5wYXJlbnROb2RlIGluc3RlYWQgb2YgLnBhcmVudEVsZW1lbnQgYmVjYXVzZSBvZiBJRTExICsgU1ZHIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI3MDM1NFxuICBmb3IgKGxldCBlbCA9IGV2ZW50LnRhcmdldDsgZWwgJiYgZWwgIT09IGRvY3VtZW50OyBlbCA9IGVsLnBhcmVudE5vZGUpIHtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gY2xpY2tIYW5kbGVycykge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICBjbGlja0hhbmRsZXJzW2F0dHJdLmZpcmUoeyB0ZW1wbGF0ZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgKiBhcyBkb21VdGlscyBmcm9tICcuLi91dGlscy9kb20vZG9tVXRpbHMuanMnXG5cbmV4cG9ydCB7XG4gIGdldENvbnRhaW5lcixcbiAgZ2V0UG9wdXAsXG4gIGdldFRpdGxlLFxuICBnZXRDb250ZW50LFxuICBnZXRIdG1sQ29udGFpbmVyLFxuICBnZXRJbWFnZSxcbiAgZ2V0SWNvbixcbiAgZ2V0SW5wdXRMYWJlbCxcbiAgZ2V0Q2xvc2VCdXR0b24sXG4gIGdldEFjdGlvbnMsXG4gIGdldENvbmZpcm1CdXR0b24sXG4gIGdldERlbnlCdXR0b24sXG4gIGdldENhbmNlbEJ1dHRvbixcbiAgZ2V0TG9hZGVyLFxuICBnZXRIZWFkZXIsXG4gIGdldEZvb3RlcixcbiAgZ2V0VGltZXJQcm9ncmVzc0JhcixcbiAgZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG4gIGdldFZhbGlkYXRpb25NZXNzYWdlLFxuICBpc0xvYWRpbmdcbn0gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBTd2VldEFsZXJ0MiBwb3B1cCBpcyBzaG93blxuICovXG5leHBvcnQgY29uc3QgaXNWaXNpYmxlID0gKCkgPT4ge1xuICByZXR1cm4gZG9tVXRpbHMuaXNWaXNpYmxlKGRvbS5nZXRQb3B1cCgpKVxufVxuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IGNsaWNrQ29uZmlybSA9ICgpID0+IGRvbS5nZXRDb25maXJtQnV0dG9uKCkgJiYgZG9tLmdldENvbmZpcm1CdXR0b24oKS5jbGljaygpXG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0RlbnknIGJ1dHRvblxuICovXG5leHBvcnQgY29uc3QgY2xpY2tEZW55ID0gKCkgPT4gZG9tLmdldERlbnlCdXR0b24oKSAmJiBkb20uZ2V0RGVueUJ1dHRvbigpLmNsaWNrKClcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IGNsaWNrQ2FuY2VsID0gKCkgPT4gZG9tLmdldENhbmNlbEJ1dHRvbigpICYmIGRvbS5nZXRDYW5jZWxCdXR0b24oKS5jbGljaygpXG4iLCJleHBvcnQgZnVuY3Rpb24gZmlyZSAoLi4uYXJncykge1xuICBjb25zdCBTd2FsID0gdGhpc1xuICByZXR1cm4gbmV3IFN3YWwoLi4uYXJncylcbn1cbiIsIi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICpcbiAqIEFmdGVyOlxuICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycpXG4gKlxuICogQHBhcmFtIG1peGluUGFyYW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbiAobWl4aW5QYXJhbXMpIHtcbiAgY2xhc3MgTWl4aW5Td2FsIGV4dGVuZHMgdGhpcyB7XG4gICAgX21haW4gKHBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykge1xuICAgICAgcmV0dXJuIHN1cGVyLl9tYWluKHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNaXhpblN3YWxcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5cbi8vIHByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciB0aGUgcXVldWUgZmVhdHVyZVxubGV0IGN1cnJlbnRTdGVwcyA9IFtdXG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGNoYWluaW5nIHN3ZWV0QWxlcnQgcG9wdXBzXG4gKi9cbmV4cG9ydCBjb25zdCBxdWV1ZSA9IGZ1bmN0aW9uIChzdGVwcykge1xuICBjb25zdCBTd2FsID0gdGhpc1xuICBjdXJyZW50U3RlcHMgPSBzdGVwc1xuXG4gIGNvbnN0IHJlc2V0QW5kUmVzb2x2ZSA9IChyZXNvbHZlLCB2YWx1ZSkgPT4ge1xuICAgIGN1cnJlbnRTdGVwcyA9IFtdXG4gICAgcmVzb2x2ZSh2YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IHF1ZXVlUmVzdWx0ID0gW11cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAgKGksIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaSA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpXG4gICAgICAgIFN3YWwuZmlyZShjdXJyZW50U3RlcHNbaV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQudmFsdWUpXG4gICAgICAgICAgICBzdGVwKGkgKyAxLCBjYWxsYmFjaylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRBbmRSZXNvbHZlKHJlc29sdmUsIHsgZGlzbWlzczogcmVzdWx0LmRpc21pc3MgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwgeyB2YWx1ZTogcXVldWVSZXN1bHQgfSlcbiAgICAgIH1cbiAgICB9KSgwKVxuICB9KVxufVxuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHRoZSBpbmRleCBvZiBjdXJyZW50IHBvcHVwIGluIHF1ZXVlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWV1ZVN0ZXAgPSAoKSA9PiBkb20uZ2V0Q29udGFpbmVyKCkgJiYgZG9tLmdldENvbnRhaW5lcigpLmdldEF0dHJpYnV0ZSgnZGF0YS1xdWV1ZS1zdGVwJylcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgcG9wdXAgdG8gdGhlIHF1ZXVlXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRRdWV1ZVN0ZXAgPSAoc3RlcCwgaW5kZXgpID0+IHtcbiAgaWYgKGluZGV4ICYmIGluZGV4IDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKVxuICB9XG4gIHJldHVybiBjdXJyZW50U3RlcHMucHVzaChzdGVwKVxufVxuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxldGVRdWV1ZVN0ZXAgPSAoaW5kZXgpID0+IHtcbiAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgU3dhbCBmcm9tICcuLi9zd2VldGFsZXJ0Mi5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vdXRpbHMvY2xhc3Nlcy5qcydcblxuLyoqXG4gKiBTaG93cyBsb2FkZXIgKHNwaW5uZXIpLCB0aGlzIGlzIHVzZWZ1bCB3aXRoIEFKQVggcmVxdWVzdHMuXG4gKiBCeSBkZWZhdWx0IHRoZSBsb2FkZXIgYmUgc2hvd24gaW5zdGVhZCBvZiB0aGUgXCJDb25maXJtXCIgYnV0dG9uLlxuICovXG5jb25zdCBzaG93TG9hZGluZyA9IChidXR0b25Ub1JlcGxhY2UpID0+IHtcbiAgbGV0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcbiAgaWYgKCFwb3B1cCkge1xuICAgIFN3YWwuZmlyZSgpXG4gIH1cbiAgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBjb25zdCBhY3Rpb25zID0gZG9tLmdldEFjdGlvbnMoKVxuICBjb25zdCBsb2FkZXIgPSBkb20uZ2V0TG9hZGVyKClcblxuICBpZiAoIWJ1dHRvblRvUmVwbGFjZSAmJiBkb20uaXNWaXNpYmxlKGRvbS5nZXRDb25maXJtQnV0dG9uKCkpKSB7XG4gICAgYnV0dG9uVG9SZXBsYWNlID0gZG9tLmdldENvbmZpcm1CdXR0b24oKVxuICB9XG5cbiAgZG9tLnNob3coYWN0aW9ucylcbiAgaWYgKGJ1dHRvblRvUmVwbGFjZSkge1xuICAgIGRvbS5oaWRlKGJ1dHRvblRvUmVwbGFjZSlcbiAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJywgYnV0dG9uVG9SZXBsYWNlLmNsYXNzTmFtZSlcbiAgfVxuICBsb2FkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobG9hZGVyLCBidXR0b25Ub1JlcGxhY2UpXG4gIGRvbS5hZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKVxuXG4gIGRvbS5zaG93KGxvYWRlcilcblxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSlcbiAgcG9wdXAuZm9jdXMoKVxufVxuXG5leHBvcnQge1xuICBzaG93TG9hZGluZyxcbiAgc2hvd0xvYWRpbmcgYXMgZW5hYmxlTG9hZGluZ1xufVxuIiwiaW1wb3J0IHsgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIsIHN0b3BUaW1lclByb2dyZXNzQmFyIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IGdsb2JhbFN0YXRlIGZyb20gJy4uL2dsb2JhbFN0YXRlLmpzJ1xuXG4vKipcbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzIHNldCwgcmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRpbWVyTGVmdCA9ICgpID0+IHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKVxufVxuXG4vKipcbiAqIFN0b3AgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdG9wVGltZXIgPSAoKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKVxuICB9XG59XG5cbi8qKlxuICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgcmVzdW1lVGltZXIgPSAoKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpXG4gICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nKVxuICAgIHJldHVybiByZW1haW5pbmdcbiAgfVxufVxuXG4vKipcbiAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVRpbWVyID0gKCkgPT4ge1xuICBjb25zdCB0aW1lciA9IGdsb2JhbFN0YXRlLnRpbWVvdXRcbiAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gc3RvcFRpbWVyKCkgOiByZXN1bWVUaW1lcigpKVxufVxuXG4vKipcbiAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpbmNyZWFzZVRpbWVyID0gKG4pID0+IHtcbiAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICBjb25zdCByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LmluY3JlYXNlKG4pXG4gICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nLCB0cnVlKVxuICAgIHJldHVybiByZW1haW5pbmdcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gKiBvciBmYWxzZSBpZiB0aW1lciBpcyBwYXVzZWQgb3Igc3RvcHBlZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVGltZXJSdW5uaW5nID0gKCkgPT4ge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpXG59XG4iLCJpbXBvcnQgU3dlZXRBbGVydCBmcm9tICcuL1N3ZWV0QWxlcnQuanMnXG5cbmNvbnN0IFN3YWwgPSBTd2VldEFsZXJ0XG5Td2FsLmRlZmF1bHQgPSBTd2FsXG5cbmV4cG9ydCBkZWZhdWx0IFN3YWxcbiIsImV4cG9ydCBjb25zdCBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNhbmNlbDogJ2NhbmNlbCcsXG4gIGJhY2tkcm9wOiAnYmFja2Ryb3AnLFxuICBjbG9zZTogJ2Nsb3NlJyxcbiAgZXNjOiAnZXNjJyxcbiAgdGltZXI6ICd0aW1lcidcbn0pXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yIChjYWxsYmFjaywgZGVsYXkpIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2VcblxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpXG4gICAgICB0aGlzLmlkID0gc2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLCB0aGlzLnJlbWFpbmluZylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaWQpXG4gICAgICB0aGlzLnJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgaW5jcmVhc2UgKG4pIHtcbiAgICBjb25zdCBydW5uaW5nID0gdGhpcy5ydW5uaW5nXG4gICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuc3RvcCgpXG4gICAgfVxuICAgIHRoaXMucmVtYWluaW5nICs9IG5cbiAgICBpZiAocnVubmluZykge1xuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgZ2V0VGltZXJMZWZ0ICgpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0b3AoKVxuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgaXNSdW5uaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5ydW5uaW5nXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldENvbnRhaW5lciB9IGZyb20gJy4vZG9tL2dldHRlcnMuanMnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4vZG9tL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMuanMnXG5cbi8vIEZyb20gaHR0cHM6Ly9kZXZlbG9wZXIucGFjaWVsbG9ncm91cC5jb20vYmxvZy8yMDE4LzA2L3RoZS1jdXJyZW50LXN0YXRlLW9mLW1vZGFsLWRpYWxvZy1hY2Nlc3NpYmlsaXR5L1xuLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4vLyBlbGVtZW50cyBub3Qgd2l0aGluIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIHdpbGwgbm90IGJlIHN1cmZhY2VkIGlmIGEgdXNlciBvcGVucyBhIHNjcmVlblxuLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbmV4cG9ydCBjb25zdCBzZXRBcmlhSGlkZGVuID0gKCkgPT4ge1xuICBjb25zdCBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGNvbnRhaW5zKGVsLCBnZXRDb250YWluZXIoKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSlcbiAgICB9XG4gICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVuc2V0QXJpYUhpZGRlbiA9ICgpID0+IHtcbiAgY29uc3QgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICBib2R5Q2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpXG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgY29uc3Qgc3dhbFByZWZpeCA9ICdzd2FsMi0nXG5cbmV4cG9ydCBjb25zdCBwcmVmaXggPSAoaXRlbXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgZm9yIChjb25zdCBpIGluIGl0ZW1zKSB7XG4gICAgcmVzdWx0W2l0ZW1zW2ldXSA9IHN3YWxQcmVmaXggKyBpdGVtc1tpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IHN3YWxDbGFzc2VzID0gcHJlZml4KFtcbiAgJ2NvbnRhaW5lcicsXG4gICdzaG93bicsXG4gICdoZWlnaHQtYXV0bycsXG4gICdpb3NmaXgnLFxuICAncG9wdXAnLFxuICAnbW9kYWwnLFxuICAnbm8tYmFja2Ryb3AnLFxuICAnbm8tdHJhbnNpdGlvbicsXG4gICd0b2FzdCcsXG4gICd0b2FzdC1zaG93bicsXG4gICd0b2FzdC1jb2x1bW4nLFxuICAnc2hvdycsXG4gICdoaWRlJyxcbiAgJ2Nsb3NlJyxcbiAgJ3RpdGxlJyxcbiAgJ2hlYWRlcicsXG4gICdjb250ZW50JyxcbiAgJ2h0bWwtY29udGFpbmVyJyxcbiAgJ2FjdGlvbnMnLFxuICAnY29uZmlybScsXG4gICdkZW55JyxcbiAgJ2NhbmNlbCcsXG4gICdmb290ZXInLFxuICAnaWNvbicsXG4gICdpY29uLWNvbnRlbnQnLFxuICAnaW1hZ2UnLFxuICAnaW5wdXQnLFxuICAnZmlsZScsXG4gICdyYW5nZScsXG4gICdzZWxlY3QnLFxuICAncmFkaW8nLFxuICAnY2hlY2tib3gnLFxuICAnbGFiZWwnLFxuICAndGV4dGFyZWEnLFxuICAnaW5wdXRlcnJvcicsXG4gICdpbnB1dC1sYWJlbCcsXG4gICd2YWxpZGF0aW9uLW1lc3NhZ2UnLFxuICAncHJvZ3Jlc3Mtc3RlcHMnLFxuICAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLFxuICAncHJvZ3Jlc3Mtc3RlcCcsXG4gICdwcm9ncmVzcy1zdGVwLWxpbmUnLFxuICAnbG9hZGVyJyxcbiAgJ2xvYWRpbmcnLFxuICAnc3R5bGVkJyxcbiAgJ3RvcCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wLWVuZCcsXG4gICd0b3AtbGVmdCcsXG4gICd0b3AtcmlnaHQnLFxuICAnY2VudGVyJyxcbiAgJ2NlbnRlci1zdGFydCcsXG4gICdjZW50ZXItZW5kJyxcbiAgJ2NlbnRlci1sZWZ0JyxcbiAgJ2NlbnRlci1yaWdodCcsXG4gICdib3R0b20nLFxuICAnYm90dG9tLXN0YXJ0JyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnYm90dG9tLWxlZnQnLFxuICAnYm90dG9tLXJpZ2h0JyxcbiAgJ2dyb3ctcm93JyxcbiAgJ2dyb3ctY29sdW1uJyxcbiAgJ2dyb3ctZnVsbHNjcmVlbicsXG4gICdydGwnLFxuICAndGltZXItcHJvZ3Jlc3MtYmFyJyxcbiAgJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInLFxuICAnc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICAnaWNvbi1zdWNjZXNzJyxcbiAgJ2ljb24td2FybmluZycsXG4gICdpY29uLWluZm8nLFxuICAnaWNvbi1xdWVzdGlvbicsXG4gICdpY29uLWVycm9yJyxcbl0pXG5cbmV4cG9ydCBjb25zdCBpY29uVHlwZXMgPSBwcmVmaXgoW1xuICAnc3VjY2VzcycsXG4gICd3YXJuaW5nJyxcbiAgJ2luZm8nLFxuICAncXVlc3Rpb24nLFxuICAnZXJyb3InXG5dKVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbWFpbDogKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpID0+IHtcbiAgICByZXR1cm4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChzdHJpbmcpXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJylcbiAgfSxcbiAgdXJsOiAoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkgPT4ge1xuICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUgd2l0aCBhIHNtYWxsIGNoYW5nZSBmcm9tICMxMzA2IGFuZCAjMjAxM1xuICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHN0cmluZylcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIFVSTCcpXG4gIH1cbn1cbiIsImltcG9ydCB7IGlzTm9kZUVudiB9IGZyb20gJy4uL2lzTm9kZUVudi5qcydcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbkVuZEV2ZW50ID0gKCgpID0+IHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xuICB9XG4gIGZvciAoY29uc3QgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRyYW5zRW5kRXZlbnROYW1lcywgaSkgJiYgdHlwZW9mIHRlc3RFbC5zdHlsZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn0pKClcbiIsImltcG9ydCB7IGdldFRpbWVyUHJvZ3Jlc3NCYXIsIGdldENvbmZpcm1CdXR0b24sIGdldERlbnlCdXR0b24sIGdldENhbmNlbEJ1dHRvbiB9IGZyb20gJy4vZ2V0dGVycy5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzLCBpY29uVHlwZXMgfSBmcm9tICcuLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgdG9BcnJheSwgb2JqZWN0VmFsdWVzLCB3YXJuIH0gZnJvbSAnLi4vdXRpbHMuanMnXG5cbi8vIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbmV4cG9ydCBjb25zdCBzdGF0ZXMgPSB7XG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHNldElubmVySHRtbCA9IChlbGVtLCBodG1sKSA9PiB7IC8vICMxOTI2XG4gIGVsZW0udGV4dENvbnRlbnQgPSAnJ1xuICBpZiAoaHRtbCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgYHRleHQvaHRtbGApXG4gICAgdG9BcnJheShwYXJzZWQucXVlcnlTZWxlY3RvcignaGVhZCcpLmNoaWxkTm9kZXMpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH0pXG4gICAgdG9BcnJheShwYXJzZWQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXMpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhc0NsYXNzID0gKGVsZW0sIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoIWNsYXNzTmFtZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3QgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IChlbGVtLCBwYXJhbXMpID0+IHtcbiAgdG9BcnJheShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgIGlmIChcbiAgICAgICFvYmplY3RWYWx1ZXMoc3dhbENsYXNzZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiZcbiAgICAgICFvYmplY3RWYWx1ZXMoaWNvblR5cGVzKS5pbmNsdWRlcyhjbGFzc05hbWUpICYmXG4gICAgICAhb2JqZWN0VmFsdWVzKHBhcmFtcy5zaG93Q2xhc3MpLmluY2x1ZGVzKGNsYXNzTmFtZSlcbiAgICApIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlDdXN0b21DbGFzcyA9IChlbGVtLCBwYXJhbXMsIGNsYXNzTmFtZSkgPT4ge1xuICByZW1vdmVDdXN0b21DbGFzc2VzKGVsZW0sIHBhcmFtcylcblxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLmZvckVhY2gpIHtcbiAgICAgIHJldHVybiB3YXJuKGBJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuJHtjbGFzc05hbWV9ISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXCIke3R5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXX1cImApXG4gICAgfVxuXG4gICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0IChjb250ZW50LCBpbnB1dFR5cGUpIHtcbiAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgY2FzZSAnZmlsZSc6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pXG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuY2hlY2tib3h9IGlucHV0YClcbiAgICBjYXNlICdyYWRpbyc6XG4gICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5yYWRpb30gaW5wdXQ6Y2hlY2tlZGApIHx8XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFkaW99IGlucHV0OmZpcnN0LWNoaWxkYClcbiAgICBjYXNlICdyYW5nZSc6XG4gICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5yYW5nZX0gaW5wdXRgKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmb2N1c0lucHV0ID0gKGlucHV0KSA9PiB7XG4gIGlucHV0LmZvY3VzKClcblxuICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIGlucHV0LnZhbHVlID0gdmFsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUNsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0LCBjb25kaXRpb24pID0+IHtcbiAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKVxuICB9XG4gIGNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbmRpdGlvbiA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAodGFyZ2V0LCBjbGFzc0xpc3QpID0+IHtcbiAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9ICh0YXJnZXQsIGNsYXNzTGlzdCkgPT4ge1xuICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDaGlsZEJ5Q2xhc3MgPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2hpbGROb2Rlc1tpXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlOdW1lcmljYWxTdHlsZSA9IChlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlID09PSBgJHtwYXJzZUludCh2YWx1ZSl9YCkge1xuICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpXG4gIH1cbiAgaWYgKHZhbHVlIHx8IHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgIGVsZW0uc3R5bGVbcHJvcGVydHldID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gYCR7dmFsdWV9cHhgIDogdmFsdWVcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaG93ID0gKGVsZW0sIGRpc3BsYXkgPSAnZmxleCcpID0+IHtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVxufVxuXG5leHBvcnQgY29uc3QgaGlkZSA9IChlbGVtKSA9PiB7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5leHBvcnQgY29uc3Qgc2V0U3R5bGUgPSAocGFyZW50LCBzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIGlmIChlbCkge1xuICAgIGVsLnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZSA9IChlbGVtLCBjb25kaXRpb24sIGRpc3BsYXkpID0+IHtcbiAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSlcbn1cblxuLy8gYm9ycm93ZWQgZnJvbSBqcXVlcnkgJChlbGVtKS5pcygnOnZpc2libGUnKSBpbXBsZW1lbnRhdGlvblxuZXhwb3J0IGNvbnN0IGlzVmlzaWJsZSA9IChlbGVtKSA9PiAhIShlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKVxuXG5leHBvcnQgY29uc3QgYWxsQnV0dG9uc0FyZUhpZGRlbiA9ICgpID0+ICFpc1Zpc2libGUoZ2V0Q29uZmlybUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlKGdldERlbnlCdXR0b24oKSkgJiYgIWlzVmlzaWJsZShnZXRDYW5jZWxCdXR0b24oKSlcblxuZXhwb3J0IGNvbnN0IGlzU2Nyb2xsYWJsZSA9IChlbGVtKSA9PiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KVxuXG4vLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjM1MjExOVxuZXhwb3J0IGNvbnN0IGhhc0Nzc0FuaW1hdGlvbiA9IChlbGVtKSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlcblxuICBjb25zdCBhbmltRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8ICcwJylcbiAgY29uc3QgdHJhbnNEdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbi1kdXJhdGlvbicpIHx8ICcwJylcblxuICByZXR1cm4gYW5pbUR1cmF0aW9uID4gMCB8fCB0cmFuc0R1cmF0aW9uID4gMFxufVxuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAoaGF5c3RhY2ssIG5lZWRsZSkgPT4ge1xuICBpZiAodHlwZW9mIGhheXN0YWNrLmNvbnRhaW5zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmNvbnRhaW5zKG5lZWRsZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSAodGltZXIsIHJlc2V0ID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICBpZiAoaXNWaXNpYmxlKHRpbWVyUHJvZ3Jlc3NCYXIpKSB7XG4gICAgaWYgKHJlc2V0KSB7XG4gICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBgd2lkdGggJHt0aW1lciAvIDEwMDB9cyBsaW5lYXJgXG4gICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIH0sIDEwKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9wVGltZXJQcm9ncmVzc0JhciA9ICgpID0+IHtcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICBjb25zdCB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aClcbiAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG4gIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpbWVyUHJvZ3Jlc3NCYXIpLndpZHRoKVxuICBjb25zdCB0aW1lclByb2dyZXNzQmFyUGVyY2VudCA9IHBhcnNlSW50KHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCAvIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggKiAxMDApXG4gIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7dGltZXJQcm9ncmVzc0JhclBlcmNlbnR9JWBcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHVuaXF1ZUFycmF5LCB0b0FycmF5IH0gZnJvbSAnLi4vdXRpbHMuanMnXG5pbXBvcnQgeyBpc1Zpc2libGUgfSBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5jb250YWluZXJ9YClcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRCeVNlbGVjdG9yID0gKHNlbGVjdG9yU3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpXG4gIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykgOiBudWxsXG59XG5cbmNvbnN0IGVsZW1lbnRCeUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UG9wdXAgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cClcblxuZXhwb3J0IGNvbnN0IGdldEljb24gPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pY29uKVxuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSlcblxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KVxuXG5leHBvcnQgY29uc3QgZ2V0SHRtbENvbnRhaW5lciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddKVxuXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2UgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSlcblxuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzU3RlcHMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSlcblxuZXhwb3J0IGNvbnN0IGdldFZhbGlkYXRpb25NZXNzYWdlID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKVxuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlybUJ1dHRvbiA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jb25maXJtfWApXG5cbmV4cG9ydCBjb25zdCBnZXREZW55QnV0dG9uID0gKCkgPT4gZWxlbWVudEJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmFjdGlvbnN9IC4ke3N3YWxDbGFzc2VzLmRlbnl9YClcblxuZXhwb3J0IGNvbnN0IGdldElucHV0TGFiZWwgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXSlcblxuZXhwb3J0IGNvbnN0IGdldExvYWRlciA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5sb2FkZXJ9YClcblxuZXhwb3J0IGNvbnN0IGdldENhbmNlbEJ1dHRvbiA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jYW5jZWx9YClcblxuZXhwb3J0IGNvbnN0IGdldEFjdGlvbnMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKVxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaGVhZGVyKVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9vdGVyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKVxuXG5leHBvcnQgY29uc3QgZ2V0VGltZXJQcm9ncmVzc0JhciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSlcblxuZXhwb3J0IGNvbnN0IGdldENsb3NlQnV0dG9uID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuY29uc3QgZm9jdXNhYmxlID0gYFxuICBhW2hyZWZdLFxuICBhcmVhW2hyZWZdLFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXG4gIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXG4gIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcbiAgaWZyYW1lLFxuICBvYmplY3QsXG4gIGVtYmVkLFxuICBbdGFiaW5kZXg9XCIwXCJdLFxuICBbY29udGVudGVkaXRhYmxlXSxcbiAgYXVkaW9bY29udHJvbHNdLFxuICB2aWRlb1tjb250cm9sc10sXG4gIHN1bW1hcnlcbmBcblxuZXhwb3J0IGNvbnN0IGdldEZvY3VzYWJsZUVsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHRvQXJyYXkoXG4gICAgZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJylcbiAgKVxuICAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBhID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpXG4gICAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0pXG5cbiAgY29uc3Qgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoXG4gICAgZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZSlcbiAgKS5maWx0ZXIoZWwgPT4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnKVxuXG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpLmZpbHRlcihlbCA9PiBpc1Zpc2libGUoZWwpKVxufVxuXG5leHBvcnQgY29uc3QgaXNNb2RhbCA9ICgpID0+IHtcbiAgcmV0dXJuICFpc1RvYXN0KCkgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKVxufVxuXG5leHBvcnQgY29uc3QgaXNUb2FzdCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKVxufVxuXG5leHBvcnQgY29uc3QgaXNMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbml0LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9nZXR0ZXJzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZUh0bWxUb0NvbnRhaW5lci5qcydcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uRW5kRXZlbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL21lYXN1cmVTY3JvbGxiYXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVycy9yZW5kZXIuanMnXG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgeyBnZXRDb250YWluZXIsIGdldFBvcHVwLCBnZXRDb250ZW50IH0gZnJvbSAnLi9nZXR0ZXJzLmpzJ1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBnZXRDaGlsZEJ5Q2xhc3MsIHNldElubmVySHRtbCB9IGZyb20gJy4vZG9tVXRpbHMuanMnXG5pbXBvcnQgeyBpc05vZGVFbnYgfSBmcm9tICcuLi9pc05vZGVFbnYuanMnXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnLi4vLi4vc3dlZXRhbGVydDIuanMnXG5cbmNvbnN0IHN3ZWV0SFRNTCA9IGBcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCIgYXJpYS1kZXNjcmliZWRieT1cIiR7c3dhbENsYXNzZXMuY29udGVudH1cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMucG9wdXB9XCIgdGFiaW5kZXg9XCItMVwiPlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuaGVhZGVyfVwiPlxuICAgICA8dWwgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddfVwiPjwvdWw+XG4gICAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmljb259XCI+PC9kaXY+XG4gICAgIDxpbWcgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmltYWdlfVwiIC8+XG4gICAgIDxoMiBjbGFzcz1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCIgaWQ9XCIke3N3YWxDbGFzc2VzLnRpdGxlfVwiPjwvaDI+XG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jbG9zZX1cIj48L2J1dHRvbj5cbiAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuY29udGVudH1cIj5cbiAgICAgPGRpdiBpZD1cIiR7c3dhbENsYXNzZXMuY29udGVudH1cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ119XCI+PC9kaXY+XG4gICAgIDxpbnB1dCBjbGFzcz1cIiR7c3dhbENsYXNzZXMuaW5wdXR9XCIgLz5cbiAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmZpbGV9XCIgLz5cbiAgICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMucmFuZ2V9XCI+XG4gICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XG4gICAgICAgPG91dHB1dD48L291dHB1dD5cbiAgICAgPC9kaXY+XG4gICAgIDxzZWxlY3QgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnNlbGVjdH1cIj48L3NlbGVjdD5cbiAgICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMucmFkaW99XCI+PC9kaXY+XG4gICAgIDxsYWJlbCBmb3I9XCIke3N3YWxDbGFzc2VzLmNoZWNrYm94fVwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jaGVja2JveH1cIj5cbiAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICA8c3BhbiBjbGFzcz1cIiR7c3dhbENsYXNzZXMubGFiZWx9XCI+PC9zcGFuPlxuICAgICA8L2xhYmVsPlxuICAgICA8dGV4dGFyZWEgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnRleHRhcmVhfVwiPjwvdGV4dGFyZWE+XG4gICAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXX1cIiBpZD1cIiR7c3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddfVwiPjwvZGl2PlxuICAgPC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfVwiPlxuICAgICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5sb2FkZXJ9XCI+PC9kaXY+XG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jb25maXJtfVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZGVueX1cIj48L2J1dHRvbj5cbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmNhbmNlbH1cIj48L2J1dHRvbj5cbiAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZm9vdGVyfVwiPjwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXX1cIj5cbiAgICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhciddfVwiPjwvZGl2PlxuICAgPC9kaXY+XG4gPC9kaXY+XG5gLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKVxuXG5jb25zdCByZXNldE9sZENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3Qgb2xkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKClcbiAgaWYgKCFvbGRDb250YWluZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9sZENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZENvbnRhaW5lcilcbiAgcmVtb3ZlQ2xhc3MoXG4gICAgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sXG4gICAgW1xuICAgICAgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sXG4gICAgICBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSxcbiAgICAgIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11cbiAgICBdXG4gIClcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5sZXQgb2xkSW5wdXRWYWwgLy8gSUUxMSB3b3JrYXJvdW5kLCBzZWUgIzExMDkgZm9yIGRldGFpbHNcbmNvbnN0IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSAoZSkgPT4ge1xuICBpZiAoc3dlZXRBbGVydC5pc1Zpc2libGUoKSAmJiBvbGRJbnB1dFZhbCAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKVxuICB9XG4gIG9sZElucHV0VmFsID0gZS50YXJnZXQudmFsdWVcbn1cblxuY29uc3QgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KClcblxuICBjb25zdCBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dClcbiAgY29uc3QgZmlsZSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKVxuICBjb25zdCByYW5nZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFuZ2V9IGlucHV0YClcbiAgY29uc3QgcmFuZ2VPdXRwdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhbmdlfSBvdXRwdXRgKVxuICBjb25zdCBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KVxuICBjb25zdCBjaGVja2JveCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuY2hlY2tib3h9IGlucHV0YClcbiAgY29uc3QgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpXG5cbiAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2VcbiAgZmlsZS5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2VcbiAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZVxuICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2VcbiAgdGV4dGFyZWEub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2VcblxuICByYW5nZS5vbmlucHV0ID0gKGUpID0+IHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpXG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZVxuICB9XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSlcbiAgICByYW5nZS5uZXh0U2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlXG4gIH1cbn1cblxuY29uc3QgZ2V0VGFyZ2V0ID0gKHRhcmdldCkgPT4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXRcblxuY29uc3Qgc2V0dXBBY2Nlc3NpYmlsaXR5ID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKClcblxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBwYXJhbXMudG9hc3QgPyAnYWxlcnQnIDogJ2RpYWxvZycpXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJylcbiAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpXG4gIH1cbn1cblxuY29uc3Qgc2V0dXBSVEwgPSAodGFyZ2V0RWxlbWVudCkgPT4ge1xuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpXG4gIH1cbn1cblxuLypcbiAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICovXG5leHBvcnQgY29uc3QgaW5pdCA9IChwYXJhbXMpID0+IHtcbiAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gIGNvbnN0IG9sZENvbnRhaW5lckV4aXN0ZWQgPSByZXNldE9sZENvbnRhaW5lcigpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXJcbiAgaWYgKG9sZENvbnRhaW5lckV4aXN0ZWQpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pXG4gIH1cbiAgc2V0SW5uZXJIdG1sKGNvbnRhaW5lciwgc3dlZXRIVE1MKVxuXG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldClcbiAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcylcbiAgc2V0dXBSVEwodGFyZ2V0RWxlbWVudClcbiAgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgeyBnZXRDaGlsZEJ5Q2xhc3MgfSBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IHsgYXNQcm9taXNlLCBlcnJvciwgaGFzVG9Qcm9taXNlRm4sIGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0IHsgc2hvd0xvYWRpbmcgfSBmcm9tICcuLi8uLi9zdGF0aWNNZXRob2RzL3Nob3dMb2FkaW5nLmpzJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcylcbiAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluY2x1ZGVzKHBhcmFtcy5pbnB1dCkgJiZcbiAgICAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0VmFsdWUpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpKSB7XG4gICAgaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBpbm5lclBhcmFtcykgPT4ge1xuICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KClcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGlucHV0KVxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKGlucHV0KVxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZVxuICB9XG59XG5cbmNvbnN0IGdldENoZWNrYm94VmFsdWUgPSAoaW5wdXQpID0+IGlucHV0LmNoZWNrZWQgPyAxIDogMFxuXG5jb25zdCBnZXRSYWRpb1ZhbHVlID0gKGlucHV0KSA9PiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsXG5cbmNvbnN0IGdldEZpbGVWYWx1ZSA9IChpbnB1dCkgPT4gaW5wdXQuZmlsZXMubGVuZ3RoID8gKGlucHV0LmdldEF0dHJpYnV0ZSgnbXVsdGlwbGUnKSAhPT0gbnVsbCA/IGlucHV0LmZpbGVzIDogaW5wdXQuZmlsZXNbMF0pIDogbnVsbFxuXG5jb25zdCBoYW5kbGVJbnB1dE9wdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9tLmdldENvbnRlbnQoKVxuICBjb25zdCBwcm9jZXNzSW5wdXRPcHRpb25zID0gKGlucHV0T3B0aW9ucykgPT4gcG9wdWxhdGVJbnB1dE9wdGlvbnNbcGFyYW1zLmlucHV0XShjb250ZW50LCBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSwgcGFyYW1zKVxuICBpZiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0T3B0aW9ucykgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgc2hvd0xvYWRpbmcoZG9tLmdldENvbmZpcm1CdXR0b24oKSlcbiAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0T3B0aW9ucykudGhlbigoaW5wdXRPcHRpb25zKSA9PiB7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucylcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBlcnJvcihgVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290ICR7dHlwZW9mIHBhcmFtcy5pbnB1dE9wdGlvbnN9YClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpXG4gIGRvbS5oaWRlKGlucHV0KVxuICBhc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpLnRoZW4oKGlucHV0VmFsdWUpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBgJHtpbnB1dFZhbHVlfWBcbiAgICBkb20uc2hvdyhpbnB1dClcbiAgICBpbnB1dC5mb2N1cygpXG4gICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKVxuICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBlcnJvcihgRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiAke2Vycn1gKVxuICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgZG9tLnNob3coaW5wdXQpXG4gICAgICBpbnB1dC5mb2N1cygpXG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgfSlcbn1cblxuY29uc3QgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSB7XG4gIHNlbGVjdDogKGNvbnRlbnQsIGlucHV0T3B0aW9ucywgcGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdClcbiAgICBjb25zdCByZW5kZXJPcHRpb24gPSAocGFyZW50LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZVxuICAgICAgZG9tLnNldElubmVySHRtbChvcHRpb24sIG9wdGlvbkxhYmVsKVxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXNTZWxlY3RlZChvcHRpb25WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChpbnB1dE9wdGlvbiA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdXG4gICAgICBjb25zdCBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdXG4gICAgICAvLyA8b3B0Z3JvdXA+IHNwZWM6XG4gICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuNlxuICAgICAgLy8gXCIuLi5hbGwgT1BUR1JPVVAgZWxlbWVudHMgbXVzdCBiZSBzcGVjaWZpZWQgZGlyZWN0bHkgd2l0aGluIGEgU0VMRUNUIGVsZW1lbnQgKGkuZS4sIGdyb3VwcyBtYXkgbm90IGJlIG5lc3RlZCkuLi5cIlxuICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGlzIGlzIGEgPG9wdGdyb3VwPlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uTGFiZWwpKSB7IC8vIGlmIGl0IGlzIGFuIGFycmF5LCB0aGVuIGl0IGlzIGFuIDxvcHRncm91cD5cbiAgICAgICAgY29uc3Qgb3B0Z3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpXG4gICAgICAgIG9wdGdyb3VwLmxhYmVsID0gb3B0aW9uVmFsdWVcbiAgICAgICAgb3B0Z3JvdXAuZGlzYWJsZWQgPSBmYWxzZSAvLyBub3QgY29uZmlndXJhYmxlIGZvciBub3dcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGdyb3VwKVxuICAgICAgICBvcHRpb25MYWJlbC5mb3JFYWNoKG8gPT4gcmVuZGVyT3B0aW9uKG9wdGdyb3VwLCBvWzFdLCBvWzBdKSlcbiAgICAgIH0gZWxzZSB7IC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgc2VsZWN0LmZvY3VzKClcbiAgfSxcblxuICByYWRpbzogKGNvbnRlbnQsIGlucHV0T3B0aW9ucywgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pXG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goaW5wdXRPcHRpb24gPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdXG4gICAgICBjb25zdCByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV1cbiAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBjb25zdCByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbydcbiAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvXG4gICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZVxuICAgICAgaWYgKGlzU2VsZWN0ZWQocmFkaW9WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBkb20uc2V0SW5uZXJIdG1sKGxhYmVsLCByYWRpb0xhYmVsKVxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubGFiZWxcbiAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpXG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHJhZGlvLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxFbGVtZW50KVxuICAgIH0pXG4gICAgY29uc3QgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICByYWRpb3NbMF0uZm9jdXMoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiAqIEBwYXJhbSBpbnB1dE9wdGlvbnNcbiAqL1xuY29uc3QgZm9ybWF0SW5wdXRPcHRpb25zID0gKGlucHV0T3B0aW9ucykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGxldCB2YWx1ZUZvcm1hdHRlZCA9IHZhbHVlXG4gICAgICBpZiAodHlwZW9mIHZhbHVlRm9ybWF0dGVkID09PSAnb2JqZWN0JykgeyAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgdmFsdWVGb3JtYXR0ZWQgPSBmb3JtYXRJbnB1dE9wdGlvbnModmFsdWVGb3JtYXR0ZWQpXG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCB2YWx1ZUZvcm1hdHRlZCA9IGlucHV0T3B0aW9uc1trZXldXG4gICAgICBpZiAodHlwZW9mIHZhbHVlRm9ybWF0dGVkID09PSAnb2JqZWN0JykgeyAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgdmFsdWVGb3JtYXR0ZWQgPSBmb3JtYXRJbnB1dE9wdGlvbnModmFsdWVGb3JtYXR0ZWQpXG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pXG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGlzU2VsZWN0ZWQgPSAob3B0aW9uVmFsdWUsIGlucHV0VmFsdWUpID0+IHtcbiAgcmV0dXJuIGlucHV0VmFsdWUgJiYgaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSBvcHRpb25WYWx1ZS50b1N0cmluZygpXG59XG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMuanMnXG5cbi8vIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL3NyYy9tb2RhbC5qc1xuZXhwb3J0IGNvbnN0IG1lYXN1cmVTY3JvbGxiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNjcm9sbERpdi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1snc2Nyb2xsYmFyLW1lYXN1cmUnXVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aFxufVxuIiwiaW1wb3J0IHsgc2V0SW5uZXJIdG1sIH0gZnJvbSAnLi9kb21VdGlscy5qcydcblxuZXhwb3J0IGNvbnN0IHBhcnNlSHRtbFRvQ29udGFpbmVyID0gKHBhcmFtLCB0YXJnZXQpID0+IHtcbiAgLy8gRE9NIGVsZW1lbnRcbiAgaWYgKHBhcmFtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW0pXG5cbiAgLy8gT2JqZWN0XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtID09PSAnb2JqZWN0Jykge1xuICAgIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KVxuXG4gIC8vIFBsYWluIHN0cmluZ1xuICB9IGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgc2V0SW5uZXJIdG1sKHRhcmdldCwgcGFyYW0pXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlT2JqZWN0ID0gKHBhcmFtLCB0YXJnZXQpID0+IHtcbiAgLy8gSlF1ZXJ5IGVsZW1lbnQocylcbiAgaWYgKHBhcmFtLmpxdWVyeSkge1xuICAgIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBwYXJhbSlcblxuICAvLyBGb3Igb3RoZXIgb2JqZWN0cyB1c2UgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gIH0gZWxzZSB7XG4gICAgc2V0SW5uZXJIdG1sKHRhcmdldCwgcGFyYW0udG9TdHJpbmcoKSlcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVKcXVlcnlFbGVtID0gKHRhcmdldCwgZWxlbSkgPT4ge1xuICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJ1xuICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgaW4gZWxlbTsgaSsrKSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtLmNsb25lTm9kZSh0cnVlKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0UG9wdXAgfSBmcm9tICcuLi9nZXR0ZXJzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyQWN0aW9ucyB9IGZyb20gJy4vcmVuZGVyQWN0aW9ucy5qcydcbmltcG9ydCB7IHJlbmRlckNvbnRhaW5lciB9IGZyb20gJy4vcmVuZGVyQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHsgcmVuZGVyQ29udGVudCB9IGZyb20gJy4vcmVuZGVyQ29udGVudC5qcydcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gJy4vcmVuZGVyRm9vdGVyLmpzJ1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9yZW5kZXJIZWFkZXIuanMnXG5pbXBvcnQgeyByZW5kZXJQb3B1cCB9IGZyb20gJy4vcmVuZGVyUG9wdXAuanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICByZW5kZXJQb3B1cChpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJDb250YWluZXIoaW5zdGFuY2UsIHBhcmFtcylcblxuICByZW5kZXJIZWFkZXIoaW5zdGFuY2UsIHBhcmFtcylcbiAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpXG4gIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmRpZFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5kaWRSZW5kZXIoZ2V0UG9wdXAoKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLm9uUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLm9uUmVuZGVyKGdldFBvcHVwKCkpIC8vIEBkZXByZWNhdGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckFjdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gZG9tLmdldEFjdGlvbnMoKVxuICBjb25zdCBsb2FkZXIgPSBkb20uZ2V0TG9hZGVyKClcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvbS5nZXRDb25maXJtQnV0dG9uKClcbiAgY29uc3QgZGVueUJ1dHRvbiA9IGRvbS5nZXREZW55QnV0dG9uKClcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9tLmdldENhbmNlbEJ1dHRvbigpXG5cbiAgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dEZW55QnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGRvbS5oaWRlKGFjdGlvbnMpXG4gIH1cblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoYWN0aW9ucywgcGFyYW1zLCAnYWN0aW9ucycpXG5cbiAgLy8gUmVuZGVyIGJ1dHRvbnNcbiAgcmVuZGVyQnV0dG9uKGNvbmZpcm1CdXR0b24sICdjb25maXJtJywgcGFyYW1zKVxuICByZW5kZXJCdXR0b24oZGVueUJ1dHRvbiwgJ2RlbnknLCBwYXJhbXMpXG4gIHJlbmRlckJ1dHRvbihjYW5jZWxCdXR0b24sICdjYW5jZWwnLCBwYXJhbXMpXG4gIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKVxuXG4gIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGxvYWRlcilcbiAgICBhY3Rpb25zLmluc2VydEJlZm9yZShkZW55QnV0dG9uLCBsb2FkZXIpXG4gICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY29uZmlybUJ1dHRvbiwgbG9hZGVyKVxuICB9XG5cbiAgLy8gTG9hZGVyXG4gIGRvbS5zZXRJbm5lckh0bWwobG9hZGVyLCBwYXJhbXMubG9hZGVySHRtbClcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MobG9hZGVyLCBwYXJhbXMsICdsb2FkZXInKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVCdXR0b25zU3R5bGluZyAoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICByZXR1cm4gZG9tLnJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpXG4gIH1cblxuICBkb20uYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZClcblxuICAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG4gIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yXG4gIH1cbiAgaWYgKHBhcmFtcy5kZW55QnV0dG9uQ29sb3IpIHtcbiAgICBkZW55QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5kZW55QnV0dG9uQ29sb3JcbiAgfVxuICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvclxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJ1dHRvbiAoYnV0dG9uLCBidXR0b25UeXBlLCBwYXJhbXMpIHtcbiAgZG9tLnRvZ2dsZShidXR0b24sIHBhcmFtc1tgc2hvdyR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ1dHRvblR5cGUpfUJ1dHRvbmBdLCAnaW5saW5lLWJsb2NrJylcbiAgZG9tLnNldElubmVySHRtbChidXR0b24sIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvblRleHRgXSkgLy8gU2V0IGNhcHRpb24gdGV4dFxuICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zW2Ake2J1dHRvblR5cGV9QnV0dG9uQXJpYUxhYmVsYF0pIC8vIEFSSUEgbGFiZWxcblxuICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuICBidXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbYnV0dG9uVHlwZV1cbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoYnV0dG9uLCBwYXJhbXMsIGAke2J1dHRvblR5cGV9QnV0dG9uYClcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgcGFyYW1zW2Ake2J1dHRvblR5cGV9QnV0dG9uQ2xhc3NgXSlcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJDbG9zZUJ1dHRvbiA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9tLmdldENsb3NlQnV0dG9uKClcblxuICBkb20uc2V0SW5uZXJIdG1sKGNsb3NlQnV0dG9uLCBwYXJhbXMuY2xvc2VCdXR0b25IdG1sKVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKVxuXG4gIGRvbS50b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pXG4gIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbClcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5cbmZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wUGFyYW0gKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tkcm9wXG4gIH0gZWxzZSBpZiAoIWJhY2tkcm9wKSB7XG4gICAgZG9tLmFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtIChjb250YWluZXIsIHBvc2l0aW9uKSB7XG4gIGlmIChwb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3Bvc2l0aW9uXSlcbiAgfSBlbHNlIHtcbiAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpXG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbSAoY29udGFpbmVyLCBncm93KSB7XG4gIGlmIChncm93ICYmIHR5cGVvZiBncm93ID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGdyb3dDbGFzcyA9IGBncm93LSR7Z3Jvd31gXG4gICAgaWYgKGdyb3dDbGFzcyBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlckNvbnRhaW5lciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmJhY2tkcm9wKVxuXG4gIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpXG4gIH1cblxuICBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLnBvc2l0aW9uKVxuICBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBwYXJhbXMuZ3JvdylcblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMsICdjb250YWluZXInKVxuXG4gIC8vIFNldCBxdWV1ZSBzdGVwIGF0dHJpYnV0ZSBmb3IgZ2V0UXVldWVTdGVwKCkgbWV0aG9kXG4gIGNvbnN0IHF1ZXVlU3RlcCA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKVxuICBpZiAocXVldWVTdGVwKSB7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1xdWV1ZS1zdGVwJywgcXVldWVTdGVwKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgcmVuZGVySW5wdXQgfSBmcm9tICcuL3JlbmRlcklucHV0LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQ29udGVudCA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGh0bWxDb250YWluZXIgPSBkb20uZ2V0SHRtbENvbnRhaW5lcigpXG5cbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoaHRtbENvbnRhaW5lciwgcGFyYW1zLCAnaHRtbENvbnRhaW5lcicpXG5cbiAgLy8gQ29udGVudCBhcyBIVE1MXG4gIGlmIChwYXJhbXMuaHRtbCkge1xuICAgIGRvbS5wYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgaHRtbENvbnRhaW5lcilcbiAgICBkb20uc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKVxuXG4gIC8vIENvbnRlbnQgYXMgcGxhaW4gdGV4dFxuICB9IGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgaHRtbENvbnRhaW5lci50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0XG4gICAgZG9tLnNob3coaHRtbENvbnRhaW5lciwgJ2Jsb2NrJylcblxuICAvLyBObyBjb250ZW50XG4gIH0gZWxzZSB7XG4gICAgZG9tLmhpZGUoaHRtbENvbnRhaW5lcilcbiAgfVxuXG4gIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpXG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGRvbS5nZXRDb250ZW50KCksIHBhcmFtcywgJ2NvbnRlbnQnKVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckZvb3RlciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvbS5nZXRGb290ZXIoKVxuXG4gIGRvbS50b2dnbGUoZm9vdGVyLCBwYXJhbXMuZm9vdGVyKVxuXG4gIGlmIChwYXJhbXMuZm9vdGVyKSB7XG4gICAgZG9tLnBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5mb290ZXIsIGZvb3RlcilcbiAgfVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcywgJ2Zvb3RlcicpXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgcmVuZGVyQ2xvc2VCdXR0b24gfSBmcm9tICcuL3JlbmRlckNsb3NlQnV0dG9uLmpzJ1xuaW1wb3J0IHsgcmVuZGVySWNvbiB9IGZyb20gJy4vcmVuZGVySWNvbi5qcydcbmltcG9ydCB7IHJlbmRlckltYWdlIH0gZnJvbSAnLi9yZW5kZXJJbWFnZS5qcydcbmltcG9ydCB7IHJlbmRlclByb2dyZXNzU3RlcHMgfSBmcm9tICcuL3JlbmRlclByb2dyZXNzU3RlcHMuanMnXG5pbXBvcnQgeyByZW5kZXJUaXRsZSB9IGZyb20gJy4vcmVuZGVyVGl0bGUuanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb20uZ2V0SGVhZGVyKClcblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoaGVhZGVyLCBwYXJhbXMsICdoZWFkZXInKVxuXG4gIC8vIFByb2dyZXNzIHN0ZXBzXG4gIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcylcblxuICAvLyBJY29uXG4gIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcylcblxuICAvLyBJbWFnZVxuICByZW5kZXJJbWFnZShpbnN0YW5jZSwgcGFyYW1zKVxuXG4gIC8vIFRpdGxlXG4gIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpXG5cbiAgLy8gQ2xvc2UgYnV0dG9uXG4gIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpXG59XG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcywgaWNvblR5cGVzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi8uLi8uLi9wcml2YXRlUHJvcHMuanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJJY29uID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBjb25zdCBpY29uID0gZG9tLmdldEljb24oKVxuXG4gIC8vIGlmIHRoZSBnaXZlbiBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBzdHlsaW5nIHdpdGhvdXQgcmUtcmVuZGVyaW5nIHRoZSBpY29uXG4gIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMuaWNvbiA9PT0gaW5uZXJQYXJhbXMuaWNvbikge1xuICAgIC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcbiAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcylcblxuICAgIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghcGFyYW1zLmljb24gJiYgIXBhcmFtcy5pY29uSHRtbCkge1xuICAgIHJldHVybiBkb20uaGlkZShpY29uKVxuICB9XG5cbiAgaWYgKHBhcmFtcy5pY29uICYmIE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMuaWNvbikgPT09IC0xKSB7XG4gICAgZXJyb3IoYFVua25vd24gaWNvbiEgRXhwZWN0ZWQgXCJzdWNjZXNzXCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiIG9yIFwicXVlc3Rpb25cIiwgZ290IFwiJHtwYXJhbXMuaWNvbn1cImApXG4gICAgcmV0dXJuIGRvbS5oaWRlKGljb24pXG4gIH1cblxuICBkb20uc2hvdyhpY29uKVxuXG4gIC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcbiAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpXG5cbiAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKVxuXG4gIC8vIEFuaW1hdGUgaWNvblxuICBkb20uYWRkQ2xhc3MoaWNvbiwgcGFyYW1zLnNob3dDbGFzcy5pY29uKVxufVxuXG5jb25zdCBhcHBseVN0eWxlcyA9IChpY29uLCBwYXJhbXMpID0+IHtcbiAgZm9yIChjb25zdCBpY29uVHlwZSBpbiBpY29uVHlwZXMpIHtcbiAgICBpZiAocGFyYW1zLmljb24gIT09IGljb25UeXBlKSB7XG4gICAgICBkb20ucmVtb3ZlQ2xhc3MoaWNvbiwgaWNvblR5cGVzW2ljb25UeXBlXSlcbiAgICB9XG4gIH1cbiAgZG9tLmFkZENsYXNzKGljb24sIGljb25UeXBlc1twYXJhbXMuaWNvbl0pXG5cbiAgLy8gSWNvbiBjb2xvclxuICBzZXRDb2xvcihpY29uLCBwYXJhbXMpXG5cbiAgLy8gU3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3JcbiAgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpXG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKVxufVxuXG4vLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcbmNvbnN0IGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcbiAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gIGNvbnN0IHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHN1Y2Nlc3NJY29uUGFydHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcG9wdXBCYWNrZ3JvdW5kQ29sb3JcbiAgfVxufVxuXG5jb25zdCBzZXRDb250ZW50ID0gKGljb24sIHBhcmFtcykgPT4ge1xuICBpY29uLnRleHRDb250ZW50ID0gJydcblxuICBpZiAocGFyYW1zLmljb25IdG1sKSB7XG4gICAgZG9tLnNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChwYXJhbXMuaWNvbkh0bWwpKVxuICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnc3VjY2VzcycpIHtcbiAgICBkb20uc2V0SW5uZXJIdG1sKGljb24sIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cbiAgICBgKVxuICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnZXJyb3InKSB7XG4gICAgZG9tLnNldElubmVySHRtbChpY29uLCBgXG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgYClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZWZhdWx0SWNvbkh0bWwgPSB7XG4gICAgICBxdWVzdGlvbjogJz8nLFxuICAgICAgd2FybmluZzogJyEnLFxuICAgICAgaW5mbzogJ2knXG4gICAgfVxuICAgIGRvbS5zZXRJbm5lckh0bWwoaWNvbiwgaWNvbkNvbnRlbnQoZGVmYXVsdEljb25IdG1sW3BhcmFtcy5pY29uXSkpXG4gIH1cbn1cblxuY29uc3Qgc2V0Q29sb3IgPSAoaWNvbiwgcGFyYW1zKSA9PiB7XG4gIGlmICghcGFyYW1zLmljb25Db2xvcikge1xuICAgIHJldHVyblxuICB9XG4gIGljb24uc3R5bGUuY29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yXG4gIGljb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yXG4gIGZvciAoY29uc3Qgc2VsIG9mIFsnLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnLCAnLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJywgJy5zd2FsMi14LW1hcmstbGluZS1sZWZ0JywgJy5zd2FsMi14LW1hcmstbGluZS1yaWdodCddKSB7XG4gICAgZG9tLnNldFN0eWxlKGljb24sIHNlbCwgJ2JhY2tncm91bmRDb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpXG4gIH1cbiAgZG9tLnNldFN0eWxlKGljb24sICcuc3dhbDItc3VjY2Vzcy1yaW5nJywgJ2JvcmRlckNvbG9yJywgcGFyYW1zLmljb25Db2xvcilcbn1cblxuY29uc3QgaWNvbkNvbnRlbnQgPSAoY29udGVudCkgPT4gYDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydpY29uLWNvbnRlbnQnXX1cIj4ke2NvbnRlbnR9PC9kaXY+YFxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckltYWdlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBkb20uZ2V0SW1hZ2UoKVxuXG4gIGlmICghcGFyYW1zLmltYWdlVXJsKSB7XG4gICAgcmV0dXJuIGRvbS5oaWRlKGltYWdlKVxuICB9XG5cbiAgZG9tLnNob3coaW1hZ2UsICcnKVxuXG4gIC8vIFNyYywgYWx0XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKVxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBhcmFtcy5pbWFnZUFsdClcblxuICAvLyBXaWR0aCwgaGVpZ2h0XG4gIGRvbS5hcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aClcbiAgZG9tLmFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpXG5cbiAgLy8gQ2xhc3NcbiAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2VcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcywgJ2ltYWdlJylcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHdhcm4sIGVycm9yLCBpc1Byb21pc2UgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uLy4uLy4uL3ByaXZhdGVQcm9wcy5qcydcblxuY29uc3QgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXVxuXG5leHBvcnQgY29uc3QgcmVuZGVySW5wdXQgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9tLmdldENvbnRlbnQoKVxuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gIGNvbnN0IHJlcmVuZGVyID0gIWlubmVyUGFyYW1zIHx8IHBhcmFtcy5pbnB1dCAhPT0gaW5uZXJQYXJhbXMuaW5wdXRcblxuICBpbnB1dFR5cGVzLmZvckVhY2goKGlucHV0VHlwZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb20uZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIGlucHV0Q2xhc3MpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKVxuXG4gICAgLy8gc2V0IGNsYXNzXG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzc1xuXG4gICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICBkb20uaGlkZShpbnB1dENvbnRhaW5lcilcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgc2hvd0lucHV0KHBhcmFtcylcbiAgICB9XG4gICAgLy8gc2V0IGN1c3RvbSBjbGFzc1xuICAgIHNldEN1c3RvbUNsYXNzKHBhcmFtcylcbiAgfVxufVxuXG5jb25zdCBzaG93SW5wdXQgPSAocGFyYW1zKSA9PiB7XG4gIGlmICghcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0pIHtcbiAgICByZXR1cm4gZXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcIm51bWJlclwiLCBcInRlbFwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiLCBcImZpbGVcIiBvciBcInVybFwiLCBnb3QgXCIke3BhcmFtcy5pbnB1dH1cImApXG4gIH1cblxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dClcbiAgY29uc3QgaW5wdXQgPSByZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XShpbnB1dENvbnRhaW5lciwgcGFyYW1zKVxuICBkb20uc2hvdyhpbnB1dClcblxuICAvLyBpbnB1dCBhdXRvZm9jdXNcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9tLmZvY3VzSW5wdXQoaW5wdXQpXG4gIH0pXG59XG5cbmNvbnN0IHJlbW92ZUF0dHJpYnV0ZXMgPSAoaW5wdXQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWVcbiAgICBpZiAoIVsndHlwZScsICd2YWx1ZScsICdzdHlsZSddLmluY2x1ZGVzKGF0dHJOYW1lKSkge1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGlucHV0VHlwZSwgaW5wdXRBdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9tLmdldElucHV0KGRvbS5nZXRDb250ZW50KCksIGlucHV0VHlwZSlcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dClcblxuICBmb3IgKGNvbnN0IGF0dHIgaW4gaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgLy8gRG8gbm90IHNldCBhIHBsYWNlaG9sZGVyIGZvciA8aW5wdXQgdHlwZT1cInJhbmdlXCI+XG4gICAgLy8gaXQnbGwgY3Jhc2ggRWRnZSwgIzEyOThcbiAgICBpZiAoaW5wdXRUeXBlID09PSAncmFuZ2UnICYmIGF0dHIgPT09ICdwbGFjZWhvbGRlcicpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSlcbiAgfVxufVxuXG5jb25zdCBzZXRDdXN0b21DbGFzcyA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBkb20uYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dClcbiAgfVxufVxuXG5jb25zdCBzZXRJbnB1dFBsYWNlaG9sZGVyID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXJcbiAgfVxufVxuXG5jb25zdCBzZXRJbnB1dExhYmVsID0gKGlucHV0LCBwcmVwZW5kVG8sIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zLmlucHV0TGFiZWwpIHtcbiAgICBpbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmlucHV0XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHN3YWxDbGFzc2VzWydpbnB1dC1sYWJlbCddXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dC5pZClcbiAgICBsYWJlbC5jbGFzc05hbWUgPSBsYWJlbENsYXNzXG4gICAgZG9tLmFkZENsYXNzKGxhYmVsLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXRMYWJlbClcbiAgICBsYWJlbC5pbm5lclRleHQgPSBwYXJhbXMuaW5wdXRMYWJlbFxuICAgIHByZXBlbmRUby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbGFiZWwpXG4gIH1cbn1cblxuY29uc3QgZ2V0SW5wdXRDb250YWluZXIgPSAoaW5wdXRUeXBlKSA9PiB7XG4gIGNvbnN0IGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdID8gc3dhbENsYXNzZXNbaW5wdXRUeXBlXSA6IHN3YWxDbGFzc2VzLmlucHV0XG4gIHJldHVybiBkb20uZ2V0Q2hpbGRCeUNsYXNzKGRvbS5nZXRDb250ZW50KCksIGlucHV0Q2xhc3MpXG59XG5cbmNvbnN0IHJlbmRlcklucHV0VHlwZSA9IHt9XG5cbnJlbmRlcklucHV0VHlwZS50ZXh0ID1cbnJlbmRlcklucHV0VHlwZS5lbWFpbCA9XG5yZW5kZXJJbnB1dFR5cGUucGFzc3dvcmQgPVxucmVuZGVySW5wdXRUeXBlLm51bWJlciA9XG5yZW5kZXJJbnB1dFR5cGUudGVsID1cbnJlbmRlcklucHV0VHlwZS51cmwgPSAoaW5wdXQsIHBhcmFtcykgPT4ge1xuICBpZiAodHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcGFyYW1zLmlucHV0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZVxuICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgd2FybihgVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFwic3RyaW5nXCIsIFwibnVtYmVyXCIgb3IgXCJQcm9taXNlXCIsIGdvdCBcIiR7dHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlfVwiYClcbiAgfVxuICBzZXRJbnB1dExhYmVsKGlucHV0LCBpbnB1dCwgcGFyYW1zKVxuICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpXG4gIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXRcbiAgcmV0dXJuIGlucHV0XG59XG5cbnJlbmRlcklucHV0VHlwZS5maWxlID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgc2V0SW5wdXRMYWJlbChpbnB1dCwgaW5wdXQsIHBhcmFtcylcbiAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKVxuICByZXR1cm4gaW5wdXRcbn1cblxucmVuZGVySW5wdXRUeXBlLnJhbmdlID0gKHJhbmdlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgY29uc3QgcmFuZ2VPdXRwdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKVxuICByYW5nZUlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWVcbiAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0XG4gIHJhbmdlT3V0cHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWVcbiAgc2V0SW5wdXRMYWJlbChyYW5nZUlucHV0LCByYW5nZSwgcGFyYW1zKVxuICByZXR1cm4gcmFuZ2Vcbn1cblxucmVuZGVySW5wdXRUeXBlLnNlbGVjdCA9IChzZWxlY3QsIHBhcmFtcykgPT4ge1xuICBzZWxlY3QudGV4dENvbnRlbnQgPSAnJ1xuICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgZG9tLnNldElubmVySHRtbChwbGFjZWhvbGRlciwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpXG4gICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJ1xuICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZVxuICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcilcbiAgfVxuICBzZXRJbnB1dExhYmVsKHNlbGVjdCwgc2VsZWN0LCBwYXJhbXMpXG4gIHJldHVybiBzZWxlY3Rcbn1cblxucmVuZGVySW5wdXRUeXBlLnJhZGlvID0gKHJhZGlvKSA9PiB7XG4gIHJhZGlvLnRleHRDb250ZW50ID0gJydcbiAgcmV0dXJuIHJhZGlvXG59XG5cbnJlbmRlcklucHV0VHlwZS5jaGVja2JveCA9IChjaGVja2JveENvbnRhaW5lciwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9tLmdldElucHV0KGRvbS5nZXRDb250ZW50KCksICdjaGVja2JveCcpXG4gIGNoZWNrYm94LnZhbHVlID0gMVxuICBjaGVja2JveC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKVxuICBjb25zdCBsYWJlbCA9IGNoZWNrYm94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICBkb20uc2V0SW5uZXJIdG1sKGxhYmVsLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcilcbiAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG59XG5cbnJlbmRlcklucHV0VHlwZS50ZXh0YXJlYSA9ICh0ZXh0YXJlYSwgcGFyYW1zKSA9PiB7XG4gIHRleHRhcmVhLnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWVcbiAgc2V0SW5wdXRQbGFjZWhvbGRlcih0ZXh0YXJlYSwgcGFyYW1zKVxuICBzZXRJbnB1dExhYmVsKHRleHRhcmVhLCB0ZXh0YXJlYSwgcGFyYW1zKVxuXG4gIGNvbnN0IGdldFBhZGRpbmcgPSAoZWwpID0+IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wYWRkaW5nTGVmdCkgKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkucGFkZGluZ1JpZ2h0KVxuXG4gIGlmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7IC8vICMxNjk5XG4gICAgY29uc3QgaW5pdGlhbFBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb20uZ2V0UG9wdXAoKSkud2lkdGgpXG4gICAgY29uc3Qgb3V0cHV0c2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRleHRhcmVhLm9mZnNldFdpZHRoICsgZ2V0UGFkZGluZyhkb20uZ2V0UG9wdXAoKSkgKyBnZXRQYWRkaW5nKGRvbS5nZXRDb250ZW50KCkpXG4gICAgICBpZiAoY29udGVudFdpZHRoID4gaW5pdGlhbFBvcHVwV2lkdGgpIHtcbiAgICAgICAgZG9tLmdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBgJHtjb250ZW50V2lkdGh9cHhgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20uZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIob3V0cHV0c2l6ZSkub2JzZXJ2ZSh0ZXh0YXJlYSwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHRleHRhcmVhXG59XG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uLy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUG9wdXAgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuXG4gIC8vIFdpZHRoXG4gIGlmIChwYXJhbXMudG9hc3QpIHsgLy8gIzIxNzBcbiAgICBkb20uYXBwbHlOdW1lcmljYWxTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHBhcmFtcy53aWR0aClcbiAgICBwb3B1cC5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICB9IGVsc2Uge1xuICAgIGRvbS5hcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpXG4gIH1cblxuICAvLyBQYWRkaW5nXG4gIGRvbS5hcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAncGFkZGluZycsIHBhcmFtcy5wYWRkaW5nKVxuXG4gIC8vIEJhY2tncm91bmRcbiAgaWYgKHBhcmFtcy5iYWNrZ3JvdW5kKSB7XG4gICAgcG9wdXAuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZ3JvdW5kXG4gIH1cblxuICBkb20uaGlkZShkb20uZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSlcblxuICAvLyBDbGFzc2VzXG4gIGFkZENsYXNzZXMocG9wdXAsIHBhcmFtcylcbn1cblxuY29uc3QgYWRkQ2xhc3NlcyA9IChwb3B1cCwgcGFyYW1zKSA9PiB7XG4gIC8vIERlZmF1bHQgQ2xhc3MgKyBzaG93Q2xhc3Mgd2hlbiB1cGRhdGluZyBTd2FsLnVwZGF0ZSh7fSlcbiAgcG9wdXAuY2xhc3NOYW1lID0gYCR7c3dhbENsYXNzZXMucG9wdXB9ICR7ZG9tLmlzVmlzaWJsZShwb3B1cCkgPyBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwIDogJyd9YFxuXG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBkb20uYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKVxuICAgIGRvbS5hZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpXG4gIH0gZWxzZSB7XG4gICAgZG9tLmFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbClcbiAgfVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKVxuICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkb20uYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcylcbiAgfVxuXG4gIC8vIEljb24gY2xhc3MgKCMxODQyKVxuICBpZiAocGFyYW1zLmljb24pIHtcbiAgICBkb20uYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW2BpY29uLSR7cGFyYW1zLmljb259YF0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBnZXRRdWV1ZVN0ZXAgfSBmcm9tICcuLi8uLi8uLi9zdGF0aWNNZXRob2RzL3F1ZXVlLmpzJ1xuXG5jb25zdCBjcmVhdGVTdGVwRWxlbWVudCA9IChzdGVwKSA9PiB7XG4gIGNvbnN0IHN0ZXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgZG9tLmFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAnXSlcbiAgZG9tLnNldElubmVySHRtbChzdGVwRWwsIHN0ZXApXG4gIHJldHVybiBzdGVwRWxcbn1cblxuY29uc3QgY3JlYXRlTGluZUVsZW1lbnQgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgZG9tLmFkZENsYXNzKGxpbmVFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAtbGluZSddKVxuICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgIGxpbmVFbC5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2VcbiAgfVxuICByZXR1cm4gbGluZUVsXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQcm9ncmVzc1N0ZXBzID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGRvbS5nZXRQcm9ncmVzc1N0ZXBzKClcbiAgaWYgKCFwYXJhbXMucHJvZ3Jlc3NTdGVwcyB8fCBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZG9tLmhpZGUocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcilcbiAgfVxuXG4gIGRvbS5zaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpXG4gIHByb2dyZXNzU3RlcHNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICBjb25zdCBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IHVuZGVmaW5lZCA/IGdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXApXG4gIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICtcbiAgICAgICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKSdcbiAgICApXG4gIH1cblxuICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApXG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpXG4gICAgaWYgKGluZGV4ID09PSBjdXJyZW50UHJvZ3Jlc3NTdGVwKSB7XG4gICAgICBkb20uYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSlcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggIT09IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IGxpbmVFbCA9IGNyZWF0ZUxpbmVFbGVtZW50KHBhcmFtcylcbiAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZUVsKVxuICAgIH1cbiAgfSlcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJUaXRsZSA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9tLmdldFRpdGxlKClcblxuICBkb20udG9nZ2xlKHRpdGxlLCBwYXJhbXMudGl0bGUgfHwgcGFyYW1zLnRpdGxlVGV4dClcblxuICBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgZG9tLnBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy50aXRsZSwgdGl0bGUpXG4gIH1cblxuICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHRcbiAgfVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyh0aXRsZSwgcGFyYW1zLCAndGl0bGUnKVxufVxuIiwiaW1wb3J0IGRlZmF1bHRQYXJhbXMgZnJvbSAnLi9wYXJhbXMuanMnXG5pbXBvcnQgeyB0b0FycmF5LCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIHdhcm4gfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5jb25zdCBzd2FsU3RyaW5nUGFyYW1zID0gWydzd2FsLXRpdGxlJywgJ3N3YWwtaHRtbCcsICdzd2FsLWZvb3RlciddXG5cbmV4cG9ydCBjb25zdCBnZXRUZW1wbGF0ZVBhcmFtcyA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgcGFyYW1zLnRlbXBsYXRlID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRlbXBsYXRlKSA6IHBhcmFtcy50ZW1wbGF0ZVxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgY29uc3QgdGVtcGxhdGVDb250ZW50ID0gdGVtcGxhdGUuY29udGVudCB8fCB0ZW1wbGF0ZSAvLyBJRTExXG5cbiAgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGVDb250ZW50KVxuXG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZ2V0U3dhbFBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLFxuICAgIGdldFN3YWxCdXR0b25zKHRlbXBsYXRlQ29udGVudCksXG4gICAgZ2V0U3dhbEltYWdlKHRlbXBsYXRlQ29udGVudCksXG4gICAgZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSxcbiAgICBnZXRTd2FsSW5wdXQodGVtcGxhdGVDb250ZW50KSxcbiAgICBnZXRTd2FsU3RyaW5nUGFyYW1zKHRlbXBsYXRlQ29udGVudCwgc3dhbFN0cmluZ1BhcmFtcyksXG4gIClcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBnZXRTd2FsUGFyYW1zID0gKHRlbXBsYXRlQ29udGVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICB0b0FycmF5KHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLXBhcmFtJykpLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhwYXJhbSwgWyduYW1lJywgJ3ZhbHVlJ10pXG4gICAgY29uc3QgcGFyYW1OYW1lID0gcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBsZXQgdmFsdWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH1cbiAgICByZXN1bHRbcGFyYW1OYW1lXSA9IHZhbHVlXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2V0U3dhbEJ1dHRvbnMgPSAodGVtcGxhdGVDb250ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHRvQXJyYXkodGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtYnV0dG9uJykpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoYnV0dG9uLCBbJ3R5cGUnLCAnY29sb3InLCAnYXJpYS1sYWJlbCddKVxuICAgIGNvbnN0IHR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICByZXN1bHRbYCR7dHlwZX1CdXR0b25UZXh0YF0gPSBidXR0b24uaW5uZXJIVE1MXG4gICAgcmVzdWx0W2BzaG93JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9QnV0dG9uYF0gPSB0cnVlXG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvbkNvbG9yYF0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdjb2xvcicpXG4gICAgfVxuICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvbkFyaWFMYWJlbGBdID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGdldFN3YWxJbWFnZSA9ICh0ZW1wbGF0ZUNvbnRlbnQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgY29uc3QgaW1hZ2UgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbWFnZScpXG4gIGlmIChpbWFnZSkge1xuICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW1hZ2UsIFsnc3JjJywgJ3dpZHRoJywgJ2hlaWdodCcsICdhbHQnXSlcbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgcmVzdWx0LmltYWdlVXJsID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgIH1cbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCd3aWR0aCcpKSB7XG4gICAgICByZXN1bHQuaW1hZ2VXaWR0aCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKVxuICAgIH1cbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgcmVzdWx0LmltYWdlSGVpZ2h0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdhbHQnKSkge1xuICAgICAgcmVzdWx0LmltYWdlQWx0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGdldFN3YWxJY29uID0gKHRlbXBsYXRlQ29udGVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBjb25zdCBpY29uID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaWNvbicpXG4gIGlmIChpY29uKSB7XG4gICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpY29uLCBbJ3R5cGUnLCAnY29sb3InXSlcbiAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgcmVzdWx0Lmljb24gPSBpY29uLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgfVxuICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgcmVzdWx0Lmljb25Db2xvciA9IGljb24uZ2V0QXR0cmlidXRlKCdjb2xvcicpXG4gICAgfVxuICAgIHJlc3VsdC5pY29uSHRtbCA9IGljb24uaW5uZXJIVE1MXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBnZXRTd2FsSW5wdXQgPSAodGVtcGxhdGVDb250ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIGNvbnN0IGlucHV0ID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW5wdXQnKVxuICBpZiAoaW5wdXQpIHtcbiAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGlucHV0LCBbJ3R5cGUnLCAnbGFiZWwnLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXSlcbiAgICByZXN1bHQuaW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAndGV4dCdcbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdsYWJlbCcpKSB7XG4gICAgICByZXN1bHQuaW5wdXRMYWJlbCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbGFiZWwnKVxuICAgIH1cbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICByZXN1bHQuaW5wdXRQbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKVxuICAgIH1cbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICByZXN1bHQuaW5wdXRWYWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgIH1cbiAgfVxuICBjb25zdCBpbnB1dE9wdGlvbnMgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1pbnB1dC1vcHRpb24nKVxuICBpZiAoaW5wdXRPcHRpb25zLmxlbmd0aCkge1xuICAgIHJlc3VsdC5pbnB1dE9wdGlvbnMgPSB7fVxuICAgIHRvQXJyYXkoaW5wdXRPcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMob3B0aW9uLCBbJ3ZhbHVlJ10pXG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBvcHRpb24uaW5uZXJIVE1MXG4gICAgICByZXN1bHQuaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXSA9IG9wdGlvbk5hbWVcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2V0U3dhbFN0cmluZ1BhcmFtcyA9ICh0ZW1wbGF0ZUNvbnRlbnQsIHBhcmFtTmFtZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgZm9yIChjb25zdCBpIGluIHBhcmFtTmFtZXMpIHtcbiAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldXG4gICAgY29uc3QgdGFnID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1OYW1lKVxuICAgIGlmICh0YWcpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXModGFnLCBbXSlcbiAgICAgIHJlc3VsdFtwYXJhbU5hbWUucmVwbGFjZSgvXnN3YWwtLywgJycpXSA9IHRhZy5pbm5lckhUTUxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBzaG93V2FybmluZ3NGb3JFbGVtZW50cyA9ICh0ZW1wbGF0ZSkgPT4ge1xuICBjb25zdCBhbGxvd2VkRWxlbWVudHMgPSBzd2FsU3RyaW5nUGFyYW1zLmNvbmNhdChbXG4gICAgJ3N3YWwtcGFyYW0nLFxuICAgICdzd2FsLWJ1dHRvbicsXG4gICAgJ3N3YWwtaW1hZ2UnLFxuICAgICdzd2FsLWljb24nLFxuICAgICdzd2FsLWlucHV0JyxcbiAgICAnc3dhbC1pbnB1dC1vcHRpb24nLFxuICBdKVxuICB0b0FycmF5KHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSAhPT0gdGVtcGxhdGUpIHsgLy8gY2FuJ3QgdXNlIHRlbXBsYXRlLmNoaWxkcmVuIGJlY2F1c2Ugb2YgSUUxMVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoYWxsb3dlZEVsZW1lbnRzLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICB3YXJuKGBVbnJlY29nbml6ZWQgZWxlbWVudCA8JHt0YWdOYW1lfT5gKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyA9IChlbCwgYWxsb3dlZEF0dHJpYnV0ZXMpID0+IHtcbiAgdG9BcnJheShlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICB3YXJuKFtcbiAgICAgICAgYFVucmVjb2duaXplZCBhdHRyaWJ1dGUgXCIke2F0dHJpYnV0ZS5uYW1lfVwiIG9uIDwke2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+LmAsXG4gICAgICAgIGAke2FsbG93ZWRBdHRyaWJ1dGVzLmxlbmd0aCA/IGBBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiAke2FsbG93ZWRBdHRyaWJ1dGVzLmpvaW4oJywgJyl9YCA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJ31gXG4gICAgICBdKVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20vaW5kZXguanMnXG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTgyNTIwN1xuY29uc3QgaXNJRTExID0gKCkgPT4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGVcblxuLy8gRml4IElFMTEgY2VudGVyaW5nIHN3ZWV0YWxlcnQyL2lzc3Vlcy85MzNcbmNvbnN0IGZpeFZlcnRpY2FsUG9zaXRpb25JRSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIGNvbnN0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcblxuICBjb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2FsaWduLWl0ZW1zJylcbiAgaWYgKHBvcHVwLm9mZnNldFRvcCA8IDApIHtcbiAgICBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0J1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBJRWZpeCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgZml4VmVydGljYWxQb3NpdGlvbklFKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1bmRvSUVmaXggPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpXG4gIH1cbn1cbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL3V0aWxzL2NsYXNzZXMuanMnXG5cbi8vIEZpeCBpT1Mgc2Nyb2xsaW5nIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5NjI2MzAyXG5cbmV4cG9ydCBjb25zdCBpT1NmaXggPSAoKSA9PiB7XG4gIGNvbnN0IGlPUyA9ICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB8fCAobmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpXG4gIGlmIChpT1MgJiYgIWRvbS5oYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IGAke29mZnNldCAqIC0xfXB4YFxuICAgIGRvbS5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpXG4gICAgbG9ja0JvZHlTY3JvbGwoKVxuICAgIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzKCkgLy8gIzE5NDhcbiAgfVxufVxuXG5jb25zdCBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcyA9ICgpID0+IHtcbiAgY29uc3Qgc2FmYXJpID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhDcmlPU3xGeGlPU3xFZGdpT1N8WWFCcm93c2VyfFVDQnJvd3NlcikvaSlcbiAgaWYgKHNhZmFyaSkge1xuICAgIGNvbnN0IGJvdHRvbVBhbmVsSGVpZ2h0ID0gNDRcbiAgICBpZiAoZG9tLmdldFBvcHVwKCkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gYm90dG9tUGFuZWxIZWlnaHQpIHtcbiAgICAgIGRvbS5nZXRDb250YWluZXIoKS5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7Ym90dG9tUGFuZWxIZWlnaHR9cHhgXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGxvY2tCb2R5U2Nyb2xsID0gKCkgPT4geyAvLyAjMTI0NlxuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgbGV0IHByZXZlbnRUb3VjaE1vdmVcbiAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IChlKSA9PiB7XG4gICAgcHJldmVudFRvdWNoTW92ZSA9IHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZSlcbiAgfVxuICBjb250YWluZXIub250b3VjaG1vdmUgPSAoZSkgPT4ge1xuICAgIGlmIChwcmV2ZW50VG91Y2hNb3ZlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2hvdWxkUHJldmVudFRvdWNoTW92ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIGlmIChpc1N0eWx5cyhldmVudCkgfHwgaXNab29tKGV2ZW50KSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmICh0YXJnZXQgPT09IGNvbnRhaW5lcikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKFxuICAgICFkb20uaXNTY3JvbGxhYmxlKGNvbnRhaW5lcikgJiZcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiAvLyAjMTYwM1xuICAgICEoXG4gICAgICBkb20uaXNTY3JvbGxhYmxlKGRvbS5nZXRDb250ZW50KCkpICYmIC8vICMxOTQ0XG4gICAgICBkb20uZ2V0Q29udGVudCgpLmNvbnRhaW5zKHRhcmdldClcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGlzU3R5bHlzID0gKGV2ZW50KSA9PiB7IC8vICMxNzg2XG4gIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICYmIGV2ZW50LnRvdWNoZXNbMF0udG91Y2hUeXBlID09PSAnc3R5bHVzJ1xufVxuXG5jb25zdCBpc1pvb20gPSAoZXZlbnQpID0+IHsgLy8gIzE4OTFcbiAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxXG59XG5cbmV4cG9ydCBjb25zdCB1bmRvSU9TZml4ID0gKCkgPT4ge1xuICBpZiAoZG9tLmhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApXG4gICAgZG9tLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAob2Zmc2V0ICogLTEpXG4gIH1cbn1cbiIsIi8vIERldGVjdCBOb2RlIGVudlxuZXhwb3J0IGNvbnN0IGlzTm9kZUVudiA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgZml4U2Nyb2xsYmFyIH0gZnJvbSAnLi9zY3JvbGxiYXJGaXguanMnXG5pbXBvcnQgeyBpT1NmaXggfSBmcm9tICcuL2lvc0ZpeC5qcydcbmltcG9ydCB7IElFZml4IH0gZnJvbSAnLi9pZUZpeC5qcydcbmltcG9ydCB7IHNldEFyaWFIaWRkZW4gfSBmcm9tICcuL2FyaWEuanMnXG5pbXBvcnQgZ2xvYmFsU3RhdGUgZnJvbSAnLi4vZ2xvYmFsU3RhdGUuanMnXG5cbmV4cG9ydCBjb25zdCBTSE9XX0NMQVNTX1RJTUVPVVQgPSAxMFxuXG4vKipcbiAqIE9wZW4gcG9wdXAsIGFkZCBuZWNlc3NhcnkgY2xhc3NlcyBhbmQgc3R5bGVzLCBmaXggc2Nyb2xsYmFyXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5leHBvcnQgY29uc3Qgb3BlblBvcHVwID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLndpbGxPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLndpbGxPcGVuKHBvcHVwKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMub25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLm9uQmVmb3JlT3Blbihwb3B1cCkgLy8gQGRlcHJlY2F0ZWRcbiAgfVxuXG4gIGNvbnN0IGJvZHlTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICBjb25zdCBpbml0aWFsQm9keU92ZXJmbG93ID0gYm9keVN0eWxlcy5vdmVyZmxvd1lcbiAgYWRkQ2xhc3Nlcyhjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpXG5cbiAgLy8gc2Nyb2xsaW5nIGlzICdoaWRkZW4nIHVudGlsIGFuaW1hdGlvbiBpcyBkb25lLCBhZnRlciB0aGF0ICdhdXRvJ1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5KGNvbnRhaW5lciwgcG9wdXApXG4gIH0sIFNIT1dfQ0xBU1NfVElNRU9VVClcblxuICBpZiAoZG9tLmlzTW9kYWwoKSkge1xuICAgIGZpeFNjcm9sbENvbnRhaW5lcihjb250YWluZXIsIHBhcmFtcy5zY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KVxuICAgIHNldEFyaWFIaWRkZW4oKVxuICB9XG5cbiAgaWYgKCFkb20uaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gIH1cblxuICBydW5EaWRPcGVuKHBvcHVwLCBwYXJhbXMpXG5cbiAgZG9tLnJlbW92ZUNsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSlcbn1cblxuY29uc3QgcnVuRGlkT3BlbiA9IChwb3B1cCwgcGFyYW1zKSA9PiB7XG4gIGlmICh0eXBlb2YgcGFyYW1zLmRpZE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBhcmFtcy5kaWRPcGVuKHBvcHVwKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcGFyYW1zLm9uT3Blbihwb3B1cCkpIC8vIEBkZXByZWNhdGVkXG4gIH1cbn1cblxuY29uc3Qgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCA9IChldmVudCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG4gIGlmIChldmVudC50YXJnZXQgIT09IHBvcHVwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tLmFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKVxuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nXG59XG5cbmNvbnN0IHNldFNjcm9sbGluZ1Zpc2liaWxpdHkgPSAoY29udGFpbmVyLCBwb3B1cCkgPT4ge1xuICBpZiAoZG9tLmFuaW1hdGlvbkVuZEV2ZW50ICYmIGRvbS5oYXNDc3NBbmltYXRpb24ocG9wdXApKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihkb20uYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJ1xuICB9XG59XG5cbmNvbnN0IGZpeFNjcm9sbENvbnRhaW5lciA9IChjb250YWluZXIsIHNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpID0+IHtcbiAgaU9TZml4KClcbiAgSUVmaXgoKVxuXG4gIGlmIChzY3JvbGxiYXJQYWRkaW5nICYmIGluaXRpYWxCb2R5T3ZlcmZsb3cgIT09ICdoaWRkZW4nKSB7XG4gICAgZml4U2Nyb2xsYmFyKClcbiAgfVxuXG4gIC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy8xMjQ3XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwXG4gIH0pXG59XG5cbmNvbnN0IGFkZENsYXNzZXMgPSAoY29udGFpbmVyLCBwb3B1cCwgcGFyYW1zKSA9PiB7XG4gIGRvbS5hZGRDbGFzcyhjb250YWluZXIsIHBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApXG4gIC8vIHRoZSB3b3JrYXJvdW5kIHdpdGggc2V0dGluZy91bnNldHRpbmcgb3BhY2l0eSBpcyBuZWVkZWQgZm9yICMyMDE5IGFuZCAyMDU5XG4gIHBvcHVwLnN0eWxlLnNldFByb3BlcnR5KCdvcGFjaXR5JywgJzAnLCAnaW1wb3J0YW50JylcbiAgZG9tLnNob3cocG9wdXApXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIEFuaW1hdGUgcG9wdXAgcmlnaHQgYWZ0ZXIgc2hvd2luZyBpdFxuICAgIGRvbS5hZGRDbGFzcyhwb3B1cCwgcGFyYW1zLnNob3dDbGFzcy5wb3B1cClcbiAgICAvLyBhbmQgcmVtb3ZlIHRoZSBvcGFjaXR5IHdvcmthcm91bmRcbiAgICBwb3B1cC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3BhY2l0eScpXG4gIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCkgLy8gMTBtcyBpbiBvcmRlciB0byBmaXggIzIwNjJcblxuICBkb20uYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzLnNob3duKVxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBkb20uYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddKVxuICB9XG59XG4iLCJpbXBvcnQgeyB3YXJuLCB3YXJuQWJvdXREZXByZWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIGZvb3RlcjogJycsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgaWNvbkNvbG9yOiB1bmRlZmluZWQsXG4gIGljb25IdG1sOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlOiB1bmRlZmluZWQsXG4gIHRvYXN0OiBmYWxzZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBzaG93Q2xhc3M6IHtcbiAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgIGJhY2tkcm9wOiAnc3dhbDItYmFja2Ryb3Atc2hvdycsXG4gICAgaWNvbjogJ3N3YWwyLWljb24tc2hvdycsXG4gIH0sXG4gIGhpZGVDbGFzczoge1xuICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1oaWRlJyxcbiAgICBpY29uOiAnc3dhbDItaWNvbi1oaWRlJyxcbiAgfSxcbiAgY3VzdG9tQ2xhc3M6IHt9LFxuICB0YXJnZXQ6ICdib2R5JyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGhlaWdodEF1dG86IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAga2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTogZmFsc2UsXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICBzaG93RGVueUJ1dHRvbjogZmFsc2UsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBwcmVDb25maXJtOiB1bmRlZmluZWQsXG4gIHByZURlbnk6IHVuZGVmaW5lZCxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjb25maXJtQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgZGVueUJ1dHRvblRleHQ6ICdObycsXG4gIGRlbnlCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBkZW55QnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gIGJ1dHRvbnNTdHlsaW5nOiB0cnVlLFxuICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgZm9jdXNEZW55OiBmYWxzZSxcbiAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICBjbG9zZUJ1dHRvbkh0bWw6ICcmdGltZXM7JyxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIGxvYWRlckh0bWw6ICcnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gIGltYWdlVXJsOiB1bmRlZmluZWQsXG4gIGltYWdlV2lkdGg6IHVuZGVmaW5lZCxcbiAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaW1hZ2VBbHQ6ICcnLFxuICB0aW1lcjogdW5kZWZpbmVkLFxuICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgcGFkZGluZzogdW5kZWZpbmVkLFxuICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gIGlucHV0OiB1bmRlZmluZWQsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dExhYmVsOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiB1bmRlZmluZWQsXG4gIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICB2YWxpZGF0aW9uTWVzc2FnZTogdW5kZWZpbmVkLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogdW5kZWZpbmVkLFxuICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgb25CZWZvcmVPcGVuOiB1bmRlZmluZWQsXG4gIG9uT3BlbjogdW5kZWZpbmVkLFxuICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICBkaWRPcGVuOiB1bmRlZmluZWQsXG4gIG9uUmVuZGVyOiB1bmRlZmluZWQsXG4gIGRpZFJlbmRlcjogdW5kZWZpbmVkLFxuICBvbkNsb3NlOiB1bmRlZmluZWQsXG4gIG9uQWZ0ZXJDbG9zZTogdW5kZWZpbmVkLFxuICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgZGlkQ2xvc2U6IHVuZGVmaW5lZCxcbiAgb25EZXN0cm95OiB1bmRlZmluZWQsXG4gIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgc2Nyb2xsYmFyUGFkZGluZzogdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRhYmxlUGFyYW1zID0gW1xuICAnYWxsb3dFc2NhcGVLZXknLFxuICAnYWxsb3dPdXRzaWRlQ2xpY2snLFxuICAnYmFja2dyb3VuZCcsXG4gICdidXR0b25zU3R5bGluZycsXG4gICdjYW5jZWxCdXR0b25BcmlhTGFiZWwnLFxuICAnY2FuY2VsQnV0dG9uQ29sb3InLFxuICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICdjbG9zZUJ1dHRvbkFyaWFMYWJlbCcsXG4gICdjbG9zZUJ1dHRvbkh0bWwnLFxuICAnY29uZmlybUJ1dHRvbkFyaWFMYWJlbCcsXG4gICdjb25maXJtQnV0dG9uQ29sb3InLFxuICAnY29uZmlybUJ1dHRvblRleHQnLFxuICAnY3VycmVudFByb2dyZXNzU3RlcCcsXG4gICdjdXN0b21DbGFzcycsXG4gICdkZW55QnV0dG9uQXJpYUxhYmVsJyxcbiAgJ2RlbnlCdXR0b25Db2xvcicsXG4gICdkZW55QnV0dG9uVGV4dCcsXG4gICdkaWRDbG9zZScsXG4gICdkaWREZXN0cm95JyxcbiAgJ2Zvb3RlcicsXG4gICdoaWRlQ2xhc3MnLFxuICAnaHRtbCcsXG4gICdpY29uJyxcbiAgJ2ljb25Db2xvcicsXG4gICdpY29uSHRtbCcsXG4gICdpbWFnZUFsdCcsXG4gICdpbWFnZUhlaWdodCcsXG4gICdpbWFnZVVybCcsXG4gICdpbWFnZVdpZHRoJyxcbiAgJ29uQWZ0ZXJDbG9zZScsXG4gICdvbkNsb3NlJyxcbiAgJ29uRGVzdHJveScsXG4gICdwcm9ncmVzc1N0ZXBzJyxcbiAgJ3JldmVyc2VCdXR0b25zJyxcbiAgJ3Nob3dDYW5jZWxCdXR0b24nLFxuICAnc2hvd0Nsb3NlQnV0dG9uJyxcbiAgJ3Nob3dDb25maXJtQnV0dG9uJyxcbiAgJ3Nob3dEZW55QnV0dG9uJyxcbiAgJ3RleHQnLFxuICAndGl0bGUnLFxuICAndGl0bGVUZXh0JyxcbiAgJ3dpbGxDbG9zZScsXG5dXG5cbmV4cG9ydCBjb25zdCBkZXByZWNhdGVkUGFyYW1zID0ge1xuICBhbmltYXRpb246ICdzaG93Q2xhc3NcIiBhbmQgXCJoaWRlQ2xhc3MnLFxuICBvbkJlZm9yZU9wZW46ICd3aWxsT3BlbicsXG4gIG9uT3BlbjogJ2RpZE9wZW4nLFxuICBvblJlbmRlcjogJ2RpZFJlbmRlcicsXG4gIG9uQ2xvc2U6ICd3aWxsQ2xvc2UnLFxuICBvbkFmdGVyQ2xvc2U6ICdkaWRDbG9zZScsXG4gIG9uRGVzdHJveTogJ2RpZERlc3Ryb3knLFxufVxuXG5jb25zdCB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFtcbiAgJ2FsbG93T3V0c2lkZUNsaWNrJyxcbiAgJ2FsbG93RW50ZXJLZXknLFxuICAnYmFja2Ryb3AnLFxuICAnZm9jdXNDb25maXJtJyxcbiAgJ2ZvY3VzRGVueScsXG4gICdmb2N1c0NhbmNlbCcsXG4gICdoZWlnaHRBdXRvJyxcbiAgJ2tleWRvd25MaXN0ZW5lckNhcHR1cmUnXG5dXG5cbi8qKlxuICogSXMgdmFsaWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUGFyYW1ldGVyID0gKHBhcmFtTmFtZSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRQYXJhbXMsIHBhcmFtTmFtZSlcbn1cblxuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXIgZm9yIFN3YWwudXBkYXRlKCkgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IChwYXJhbU5hbWUpID0+IHtcbiAgcmV0dXJuIHVwZGF0YWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xXG59XG5cbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IChwYXJhbU5hbWUpID0+IHtcbiAgcmV0dXJuIGRlcHJlY2F0ZWRQYXJhbXNbcGFyYW1OYW1lXVxufVxuXG5jb25zdCBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gKHBhcmFtKSA9PiB7XG4gIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuKGBVbmtub3duIHBhcmFtZXRlciBcIiR7cGFyYW19XCJgKVxuICB9XG59XG5cbmNvbnN0IGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZCA9IChwYXJhbSkgPT4ge1xuICBpZiAodG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5jbHVkZXMocGFyYW0pKSB7XG4gICAgd2FybihgVGhlIHBhcmFtZXRlciBcIiR7cGFyYW19XCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzYClcbiAgfVxufVxuXG5jb25zdCBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSAocGFyYW0pID0+IHtcbiAgaWYgKGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuQWJvdXREZXByZWNhdGlvbihwYXJhbSwgaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSlcbiAgfVxufVxuXG4vKipcbiAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IChwYXJhbXMpID0+IHtcbiAgZm9yIChjb25zdCBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICBjaGVja0lmUGFyYW1Jc1ZhbGlkKHBhcmFtKVxuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKVxuICAgIH1cblxuICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UGFyYW1zXG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20vaW5kZXguanMnXG5cbmV4cG9ydCBjb25zdCBmaXhTY3JvbGxiYXIgPSAoKSA9PiB7XG4gIC8vIGZvciBxdWV1ZXMsIGRvIG5vdCBkbyB0aGlzIG1vcmUgdGhhbiBvbmNlXG4gIGlmIChkb20uc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvLyBpZiB0aGUgYm9keSBoYXMgb3ZlcmZsb3dcbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgIGRvbS5zdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2RvbS5zdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyArIGRvbS5tZWFzdXJlU2Nyb2xsYmFyKCl9cHhgXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVuZG9TY3JvbGxiYXIgPSAoKSA9PiB7XG4gIGlmIChkb20uc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2RvbS5zdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZ31weGBcbiAgICBkb20uc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCB7IHdhcm4sIGNhbGxJZkZ1bmN0aW9uIH0gZnJvbSAnLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbS9pbmRleC5qcydcbmltcG9ydCBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzIGZyb20gJy4vZGVmYXVsdElucHV0VmFsaWRhdG9ycy5qcydcblxuZnVuY3Rpb24gc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyAocGFyYW1zKSB7XG4gIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgaWYgKCFwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0SW5wdXRWYWxpZGF0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzW2tleV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudCAocGFyYW1zKSB7XG4gIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gIGlmIChcbiAgICAhcGFyYW1zLnRhcmdldCB8fFxuICAgICh0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkpIHx8XG4gICAgKHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZClcbiAgKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKVxuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSdcbiAgfVxufVxuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMgKHBhcmFtcykge1xuICBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcylcblxuICAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oXG4gICAgICAnc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArXG4gICAgICAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgK1xuICAgICAgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnXG4gICAgKVxuICB9XG5cbiAgLy8gcGFyYW1zLmFuaW1hdGlvbiB3aWxsIGJlIGFjdHVhbGx5IHVzZWQgaW4gcmVuZGVyUG9wdXAuanNcbiAgLy8gYnV0IGluIGNhc2Ugd2hlbiBwYXJhbXMuYW5pbWF0aW9uIGlzIGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gY2FsbCB0aGF0IGZ1bmN0aW9uXG4gIC8vIGJlZm9yZSBwb3B1cCAocmUpaW5pdGlhbGl6YXRpb24sIHNvIGl0J2xsIGJlIHBvc3NpYmxlIHRvIGNoZWNrIFN3YWwuaXNWaXNpYmxlKClcbiAgLy8gaW5zaWRlIHRoZSBwYXJhbXMuYW5pbWF0aW9uIGZ1bmN0aW9uXG4gIHBhcmFtcy5hbmltYXRpb24gPSBjYWxsSWZGdW5jdGlvbihwYXJhbXMuYW5pbWF0aW9uKVxuXG4gIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpXG5cbiAgLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcbiAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKVxuICB9XG5cbiAgZG9tLmluaXQocGFyYW1zKVxufVxuIiwiZXhwb3J0IGNvbnN0IGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6J1xuXG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxdWVBcnJheSA9IChhcnIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICogQHBhcmFtIHN0clxuICovXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cikgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXJyYXkgb2Ygb2JqZWN0IHZhbHVlcyAoT2JqZWN0LnZhbHVlcyBpc24ndCBzdXBwb3J0ZWQgaW4gSUUxMSlcbiAqIEBwYXJhbSBvYmpcbiAqL1xuZXhwb3J0IGNvbnN0IG9iamVjdFZhbHVlcyA9IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikubWFwKGtleSA9PiBvYmpba2V5XSlcblxuLyoqXG4gKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xuZXhwb3J0IGNvbnN0IHRvQXJyYXkgPSAobm9kZUxpc3QpID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KVxuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjb25zdCB3YXJuID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc29sZS53YXJuKGAke2NvbnNvbGVQcmVmaXh9ICR7dHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnID8gbWVzc2FnZS5qb2luKCcgJykgOiBtZXNzYWdlfWApXG59XG5cbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoYCR7Y29uc29sZVByZWZpeH0gJHttZXNzYWdlfWApXG59XG5cbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdXG5cbi8qKlxuICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IHdhcm5PbmNlID0gKG1lc3NhZ2UpID0+IHtcbiAgaWYgKCFwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5jbHVkZXMobWVzc2FnZSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgIHdhcm4obWVzc2FnZSlcbiAgfVxufVxuXG4vKipcbiAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICovXG5leHBvcnQgY29uc3Qgd2FybkFib3V0RGVwcmVjYXRpb24gPSAoZGVwcmVjYXRlZFBhcmFtLCB1c2VJbnN0ZWFkKSA9PiB7XG4gIHdhcm5PbmNlKGBcIiR7ZGVwcmVjYXRlZFBhcmFtfVwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFwiJHt1c2VJbnN0ZWFkfVwiIGluc3RlYWQuYClcbn1cblxuLyoqXG4gKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICogQHBhcmFtIGFyZ1xuICovXG5leHBvcnQgY29uc3QgY2FsbElmRnVuY3Rpb24gPSAoYXJnKSA9PiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmdcblxuZXhwb3J0IGNvbnN0IGhhc1RvUHJvbWlzZUZuID0gKGFyZykgPT4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nXG5cbmV4cG9ydCBjb25zdCBhc1Byb21pc2UgPSAoYXJnKSA9PiBoYXNUb1Byb21pc2VGbihhcmcpID8gYXJnLnRvUHJvbWlzZSgpIDogUHJvbWlzZS5yZXNvbHZlKGFyZylcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZSA9IChhcmcpID0+IGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnXG4iXSwic291cmNlUm9vdCI6IiJ9