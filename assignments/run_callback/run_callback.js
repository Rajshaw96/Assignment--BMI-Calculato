function RunCallback(a, b, cb) {

    let x = cb(a + b)
    return x;
}

module.exports = RunCallback;
