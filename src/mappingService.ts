export function addProperties(object: any, mappings: any) {
    if (object.code === undefined) {
        console.log('No code ');
        return;
    }
    for (const mapping of mappings) {
        const source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            const filteredSource = source.filter((value: any) => value !== undefined && (typeof value !== 'string' || value.trim() !== ''));

            if (filteredSource.length > 0) {
                if (subkeys) {
                    const subkeysObject = subkeys.reduce((result: any, key: any, i: number) => {
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

export function addPropertiesX12(object: any, mappings: any) {
    for (const mapping of mappings) {
        const source = mapping.source, target = mapping.target;
        if (source !== undefined && (typeof source !== 'string' || source.trim() !== ''))
            object[target] = source;
    }
}