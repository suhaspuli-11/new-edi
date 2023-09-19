"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperties1 = exports.addProperties = void 0;
function addProperties(object, mappings) {
    if (object.code === undefined) {
        console.log('No code ');
        return;
    }
    for (const mapping of mappings) {
        const source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            const filteredSource = source.filter((value) => value !== undefined && (typeof value !== 'string' || value.trim() !== ''));
            if (filteredSource.length > 0) {
                if (subkeys) {
                    const subkeysObject = subkeys.reduce((result, key, i) => {
                        const value = filteredSource[i];
                        if (value !== undefined && (typeof value !== 'string' || value.trim() !== '')) {
                            result[key] = value;
                        }
                        return result;
                    }, {});
                    object[target] = subkeysObject;
                }
                else {
                    object[target] = filteredSource[0];
                }
            }
        }
    }
}
exports.addProperties = addProperties;
function addProperties1(object, mappings) {
    const segment = Object.keys(object)[1];
    for (const mapping of mappings) {
        const source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            object[segment][target] = subkeys
                ? Object.fromEntries(subkeys.map((key, i) => [key, source[i]]))
                : source[0];
        }
    }
}
exports.addProperties1 = addProperties1;
