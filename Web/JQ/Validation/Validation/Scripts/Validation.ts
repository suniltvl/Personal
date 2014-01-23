/// <reference path="../typings/jquery.d.ts" />

interface IValidationSettings {
    showDefaultMessage: boolean;
    contentId: string;
    content: Object;
    clearValidation: boolean;
    showAsTooltip: boolean;
    arCtrls: Object[];
    enableDebug: boolean;
    errorClass: string;
    successClass: string;
    useDefaultCss: boolean;
}

class validateSettings implements IValidationSettings {
    showDefaultMessage: boolean = true;
    contentId: string = guid();
    content: Object = {};
    clearValidation: boolean = false;
    showAsTooltip: boolean = false;
    arCtrls: Object[] = [];
    enableDebug: boolean = true;
    errorClass: string = "custVldErrorCss";
    successClass: string = "custVldSuccessCss";
    useDefaultCss: boolean = true;
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

class ConstantsErrorMsg {
    static get Generic() {
        return "Error occured addded By Venkat";
    }
    static get Require() {
        return "Required ";
    }
}


class ConstantsRegex {
    static get Number() {
        return "^[0-9]+$";
    }

    static get Alpha() {
        return "^[a-zA-ZÀ-ÿ]*$";
    }

    static get AlphaNumeric() {
        return "^[a-zA-ZÀ-ÿ0-9_]*$";
    }

    static get Email() {
        return "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$";
    }

    static get Password() {
        return "^(?!^[0-9]*$)(?=.*[A-Z])(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,11})$";
    }
}


(($) => {

    $.fn.customValidate = (param: validateSettings) => {
        var options = param;
        var isValid = true;
        var errMsg = "";
        var _this = eval("this");
        $(this).attr("data-id", options.contentId);
        param.content = _this;

        if ($("#divValidationSummary").length > 0) {
            $("#divValidationSummary").html("");
        }

        var showDebugData = function (data: Object) {
            if (options.enableDebug && data != "") {
                console.log(data);
            }
        }

        var logError = function (msg: string) {
            console.error(msg);
        }

        var addCustValidationClasses = function () {
            var newErrClass = "custVldErrorCss";
            var newSucClass = "custVldSuccessCss";

            var style = document.createElement('style');
            style.id = "custValidation"
            style.type = 'text/css';
            style.innerHTML = '.' + newErrClass + ' { border:2px solid red; }';
            style.innerHTML = style.innerHTML +
            '.' + newSucClass + ' { border:2px solid green; }';

            if ($("#custValidation").length === 0)
                document.getElementsByTagName('head')[0].appendChild(style);
        }

        var applyStyle = function (param: Object, isValid: boolean) {

            var ctrl = $(param);

            if (options.useDefaultCss)
                addCustValidationClasses();

            var errClass = options.errorClass;// !== "" ? options.errorClass : newErrClass;
            var sucessClass = options.successClass;// !== "" ? options.successClass : newSucClass;

            if (isValid) {
                ctrl.addClass(sucessClass);
                ctrl.removeClass(errClass);
            }
            else {
                ctrl.addClass(errClass);
                ctrl.removeClass(sucessClass);
            }
        }

        var showErrorMessage = function (param: Object, errMsg: string) {
            var msg: string;
            var ctrl = $(param);
            msg = errMsg;// ctrl.data("validateMsg");
            var errMsgObj = $("span[data-vld-id=" + ctrl.data("vldId") + "]");

            //Creating Validation Div
            if ($("#divValidationSummary").length === 0) {
                var divVldContent = document.createElement("div");
                divVldContent.id = "divValidationSummary";
                $(options.content).parent().append(divVldContent);
            }

            //Creating Error message Span
            if (errMsgObj.length === 0) {
                var msgSpan = document.createElement("span");
                $(msgSpan).attr("data-vld-id", ctrl.data("vldId"));
                $("#divValidationSummary").append(msgSpan)
                errMsgObj = $(msgSpan);
            }

            if (ctrl.data("isValid") == undefined || !ctrl.data("isValid") && msg != "") {
                if (options.enableDebug) {
                    logError(msg);
                }
                errMsgObj.html("<br />" + msg);
                applyStyle(ctrl, false);
            }
            else {
                errMsgObj.remove();
                applyStyle(ctrl, true);
            }

        }

        var setControlStatus = function (param: Object, isValid: boolean, vldMsg: string= "") {

            var ctrl = $(param);
            ctrl.data("is-valid", isValid);
            if (options.showDefaultMessage && !isValid) {

                if (ctrl.data().validateMsg !== undefined) {
                    ctrl.data().validateMsg = vldMsg.trim() === "" ? ConstantsErrorMsg.Generic : vldMsg;
                }
                else {

                    ctrl.attr("data-validate-msg", vldMsg.trim() === "" ? ConstantsErrorMsg.Generic : vldMsg);
                }
            }
        }

        var validateControl = function (param: Object) {
            var ctrl = $(param);
            var errMsg = "";
            isValid = true;
            debugger;
            if (ctrl.data().required && ctrl.val().trim() === "") {
                showDebugData("Validating Required");
                isValid = isValid && false;
                errMsg = $(ctrl).data().validateMsg;
            }
            else if (ctrl.val().trim() != "") {
                //This is for Min validation /*Please enter a value greater than or equal to {0}*/
                if (($(ctrl).data().minimum) != null && (ctrl.val() < $(ctrl).data().minimum)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().minimumMsg;
                }
                //This is for max validation /*Please enter a value less than or equal to {0}.*/
                else if (($(ctrl).data().maximum) != null && (ctrl.val() > $(ctrl).data().maximum)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().maximumMsg;
                }
                //This is for Min Length validation /*Please enter at least {0} characters.*/
                else if (($(ctrl).data().minlength) != null && (ctrl.val().length < $(ctrl).data().minlength)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().minlength;
                }
                //This is for Max length validation /*Please enter no more than {0} characters.*/
                else if (($(ctrl).data().maxlength) != null && (ctrl.val().length > $(ctrl).data().maxlength)) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().maxlength;
                }
                //This is for only numbers
                else if (($(ctrl).data().numbers) && (!(new RegExp(ConstantsRegex.Number)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().numbersMsg;
                }
                //This is for Alpha
                else if (($(ctrl).data().alpha) && (!(new RegExp(ConstantsRegex.Alpha)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().alphaMsg;
                }
                //This is for Alpha numeric
                else if (($(ctrl).data().alphanumeric) && (!(new RegExp(ConstantsRegex.AlphaNumeric)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().alphanumericMsg;
                }
                //This is for Email
                else if (($(ctrl).data().email) && (!(new RegExp(ConstantsRegex.Email)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().emailMsg;
                }
                //This is for Password
                else if (($(ctrl).data().password) && (!(new RegExp(ConstantsRegex.Password)).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().passwordMsg;
                }
                //This is for Custom Regex
                else if (($(ctrl).data().regex) != null && (!(new RegExp(($(ctrl).data().regex))).test(ctrl.val()))) {
                    isValid = isValid && false;
                    errMsg = $(ctrl).data().regexMsg;
                }
                //This is for Date
                else if (($(ctrl).data().date) != null && (isNaN(Date.parse(ctrl.val())))) {
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
        }

        var assignValidate = function () {
            if (options.contentId !== "") {
                showDebugData(options.arCtrls);

                $(options.arCtrls).change(function (e) {
                    validateControl($(e.target));
                });
            }
            else {
                console.log("ContentId Error");
            }
        }

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
        }

        if (options.clearValidation) {
            $(this).removeAttr("data-validate-content");
        } else {
            options.arCtrls = $(options.content).find("[data-validate='true']");
            if ($(this).attr("data-validate-content") === undefined) {
                assignValidate();
                validateOnLoad();
                $(this).attr("data-validate-content", "true");
            } else {
                validateOnLoad();
            }
        }

        return this;
    }
})(jQuery);