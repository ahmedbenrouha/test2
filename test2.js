/*TEST2*/
const A = ['a','b','c','a','b','c','a','aaa','ffd'];
const B = ['a','b','c','g'];
const result=[];


function f2(a,b) {
	b.forEach((elementInB) => {
		let  count=0;
		a.forEach((elementInA) => {
			if(elementInA === elementInB)
				count++;
		});
		result.push(count);
	});
	return result;
}


console.log(f2(A,B));