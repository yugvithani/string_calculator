const add = (ip) => {
    if(!ip) return 0;
    let delimiters = /[,\n]/; // RE
    if(ip.startsWith("//")) {
        const [_, delim, rest] = ip.match(/^\/\/(.)\n(.*)/);
        delimiters = new RegExp(delim);
        ip = rest;
    }
    return ip.split(delimiters).reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add }