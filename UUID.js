//A universally unique identifier ( v4UUID ) is a 128-bit number used to identify information in computer systems.

const UUID=(function(){
 function x(a,b){return a?(b|r()*16>>b/4).toString(16):'10000000-1000-4000-8000-100000000000'.replace(p,x)}
 const r=Math.random,p=/1|0|(8)/g;
 return x
})();
