const json = { "a": [{ "b": "c" }, "d"], "x": 1 };

const get = function (data, param) {
    const keys = [];
    param.split('.').forEach(p => {
        if (p.includes('[')) {
            const parr = p.split('[');
            parr.forEach(key => {
                if (key.length > 0) {
                    if (key.includes(']')) {
                        keys.push(key.slice(0, 1));
                    } else {
                        keys.push(key);
                    }
                }
            });
        } else {
            keys.push(p);
        }
    });
    return keys.reduce((d, key) => {
        return d[key];
    }, data);
}

const _res = get(json, "a[0].b");
console.log(_res)

// get(json, "a[0].b") == "c";
// get(json, "a[1]") == "d";
// get(json, "x") == 1 ;

