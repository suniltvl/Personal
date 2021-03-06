/// <reference path="../typings/jquery.d.ts" />
var _this = this;
var validateSettings = (function () {
    function validateSettings() {
        this.showDefaultMessage = true;
        this.contentId = guid();
        this.content = {};
        this.clearValidation = false;
        this.showAsTooltip = false;
        this.arCtrls = [];
        this.enableDebug = true;
        this.errorClass = "custVldErrorCss";
        this.successClass = "custVldSuccessCss";
        this.useDefaultCss = true;
    }
    return validateSettings;
})();

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
;

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var ConstantsErrorMsg = (function () {
    function ConstantsErrorMsg() {
    }
    Object.defineProperty(ConstantsErrorMsg, "Generic", {
        get: function () {
            return "Error occured addded By Venkat";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstantsErrorMsg, "Require", {
        get: function () {
            return "Required ";
        },
        enumerable: true,
        configurable: true
    });
    return ConstantsErrorMsg;
})();

var ConstantsRegex = (function () {
    function ConstantsRegex() {
    }
    Object.defineProperty(ConstantsRegex, "Number", {
        get: function () {
            return "^[0-9]+$";
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ConstantsRegex, "Alpha", {
        get: function () {
            return "^[a-zA-ZÀ-ÿ]*$";
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ConstantsRegex, "AlphaNumeric", {
        get: function () {
            return "^[a-zA-ZÀ-ÿ0-9_]*$";
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ConstantsRegex, "Email", {
        get: function () {
            return "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$";
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ConstantsRegex, "Password", {
        get: function () {
            return "^(?!^[0-9]*$)(?=.*[A-Z])(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,11})$";
        },
        enumerable: true,
        configurable: true
    });
    return ConstantsRegex;
})();

(function ($) {
    $.fn.customValidate = function (param) {
        var options = param;
        var isValid = true;
        var errMsg = "";
        var _this = eval("this");
        $(_this).attr("data-id", options.contentId);
        param.content = _this;

        if ($("#divValidationSummary").length > 0) {
            $("#divValidationSummary").html("");
        }

        var showDebugData = function (data) {
            if (options.enableDebug && data != "") {
                console.log(data);
            }
        };

        var logError = function (msg) {
            console.error(msg);
        };

        var addCustValidationClasses = function () {
            var newErrClass = "custVldErrorCss";
            var newSucClass = "custVldSuccessCss";

            var style = document.createElement('style');
            style.id = "custValidation";
            style.type = 'text/css';
            style.innerHTML = '.' + newErrClass + ' { border:2px solid red; }';
            style.innerHTML = style.innerHTML + '.' + newSucClass + ' { border:2px solid green; }';

            if ($("#custValidation").length === 0)
                document.getElementsByTagName('head')[0].appendChild(style);
        };

        var applyStyle = function (param, isValid) {
            var ctrl = $(param);

            if (options.useDefaultCss)
                addCustValidationClasses();

            var errClass = options.errorClass;
            var sucessClass = options.successClass;

            if (isValid) {
                ctrl.addClass(sucessClass);
                ctrl.removeClass(errClass);
            } else {
                ctrl.addClass(errClass);
                ctrl.removeClass(sucessClass);
            }
        };

        var showErrorMessage = function (param, errMsg) {
            var msg;
            var ctrl = $(param);
            msg = errMsg;
            var errMsgObj = $("span[data-vld-id=" + ctrl.data("vldId") + "]");

            if ($("#divValidationSummary").length === 0) {
                var divVldContent = document.createElement("div");
                divVldContent.id = "divValidationSummary";
                $(options.content).parent().append(divVldContent);
            }

            if (errMsgObj.length === 0) {
                var msgSpan = document.createElement("span");
                $(msgSpan).attr("data-vld-id", ctrl.data("vldId"));
                $("#divValidationSummary").append(msgSpan);
                errMsgObj = $(msgSpan);
            }

            if (ctrl.data("isValid") == undefined || !ctrl.data("isValid") && msg != "") {
                if (options.enableDebug) {
                    logError(msg);
                }
                errMsgObj.html("<br />" + msg);
                applyStyle(ctrl, false);
            } else {
                errMsgObj.remove();
                applyStyle(ctrl, true);
            }
        };

        var setControlStatus = function (param, isValid, vldMsg) {
            if (typeof vldMsg === "undefined") { vldMsg = ""; }
            var ctrl = $(param);
            ctrl.data("is-valid", isValid);
            if (options.showDefaultMessage && !isValid) {
                if (ctrl.data().validateMsg !== undefined) {
                    ctrl.data().validateMsg = vldMsg.trim() === "" ? ConstantsErrorMsg.Generic : vldMsg;
                } else {
                    ctrl.attr("data-validate-msg", vldMsg.trim() === "" ? ConstantsErrorMsg.Generic : vldMsg);
                }
            }
        };

        var validateControl = function (param) {
            var ctrl = $(param);
            var errMsg = "";
            isValid = true;
            debugger;
            if (ctrl.data().required && ctrl.val().trim() === "") {
                showDebugData("Validating Required");
                isValid = isValid && false;
                errMsg = $(ctrl).data().validateMsg;
            } else if (ctrl.val().trim() != "") {
                if (($(ctrl).data().minimum) != null && (ctrl.val() < $(ctrl).data().minimum)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().minimumMsg;
                } else if (($(ctrl).data().maximum) != null && (ctrl.val() > $(ctrl).data().maximum)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().maximumMsg;
                } else if (($(ctrl).data().minlength) != null && (ctrl.val().length < $(ctrl).data().minlength)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().minlength;
                } else if (($(ctrl).data().maxlength) != null && (ctrl.val().length > $(ctrl).data().maxlength)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().maxlength;
                } else if (($(ctrl).data().numbers) && (!(new RegExp(ConstantsRegex.Number)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().numbersMsg;
                } else if (($(ctrl).data().alpha) && (!(new RegExp(ConstantsRegex.Alpha)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().alphaMsg;
                } else if (($(ctrl).data().alphanumeric) && (!(new RegExp(ConstantsRegex.AlphaNumeric)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().alphanumericMsg;
                } else if (($(ctrl).data().email) && (!(new RegExp(ConstantsRegex.Email)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().emailMsg;
                } else if (($(ctrl).data().password) && (!(new RegExp(ConstantsRegex.Password)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().passwordMsg;
                } else if (($(ctrl).data().regex) != null && (!(new RegExp(($(ctrl).data().regex))).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().regexMsg;
                } else if (($(ctrl).data().date) != null && (isNaN(Date.parse(ctrl.val())))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().dateMsg;
                }
            }

            //else {
            //
            //    setControlStatus(ctrl, true);
            //}
            //
            setControlStatus(ctrl, isValid, errMsg);
            showErrorMessage(ctrl, errMsg);
        };

        var assignValidate = function () {
            if (options.contentId !== "") {
                showDebugData(options.arCtrls);

                $(options.arCtrls).change(function (e) {
                    validateControl($(e.target));
                });
            } else {
                console.log("ContentId Error");
            }
        };

        var validateOnLoad = function () {
            var ctrls = options.arCtrls;
            for (var ctrlIndex = 0; ctrlIndex < ctrls.length; ctrlIndex++) {
                var uniqueId = guid();
                var ctrl = ctrls[ctrlIndex];

                if ($(ctrl).attr('data-vld-id') === undefined) {
                    $(ctrl).attr('data-vld-id', uniqueId);
                }

                if ($(ctrl).attr("data-required") == undefined) {
                    $(ctrl).attr("data-required", true);
                }

                validateControl($(ctrl));
            }
        };

        if (options.clearValidation) {
            $(_this).removeAttr("data-validate-content");
        } else {
            options.arCtrls = $(options.content).find("[data-validate='true']");
            if ($(_this).attr("data-validate-content") === undefined) {
                assignValidate();
                validateOnLoad();
                $(_this).attr("data-validate-content", "true");
            } else {
                validateOnLoad();
            }
        }

        return _this;
    };
})(jQuery);
