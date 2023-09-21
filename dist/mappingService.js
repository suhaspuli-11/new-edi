"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperties = void 0;
function addProperties(object, mappings) {
    for (const mapping of mappings) {
        let source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (typeof source === 'string') {
            source = source.split('>');
        }
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
