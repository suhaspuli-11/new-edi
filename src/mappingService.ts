export function addProperties(object: any, mappings: any) {
    const segment: any = Object.keys(object)[0];
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

                    object[segment][target] = subkeysObject;
                }
                else {
                    object[segment][target] = filteredSource[0];
                }
            }
        }
    }
}


export function addProperties1(object: any, mappings: any) {
    const segment: any = Object.keys(object)[1];
    for (const mapping of mappings) {
        const source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            object[segment][target] = subkeys
                ? Object.fromEntries(
                    subkeys.map((key: any, i: number) => [key, source[i]])
                )
                : source[0];
        }
    }
}