'use strict'
const check = {
dataTypes : function (value) {
    var valueTypeof = typeof value;

    switch (valueTypeof) {
        case "undefined":
            return "no value";
        case "string":
            return value.length;
        case "number":
            if (value < 100) {
                return "less than 100";
            } else if (value === 100){
                return "equal to 100";
            }else{
                return "more than 100";
            }
            break;
        case "boolean":
            return value;

        case "object":
            if (typeof value[2] !== "undefined") {
                return value[2];
            } else {
                return undefined;
            }
            break;
        case "function":
            return value(true);
            
        default:
            return valueTypeof;
    }

    return valueTypeof;
}
}
module.exports = check;