export function setProperties(object: any, mappings: any) {
    for (const mapping of mappings) {
        let source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (typeof source === 'string') {
            source = source.split('>');
        }
        if (source && source.length > 0) {
            const filteredSource = source.filter((value: any) => value !== undefined && (typeof value !== 'string' || value.trim() !== ''));

            if (filteredSource.length > 0) {
                if (subkeys) {
                    const subkeysObject: any = subkeys.reduce((result: any, key: any, i: number) => {
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