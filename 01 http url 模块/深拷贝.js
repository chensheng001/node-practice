
const deepClone = obj =>{
  if(typeof obj !== 'object'){
      return obj;
  }
  const res = Array.isArray(obj) ? [] : {};
  for(let key in obj){
      if (obj.hasOwnProperty(key)){
          res[key] = (typeof obj[key] === 'object' && obj[key] !== null ) ? deepClone(obj[key]) : obj[key];
      }
  }
  return res;
};

const aa = {
    b:1,
    c: [
        {
            dd: 33,
            ee:44
        },
        {
            tt:5
        }
    ]
};
const bb = deepClone(aa);
console.log(bb,'--------bb');
aa.c[1].tt = 6;
console.log(aa,'------aa');
console.log(bb,'--------bb');