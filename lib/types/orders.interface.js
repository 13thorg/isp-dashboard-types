"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = void 0;
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["UNPAID"] = 0] = "UNPAID";
    StatusEnum[StatusEnum["PAID"] = 1] = "PAID";
    StatusEnum[StatusEnum["CANCELLED"] = 2] = "CANCELLED";
    StatusEnum[StatusEnum["REFUND"] = 3] = "REFUND";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
