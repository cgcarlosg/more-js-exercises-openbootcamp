const fib = (num) => {
    const sol = [0,1];
    
    for (let i=2; i<=num; i++) {
        sol[i] = sol[i-1]+ sol[i-2];
        console.log(sol[i]);
    }

    console.log(sol[num]);
}

console.log(fib(6));