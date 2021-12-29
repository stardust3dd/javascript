// bigO denotes how long an algo takes to run to completion in the worst case
// so bigO measures the scalability of an algo
// as our input size grows, how long will the algo take to finish?

// O(1), constant time complexity

const largeArray = new Array(1000000).fill('value');

function processArray(largeArray) { // O(n), linear time complexity
    let t0 = performance.now();
    for(let i=0; i<largeArray.length; i++) {
        largeArray[i] = largeArray[200];
    }
    let t1 = performance.now();
    console.log(`Processing ${largeArray.length} elements took ${t1-t0} mS`);
}
processArray(largeArray); 

function funChallenge(input) { // also O(n), linear time complexity. anotherFunction() does not depend on input, hence it must be O(1). So O(n)*O(1) = O(n)
    let a = 10; a = 50 + 3;  
    for (let i = 0; i < input.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
    return a;
}

function funChallenge2(input1, input2) { // O(a + b), linear time complexity. it takes two inputs, so two variables to measure them 
    for (let i = 0; i < input1.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
    for (let i = 0; i < input2.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
}

// usually for nested loops time complexity is quadratic O(n * n). Quadratic time complexity needs to be avoided.
// O(n^2 + n) => O(n^2). The dominant term always takes precedence