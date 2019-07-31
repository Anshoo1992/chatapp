function ValidationRules() {
    this.emailRegx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    this.phoneRegex = /^\+?([0-9]{2})\)?([0-9]{3})?([0-9]{3})?([0-9]{4})$/;
}
ValidationRules.prototype.validateEmailInput = function (v) {
    return this.emailRegx.test(v);
}
ValidationRules.prototype.validatePhoneInput = function (v) {
    return this.phoneRegex.test(v);
}
module.exports = ValidationRules;