const add = (ip) => {
    if(!ip) return 0;
    return ip.split("").filter(ch => ch!='\n' && ch!=',').reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add }