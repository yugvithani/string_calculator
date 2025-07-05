const add = (ip) => {
    if(!ip) return 0;
    let delimiters = /[,\n]/; // RE
    if(ip.startsWith("//")) {
        const [_, delim, rest] = ip.match(/^\/\/(.)\n(.*)/);
        delimiters = new RegExp(delim);
        ip = rest;
    }
    const numbers = ip.split(delimiters);
    let sum = 0;
    let negatives = [];
    
    // Single pass through numbers - calculate sum and collect negatives
    for(let i = 0; i < numbers.length; i++) {
        const num = parseInt(numbers[i], 10);
        if(num < 0) {
            negatives.push(num);
        } else {
            sum += num;
        }
    }
    if(negatives.length > 0) {
        throw new Error("negative numbers not allowed " + negatives.join(","));
    }
    return numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add }