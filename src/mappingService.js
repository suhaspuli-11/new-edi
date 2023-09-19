"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperties1 = exports.addProperties = void 0;
function addProperties(object, mappings) {
    var segment = Object.keys(object)[0];
    var _loop_1 = function (mapping) {
        var source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            var filteredSource_1 = source.filter(function (value) { return value !== undefined && (typeof value !== 'string' || value.trim() !== ''); });
            if (filteredSource_1.length > 0) {
                if (subkeys) {
                    var subkeysObject = subkeys.reduce(function (result, key, i) {
                        var value = filteredSource_1[i];
                        if (value !== undefined && (typeof value !== 'string' || value.trim() !== '')) {
                            result[key] = value;
                        }
                        return result;
                    }, {});
                    object[segment][target] = subkeysObject;
                }
                else {
                    object[segment][target] = filteredSource_1[0];
                }
            }
        }
    };
    for (var _i = 0, mappings_1 = mappings; _i < mappings_1.length; _i++) {
        var mapping = mappings_1[_i];
        _loop_1(mapping);
    }
}
exports.addProperties = addProperties;
function addProperties1(object, mappings) {
    var segment = Object.keys(object)[1];
    var _loop_2 = function (mapping) {
        var source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            object[segment][target] = subkeys
                ? Object.fromEntries(subkeys.map(function (key, i) { return [key, source[i]]; }))
                : source[0];
        }
    };
    for (var _i = 0, mappings_2 = mappings; _i < mappings_2.length; _i++) {
        var mapping = mappings_2[_i];
        _loop_2(mapping);
    }
}
exports.addProperties1 = addProperties1;
