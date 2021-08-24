"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
require("./button.scss");
var CustomButton = function (_a) {
    var color = _a.color, className = _a.className, text = _a.text;
    return (react_1["default"].createElement("div", { className: "custom-button" },
        react_1["default"].createElement(core_1.Button, { variant: 'outlined', color: color, className: className }, text)));
};
exports["default"] = CustomButton;
