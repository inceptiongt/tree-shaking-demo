export /*@__PURE__*/function square ( x ) {
    // console.log('x')
	return x.a + 'square'
}
var o = {}
Object.defineProperty(o,'a',{get:function(v){console.log(12)}})
// square(o)

export function cube ( x ) {
	return x * x * x;
}