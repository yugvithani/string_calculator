const add = (ip) => {
    if(!ip) return 0;
    let delimiters = /[,\n]/; // RE
    if(ip.startsWith("//")) {
        const [_, delim, rest] = ip.match(/^\/\/(.)\n(.*)/);
        delimiters = new RegExp(delim);
        ip = rest;
    }
    ip = ip.split(delimiters);
    ip = ip.map(num => parseInt(num, 10));
    let negatives = ip.filter(num => num < 0);
    if(negatives.length > 0) {
        throw new Error("negative numbers not allowed " + negatives.join(","));
    }
    return ip.reduce((sum, num) => sum + num, 0);
}

module.exports = { add }