const originObj = {
    type: {
        name: 'test',
        value: 10
    },
    bandwidth: 100
}

const {type: copyObj,bandwidth} = originObj;

console.log(bandwidth);
