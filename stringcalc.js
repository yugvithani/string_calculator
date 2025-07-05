const add = (ip) => {
    if(!ip) return 0;
    return parseInt(ip, 10);
}

module.exports = { add }